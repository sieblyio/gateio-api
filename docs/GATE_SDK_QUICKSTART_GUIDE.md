<!-- siebly:metadata
siebly:
  version: 1
  hero:
    headline: Gate API JavaScript Tutorial for Node.js
    badges:
      - Gate API
      - Spot
      - Margin
      - Unified
      - Perpetual Futures
      - Delivery
      - Options
      - WebSocket API
    summary: Build Gate integrations with typed REST API calls, product-specific WebSocket routing, TestNet orders, WebSocket API commands, regional hosts, and proxy support.
    codeFilename: first-gate-api-call.mjs
    codeStatus: public REST API
    startSectionId: start-building-first-calls
  software:
    description: Node.js and JavaScript SDK for the Gate REST API, public and private WebSockets, WebSocket API commands, TestNet, API host routing, proxy support, and reconnect recovery.
    topics:
      - Gate REST API
      - Spot API
      - Margin API
      - Unified Account API
      - Perpetual Futures API
      - Delivery API
      - Options API
      - Wallet and transfer APIs
      - Public and private WebSockets
      - WebSocket API
      - TestNet
      - API host routing
      - HTTP and SOCKS proxies
      - Reconnect recovery
  machineCatalog:
    label: Gate API JavaScript Tutorial
    topics:
      - REST API
      - product and account routing
      - Spot and Futures TestNet orders
      - public WebSockets
      - private WebSockets
      - WebSocket API commands
      - API host routing
      - HTTP and SOCKS proxies
      - reconnect recovery
  sdkPagePromo:
    descriptionBeforePackage: 'A practical JavaScript guide to using '
    descriptionAfterPackage: ' across the Gate REST API, public and private streams, Spot and Futures TestNet orders, API hosts, proxies, and WebSocket API commands.'
    highlights:
      - Complete REST API coverage
      - Public and private WebSocket channels
      - Spot and Futures TestNet order examples
      - REST API and WebSocket proxy examples
    exampleHref: /examples/Gate
    exampleLabel: Gate SDK examples
    architectureClientSummary: RestClient, WebsocketClient, WebsocketAPIClient
    architectureApiTitle: Gate API
    architectureApiSummary: REST API, public streams, private streams, WebSocket API
  surfaceMap:
    heading: One Gate SDK, three focused clients
    summary: Choose the client that matches the request, stream, or WebSocket command your application needs.
    appLabel: Bot, dashboard, worker, tool
    appSummary: Any Node.js or JavaScript-compatible service that needs Gate market data, account state, order management, or reconciliation.
    apiLabel: Gate API
    apiItems:
      - REST API calls across Gate product groups
      - Public market streams
      - Private account streams
      - WebSocket API order commands
    packageNodes:
      - label: RestClient
        summary: Public and private REST API calls
      - label: WebsocketClient
        summary: Public and private WebSocket subscriptions
      - label: WebsocketAPIClient
        summary: Awaitable Spot and Futures order commands
  routing:
    id: gate-request-routing
    eyebrow: Request routing
    heading: Product, account, settlement currency, and connection are separate choices
    summary: Keep these values explicit so each request reaches the intended Gate product, account, environment, and WebSocket connection.
    rows:
      - eyebrow: Spot market
        code: "currency_pair: 'BTC_USDT'"
        summary: Select the Spot or margin currency pair.
      - eyebrow: Account
        code: "account: 'spot'"
        summary: Select the account used by a Spot order or query.
      - eyebrow: Settlement currency
        code: "settle: 'usdt'"
        summary: Select the settlement currency for a Futures or Delivery REST API request.
      - eyebrow: Contract
        code: "contract: 'BTC_USDT'"
        summary: Select the exact Futures, Delivery, or Options contract.
      - eyebrow: WebSocket connection
        code: "WS_KEY_MAP.perpFuturesUSDTV4"
        summary: Route a subscription or command to the correct product connection.
      - eyebrow: API host
        code: "baseUrl or wsUrl"
        summary: Select the live, TestNet, or regional API host.
  coverage:
    heading: What to get right in a Gate integration
    summary: Start with public data, then add credentials, product routing, private state, TestNet orders, network configuration, and recovery.
    cards:
      - heading: REST API and product routing
        summary: Use one REST API client while keeping currency pair, account, settlement currency, and contract explicit.
      - heading: Public and private streams
        summary: Subscribe through one WebSocket client and select the correct connection with WS_KEY_MAP.
      - heading: WebSocket API commands
        summary: Await Spot and Futures order commands, inspect the response, then confirm the final order state.
      - heading: TestNet, hosts, and proxies
        summary: Keep live and TestNet credentials separate, select the correct API host, and configure an agent when a proxy is required.
  snippets:
    heading: First REST API calls, streams, TestNet orders, and WebSocket API commands
    summary: Run one focused example at a time, then add recovery and production controls around the same clients.
    labels:
      public-rest: Public REST API
      private-rest: Private REST API
      public-websocket: Public WebSocket
      private-websocket: Private WebSocket
      spot-testnet-rest-order: Spot TestNet order
      futures-testnet-rest-order: Futures TestNet order
      spot-testnet-ws-api-order: Spot WebSocket API
      futures-testnet-ws-api-order: Futures WebSocket API
  workflows:
    heading: REST API, WebSocket stream, and WebSocket API workflows
    summary: REST API results, stream updates, and WebSocket API command responses carry different information.
    diagrams:
      - heading: REST API request flow
        summary: Choose the product fields and API host, then let RestClient sign private requests and return the endpoint response.
        steps:
          - label: Choose product fields and host
            owner: app
          - label: Call RestClient
            owner: app
          - label: Route and sign
            owner: sdk
          - label: Receive Gate response
            owner: exchange
          - label: Use endpoint-specific result
            owner: app
      - heading: WebSocket subscription flow
        summary: Choose a topic and wsKey, subscribe, receive the acknowledgement, then process updates.
        steps:
          - label: Choose topic and wsKey
            owner: app
          - label: Call subscribe
            owner: app
          - label: Connect and authenticate
            owner: sdk
          - label: Receive response event
            owner: event
          - label: Process update events
            owner: app
      - heading: WebSocket API command flow
        summary: Await the command response, then confirm final order state through a private stream or REST API query.
        steps:
          - label: Choose Spot or Futures connection
            owner: app
          - label: Await order command
            owner: app
          - label: Match request and response
            owner: sdk
          - label: Inspect header and result
            owner: app
          - label: Confirm final order state
            owner: app
  production:
    heading: Before a Gate integration trades unattended
    summary: Credentials, product routing, precision, acknowledgements, reconnect recovery, API hosts, and network behavior must all be predictable.
    items:
      - Keep live and TestNet credentials separate, and never put private keys in frontend code.
      - Keep currency_pair, account, settle, contract, wsKey, and API host explicit in order code and logs.
      - Set text on application-owned orders so retries and restarts can reconcile them.
      - Read endpoint-specific response shapes instead of assuming every REST API result is an array.
      - Treat a WebSocket API response as a command result, then confirm final order state.
      - Reload balances, positions, open orders, and trades after a private stream gap.
      - Keep the system clock synchronized and respect Gate rate limits.
      - Monitor proxy reachability, latency, and egress IP when a proxy is enabled.
  journeys:
    eyebrow: Choose your path
    heading: Jump to the Gate workflow you are building
    actionLabel: Open section
    cards:
      - heading: Start with REST API calls
        summary: Make public market calls, add credentials, then inspect account and order state.
        href: "#start-building-first-calls"
      - heading: Stream live data
        summary: Subscribe to public and private Spot and Futures channels.
        href: "#websocket-streams"
      - heading: Send WebSocket commands
        summary: Use WebsocketAPIClient for promise-based Spot and Futures order commands.
        href: "#websocket-api"
      - heading: Configure networking
        summary: Select the correct API host, then add an HTTP or SOCKS proxy agent when required.
        href: "#api-hosts"
  article:
    heading: Build around Gate products and account state
    summary: "This tutorial covers the Gate API pieces developers usually need first: REST API calls, product routing, public and private streams, TestNet orders, WebSocket API commands, API hosts, proxies, and reconnect recovery."
  related:
    cards:
      - heading: Gate SDK page
        summary: Return to installation, examples, endpoint maps, and package links.
        href: /sdk/gate/javascript
      - heading: Gate examples
        summary: Browse runnable REST API and WebSocket examples.
        href: /examples/Gate
      - heading: Endpoint map
        summary: Find the SDK method for each supported Gate endpoint.
        href: https://github.com/sieblyio/gateio-api/blob/master/docs/endpointFunctionList.md
      - heading: Source repository
        summary: Browse SDK source, releases, issues, and endpoint coverage on GitHub.
        href: https://github.com/sieblyio/gateio-api
-->

# Gate API JavaScript Tutorial for Node.js

<!-- siebly:website-omit:start -->

> [!TIP]
> Read this guide in tutorial format on the Siebly website: [Gate JavaScript REST API and WebSocket Tutorial](https://siebly.io/sdk/gate/javascript/tutorial)

<!-- siebly:website-omit:end -->

This tutorial uses [`gateio-api`](https://www.npmjs.com/package/gateio-api), Siebly's Node.js, JavaScript, and TypeScript SDK for Gate.com. It covers public and private REST API calls, Spot and Futures TestNet orders, live WebSocket streams, WebSocket API commands, API hosts, and proxies.

The SDK handles REST API request signing, private WebSocket authentication, product-specific WebSocket routing, heartbeats, reconnects, resubscriptions, and WebSocket API response matching. Request and response types are included for TypeScript users.

**Key links**

- Gate JavaScript SDK by Siebly: [`gateio-api`](https://siebly.io/sdk/gate/javascript)
- npm package: [`gateio-api`](https://www.npmjs.com/package/gateio-api)
- GitHub repository: [`sieblyio/gateio-api`](https://github.com/sieblyio/gateio-api)
- SDK examples: [Gate SDK examples](https://siebly.io/examples/Gate)
- SDK endpoint map: [Gate JavaScript endpoint reference](./endpointFunctionList.md)
- Gate REST API documentation: [Gate API v4](https://www.gate.com/docs/developers/apiv4/en/)
- Gate Spot WebSocket documentation: [Spot WebSocket API](https://www.gate.com/docs/developers/apiv4/ws/)
- Gate Futures WebSocket documentation: [Futures WebSocket API](https://www.gate.com/docs/developers/futures/ws/)
- Trading-system terms: [Siebly glossary](https://siebly.io/reference/glossary)
- More JavaScript and TypeScript SDKs: [Siebly.io](https://siebly.io)

## Why use `gateio-api`?

The JavaScript SDK handles all the complexities of integrating with Gate's REST APIs & WebSockets, so you can focus on your system without wasting excessive time on plumbing.

Private Gate REST API requests require a timestamp and HMAC-SHA512 signature. Private WebSocket subscriptions require authentication, and each product family has its own WebSocket connection. A Spot subscription cannot be sent through a USDT perpetual Futures connection.

`gateio-api` handles those mechanics and gives each job a focused client:

| Client               | Use it for                                                   |
| -------------------- | ------------------------------------------------------------ |
| `RestClient`         | Public and private REST API calls across Gate product groups |
| `WebsocketClient`    | Public and private WebSocket subscriptions                   |
| `WebsocketAPIClient` | Promise-based Spot and Futures order commands over WebSocket |

`WebsocketClient` also handles heartbeats, reconnects, cached subscriptions, and resubscription. `WebsocketAPIClient` adds login, request IDs, response matching, and promise resolution.

## Install the SDK

```bash
npm install gateio-api
```

The package includes CommonJS, ESM, and TypeScript declarations. Every example below is plain JavaScript using ESM imports.

## Create Gate API keys

Public market data does not require credentials. Private REST API calls, private streams, and WebSocket API commands require an API key and secret.

Create and manage keys from the [Gate API key page](https://www.gate.com/myaccount/api_key_manage). Start with the least access your application needs:

- Use a read-only key while building account views and recovery code.
- Enable Spot read-write access only for Spot order workflows.
- Enable perpetual-contract read-write access only for Futures order workflows.
- Add an IP whitelist when your outbound IP is stable.
- Keep live and TestNet credentials separate.
- Allow a few minutes for API key and permission changes to take effect.
- Do not enable withdrawal permission for anything in this tutorial.

Set these live credential names in your shell, secret manager, or deployment environment:

- `GATE_API_KEY`
- `GATE_API_SECRET`

Use separate names for TestNet:

- `GATE_TESTNET_API_KEY`
- `GATE_TESTNET_API_SECRET`
- `GATE_PLACE_TESTNET_ORDER=true`

The order examples check `GATE_PLACE_TESTNET_ORDER` before sending an order. Do not log API keys or secrets, and never put them in browser code.

## Gate products and request vocabulary

Several short fields determine where a request goes and what its values mean:

| Field           | Example                        | Meaning                                                                                            |
| --------------- | ------------------------------ | -------------------------------------------------------------------------------------------------- |
| `currency_pair` | `BTC_USDT`                     | A Spot or margin market                                                                            |
| `account`       | `spot`                         | The account used by a Spot order or query                                                          |
| `settle`        | `usdt`                         | The settlement currency for a Futures or Delivery REST API request                                 |
| `contract`      | `BTC_USDT`                     | The exact Futures, Delivery, or Options contract                                                   |
| `size`          | `1` or `-1`                    | Futures contract count, not a BTC or USDT amount                                                   |
| `text`          | `t-my-order-123`               | Your [custom order ID](https://siebly.io/reference/glossary#custom-order-id)                       |
| `wsKey`         | `WS_KEY_MAP.perpFuturesUSDTV4` | The [WebSocket key](https://siebly.io/reference/glossary#ws-key) that selects a product connection |

For Spot orders, `account` can be `spot`, `margin`, `cross_margin`, or `unified`, depending on the account and endpoint. This tutorial uses `spot`.

For USDT perpetual Futures, use `settle: 'usdt'` and a contract such as `BTC_USDT`. The `size` is a number of contracts. In one-way mode, a positive size buys and a negative size sells. The contract's `quanto_multiplier` tells you how much underlying currency one contract represents.

Keep these routing values visible in code and logs. They are part of the request, not interchangeable labels.

<!-- siebly:section id="start-building-first-calls" -->

## Start building: first calls and streams

Run each example on its own. Start with public data, then add authenticated account state and live streams.

### 1. Make public REST API calls

Public calls need no API key. Gate response bodies are endpoint-specific: server time and order books are objects, tickers are arrays, and candles are tuple arrays.

<!-- siebly:snippet id="public-rest" -->

```javascript
import { RestClient } from 'gateio-api';

const client = new RestClient();

async function main() {
  try {
    const time = await client.getServerTime();
    console.log('Server time:', time.server_time);
  } catch (error) {
    console.error('Server time request failed:', error);
  }

  try {
    const pair = await client.getSpotCurrencyPair({
      currency_pair: 'BTC_USDT',
    });
    console.log('BTC_USDT metadata:', pair);
  } catch (error) {
    console.error('Currency pair request failed:', error);
  }

  try {
    const tickers = await client.getSpotTicker({
      currency_pair: 'BTC_USDT',
    });
    console.log('BTC_USDT ticker:', tickers[0]);
  } catch (error) {
    console.error('Ticker request failed:', error);
  }

  try {
    const orderBook = await client.getSpotOrderBook({
      currency_pair: 'BTC_USDT',
      limit: 5,
    });
    console.log('Best bid:', orderBook.bids[0]);
    console.log('Best ask:', orderBook.asks[0]);
  } catch (error) {
    console.error('Order book request failed:', error);
  }

  try {
    const candles = await client.getSpotCandles({
      currency_pair: 'BTC_USDT',
      interval: '1h',
      limit: 10,
    });
    console.log('Latest candle:', candles[0]);
  } catch (error) {
    console.error('Candles request failed:', error);
  }
}

main();
```

The SDK returns the endpoint body directly. There is no shared result wrapper to unwrap.

Each Spot candle is a tuple:

```text
[
  timestamp,
  quoteVolume,
  close,
  high,
  low,
  open,
  baseVolume,
  closed
]
```

Use the [SDK endpoint map](./endpointFunctionList.md) or the official endpoint documentation when reading tuple positions and endpoint-specific objects.

### 2. Make private REST API calls

Private calls use the same `RestClient`. Add your key and secret, then call private methods normally. The SDK adds the required timestamp and signature.

<!-- siebly:snippet id="private-rest" -->

```javascript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_API_KEY,
  apiSecret: process.env.GATE_API_SECRET,
});

async function main() {
  try {
    const balances = await client.getSpotAccounts();
    console.log('Spot balances:', balances);
  } catch (error) {
    console.error('Balance request failed:', error);
  }

  try {
    const openOrders = await client.getSpotOpenOrders({
      account: 'spot',
    });
    console.log('Open Spot orders grouped by pair:', openOrders);
  } catch (error) {
    console.error('Open-order request failed:', error);
  }

  try {
    const recentOrders = await client.getSpotOrders({
      currency_pair: 'BTC_USDT',
      status: 'finished',
      account: 'spot',
      limit: 20,
    });
    console.log('Recent BTC_USDT orders:', recentOrders);
  } catch (error) {
    console.error('Order-history request failed:', error);
  }

  try {
    const trades = await client.getSpotTradingHistory({
      currency_pair: 'BTC_USDT',
      account: 'spot',
      limit: 20,
    });
    console.log('Recent BTC_USDT trades:', trades);
  } catch (error) {
    console.error('Trade-history request failed:', error);
  }
}

main();
```

`getSpotAccounts()`, `getSpotOrders()`, and `getSpotTradingHistory()` return arrays. `getSpotOpenOrders()` returns an array whose entries group open orders by currency pair. Other private endpoints return objects or different array shapes, so check the [SDK endpoint map](./endpointFunctionList.md) instead of assuming a common format.

### 3. Subscribe to public WebSocket streams

Every subscription includes both a topic and an explicit `wsKey`. The key tells the SDK which Gate connection should carry the subscription.

<!-- siebly:snippet id="public-websocket" -->

```javascript
import { WebsocketClient, WS_KEY_MAP } from 'gateio-api';

const ws = new WebsocketClient();

ws.on('response', (response) => {
  console.log('Subscription response:', response);
});

ws.on('update', (update) => {
  console.log('WebSocket update:', update);
});

ws.on('reconnect', ({ wsKey }) => {
  console.log('Reconnecting:', wsKey);
});

ws.on('reconnected', (event) => {
  console.log('Reconnected:', event.wsKey);
});

ws.on('exception', (error) => {
  console.error('WebSocket exception:', error);
});

try {
  ws.subscribe(
    {
      topic: 'spot.tickers',
      payload: ['BTC_USDT'],
    },
    WS_KEY_MAP.spotV4,
  );
} catch (error) {
  console.error('Spot subscription failed:', error);
}

try {
  ws.subscribe(
    {
      topic: 'futures.tickers',
      payload: ['BTC_USDT'],
    },
    WS_KEY_MAP.perpFuturesUSDTV4,
  );
} catch (error) {
  console.error('Futures subscription failed:', error);
}

process.once('SIGINT', () => {
  ws.closeAll();
});
```

Gate sends Spot ticker data as an object in `result`, while a Futures ticker update can contain an array. The SDK adds `wsKey` to each update so one event handler can identify the source connection.

The main WebSocket events are:

| Event           | Meaning                                                       |
| --------------- | ------------------------------------------------------------- |
| `open`          | A connection opened for the reported `wsKey`                  |
| `response`      | Subscription, unsubscription, or request response             |
| `update`        | Market or account data                                        |
| `authenticated` | A private connection authenticated successfully               |
| `reconnect`     | The connection dropped and a reconnect is starting            |
| `reconnected`   | The connection is open and cached subscriptions were restored |
| `close`         | A connection closed for the reported `wsKey`                  |
| `exception`     | The client or connection reported an error                    |

A successful `response` event confirms the [subscription acknowledgement](https://siebly.io/reference/glossary#subscription-acknowledgement). It does not mean that a market update has arrived yet.

### 4. Subscribe to private Spot streams

Private streams use the same client with credentials. This example follows Spot balances, orders, and user trades.

<!-- siebly:snippet id="private-websocket" -->

```javascript
import { WebsocketClient, WS_KEY_MAP } from 'gateio-api';

const ws = new WebsocketClient({
  apiKey: process.env.GATE_API_KEY,
  apiSecret: process.env.GATE_API_SECRET,
});

ws.on('authenticated', ({ wsKey }) => {
  console.log('Authenticated:', wsKey);
});

ws.on('response', (response) => {
  console.log('Subscription response:', response);
});

ws.on('update', (update) => {
  console.log('Private Spot update:', update);
});

ws.on('reconnected', (event) => {
  console.log('Reconnected:', event.wsKey);
});

ws.on('exception', (error) => {
  console.error('WebSocket exception:', error);
});

try {
  ws.subscribe(
    {
      topic: 'spot.balances',
    },
    WS_KEY_MAP.spotV4,
  );
} catch (error) {
  console.error('Balance subscription failed:', error);
}

try {
  ws.subscribe(
    {
      topic: 'spot.orders',
      payload: ['BTC_USDT'],
    },
    WS_KEY_MAP.spotV4,
  );
} catch (error) {
  console.error('Order subscription failed:', error);
}

try {
  ws.subscribe(
    {
      topic: 'spot.usertrades',
      payload: ['BTC_USDT'],
    },
    WS_KEY_MAP.spotV4,
  );
} catch (error) {
  console.error('Trade subscription failed:', error);
}

process.once('SIGINT', () => {
  ws.closeAll();
});
```

Use the `authenticated` event as a connection-level signal. Use private updates as [private stream confirmation](https://siebly.io/reference/glossary#private-stream-confirmation) of account and order changes.

Other private Spot topics include `spot.margin_balances` and `spot.cross_balances`. Check each channel's payload rules before subscribing.

### 5. Subscribe to private Futures streams

Futures private channels use your Gate user ID. Contract-specific channels also include the contract. Retrieve the user ID once from the REST API, then use the payload required by each channel.

```javascript
import { RestClient, WebsocketClient, WS_KEY_MAP } from 'gateio-api';

const rest = new RestClient({
  apiKey: process.env.GATE_API_KEY,
  apiSecret: process.env.GATE_API_SECRET,
});

const ws = new WebsocketClient({
  apiKey: process.env.GATE_API_KEY,
  apiSecret: process.env.GATE_API_SECRET,
});

ws.on('authenticated', ({ wsKey }) => {
  console.log('Authenticated:', wsKey);
});

ws.on('response', (response) => {
  console.log('Subscription response:', response);
});

ws.on('update', (update) => {
  console.log('Private Futures update:', update);
});

ws.on('exception', (error) => {
  console.error('WebSocket exception:', error);
});

async function main() {
  let account;

  try {
    account = await rest.getAccountDetail();
    console.log('Gate user ID:', account.user_id);
  } catch (error) {
    console.error('Account detail request failed:', error);
    return;
  }

  const userId = String(account.user_id);
  const payload = [userId, 'BTC_USDT'];
  const wsKey = WS_KEY_MAP.perpFuturesUSDTV4;

  try {
    ws.subscribe(
      {
        topic: 'futures.orders',
        payload,
      },
      wsKey,
    );
  } catch (error) {
    console.error('Order subscription failed:', error);
  }

  try {
    ws.subscribe(
      {
        topic: 'futures.usertrades',
        payload,
      },
      wsKey,
    );
  } catch (error) {
    console.error('Trade subscription failed:', error);
  }

  try {
    ws.subscribe(
      {
        topic: 'futures.balances',
        payload: [userId],
      },
      wsKey,
    );
  } catch (error) {
    console.error('Balance subscription failed:', error);
  }

  try {
    ws.subscribe(
      {
        topic: 'futures.positions',
        payload,
      },
      wsKey,
    );
  } catch (error) {
    console.error('Position subscription failed:', error);
  }
}

process.once('SIGINT', () => {
  ws.closeAll();
});

main();
```

Keep the `wsKey` aligned with the settlement currency and product. USDT perpetual Futures use `WS_KEY_MAP.perpFuturesUSDTV4`; BTC perpetual Futures use `WS_KEY_MAP.perpFuturesBTCV4`.

Gate also provides private Futures channels such as `futures.autoorders`. Use the payload documented for that specific channel.

### 6. Place and cancel a Spot order in TestNet

Gate TestNet uses separate credentials and API hosts. This example:

1. Checks the explicit order opt-in.
2. Loads current `BTC_USDT` trading rules and the order book.
3. Calculates an amount that meets the pair's base and quote minimums.
4. Places a post-only limit buy at the current best bid.
5. Queries the order and cancels it if it remains open.

The order uses `time_in_force: 'poc'`, Gate's post-only setting. A fast market can move before the request arrives, in which case Gate can reject or finish the order instead of leaving it on the book.

<!-- siebly:snippet id="spot-testnet-rest-order" -->

```javascript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_TESTNET_API_KEY,
  apiSecret: process.env.GATE_TESTNET_API_SECRET,
  baseUrl: 'https://api-testnet.gateapi.io/api/v4',
});

async function main() {
  if (process.env.GATE_PLACE_TESTNET_ORDER !== 'true') {
    console.error('Set GATE_PLACE_TESTNET_ORDER=true to run this example.');
    return;
  }

  if (
    !process.env.GATE_TESTNET_API_KEY ||
    !process.env.GATE_TESTNET_API_SECRET
  ) {
    console.error('Set GATE_TESTNET_API_KEY and GATE_TESTNET_API_SECRET.');
    return;
  }

  let pair;

  try {
    pair = await client.getSpotCurrencyPair({
      currency_pair: 'BTC_USDT',
    });
  } catch (error) {
    console.error('Currency pair request failed:', error);
    return;
  }

  let orderBook;

  try {
    orderBook = await client.getSpotOrderBook({
      currency_pair: 'BTC_USDT',
      limit: 5,
    });
  } catch (error) {
    console.error('Order book request failed:', error);
    return;
  }

  if (pair.trade_status !== 'tradable' && pair.trade_status !== 'buyable') {
    console.error('BTC_USDT is not currently buyable.');
    return;
  }

  const price = orderBook.bids[0]?.[0];
  const amountPrecision = pair.amount_precision;
  const minBase = Number(pair.min_base_amount);
  const minQuote = Number(pair.min_quote_amount);
  const priceNumber = Number(price);

  if (
    !price ||
    amountPrecision === undefined ||
    !Number.isFinite(minBase) ||
    !Number.isFinite(minQuote) ||
    !Number.isFinite(priceNumber) ||
    priceNumber <= 0
  ) {
    console.error('Required market metadata is unavailable.');
    return;
  }

  const amountStep = 10 ** -amountPrecision;
  const minimumAmount = Math.max(minBase, minQuote / priceNumber);
  const amountNumber = (Math.ceil(minimumAmount / amountStep) + 1) * amountStep;
  const amount = amountNumber.toFixed(amountPrecision);

  if (amountNumber < minBase || amountNumber * priceNumber < minQuote) {
    console.error('Could not derive a valid TestNet order.');
    return;
  }

  const maxBase = Number(pair.max_base_amount);
  const maxQuote = Number(pair.max_quote_amount);

  if (
    (Number.isFinite(maxBase) && amountNumber > maxBase) ||
    (Number.isFinite(maxQuote) && amountNumber * priceNumber > maxQuote)
  ) {
    console.error('Derived amount exceeds the pair limits.');
    return;
  }

  const text = `t-siebly${Date.now().toString().slice(-12)}`;
  let placedOrder;

  try {
    placedOrder = await client.submitSpotOrder({
      currency_pair: 'BTC_USDT',
      account: 'spot',
      side: 'buy',
      type: 'limit',
      amount,
      price,
      time_in_force: 'poc',
      text,
    });
    console.log('Placed Spot order:', placedOrder);
  } catch (error) {
    console.error('Spot order placement failed:', error);
    return;
  }

  if (!placedOrder.id) {
    console.error('Gate did not return an order ID.');
    return;
  }

  let currentOrder;

  try {
    currentOrder = await client.getSpotOrder({
      order_id: placedOrder.id,
      currency_pair: 'BTC_USDT',
      account: 'spot',
    });
    console.log('Current Spot order:', currentOrder);
  } catch (error) {
    console.error('Spot order query failed:', error);
  }

  if (currentOrder && currentOrder.status !== 'open') {
    console.log('Order is no longer open:', currentOrder.status);
    return;
  }

  try {
    const cancelledOrder = await client.cancelSpotOrder({
      order_id: placedOrder.id,
      currency_pair: 'BTC_USDT',
      account: 'spot',
    });
    console.log('Cancelled Spot order:', cancelledOrder);
  } catch (error) {
    console.error('Spot order cancellation failed:', error);
  }
}

main();
```

The extra amount increment avoids falling just below the quote minimum after decimal rounding. Before using another pair, read its `amount_precision`, `precision`, minimums, maximums, and `trade_status`.

### 7. Place and cancel a USDT perpetual order in TestNet

A Futures `size` is a contract count. It is not an amount of BTC or USDT. This example reads the contract's minimum size and current price, and it only runs when the account is in one-way mode. It does not change account or position settings.

<!-- siebly:snippet id="futures-testnet-rest-order" -->

```javascript
import { RestClient } from 'gateio-api';

const client = new RestClient({
  apiKey: process.env.GATE_TESTNET_API_KEY,
  apiSecret: process.env.GATE_TESTNET_API_SECRET,
  baseUrl: 'https://api-testnet.gateapi.io/api/v4',
});

async function main() {
  if (process.env.GATE_PLACE_TESTNET_ORDER !== 'true') {
    console.error('Set GATE_PLACE_TESTNET_ORDER=true to run this example.');
    return;
  }

  if (
    !process.env.GATE_TESTNET_API_KEY ||
    !process.env.GATE_TESTNET_API_SECRET
  ) {
    console.error('Set GATE_TESTNET_API_KEY and GATE_TESTNET_API_SECRET.');
    return;
  }

  let contract;

  try {
    contract = await client.getFuturesContract({
      settle: 'usdt',
      contract: 'BTC_USDT',
    });
  } catch (error) {
    console.error('Contract request failed:', error);
    return;
  }

  let orderBook;

  try {
    orderBook = await client.getFuturesOrderBook({
      settle: 'usdt',
      contract: 'BTC_USDT',
      limit: 5,
    });
  } catch (error) {
    console.error('Order book request failed:', error);
    return;
  }

  let account;

  try {
    account = await client.getFuturesAccount({
      settle: 'usdt',
    });
  } catch (error) {
    console.error('Futures account request failed:', error);
    return;
  }

  const oneWayMode = account.position_mode
    ? account.position_mode === 'single'
    : !account.in_dual_mode;

  if (!oneWayMode) {
    console.error('This example requires one-way Futures position mode.');
    return;
  }

  if (contract.status && contract.status !== 'trading') {
    console.error('BTC_USDT Futures is not currently trading.');
    return;
  }

  const price = orderBook.bids[0]?.p;
  const size = Number(contract.order_size_min);

  if (
    !price ||
    !Number.isFinite(Number(price)) ||
    Number(price) <= 0 ||
    !Number.isFinite(size) ||
    size <= 0 ||
    (contract.enable_decimal === false && !Number.isInteger(size))
  ) {
    console.error('Required contract metadata is unavailable.');
    return;
  }

  console.log('One contract represents:', contract.quanto_multiplier, 'BTC');
  console.log('Price increment:', contract.order_price_round);

  const text = `t-siebly${Date.now().toString().slice(-12)}`;
  let placedOrder;

  try {
    placedOrder = await client.submitFuturesOrder({
      settle: 'usdt',
      contract: 'BTC_USDT',
      size,
      price,
      tif: 'poc',
      text,
    });
    console.log('Placed Futures order:', placedOrder);
  } catch (error) {
    console.error('Futures order placement failed:', error);
    return;
  }

  if (placedOrder.id === undefined) {
    console.error('Gate did not return an order ID.');
    return;
  }

  const orderId = String(placedOrder.id);
  let currentOrder;

  try {
    currentOrder = await client.getFuturesOrder({
      settle: 'usdt',
      order_id: orderId,
    });
    console.log('Current Futures order:', currentOrder);
  } catch (error) {
    console.error('Futures order query failed:', error);
  }

  if (currentOrder && currentOrder.status !== 'open') {
    console.log('Order is no longer open:', currentOrder.status);
    return;
  }

  try {
    const cancelledOrder = await client.cancelFuturesOrder({
      settle: 'usdt',
      order_id: orderId,
    });
    console.log('Cancelled Futures order:', cancelledOrder);
  } catch (error) {
    console.error('Futures order cancellation failed:', error);
  }
}

main();
```

In one-way mode, a positive `size` buys and a negative `size` sells. Dual-side mode uses different position semantics, so handle it in account-specific code after reading the [official Gate API v4 documentation](https://www.gate.com/docs/developers/apiv4/en/).

The contract metadata supplies the size and price rules:

- `order_size_min`: minimum contract count
- `order_price_round`: permitted price increment
- `quanto_multiplier`: underlying amount represented by one contract
- `enable_decimal`: whether fractional contract sizes are supported

Do not derive a Futures order size from Spot precision rules.

### 8. Send a Spot order through the WebSocket API

`WebsocketAPIClient` turns Gate WebSocket API commands into promises. It connects and authenticates automatically on the first private command, adds a request ID, matches the response, and resolves the promise.

This TestNet example uses the REST API only to read current market rules and the order book. The order, query, and cancellation use the WebSocket API.

<!-- siebly:snippet id="spot-testnet-ws-api-order" -->

```javascript
import { RestClient, WebsocketAPIClient, WS_KEY_MAP } from 'gateio-api';

const rest = new RestClient({
  baseUrl: 'https://api-testnet.gateapi.io/api/v4',
});

const wsApi = new WebsocketAPIClient({
  apiKey: process.env.GATE_TESTNET_API_KEY,
  apiSecret: process.env.GATE_TESTNET_API_SECRET,
  wsUrl: 'wss://ws-testnet.gate.com/v4/ws/spot',
});

async function main() {
  if (process.env.GATE_PLACE_TESTNET_ORDER !== 'true') {
    console.error('Set GATE_PLACE_TESTNET_ORDER=true to run this example.');
    return;
  }

  if (
    !process.env.GATE_TESTNET_API_KEY ||
    !process.env.GATE_TESTNET_API_SECRET
  ) {
    console.error('Set GATE_TESTNET_API_KEY and GATE_TESTNET_API_SECRET.');
    return;
  }

  let pair;

  try {
    pair = await rest.getSpotCurrencyPair({
      currency_pair: 'BTC_USDT',
    });
  } catch (error) {
    console.error('Currency pair request failed:', error);
    return;
  }

  let orderBook;

  try {
    orderBook = await rest.getSpotOrderBook({
      currency_pair: 'BTC_USDT',
      limit: 5,
    });
  } catch (error) {
    console.error('Order book request failed:', error);
    return;
  }

  if (pair.trade_status !== 'tradable' && pair.trade_status !== 'buyable') {
    console.error('BTC_USDT is not currently buyable.');
    return;
  }

  const price = orderBook.bids[0]?.[0];
  const amountPrecision = pair.amount_precision;
  const minBase = Number(pair.min_base_amount);
  const minQuote = Number(pair.min_quote_amount);
  const priceNumber = Number(price);

  if (
    !price ||
    amountPrecision === undefined ||
    !Number.isFinite(minBase) ||
    !Number.isFinite(minQuote) ||
    !Number.isFinite(priceNumber) ||
    priceNumber <= 0
  ) {
    console.error('Required market metadata is unavailable.');
    return;
  }

  const amountStep = 10 ** -amountPrecision;
  const minimumAmount = Math.max(minBase, minQuote / priceNumber);
  const amountNumber = (Math.ceil(minimumAmount / amountStep) + 1) * amountStep;
  const amount = amountNumber.toFixed(amountPrecision);

  if (amountNumber < minBase || amountNumber * priceNumber < minQuote) {
    console.error('Could not derive a valid TestNet order.');
    return;
  }

  const maxBase = Number(pair.max_base_amount);
  const maxQuote = Number(pair.max_quote_amount);

  if (
    (Number.isFinite(maxBase) && amountNumber > maxBase) ||
    (Number.isFinite(maxQuote) && amountNumber * priceNumber > maxQuote)
  ) {
    console.error('Derived amount exceeds the pair limits.');
    return;
  }

  const text = `t-siebly${Date.now().toString().slice(-12)}`;
  const wsKey = WS_KEY_MAP.spotV4;

  try {
    let placedResponse;

    try {
      placedResponse = await wsApi.submitNewSpotOrder(
        {
          currency_pair: 'BTC_USDT',
          account: 'spot',
          side: 'buy',
          type: 'limit',
          amount,
          price,
          time_in_force: 'poc',
          text,
        },
        wsKey,
      );
      console.log('Command status:', placedResponse.header.status);
      console.log('Placed Spot order:', placedResponse.data.result);
    } catch (error) {
      console.error('Spot WebSocket API placement failed:', error);
      return;
    }

    const orderId = placedResponse.data.result.id;
    let statusResponse;

    try {
      statusResponse = await wsApi.getSpotOrderStatus(
        {
          order_id: orderId,
          currency_pair: 'BTC_USDT',
          account: 'spot',
        },
        wsKey,
      );
      console.log('Current Spot order:', statusResponse.data.result);
    } catch (error) {
      console.error('Spot WebSocket API query failed:', error);
    }

    if (statusResponse && statusResponse.data.result.status !== 'open') {
      console.log(
        'Order is no longer open:',
        statusResponse.data.result.status,
      );
      return;
    }

    try {
      const cancelledResponse = await wsApi.cancelSpotOrder(
        {
          order_id: orderId,
          currency_pair: 'BTC_USDT',
          account: 'spot',
        },
        wsKey,
      );
      console.log('Cancelled Spot order:', cancelledResponse.data.result);
    } catch (error) {
      console.error('Spot WebSocket API cancellation failed:', error);
    }
  } finally {
    wsApi.getWSClient().closeAll();
  }
}

main();
```

### 9. Send a USDT perpetual order through the WebSocket API

Futures WebSocket API commands use a product-specific WebSocket key. Pass it explicitly so the contract and connection remain clear.

<!-- siebly:snippet id="futures-testnet-ws-api-order" -->

```javascript
import { RestClient, WebsocketAPIClient, WS_KEY_MAP } from 'gateio-api';

const rest = new RestClient({
  apiKey: process.env.GATE_TESTNET_API_KEY,
  apiSecret: process.env.GATE_TESTNET_API_SECRET,
  baseUrl: 'https://api-testnet.gateapi.io/api/v4',
});

const wsApi = new WebsocketAPIClient({
  apiKey: process.env.GATE_TESTNET_API_KEY,
  apiSecret: process.env.GATE_TESTNET_API_SECRET,
  wsUrl: 'wss://ws-testnet.gate.com/v4/ws/futures/usdt',
});

async function main() {
  if (process.env.GATE_PLACE_TESTNET_ORDER !== 'true') {
    console.error('Set GATE_PLACE_TESTNET_ORDER=true to run this example.');
    return;
  }

  if (
    !process.env.GATE_TESTNET_API_KEY ||
    !process.env.GATE_TESTNET_API_SECRET
  ) {
    console.error('Set GATE_TESTNET_API_KEY and GATE_TESTNET_API_SECRET.');
    return;
  }

  let contract;

  try {
    contract = await rest.getFuturesContract({
      settle: 'usdt',
      contract: 'BTC_USDT',
    });
  } catch (error) {
    console.error('Contract request failed:', error);
    return;
  }

  let orderBook;

  try {
    orderBook = await rest.getFuturesOrderBook({
      settle: 'usdt',
      contract: 'BTC_USDT',
      limit: 5,
    });
  } catch (error) {
    console.error('Order book request failed:', error);
    return;
  }

  let account;

  try {
    account = await rest.getFuturesAccount({
      settle: 'usdt',
    });
  } catch (error) {
    console.error('Futures account request failed:', error);
    return;
  }

  const oneWayMode = account.position_mode
    ? account.position_mode === 'single'
    : !account.in_dual_mode;

  if (!oneWayMode) {
    console.error('This example requires one-way Futures position mode.');
    return;
  }

  if (contract.status && contract.status !== 'trading') {
    console.error('BTC_USDT Futures is not currently trading.');
    return;
  }

  const price = orderBook.bids[0]?.p;
  const size = Number(contract.order_size_min);

  if (
    !price ||
    !Number.isFinite(Number(price)) ||
    Number(price) <= 0 ||
    !Number.isFinite(size) ||
    size <= 0 ||
    (contract.enable_decimal === false && !Number.isInteger(size))
  ) {
    console.error('Required contract metadata is unavailable.');
    return;
  }

  const text = `t-siebly${Date.now().toString().slice(-12)}`;
  const wsKey = WS_KEY_MAP.perpFuturesUSDTV4;

  try {
    let placedResponse;

    try {
      placedResponse = await wsApi.submitNewFuturesOrder(
        {
          contract: 'BTC_USDT',
          size,
          price,
          tif: 'poc',
          text,
        },
        wsKey,
      );
      console.log('Command status:', placedResponse.header.status);
      console.log('Placed Futures order:', placedResponse.data.result);
    } catch (error) {
      console.error('Futures WebSocket API placement failed:', error);
      return;
    }

    const orderId = String(placedResponse.data.result.id);
    let statusResponse;

    try {
      statusResponse = await wsApi.getFuturesOrderStatus(
        {
          order_id: orderId,
        },
        wsKey,
      );
      console.log('Current Futures order:', statusResponse.data.result);
    } catch (error) {
      console.error('Futures WebSocket API query failed:', error);
    }

    if (statusResponse && statusResponse.data.result.status !== 'open') {
      console.log(
        'Order is no longer open:',
        statusResponse.data.result.status,
      );
      return;
    }

    try {
      const cancelledResponse = await wsApi.cancelFuturesOrder(
        {
          order_id: orderId,
        },
        wsKey,
      );
      console.log('Cancelled Futures order:', cancelledResponse.data.result);
    } catch (error) {
      console.error('Futures WebSocket API cancellation failed:', error);
    }
  } finally {
    wsApi.getWSClient().closeAll();
  }
}

main();
```

Successful commands have `header.status === '200'`, and the endpoint result is in `data.result`. The SDK rejects a command promise when Gate returns a non-success status.

An accepted command is not proof that an order later filled, remained open, or was cancelled. Treat the response as [pending confirmation](https://siebly.io/reference/glossary#pending-confirmation), then confirm the final state through the private order stream or a REST API query.

<!-- siebly:section id="rest-api" -->

## Work with the Gate REST API

`RestClient` covers Gate's product groups through named methods. Public methods work without credentials. Private methods use the API key and secret passed to the client.

### Understand response shapes

The client resolves to the endpoint's response body:

```javascript
import { RestClient } from 'gateio-api';

const client = new RestClient();

async function main() {
  try {
    const result = await client.getSpotOrderBook({
      currency_pair: 'BTC_USDT',
    });
    console.log(result);
  } catch (error) {
    console.error('Order book request failed:', error);
  }
}

main();
```

There is no shared response envelope. Check the [SDK endpoint map](./endpointFunctionList.md) before deciding how to handle `result`.

| Method                  | Response shape                             |
| ----------------------- | ------------------------------------------ |
| `getServerTime()`       | Object with `server_time`                  |
| `getSpotCurrencyPair()` | Currency-pair object                       |
| `getSpotTicker()`       | Array of ticker objects                    |
| `getSpotOrderBook()`    | Object with tuple-array `bids` and `asks`  |
| `getSpotCandles()`      | Array of candle tuples                     |
| `getFuturesContract()`  | Contract object                            |
| `getFuturesTickers()`   | Array of ticker objects                    |
| `getFuturesOrderBook()` | Object with `{ p, s }` bid and ask entries |
| `getFuturesAccount()`   | Account object                             |
| `getFuturesPositions()` | Array of position objects                  |

Prices and quantities are commonly returned as strings. Keep them as strings while passing them between Gate API methods. Convert them deliberately when doing calculations, and round the result back to the product's required precision.

### Read account state

An authenticated integration usually needs these views:

| State               | Spot method               | USDT perpetual method                                      |
| ------------------- | ------------------------- | ---------------------------------------------------------- |
| Balances or account | `getSpotAccounts()`       | `getFuturesAccount({ settle: 'usdt' })`                    |
| Positions           | Not applicable            | `getFuturesPositions({ settle: 'usdt' })`                  |
| Open orders         | `getSpotOpenOrders()`     | `getFuturesOrders({ settle: 'usdt', status: 'open' })`     |
| Recent orders       | `getSpotOrders()`         | `getFuturesOrders({ settle: 'usdt', status: 'finished' })` |
| Trades              | `getSpotTradingHistory()` | `getFuturesTradingHistory({ settle: 'usdt' })`             |

These REST API views form a reliable [account state](https://siebly.io/reference/glossary#accountstate) baseline before stream updates are applied.

### Explore other Gate product groups

The same `RestClient` also covers the following APIs. Start with read methods and check account eligibility, permissions, and product-specific rules before using any write method.

| Product group           | Representative SDK methods                                                  |
| ----------------------- | --------------------------------------------------------------------------- |
| Margin and cross margin | `getMarginAccounts()`, `getCrossMarginAccount()`, `getMarginUserAccounts()` |
| Universal margin loans  | `getMarginUNILoans()`, `getMarginUNIMaxBorrow()`                            |
| Unified Account         | `getUnifiedAccountInfo()`, `getUnifiedAccountMode()`, `getUnifiedLoans()`   |
| Delivery                | `getAllDeliveryContracts()`, `getDeliveryAccount()`, `getDeliveryOrders()`  |
| Options                 | `getOptionsContracts()`, `getOptionsAccount()`, `getOptionsOrders()`        |
| Wallet and transfers    | `getBalances()`, `submitTransfer()`, `getTransferStatus()`                  |
| Multi-collateral loans  | `getMultiLoanOrders()`, `getMultiLoanSupportedCurrencies()`                 |
| Flash Swap              | `getFlashSwapCurrencyPairs()`, `getFlashSwapOrders()`                       |
| Earn and lending        | `getEarnFixedTermProducts()`, `getEarnFixedTermLends()`                     |
| Auto Invest             | `getAutoInvestCoins()`, `getAutoInvestPlans()`, `getAutoInvestOrders()`     |
| Subaccounts             | `getSubAccounts()`, `getSubBalance()`, `getSubFuturesBalances()`            |
| Rebates and partners    | `getPartnerTransactionHistory()`, `getPartnerCommissionHistory()`           |
| OTC                     | `getOTCBankList()`, `getOTCFiatOrderList()`                                 |
| P2P Merchant            | `getP2PMerchantUserInfo()`, `getP2PMerchantPendingTransactionList()`        |
| CrossEx                 | `getCrossExSymbols()`, `getCrossExAccounts()`, `getCrossExPositions()`      |
| Alpha                   | `getAlphaCurrencies()`, `getAlphaTickers()`, `getAlphaOrders()`             |
| TradFi                  | `getTradFiSymbols()`, `getTradFiAssets()`, `getTradFiOrders()`              |

See the [complete SDK endpoint map](./endpointFunctionList.md) for every supported method, its authentication requirement, HTTP method, and Gate path.

<!-- siebly:section id="websocket-streams" -->

## Build with WebSocket streams

Use `WebsocketClient` for ongoing market and account updates. A subscription request has two independent parts:

- `topic` and `payload` select the Gate channel and its data.
- `wsKey` selects the product connection that carries the subscription.

One `subscribe()` call can contain several topics when they share the same `wsKey`. Use separate calls for topics on different product connections.

### Choose the correct WebSocket key

| Product connection     | SDK key                            |
| ---------------------- | ---------------------------------- |
| Spot                   | `WS_KEY_MAP.spotV4`                |
| USDT perpetual Futures | `WS_KEY_MAP.perpFuturesUSDTV4`     |
| BTC perpetual Futures  | `WS_KEY_MAP.perpFuturesBTCV4`      |
| USDT Delivery          | `WS_KEY_MAP.deliveryFuturesUSDTV4` |
| BTC Delivery           | `WS_KEY_MAP.deliveryFuturesBTCV4`  |
| Options                | `WS_KEY_MAP.optionsV4`             |
| Announcements          | `WS_KEY_MAP.announcementsV4`       |

Do not infer the connection from a symbol alone. `BTC_USDT` can appear in more than one product family.

Useful public topics include:

| Product | Starting topics                                                                                                |
| ------- | -------------------------------------------------------------------------------------------------------------- |
| Spot    | `spot.tickers`, `spot.trades`, `spot.order_book`, `spot.order_book_update`, `spot.candlesticks`                |
| Futures | `futures.tickers`, `futures.trades`, `futures.order_book`, `futures.order_book_update`, `futures.candlesticks` |
| Options | `options.tickers`, `options.trades`, `options.order_book`, `options.ul_tickers`                                |

### Treat responses and updates differently

The `response` event tells you whether Gate accepted a subscribe, unsubscribe, or request message. Check its `error` and `result`.

The `update` event carries channel data. Inspect `channel`, `event`, `result`, and the SDK-added `wsKey` before updating local state. A subscription response and a data update can have different result shapes.

### Recover after a reconnect

The SDK reconnects and restores cached subscriptions. A stream gap can still hide balance, order, trade, or position changes. Reload the affected state from the REST API after `reconnected`.

This Spot example reloads balances, open orders, and recent trades in sequence:

```javascript
import { RestClient, WebsocketClient, WS_KEY_MAP } from 'gateio-api';

const rest = new RestClient({
  apiKey: process.env.GATE_API_KEY,
  apiSecret: process.env.GATE_API_SECRET,
});

const ws = new WebsocketClient({
  apiKey: process.env.GATE_API_KEY,
  apiSecret: process.env.GATE_API_SECRET,
});

let recoveryRunning = false;
let spotState;

async function recoverSpotState() {
  if (recoveryRunning) {
    return;
  }

  recoveryRunning = true;

  try {
    let balances;

    try {
      balances = await rest.getSpotAccounts();
    } catch (error) {
      console.error('Balance recovery failed:', error);
      return;
    }

    let openOrders;

    try {
      openOrders = await rest.getSpotOpenOrders({
        account: 'spot',
      });
    } catch (error) {
      console.error('Open-order recovery failed:', error);
      return;
    }

    let trades;

    try {
      trades = await rest.getSpotTradingHistory({
        currency_pair: 'BTC_USDT',
        account: 'spot',
        limit: 100,
      });
    } catch (error) {
      console.error('Trade recovery failed:', error);
      return;
    }

    spotState = {
      balances,
      openOrders,
      trades,
      recoveredAt: Date.now(),
    };

    console.log('Recovered Spot state:', spotState);
  } finally {
    recoveryRunning = false;
  }
}

ws.on('reconnected', async ({ wsKey }) => {
  if (wsKey !== WS_KEY_MAP.spotV4) {
    return;
  }

  await recoverSpotState();
});

ws.on('update', (update) => {
  console.log('Private Spot update:', update);
});

ws.on('exception', (error) => {
  console.error('WebSocket exception:', error);
});

try {
  ws.subscribe(
    {
      topic: 'spot.balances',
    },
    WS_KEY_MAP.spotV4,
  );
} catch (error) {
  console.error('Balance subscription failed:', error);
}

try {
  ws.subscribe(
    {
      topic: 'spot.orders',
      payload: ['BTC_USDT'],
    },
    WS_KEY_MAP.spotV4,
  );
} catch (error) {
  console.error('Order subscription failed:', error);
}

try {
  ws.subscribe(
    {
      topic: 'spot.usertrades',
      payload: ['BTC_USDT'],
    },
    WS_KEY_MAP.spotV4,
  );
} catch (error) {
  console.error('Trade subscription failed:', error);
}

process.once('SIGINT', () => {
  ws.closeAll();
});
```

This is [REST API hydration](https://siebly.io/reference/glossary#rest-hydration) applied as [scoped recovery](https://siebly.io/reference/glossary#scoped-recovery). The example replaces `spotState` only after all three reads succeed. Reload only the state that may have changed on the affected connection, then reconcile it before trusting new updates.

For a wider recovery design, see [Exchange State](https://siebly.io/reference/exchange-state) and [Runtime Workflows](https://siebly.io/reference/runtime-workflows).

<!-- siebly:section id="websocket-api" -->

## Use the Gate WebSocket API

`WebsocketAPIClient` is for request and response commands over WebSocket. It is not the same as a subscription stream.

The client:

1. Opens the selected WebSocket connection.
2. Authenticates automatically.
3. Adds a unique request ID.
4. Sends the command.
5. Matches Gate's response to the pending promise.
6. Resolves with `header`, `data.result`, `request_id`, and `wsKey`.

Authentication happens automatically on the first command. `connectWSAPI(wsKey)` is available when an application wants to open and authenticate the connection early. Automatic WebSocket API reauthentication after a reconnect is enabled by default.

Spot methods include:

- `submitNewSpotOrder()`
- `getSpotOrderStatus()`
- `getSpotOrders()`
- `updateSpotOrder()`
- `cancelSpotOrder()`
- `cancelSpotOrderById()`
- `cancelSpotOrderForSymbol()`

Futures methods include:

- `submitNewFuturesOrder()`
- `submitNewFuturesBatchOrder()`
- `getFuturesOrderStatus()`
- `getFuturesOrders()`
- `updateFuturesOrder()`
- `cancelFuturesOrder()`

Pass a Futures `wsKey` explicitly. This keeps the settlement connection visible:

```javascript
import { WebsocketAPIClient, WS_KEY_MAP } from 'gateio-api';

const wsApi = new WebsocketAPIClient({
  apiKey: process.env.GATE_API_KEY,
  apiSecret: process.env.GATE_API_SECRET,
});

async function main() {
  try {
    const response = await wsApi.getFuturesOrders(
      {
        contract: 'BTC_USDT',
        status: 'open',
        limit: 20,
      },
      WS_KEY_MAP.perpFuturesUSDTV4,
    );

    console.log(response.header.status);
    console.log(response.data.result);
  } catch (error) {
    console.error('WebSocket API order request failed:', error);
  } finally {
    wsApi.getWSClient().closeAll();
  }
}

main();
```

The response confirms the command outcome. Use private order streams or a REST API query to confirm the resulting exchange state.

<!-- siebly:section id="testnet" -->

## Use Gate TestNet

Gate TestNet is a separate environment with separate credentials. Use it for all order examples while learning the SDK.

| Interface                | Current TestNet host                           |
| ------------------------ | ---------------------------------------------- |
| REST API                 | `https://api-testnet.gateapi.io/api/v4`        |
| Spot WebSocket           | `wss://ws-testnet.gate.com/v4/ws/spot`         |
| USDT perpetual WebSocket | `wss://ws-testnet.gate.com/v4/ws/futures/usdt` |

Set the REST API host with `baseUrl` and the WebSocket host with `wsUrl`. Prefer explicit hosts for TestNet examples:

- Spot WebSocket TestNet is not wired through `useTestnet: true` in this SDK. The Spot testnet map entry is a stub (`NoTestnetForSpotWebsockets!`), so set `wsUrl` to the Spot TestNet host above.
- For Futures-only REST TestNet, the SDK also accepts `baseUrlKey: 'futuresTestnet'`, which resolves to `https://fx-api-testnet.gateio.ws/api/v4`. The Global TestNet REST host in the table is the host used by the Spot and Futures order examples in this guide.

```javascript
import { RestClient, WebsocketClient } from 'gateio-api';

const rest = new RestClient({
  apiKey: process.env.GATE_TESTNET_API_KEY,
  apiSecret: process.env.GATE_TESTNET_API_SECRET,
  baseUrl: 'https://api-testnet.gateapi.io/api/v4',
});

const spotWs = new WebsocketClient({
  apiKey: process.env.GATE_TESTNET_API_KEY,
  apiSecret: process.env.GATE_TESTNET_API_SECRET,
  wsUrl: 'wss://ws-testnet.gate.com/v4/ws/spot',
});
```

Do not send live credentials to TestNet or TestNet credentials to live hosts. TestNet balances, liquidity, and available products can differ from live trading.

Fund the required Spot or Futures TestNet account with test assets before running an order example.

<!-- siebly:section id="api-hosts" -->

## Connect to Global and regional REST API hosts

Use the API host associated with the Gate account and product you are integrating. Credentials and product availability are not interchangeable across account regions.

| Environment or account   | REST API base URL                       | Official reference                                                   |
| ------------------------ | --------------------------------------- | -------------------------------------------------------------------- |
| Global live              | `https://api.gateio.ws/api/v4`          | [Global Gate API v4](https://www.gate.com/docs/developers/apiv4/en/) |
| Global TestNet           | `https://api-testnet.gateapi.io/api/v4` | [Global Gate API v4](https://www.gate.com/docs/developers/apiv4/en/) |
| Futures live alternative | `https://fx-api.gateio.ws/api/v4`       | [Global Gate API v4](https://www.gate.com/docs/developers/apiv4/en/) |
| Gate US live             | `https://api.gate.us/api/v4`            | [Gate US API v4](https://us.gate.com/en-us/docs/developers/apiv4/)   |
| Gate EU live             | `https://api.gateeu.com/api/v4`         | [Gate EU API v4](https://eu.gate.com/docs/developers/apiv4/en/)      |

Global live is the SDK default. Set `baseUrl` for another supported account host:

```javascript
import { RestClient } from 'gateio-api';

const gateUs = new RestClient({
  apiKey: process.env.GATE_API_KEY,
  apiSecret: process.env.GATE_API_SECRET,
  baseUrl: 'https://api.gate.us/api/v4',
});

const gateEu = new RestClient({
  apiKey: process.env.GATE_API_KEY,
  apiSecret: process.env.GATE_API_SECRET,
  baseUrl: 'https://api.gateeu.com/api/v4',
});
```

Use only the client that matches the account. Regional APIs can expose different products and endpoint sets. Check the regional documentation before calling a method, and use the region's own credentials.

This guide does not assign regional WebSocket URLs. Use a regional WebSocket host only when the official documentation for that account region provides it.

<!-- siebly:section id="proxies" -->

## Use a proxy with the REST API and WebSockets

`gateio-api` accepts standard Node.js agents. Configure the agent in both places when all Gate traffic must use the proxy:

- Pass `httpsAgent` in the second `RestClient` argument and set `proxy: false`.
- Pass the same agent as `wsOptions.agent` to `WebsocketClient` or `WebsocketAPIClient`.

See [Using proxies with Siebly SDKs](https://siebly.io/blog/using-proxy-with-siebly-sdks) for deployment and troubleshooting guidance.

### HTTP and HTTPS proxy

Install the proxy agent:

```bash
npm install https-proxy-agent
```

Set `GATE_PROXY_URL` to an `http://` or `https://` proxy URL. The example does not print the value because it may contain credentials.

```javascript
import { HttpsProxyAgent } from 'https-proxy-agent';
import { RestClient, WebsocketClient, WS_KEY_MAP } from 'gateio-api';

async function main() {
  const proxyUrl = process.env.GATE_PROXY_URL;

  if (!proxyUrl) {
    console.error('Set GATE_PROXY_URL.');
    return;
  }

  const agent = new HttpsProxyAgent(proxyUrl);

  const rest = new RestClient(
    {},
    {
      httpsAgent: agent,
      proxy: false,
    },
  );

  const ws = new WebsocketClient({
    wsOptions: {
      agent,
    },
  });

  ws.on('open', ({ wsKey }) => {
    console.log('WebSocket connected through proxy:', wsKey);
  });

  ws.on('response', (response) => {
    console.log('Subscription response:', response);
  });

  ws.on('update', (update) => {
    console.log('Ticker update through proxy:', update);
    ws.closeAll();
  });

  ws.on('exception', () => {
    console.error('WebSocket proxy connection failed.');
  });

  try {
    const time = await rest.getServerTime();
    console.log('Server time through proxy:', time.server_time);
  } catch {
    console.error('REST API proxy request failed.');
  }

  try {
    ws.subscribe(
      {
        topic: 'spot.tickers',
        payload: ['BTC_USDT'],
      },
      WS_KEY_MAP.spotV4,
    );
  } catch {
    console.error('WebSocket proxy subscription failed.');
  }

  process.once('SIGINT', () => {
    ws.closeAll();
  });
}

main();
```

For an authenticated HTTP or HTTPS proxy, include the username and password in `GATE_PROXY_URL`. Percent-encode reserved characters in each credential component.

### SOCKS5 proxy

Install the SOCKS agent:

```bash
npm install socks-proxy-agent
```

Set `GATE_SOCKS_PROXY_URL` to a `socks5://` URL:

```javascript
import { SocksProxyAgent } from 'socks-proxy-agent';
import { RestClient, WebsocketClient, WS_KEY_MAP } from 'gateio-api';

async function main() {
  const proxyUrl = process.env.GATE_SOCKS_PROXY_URL;

  if (!proxyUrl) {
    console.error('Set GATE_SOCKS_PROXY_URL.');
    return;
  }

  const agent = new SocksProxyAgent(proxyUrl);

  const rest = new RestClient(
    {},
    {
      httpsAgent: agent,
      proxy: false,
    },
  );

  const ws = new WebsocketClient({
    wsOptions: {
      agent,
    },
  });

  ws.on('open', ({ wsKey }) => {
    console.log('WebSocket connected through SOCKS5:', wsKey);
  });

  ws.on('response', (response) => {
    console.log('Subscription response:', response);
  });

  ws.on('update', (update) => {
    console.log('Ticker update through SOCKS5:', update);
    ws.closeAll();
  });

  ws.on('exception', () => {
    console.error('SOCKS5 WebSocket connection failed.');
  });

  try {
    const time = await rest.getServerTime();
    console.log('Server time through SOCKS5:', time.server_time);
  } catch {
    console.error('SOCKS5 REST API request failed.');
  }

  try {
    ws.subscribe(
      {
        topic: 'spot.tickers',
        payload: ['BTC_USDT'],
      },
      WS_KEY_MAP.spotV4,
    );
  } catch {
    console.error('SOCKS5 WebSocket subscription failed.');
  }

  process.once('SIGINT', () => {
    ws.closeAll();
  });
}

main();
```

### Private REST API, stream, and WebSocket API traffic

Use the same agent and credentials for private REST API calls, private subscriptions, and WebSocket API connections:

```javascript
import { HttpsProxyAgent } from 'https-proxy-agent';
import {
  RestClient,
  WebsocketAPIClient,
  WebsocketClient,
  WS_KEY_MAP,
} from 'gateio-api';

async function main() {
  const proxyUrl = process.env.GATE_PROXY_URL;

  if (!proxyUrl) {
    console.error('Set GATE_PROXY_URL.');
    return;
  }

  const agent = new HttpsProxyAgent(proxyUrl);

  const rest = new RestClient(
    {
      apiKey: process.env.GATE_API_KEY,
      apiSecret: process.env.GATE_API_SECRET,
    },
    {
      httpsAgent: agent,
      proxy: false,
    },
  );

  const streams = new WebsocketClient({
    apiKey: process.env.GATE_API_KEY,
    apiSecret: process.env.GATE_API_SECRET,
    wsOptions: {
      agent,
    },
  });

  const wsApi = new WebsocketAPIClient({
    apiKey: process.env.GATE_API_KEY,
    apiSecret: process.env.GATE_API_SECRET,
    wsOptions: {
      agent,
    },
  });

  streams.on('authenticated', ({ wsKey }) => {
    console.log('Private stream authenticated:', wsKey);
  });

  streams.on('update', (update) => {
    console.log('Private update through proxy:', update);
  });

  streams.on('exception', () => {
    console.error('Private stream proxy connection failed.');
  });

  try {
    const balances = await rest.getSpotAccounts();
    console.log('Spot balances through proxy:', balances);
  } catch {
    console.error('Private REST API proxy request failed.');
  }

  try {
    streams.subscribe(
      {
        topic: 'spot.balances',
      },
      WS_KEY_MAP.spotV4,
    );
  } catch {
    console.error('Private stream subscription failed.');
  }

  try {
    await wsApi.getWSClient().connectWSAPI(WS_KEY_MAP.spotV4);
    console.log('WebSocket API authenticated through proxy.');
  } catch {
    console.error('WebSocket API proxy connection failed.');
  }

  process.once('SIGINT', () => {
    streams.closeAll();
    wsApi.getWSClient().closeAll();
  });
}

main();
```

To combine a proxy with TestNet or a regional API, keep `baseUrl` or `wsUrl` in the first client argument and the agent in the same positions shown above.

The proxy's egress IP is the address Gate sees. Add that address to the API key whitelist when whitelisting is enabled. Use a stable proxy endpoint, monitor its latency, and never use a proxy to bypass account or regional restrictions.

A proxy changes the network path, not request signing, account eligibility, or regional product access. Test public REST API and WebSocket traffic first. Treat HTTP 407 responses, TLS failures, and repeated reconnects as network faults. The SDK does not rotate proxy endpoints.

<!-- siebly:section id="production" -->

## Production checklist

### Keep request time accurate

Gate private requests and WebSocket authentication depend on timestamp checks. The gap between request time and server time must not exceed 60 seconds.

Synchronize the host clock with NTP. Use `getServerTime()` for diagnosis, but fix the system clock rather than adding a permanent application offset for a drifting machine.

### Respect rate limits

Rate limits vary by product and endpoint. Read the current [Gate API rate-limit documentation](https://www.gate.com/docs/developers/apiv4/en/#frequency-limit-rule) and monitor rejection labels.

Retry temporary network failures and rate-limit responses with bounded exponential backoff and jitter. Do not blindly retry an order command after an ambiguous timeout. First reconcile by the order's `text` value or query current order state.

### Use custom order IDs

Set a unique `text` value beginning with `t-` on each application-owned order. Store it with your local request record. This gives retries, restarts, stream updates, and REST API recovery a common identifier.

### Apply product metadata

Before placing an order:

- Check that the pair or contract is tradable.
- Apply minimum and maximum amounts.
- Round prices and quantities to the permitted increments.
- Treat Futures `size` as a contract count.
- Read `quanto_multiplier` before translating contract size into underlying exposure.
- Keep one-way, dual-side, and split position modes explicit.

Refresh metadata regularly and when Gate rejects an order for a precision or size rule.

### Confirm final state

A REST API response or WebSocket API response can arrive before later fills, cancellations, or amendments. Record the command response, then confirm final state through private streams or a REST API query.

After a reconnect, restore the affected [exchange state](https://siebly.io/reference/exchange-state) before resuming state-dependent actions.

### Scope credentials and network access

- Use separate keys for live and TestNet.
- Grant only the product permissions the process needs.
- Use read-only keys for monitoring services.
- Do not grant withdrawal permission.
- Add IP whitelists when egress addresses are stable.
- Keep secrets in a server-side secret manager or deployment environment.
- Monitor proxy availability and egress IP changes.

### Shut down connections

Call `closeAll()` on each WebSocket client when the process is ending. An unsubscribe request is unnecessary when the connection is about to close.

## FAQ

### Does `gateio-api` work with plain JavaScript?

Yes. Every example in this guide is plain JavaScript. The examples use ESM imports, so save them as `.mjs` files or set `"type": "module"` in `package.json`. The package also includes a CommonJS build and TypeScript declarations.

### Which client should I use?

Use `RestClient` for public and private REST API calls, `WebsocketClient` for ongoing subscriptions, and `WebsocketAPIClient` for awaitable Spot and Futures commands over WebSocket.

### Do public Gate API calls need credentials?

No. Public market data works without an API key. Account data, private streams, and order commands require credentials with the relevant product permission.

### Why did a REST API call return an object when another returned an array?

Gate response bodies are endpoint-specific. The SDK returns the endpoint body directly. Check the [endpoint map](./endpointFunctionList.md) before reading the result.

### Why does `getSpotTicker()` return an array for one pair?

That is Gate's endpoint response shape. Read the first entry after checking that the array is not empty.

### How are Spot candles structured?

Spot candles are tuple arrays containing timestamp, quote volume, close, high, low, open, base volume, and a closed-window flag in that order.

### Why does Gate use `BTC_USDT`?

Gate uses underscore-separated currency pairs and contract names. Pass the exact identifier returned by the relevant market or contract metadata endpoint.

### What do `account` and `settle` change?

`account` selects the account used by a Spot order or query. `settle` selects the settlement currency and REST API path for Futures or Delivery requests.

### What is the `text` order field?

`text` is Gate's custom order ID field. Use a unique value beginning with `t-` to reconcile requests, stream updates, and order queries.

### Why am I not receiving WebSocket updates?

Check the topic payload, `wsKey`, API host, credentials, and permissions. Then inspect `response`, `authenticated`, and `exception` events. A successful subscription response confirms registration, but an update only arrives when the subscribed data changes.

### Which `WS_KEY_MAP` value should I use?

Choose the key for the exact product connection. For example, Spot uses `spotV4` and USDT perpetual Futures uses `perpFuturesUSDTV4`.

### Why do private Futures topics use my Gate user ID?

It is part of the payload required by those channels. Retrieve it with `getAccountDetail()` instead of hardcoding it.

### What is the difference between a stream and the WebSocket API?

Streams push subscribed market or account updates. The WebSocket API sends a command and resolves a promise with Gate's matching response.

### Does a successful WebSocket API response mean the order filled?

No. It confirms the command result. Confirm later order and fill state through private streams or a REST API query.

### Why was a post-only order rejected or immediately finished?

The best bid or ask can move between the order-book request and order placement. Gate will not let a post-only order take liquidity. Read the returned status and `finish_as`, then decide whether to refresh the book and submit a new order with a new `text`.

### Why does a Futures order size look too small?

Futures `size` is the number of contracts. Use `quanto_multiplier` to find the underlying amount represented by one contract.

### Can live credentials be used in TestNet?

No. TestNet and live trading use separate API keys and balances. Use the current TestNet `baseUrl` or `wsUrl` with TestNet credentials.

### Can I use Gate US or Gate EU with the SDK?

Yes, for endpoints available to that account region. Set the documented regional `baseUrl`, use credentials from the same region, and check its official API documentation for product coverage.

### Can REST API and WebSocket traffic use the same proxy?

Yes. Create one compatible agent, pass it as `httpsAgent` to `RestClient`, and pass it as `wsOptions.agent` to the WebSocket clients.

### Does a proxy change signing or account eligibility?

No. The SDK signs the same requests through the proxy. The Gate account, API host, product permissions, and regional availability still apply.

### What causes `INVALID_SIGNATURE` or `REQUEST_EXPIRED`?

Common causes are a drifting system clock, the wrong API secret, credentials from another environment, or an API request reaching the wrong host. Verify the clock, credential source, and API host without logging the secret.

## Next steps

- Browse the [Gate SDK examples](https://siebly.io/examples/Gate).
- Find methods in the [complete endpoint map](./endpointFunctionList.md).
- Review the [Gate SDK page](https://siebly.io/sdk/gate/javascript).
- Install or update [`gateio-api` from npm](https://www.npmjs.com/package/gateio-api).
- Browse the [`gateio-api` source repository](https://github.com/sieblyio/gateio-api).
- Read the official [Gate REST API documentation](https://www.gate.com/docs/developers/apiv4/en/).
- Read the official [Gate Spot WebSocket documentation](https://www.gate.com/docs/developers/apiv4/ws/).
- Read the official [Gate Futures WebSocket documentation](https://www.gate.com/docs/developers/futures/ws/).
- Review [Exchange State](https://siebly.io/reference/exchange-state) before building private state management.
- Use [Runtime Workflows](https://siebly.io/reference/runtime-workflows) when designing startup, reconnect, and reconciliation behavior.
- Open the [Siebly glossary](https://siebly.io/reference/glossary) for order, stream, and recovery terms.
- Report SDK issues in the [`gateio-api` GitHub repository](https://github.com/sieblyio/gateio-api/issues).
