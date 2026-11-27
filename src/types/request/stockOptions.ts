/** Stock Options API request types */

export interface GetStockOptionUnderlyingsReq {
  /** Comma-separated underlying symbols; omit to query all */
  underlyings?: string;
}

export interface GetStockOptionContractsReq {
  underlying: string;
  exchange?: 'us';
  /** Expiration date in YYYY-MM-DD format */
  expiration_date?: string;
  option_type?: 'call' | 'put';
  /** Page number, defaults to 1 */
  page?: number;
  /** Contracts per page, defaults to 1000, maximum 1000 */
  page_size?: number;
}

export interface GetStockOptionExpirationsReq {
  underlying: string;
}

export interface GetStockOptionChainReq {
  underlying: string;
  /** Expiration date in YYYY-MM-DD format */
  expiration_date: string;
  option_type?: 'call' | 'put' | 'all';
}

export interface GetStockOptionPositionsReq {
  underlying?: string;
  symbol?: string;
  /** Valuation price for market value and PnL; defaults to latest */
  price_type?: 'latest' | 'mark';
}

export interface CloseStockOptionPositionReq {
  symbol: string;
  /** Positive decimal string, no greater than the available position */
  quantity: string;
  /** Defaults to market; closing orders always use day */
  order_type?: 'market' | 'limit';
  /** Required for limit orders; ignored for market orders */
  price?: string;
  client_order_id?: string;
}

export interface GetStockOptionOrdersReq {
  underlying?: string;
  symbol?: string;
  /** 1 sell, 2 buy; omit for both */
  side?: 1 | 2;
}

export interface CreateStockOptionOrderReq {
  symbol: string;
  /** 1 sell, 2 buy */
  side: 1 | 2;
  order_type: 'market' | 'limit';
  /** Limit orders support day and gtc; market orders support day only */
  time_in_force: 'day' | 'gtc';
  /** Positive decimal string; required for limit orders, ignored for market orders */
  price?: string;
  /** Positive decimal string within the contract's order quantity limits */
  quantity: string;
  /** Up to 30 UTF-8 bytes; generated when omitted or whitespace-only */
  client_order_id?: string;
}

export interface CancelAllStockOptionOrdersReq {
  underlying?: string;
  symbol?: string;
  /** 1 sell, 2 buy; omit for both */
  side?: 1 | 2;
}

export interface UpdateStockOptionOrderReq {
  /** New positive limit price as a decimal string */
  price: string;
  /** New total quantity as a decimal string, at least filled_quantity */
  quantity: string;
}

export interface GetStockOptionOrderHistoryReq {
  underlying?: string;
  symbol?: string;
  /** Order creation time in seconds; must not exceed end_time */
  begin_time?: number;
  /** Order creation time in seconds; must not precede begin_time */
  end_time?: number;
  /** 1 sell, 2 buy; omit for both */
  side?: 1 | 2;
  /** Page number, defaults to 1 */
  page?: number;
  /** Records per page, defaults to 100, maximum 100 */
  page_size?: number;
}
