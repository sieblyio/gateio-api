/** Stock Options API response types */

export interface StockOptionApiResp<T> {
  /** Business error label; empty on success */
  label: string;
  message?: string;
  data: T;
  /** Server timestamp in milliseconds */
  timestamp: number;
}

export interface StockOptionListData<T> {
  list?: T[];
}

export interface StockOptionPaginatedListData<T> {
  total?: number;
  total_page?: number;
  list?: T[];
}

export interface StockOptionFeeRate {
  sec?: string;
  min_sec?: string;
  /** Empty when there is no maximum SEC fee */
  max_sec?: string;
  taf?: string;
  min_taf?: string;
  max_taf?: string;
  occ?: string;
  orf?: string;
  cat?: string;
}

export interface StockOptionUnderlyingDescI18n {
  lang?: string;
  value?: string;
}

export interface StockOptionUnderlyingItem {
  underlying?: string;
  description?: string;
  descs?: StockOptionUnderlyingDescI18n[];
  icon_link?: string;
  price_precision?: number;
  min_order_volume?: string;
  max_order_volume?: string;
  step_order_volume?: string;
}

export interface StockOptionContractItem {
  symbol?: string;
  symbol_display?: string;
  underlying?: string;
  exchange?: string;
  expiration_date?: string;
  settlement_date?: string;
  strike_price?: string;
  option_type?: 'call' | 'put';
  multiplier?: string;
  open_interest?: string;
  quote_currency?: string;
  settlement_type?: string;
  trade_status?: 'open' | 'closed';
  /** 0 disabled, 4 buying and selling allowed */
  trade_mode?: 0 | 4;
  price_precision?: number;
  min_order_volume?: string;
  max_order_volume?: string;
  step_order_volume?: string;
}

export interface StockOptionExpirationItem {
  /** Expiration date in YYYY-MM-DD format */
  expiration_date?: string;
  expiration_date_ts?: number;
}

export interface StockOptionExpirations {
  underlying?: string;
  list?: StockOptionExpirationItem[];
}

export interface StockOptionChainItem {
  symbol?: string;
  symbol_display?: string;
  strike_price?: string;
  option_type?: 'call' | 'put';
  bid?: string;
  ask?: string;
  mark_price?: string;
  mark_iv?: string;
  last?: string;
  display_price?: string;
  breakeven_price?: string;
  to_breakeven_pct?: string;
  today_change_pct?: string;
  open_interest?: string;
  position?: string;
  delta?: string;
  gamma?: string;
  theta?: string;
  vega?: string;
  rho?: string;
  trade_status?: 'open' | 'closed';
  /** 0 disabled, 4 buying and selling allowed */
  trade_mode?: 0 | 4;
}

export interface StockOptionChain {
  underlying?: string;
  expiration_date?: string;
  expiration_date_ts?: number;
  index_price?: string;
  list?: StockOptionChainItem[];
}

export interface StockOptionOrderBookLevel {
  price?: string;
}

export interface StockOptionOrderBook {
  symbol?: string;
  symbol_display?: string;
  /** At most one price level, without order quantities */
  bids?: StockOptionOrderBookLevel[];
  /** At most one price level, without order quantities */
  asks?: StockOptionOrderBookLevel[];
}

export interface StockOptionPositionItem {
  symbol?: string;
  symbol_display?: string;
  underlying?: string;
  side?: 'long' | 'short';
  /** Position opening time in seconds; 0 when unavailable */
  open_time?: number;
  quantity?: string;
  available?: string;
  frozen?: string;
  avg_entry_price?: string;
  last_price?: string;
  mark_price?: string;
  previous_close?: string;
  market_value?: string;
  unrealized_pnl?: string;
  today_pnl?: string;
  today_buy_qty?: string;
  today_sell_qty?: string;
  today_buy_value?: string;
  today_sell_value?: string;
  trade_status?: 'open' | 'closed';
  /** 0 disabled, 4 buying and selling allowed */
  trade_mode?: 0 | 4;
  multiplier?: string;
  price_precision?: number;
  min_order_volume?: string;
  max_order_volume?: string;
  step_order_volume?: string;
}

export interface StockOptionPositions {
  /** Daily PnL including current positions and contracts fully closed today */
  today_pnl?: string;
  list?: StockOptionPositionItem[];
}

export interface StockOptionClosePositionResult {
  order_id?: string;
}

export interface StockOptionOrderItem {
  order_id?: string;
  symbol?: string;
  symbol_display?: string;
  underlying?: string;
  /** 1 sell, 2 buy */
  side?: 1 | 2;
  order_type?: 'market' | 'limit';
  /** 1 new, 2 partially filled */
  status?: 1 | 2;
  status_desc?: string;
  time_in_force?: 'day' | 'gtc';
  quantity?: string;
  filled_quantity?: string;
  price?: string;
  time_setup?: number;
}

export interface StockOptionCreateOrderResult {
  id?: string;
}

export interface StockOptionCancelAllOrdersResult {
  success?: boolean;
}

export interface StockOptionOrderDetail {
  order_id?: string;
  symbol?: string;
  symbol_display?: string;
  underlying?: string;
  /** 1 sell, 2 buy */
  side?: 1 | 2;
  order_type?: 'market' | 'limit';
  /** 1 new, 2 partially filled, 3 filled, 4 cancelled, 5 rejected */
  status?: number;
  status_desc?: string;
  time_in_force?: 'day' | 'gtc';
  quantity?: string;
  filled_quantity?: string;
  price?: string;
  time_setup?: number;
  avg_fill_price?: string;
  fee?: string;
  time_done?: number;
}

export interface StockOptionUpdateOrderResult {
  id?: string;
}

export interface StockOptionCancelOrderResult {
  id?: string;
}

export interface StockOptionOrderHistoryItem {
  order_id?: string;
  symbol?: string;
  symbol_display?: string;
  underlying?: string;
  /** 1 sell, 2 buy */
  side?: 1 | 2;
  order_type?: 'market' | 'limit';
  /** 3 filled, 4 cancelled, 5 rejected */
  status?: 3 | 4 | 5;
  status_desc?: string;
  time_in_force?: 'day' | 'gtc';
  quantity?: string;
  filled_quantity?: string;
  price?: string;
  time_setup?: number;
  avg_fill_price?: string;
  fee?: string;
  time_done?: number;
}
