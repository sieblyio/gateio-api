export type StockCategory =
  | 'CS'
  | 'ETF'
  | 'ADRC'
  | 'ADR'
  | 'ETV'
  | 'PFD'
  | 'ETS'
  | 'ETN'
  | 'FUND';

export type StockAssetType = 'STOCK' | 'ETF';

/** v4.106.159: `closed` and `gt_lp` removed. */
export type StockTradeStatus = 'pre_market' | 'open' | 'post_market';

/**
 * v4.106.148.
 * 0 disabled, 1 buy only, 2 sell only, 4 buy and sell,
 * 5 manual suspension, 6 strategy exception, 7 stock halt, 8 circuit breaker halt.
 */
export type StockTradeMode = 0 | 1 | 2 | 4 | 5 | 6 | 7 | 8;

/**
 * `GET /stock/orders` and `GET /stock/orders/history`. JSON stays an integer.
 * 0 unknown, 1 new, 2 partial, 3 filled, 4 canceled, 5 rejected,
 * 6 cancel rejected, 7 update succeeded, 8 update rejected.
 */
export type StockOrderStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * `GET /stock/orders/history`. JSON stays an integer.
 * 0 unknown, 1 no quote, 2 no match, 3 trigger price exceeded,
 * 4 order value exceeds limit, 5 unknown rejection, 6 unknown cancellation,
 * 7 canceled by user, 8 time in force expired, 9 session unsupported,
 * 13 canceled due to corporate action.
 */
export type StockOrderFinishAs = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 13;

export interface StockApiResp<T> {
  timestamp?: number;
  data?: T;
  code?: number;
  message?: string;
  label?: string;
}

export interface StockListData<T> {
  list?: T[];
  total?: number;
  total_page?: number;
}

export interface StockUserAssets {
  equity?: string;
  balance?: string;
  available?: string;
  /** Non-negative loan amount */
  loan_amount?: string;
  buy_power?: string;
  leverage?: string;
  leave_liquidity?: string;
  leave_liquidity_rate?: string;
  aee?: string;
  options_margin?: string;
  margin_enabled?: boolean;
  /** Annual margin financing interest rate; empty when no valid rate is available */
  long_borrowing_rate?: string;
  position_market_value?: string;
  position_pnl?: string;
  today_pnl?: string;
  user_exists?: boolean;
  option_position_market_value?: string;
  option_position_pnl?: string;
  option_today_pnl?: string;
}

export interface StockBalanceRecordItem {
  id?: number;
  user_id?: number;
  change?: string;
  /** Cash balance snapshot after the change */
  balance?: string;
  /** Stock quantity change; may be empty for other records */
  stock_change?: string;
  type?: string;
  business?: string;
  business_id?: number;
  symbol?: string;
  /** Raw business details as a JSON string; returned only when include_detail=true */
  detail?: string;
  version?: number;
  /** Business event time (Unix timestamp in seconds) */
  time_create?: number;
  /** Record creation time (Unix timestamp in seconds) */
  create_time?: number;
}

export interface StockSymbolDescI18n {
  lang?: string;
  value?: string;
}

export interface StockSymbolItem {
  symbol?: string;
  exchange?: string;
  exchange_desc?: string;
  quote_currency?: string;
  quote_currency_precision?: number;
  fx_rate?: string;
  symbol_desc?: string;
  category?: StockCategory | string;
  asset_type?: StockAssetType;
  trade_status?: StockTradeStatus;
  trade_mode?: StockTradeMode;
  order_fill_timing?: number;
  icon_link?: string;
  quote_currency_symbol?: string;
  price_precision?: number;
  volume_precision?: number;
  is_ipo?: boolean;
  ipo_price?: string;
  sell_price_protection?: string;
  buy_price_protection?: string;
  symbol_descs?: StockSymbolDescI18n[];
  timestamp?: number;
  /** 0 neither, 1 margin financing, 2 securities borrowing, 3 both */
  margin_mode?: 0 | 1 | 2 | 3;
  /** Initial margin ratio for long positions */
  long_im?: string;
  /** Maintenance margin ratio for long positions */
  long_mm?: string;
  /** Initial margin ratio for short positions */
  short_im?: string;
  /** Maintenance margin ratio for short positions */
  short_mm?: string;
  /** Annual margin financing interest rate; empty when no valid rate is available */
  long_borrowing_rate?: string;
  /** Annual securities borrowing interest rate; empty when no valid rate is available */
  short_borrowing_rate?: string;
}

export interface StockSymbolDetailItem {
  symbol?: string;
  exchange?: string;
  exchange_desc?: string;
  quote_currency?: string;
  quote_currency_precision?: number;
  fx_rate?: string;
  symbol_desc?: string;
  category?: StockCategory | string;
  asset_type?: StockAssetType;
  settlement_currency?: string;
  max_order_volume?: string;
  step_order_volume?: string;
  min_order_volume?: string;
  price_precision?: number;
  volume_precision?: number;
  is_ipo?: boolean;
  ipo_price?: string;
  price_protection?: string;
  sell_price_protection?: string;
  buy_price_protection?: string;
  slippage_rate?: string;
  commission_rate?: string;
  trade_status?: StockTradeStatus;
  trade_mode?: StockTradeMode;
  order_fill_timing?: number;
  symbol_descs?: StockSymbolDescI18n[];
  /** 0 neither, 1 margin financing, 2 securities borrowing, 3 both */
  margin_mode?: 0 | 1 | 2 | 3;
  /** Initial margin ratio for long positions */
  long_im?: string;
  /** Maintenance margin ratio for long positions */
  long_mm?: string;
  /** Initial margin ratio for short positions */
  short_im?: string;
  /** Maintenance margin ratio for short positions */
  short_mm?: string;
  /** Annual margin financing interest rate; empty when no valid rate is available */
  long_borrowing_rate?: string;
  /** Annual securities borrowing interest rate; empty when no valid rate is available */
  short_borrowing_rate?: string;
  [key: string]: unknown;
}

export interface StockOrderBookLevel {
  p?: string;
  user_order?: boolean;
  [key: string]: unknown;
}

export interface StockOrderBook {
  symbol?: string;
  bids?: StockOrderBookLevel[];
  asks?: StockOrderBookLevel[];
  timestamp?: number;
}

export interface StockOrderItem {
  order_id?: string;
  symbol?: string;
  exchange?: string;
  quote_currency?: string;
  fx_rate?: string;
  symbol_desc?: string;
  trade_status?: StockTradeStatus;
  trade_mode?: StockTradeMode;
  price_type?: string;
  side?: number;
  status?: StockOrderStatus;
  volume?: string;
  fill_volume?: string;
  price?: string;
  time_setup?: number;
  time_update?: number;
  max_order_volume?: string;
  step_order_volume?: string;
  min_order_volume?: string;
  price_precision?: number;
  price_protection?: string;
  sell_price_protection?: string;
  buy_price_protection?: string;
  commission_rate?: string;
  slippage_rate?: string;
  [key: string]: unknown;
}

export interface StockCreateOrderResult {
  id?: string;
}

export interface StockOrderHistoryItem {
  order_id?: string;
  symbol?: string;
  exchange?: string;
  quote_currency?: string;
  fx_rate?: string;
  symbol_desc?: string;
  price_type?: string;
  status?: StockOrderStatus;
  status_desc?: string;
  status_detail?: { title?: string; message?: string } | null;
  finish_as?: StockOrderFinishAs;
  side?: number;
  time_in_force?: string;
  volume?: string;
  fill_volume?: string;
  price?: string;
  avg_fill_price?: string | null;
  commission?: string;
  time_setup?: number;
  time_done?: number;
  [key: string]: unknown;
}

export interface StockOrderDealItem {
  id?: number;
  deal_id?: number;
  order_id?: number;
  client_order_id?: string;
  user_id?: number;
  symbol?: string;
  exchange?: 'us' | 'hk' | 'kr' | 'jp';
  /** 1 sell, 2 buy */
  side?: 1 | 2;
  role?: 'maker' | 'taker';
  /** Trade price in the instrument trading currency */
  price?: string;
  quantity?: string;
  position_qty?: string;
  avg_entry_price?: string;
  /** Trade value in the instrument trading currency */
  value?: string;
  fx_rate?: string;
  /** Fee in the instrument trading currency */
  fee?: string;
}

export interface StockUpdateOrderResult {
  order_id?: number;
}

export interface StockPositionItem {
  symbol?: string;
  exchange?: string;
  quote_currency?: string;
  quote_currency_precision?: number;
  fx_rate?: string;
  trade_status?: StockTradeStatus;
  symbol_desc?: string;
  position_pnl?: string;
  today_pnl?: string;
  pnl_rate?: string;
  today_sell_amount?: string;
  today_buy_amount?: string;
  today_sell_volume?: string;
  today_buy_volume?: string;
  yesterday_volume?: string;
  volume?: string;
  available?: string;
  transfer_out_pending_qty?: string;
  avg_cost_price?: string;
  diluted_cost_price?: string;
  last_price?: string;
  extended_last_price?: string | null;
  max_order_volume?: string;
  step_order_volume?: string;
  min_order_volume?: string;
  price_precision?: number;
  price_protection?: string;
  [key: string]: unknown;
}

export interface StockClosePositionResult {
  order_id?: number;
}

export interface StockTransactionItem {
  asset?: string;
  symbol?: string;
  symbol_display?: string;
  type?: string;
  type_desc?: string;
  change?: string;
  balance?: string;
  ref_id?: string;
  time?: number;
  unit_text?: string;
  detail?: object;
}

export interface StockExchangeItem {
  exchange?: string;
  exchange_desc?: string;
  icon_link?: string;
  support_transfer?: boolean;
}

export interface StockFeeRateItem {
  vip_level?: number;
  maker_fee?: string;
  taker_fee?: string;
}
