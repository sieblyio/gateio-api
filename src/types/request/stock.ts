/** Stock / TradFi Spot API request types */

export interface GetStockUserAssetsReq {
  pnl_calc_type?: number;
  pnl_calc_price?: number;
}

export interface GetStockSymbolsReq {
  symbols?: string;
  exchange?: string; // us | hk | jp
  with_desc_i18n?: boolean;
  page?: number;
  page_size?: number;
}

export interface GetStockSymbolDetailReq {
  symbols?: string;
  exchange?: string; // us | hk | jp
  page?: number;
  page_size?: number;
}

export interface GetStockOrdersReq {
  symbol?: string;
}

export interface CreateStockOrderReq {
  volume: string;
  symbol: string;
  side: 1 | 2;
  price_type: 'market' | 'limit';
  /** Limit: all only; market: regular only */
  trading_session: 'all' | 'regular';
  time_in_force: 'day';
  price?: string;
  client_order_id?: string;
}

export interface GetStockOrderHistoryReq {
  symbol?: string;
  order_ids?: string;
  begin_time?: number;
  end_time?: number;
  side?: 1 | 2;
  page?: number;
  page_size?: number;
}

export interface UpdateStockOrderReq {
  volume: string;
  price: string;
}

export interface GetStockPositionsReq {
  pnl_calc_type?: number;
  pnl_calc_price?: number;
  symbol?: string;
  exchange?: string; // us | hk | jp
}

export interface CloseStockPositionReq {
  symbol: string;
  close_type: 1 | 2;
  close_volume?: string;
}

export interface GetStockTransactionsReq {
  begin_time?: number;
  end_time?: number;
  ref_id?: string;
  type?: string;
  page?: number;
  page_size?: number;
}

export interface CreateStockTransactionReq {
  asset: string;
  change: string;
  type: 'deposit' | 'withdraw';
  ref_id: string;
}
