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
  position_market_value?: string;
  position_pnl?: string;
  today_pnl?: string;
  user_exists?: boolean;
  option_position_market_value?: string;
  option_position_pnl?: string;
  option_today_pnl?: string;
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
  trade_status?: string;
  trade_mode?: number;
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
  trade_status?: string;
  trade_mode?: number;
  order_fill_timing?: number;
  symbol_descs?: StockSymbolDescI18n[];
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
  trade_status?: string;
  trade_mode?: number;
  price_type?: string;
  side?: number;
  status?: number;
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
  status?: number;
  status_desc?: string;
  status_detail?: { title?: string; message?: string } | null;
  finish_as?: number;
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

export interface StockUpdateOrderResult {
  order_id?: number;
}

export interface StockPositionItem {
  symbol?: string;
  exchange?: string;
  quote_currency?: string;
  quote_currency_precision?: number;
  fx_rate?: string;
  trade_status?: string;
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
