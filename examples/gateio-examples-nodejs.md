# **Gate API Examples** - Node.js, JavaScript & TypeScript SDK for Gate.com (Gate.io) Spot, Futures REST APIs & WebSockets

This page collects short, copy-ready examples for `gateio-api`, the Node.js, JavaScript and TypeScript SDK for the Gate.com (formerly Gate.io) API v4: Spot and Margin REST, USDT and BTC perpetual futures, WebSocket streams and the WebSocket API. Each snippet is a complete file. Runnable versions live in [examples/Rest](./Rest/) and [examples/Websocket](./Websocket/), and there is one small example per endpoint in [examples/apidoc](./apidoc/).

- [Gate API v4 documentation](https://www.gate.com/docs/developers/apiv4/en/) - official Gate API docs
- [SDK docs](https://sieblyio.github.io/docs/gateio/) - guides and the full API reference
- [JavaScript tutorial](https://siebly.io/sdk/gate/javascript/tutorial) - a longer walkthrough

## Installation

```bash
npm install gateio-api
```

The SDK works with `import` and `require`, and ships its own TypeScript types. The snippets below use ES modules with top-level `await` (save them as `.mjs` or `.ts`, or set `"type": "module"` in `package.json`). A CommonJS version is shown under "Create a client".

## Which client do I need?

| Client | Use it for |
| --- | --- |
| `RestClient` | All REST APIs: Spot, Margin, Futures (perpetual and delivery), Options, Wallet, Sub-accounts, Earn and more |
| `WebsocketClient` | Streaming: public and private Spot, Futures, Delivery and Options topics, with automatic reconnect and resubscribe |
| `WebsocketAPIClient` | Awaitable Spot and Futures order requests over Gate's WebSocket API (place, amend, cancel, status) |

Futures calls take a `settle` currency: `'usdt'` for USDT-margined perpetuals and `'btc'` for BTC-margined ones.

## Create a client

### Public client (no key)

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient();
```

### Private client

Create keys under API Management in your Gate account. Give the key only the permissions it needs.

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});
```

### Testnet

```typescript
import { RestClient } from 'gateio-api';

// Gate testnet keys are separate from your live keys
const client = new RestClient({
  apiKey: process.env.GATE_TESTNET_API_KEY!,
  apiSecret: process.env.GATE_TESTNET_API_SECRET!,
  useTestnet: true,
});
```

### CommonJS (require)

```javascript
const { RestClient } = require('gateio-api');

const client = new RestClient();

client
  .getSpotTicker({ currency_pair: 'BTC_USDT' })
  .then((tickers) => console.log(tickers[0].last))
  .catch(console.error);
```

## Spot market data

No API key is needed for any of these.

### Server time and pair rules

Read `precision` (price decimals), `amount_precision` and `min_quote_amount` before placing orders.

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient();

const time = await client.getServerTime();
console.log('Server time (ms):', time.server_time);

const pair = await client.getSpotCurrencyPair({ currency_pair: 'BTC_USDT' });
console.log(pair.id, 'precision', pair.precision, 'amount precision', pair.amount_precision);
console.log('Min quote amount:', pair.min_quote_amount);

const pairs = await client.getSpotCurrencyPairs();
console.log('Tradable pairs:', pairs.filter((p) => p.trade_status === 'tradable').length);
```

### Tickers

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient();

// The response is always an array, even for one pair
const [btc] = await client.getSpotTicker({ currency_pair: 'BTC_USDT' });
console.log('BTC_USDT last', btc.last, 'bid', btc.highest_bid, 'ask', btc.lowest_ask);

// Omit currency_pair to get every pair in one request
const all = await client.getSpotTicker();
console.log('Tickers returned:', all.length);
```

### Order book and recent trades

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient();

const book = await client.getSpotOrderBook({ currency_pair: 'BTC_USDT', limit: 5 });
console.log('Best bid', book.bids[0], 'best ask', book.asks[0]);

const trades = await client.getSpotTrades({ currency_pair: 'BTC_USDT', limit: 5 });
for (const t of trades) console.log(t.create_time_ms, t.side, t.price, t.amount);
```

### Candles (klines)

Intervals include `1s`, `10s`, `1m`, `5m`, `15m`, `30m`, `1h`, `4h`, `8h`, `1d`, `7d` and `30d`.

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient();

// Each candle: [time, quote volume, close, high, low, open, base volume, window closed]
const candles = await client.getSpotCandles({
  currency_pair: 'BTC_USDT',
  interval: '1h',
  limit: 3,
});
console.log(candles);
```

## Spot account

### Balances

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});

// Spot balances
const spot = await client.getSpotAccounts();
console.log(spot.filter((b) => Number(b.available) > 0));

// One currency only
const usdt = await client.getSpotAccounts({ currency: 'USDT' });
console.log(usdt);

// Total estimated value across all accounts
const total = await client.getBalances({ currency: 'USDT' });
console.log(total.total);
```

### Orders, fills and ledger

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});

const open = await client.getSpotOrders({ currency_pair: 'BTC_USDT', status: 'open' });
console.log('Open orders:', open.length);

const finished = await client.getSpotOrders({
  currency_pair: 'BTC_USDT',
  status: 'finished',
  limit: 10,
});
console.log('Recent finished orders:', finished.length);

const fills = await client.getSpotTradingHistory({ currency_pair: 'BTC_USDT', limit: 10 });
console.log('Recent fills:', fills.length);

const ledger = await client.getSpotAccountBook({ currency: 'USDT', limit: 10 });
console.log('Ledger entries:', ledger.length);
```

## Spot trading

Prices and sizes below are examples only, far from the market. Check the pair rules first.

### Limit order with a custom id

Custom ids go in `text` and must start with `t-`.

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});

const order = await client.submitSpotOrder({
  currency_pair: 'BTC_USDT',
  side: 'buy',
  type: 'limit',
  account: 'spot',
  amount: '0.0001', // base currency size
  price: '20000', // far below market
  time_in_force: 'gtc',
  text: 't-my-order-1', // optional custom id, must start with "t-"
});
console.log(order.id, order.status);
```

### Market order

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});

// For a market BUY, amount is in the quote currency (here 10 USDT).
// For a market SELL, amount is in the base currency.
const order = await client.submitSpotOrder({
  currency_pair: 'BTC_USDT',
  side: 'buy',
  type: 'market',
  account: 'spot',
  amount: '10',
  time_in_force: 'ioc',
});
console.log(order.id, order.filled_total);
```

### Post-only order

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});

// poc = pending or cancelled: the order is cancelled instead of taking liquidity
const order = await client.submitSpotOrder({
  currency_pair: 'BTC_USDT',
  side: 'buy',
  type: 'limit',
  amount: '0.0001',
  price: '20000',
  time_in_force: 'poc',
});
console.log(order.id, order.status);
```

### Get, amend and cancel orders

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});

const orderId = '123456789';

const order = await client.getSpotOrder({ order_id: orderId, currency_pair: 'BTC_USDT' });
console.log(order.status, order.left);

const amended = await client.updateSpotOrder({
  order_id: orderId,
  currency_pair: 'BTC_USDT',
  price: '20500',
});
console.log(amended.price);

const cancelled = await client.cancelSpotOrder({ order_id: orderId, currency_pair: 'BTC_USDT' });
console.log(cancelled.status);

// Cancel every open order on one pair
const all = await client.cancelSpotOpenOrders({ currency_pair: 'BTC_USDT' });
console.log('Cancelled:', all.length);
```

### Batch orders

Each result says whether that order `succeeded`; one rejected order does not fail the batch.

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});

const results = await client.submitSpotBatchOrders([
  { currency_pair: 'BTC_USDT', side: 'buy', type: 'limit', amount: '0.0001', price: '20000', text: 't-batch-1' },
  { currency_pair: 'ETH_USDT', side: 'buy', type: 'limit', amount: '0.01', price: '1000', text: 't-batch-2' },
]);
for (const r of results) console.log(r.text, r.succeeded, r.label ?? '', r.message ?? '');
```

### Dead man's switch (countdown cancel)

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});

// Dead man's switch: cancel open BTC_USDT orders if not refreshed within 30 seconds.
// Call it again before the timer runs out to extend it, or pass timeout 0 to switch it off.
const result = await client.submitSpotCountdownOrders({ timeout: 30, currency_pair: 'BTC_USDT' });
console.log('Orders will be cancelled at', result.triggerTime);
```

## Futures market data

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient();

// settle is 'usdt' for USDT-margined perpetuals, 'btc' for BTC-margined
const contract = await client.getFuturesContract({ settle: 'usdt', contract: 'BTC_USDT' });
console.log('Contract size (quanto_multiplier):', contract.quanto_multiplier);
console.log('Order size min/max:', contract.order_size_min, contract.order_size_max);

const [ticker] = await client.getFuturesTickers({ settle: 'usdt', contract: 'BTC_USDT' });
console.log('Last', ticker.last, 'mark', ticker.mark_price, 'funding', ticker.funding_rate);

const book = await client.getFuturesOrderBook({ settle: 'usdt', contract: 'BTC_USDT', limit: 5 });
console.log('Best bid', book.bids[0], 'best ask', book.asks[0]);

const candles = await client.getFuturesCandles({
  settle: 'usdt',
  contract: 'BTC_USDT',
  interval: '1h',
  limit: 3,
});
console.log(candles);

const trades = await client.getFuturesTrades({ settle: 'usdt', contract: 'BTC_USDT', limit: 5 });
console.log(trades.map((t) => [t.create_time, t.size, t.price]));

const contracts = await client.getFuturesContracts({ settle: 'usdt' });
console.log('USDT perpetuals:', contracts.length);
```

## Futures account and trading

### Account, positions, orders and fills

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});

const account = await client.getFuturesAccount({ settle: 'usdt' });
console.log('Available', account.available, 'unrealised PnL', account.unrealised_pnl);

const positions = await client.getFuturesPositions({ settle: 'usdt', holding: true });
for (const p of positions) console.log(p.contract, p.size, p.entry_price, p.leverage);

const open = await client.getFuturesOrders({ settle: 'usdt', contract: 'BTC_USDT', status: 'open' });
console.log('Open futures orders:', open.length);

const fills = await client.getFuturesTradingHistory({ settle: 'usdt', contract: 'BTC_USDT', limit: 10 });
console.log('Recent fills:', fills.length);
```

### Set leverage, limit and market orders

Futures `size` is a number of contracts. Multiply by the contract's `quanto_multiplier` to get the size in coins.

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});

// Leverage is set per contract (in single position mode)
await client.updateFuturesLeverage({ settle: 'usdt', contract: 'BTC_USDT', leverage: '3' });

// size is in contracts, not coins: positive = long/buy, negative = short/sell.
// One BTC_USDT contract is quanto_multiplier BTC (see getFuturesContract).
const limit = await client.submitFuturesOrder({
  settle: 'usdt',
  contract: 'BTC_USDT',
  size: 1,
  price: '20000', // far below market
  tif: 'gtc',
  text: 't-fut-limit-1',
});
console.log(limit.id, limit.status);

// Market order: price '0' with tif 'ioc'
const market = await client.submitFuturesOrder({
  settle: 'usdt',
  contract: 'BTC_USDT',
  size: -1,
  price: '0',
  tif: 'ioc',
  reduce_only: true,
});
console.log(market.id, market.fill_price);
```

### Amend and cancel futures orders

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});

const orderId = '123456789';

const amended = await client.updateFuturesOrder({ settle: 'usdt', order_id: orderId, price: '20500' });
console.log(amended.price);

const cancelled = await client.cancelFuturesOrder({ settle: 'usdt', order_id: orderId });
console.log(cancelled.status, cancelled.finish_as);

// Cancel all open orders on one contract
const all = await client.cancelAllFuturesOrders({ settle: 'usdt', contract: 'BTC_USDT' });
console.log('Cancelled:', all.length);
```

## WebSockets

The `WebsocketClient` opens one connection per product group (the second argument, for example `'spotV4'` or `'perpFuturesUSDTV4'`), sends heartbeats, and reconnects and resubscribes on its own. Updates arrive on the `update` event and subscription replies on `response`.

### Public streams

```typescript
import { WebsocketClient } from 'gateio-api';

const ws = new WebsocketClient();

ws.on('open', ({ wsKey }) => console.log('connected', wsKey));
ws.on('update', (data) => console.log('update', JSON.stringify(data)));
ws.on('response', (data) => console.log('response', JSON.stringify(data)));
ws.on('reconnected', ({ wsKey }) => console.log('reconnected', wsKey));
ws.on('exception', (err) => console.error('exception', err));

// Spot tickers and trades
ws.subscribe(
  [
    { topic: 'spot.tickers', payload: ['BTC_USDT', 'ETH_USDT'] },
    { topic: 'spot.trades', payload: ['BTC_USDT'] },
  ],
  'spotV4',
);

// Spot order book updates: pair, interval
ws.subscribe({ topic: 'spot.order_book_update', payload: ['BTC_USDT', '100ms'] }, 'spotV4');

// USDT perpetual futures tickers
ws.subscribe({ topic: 'futures.tickers', payload: ['BTC_USDT'] }, 'perpFuturesUSDTV4');
```

### Private streams

```typescript
import { WebsocketClient } from 'gateio-api';

const ws = new WebsocketClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});

ws.on('update', (data) => console.log('update', JSON.stringify(data)));
ws.on('response', (data) => console.log('response', JSON.stringify(data)));
ws.on('exception', (err) => console.error('exception', err));

// Private topics are signed automatically
ws.subscribe(
  [
    'spot.balances',
    { topic: 'spot.orders', payload: ['!all'] },
    { topic: 'spot.usertrades', payload: ['!all'] },
  ],
  'spotV4',
);

// Futures private topics need your user id first in the payload
const userId = process.env.GATE_USER_ID!;
ws.subscribe(
  [
    { topic: 'futures.orders', payload: [userId, '!all'] },
    { topic: 'futures.positions', payload: [userId, '!all'] },
  ],
  'perpFuturesUSDTV4',
);
```

### Unsubscribe and close

```typescript
import { WebsocketClient } from 'gateio-api';

const ws = new WebsocketClient();
const topic = { topic: 'spot.tickers', payload: ['BTC_USDT'] };

ws.subscribe(topic, 'spotV4');

setTimeout(() => {
  ws.unsubscribe(topic, 'spotV4');
  ws.closeAll();
}, 10_000);
```

## WebSocket API (orders over WebSocket)

The `WebsocketAPIClient` signs in for you on first use and turns each request into a promise.

```typescript
import { WebsocketAPIClient } from 'gateio-api';

const client = new WebsocketAPIClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
  reauthWSAPIOnReconnect: true,
});

// Spot: each call is a promise that resolves with the exchange reply
const placed = await client.submitNewSpotOrder({
  text: 't-wsapi-1',
  currency_pair: 'BTC_USDT',
  type: 'limit',
  account: 'spot',
  side: 'buy',
  amount: '0.0001',
  price: '20000',
});
console.log('Placed', placed.data);

const status = await client.getSpotOrderStatus({
  order_id: String(placed.data.result.id),
  currency_pair: 'BTC_USDT',
  account: 'spot',
});
console.log('Status', status.data);

const cancelled = await client.cancelSpotOrder({
  order_id: String(placed.data.result.id),
  currency_pair: 'BTC_USDT',
  account: 'spot',
});
console.log('Cancelled', cancelled.data);

// USDT perpetual futures over the same client
const fut = await client.submitNewFuturesOrder(
  { contract: 'BTC_USDT', size: 1, price: '20000', tif: 'gtc', text: 't-wsapi-fut-1' },
  'perpFuturesUSDTV4',
);
console.log('Futures order', fut.data);
```

## Error handling

Gate answers failed REST calls with an HTTP error status and a JSON body holding a `label` (for example `INVALID_KEY`, `INVALID_SIGNATURE`, `BALANCE_NOT_ENOUGH` or `INVALID_PARAM_VALUE`) and a `message`. The SDK throws an object with the HTTP status in `code` and that parsed body in `body`.

```typescript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY!,
  apiSecret: process.env.GATE_API_SECRET!,
});

try {
  await client.submitSpotOrder({
    currency_pair: 'BTC_USDT',
    side: 'buy',
    type: 'limit',
    amount: '0.0001',
    price: '20000',
  });
} catch (e: any) {
  // Gate errors carry a label such as INVALID_KEY, BALANCE_NOT_ENOUGH or INVALID_PARAM_VALUE
  console.error('HTTP', e?.code, e?.body?.label, e?.body?.message);
}
```

## Links

- [Siebly Gate JavaScript SDK page](https://siebly.io/sdk/gate/javascript)
- [SDK docs and API reference](https://sieblyio.github.io/docs/gateio/)
- [Endpoint function list](../docs/endpointFunctionList.md)
- [npm: gateio-api](https://www.npmjs.com/package/gateio-api)
