/** GET /wallet/sub_account_balances */
export interface GetSubAccountBalancesReq {
  sub_uid?: string;
  page?: number;
  limit?: number;
}

export interface GetWithdrawalDepositRecordsReq {
  currency?: string;
  from?: number;
  to?: number;
  limit?: number;
  offset?: number;
}

/** GET /wallet/withdrawals. Deposit records do not take these filters. */
export interface GetWithdrawalRecordsReq
  extends GetWithdrawalDepositRecordsReq {
  /**
   * Withdrawal record id. Starts with `w`, for example `w1879219868`.
   * When set, only that record is returned and the time filter is disabled.
   */
  withdraw_id?: string;

  /**
   * User-defined withdrawal order number.
   * When set, that order's record is returned.
   */
  withdraw_order_id?: string;
}

export interface SubmitTransferReq {
  currency: string;
  from: 'spot' | 'margin' | 'futures' | 'delivery' | 'cross_margin' | 'options';
  to: 'spot' | 'margin' | 'futures' | 'delivery' | 'cross_margin' | 'options';
  amount: string;
  currency_pair?: string;
  settle?: string;
  client_order_id?: string;
}

export interface GetMainSubTransfersReq {
  sub_uid?: string;
  from?: number;
  to?: number;
  limit?: number;
  offset?: number;
}

export interface GetSavedAddressReq {
  currency?: string; // v4.106.94: Optional filter by currency
  chain?: string;
  limit?: string;
  page?: number;
  verified?: string; // v4.106.94: 1 verification-free, 0 normal, empty for no filter
}

export interface GetSmallBalanceHistoryReq {
  currency?: string;
  page?: number;
  limit?: number;
}

export interface ListPushOrdersReq {
  id?: number;
  from?: number;
  to?: number;
  limit?: number;
  offset?: number;
  transaction_type?: string;
}

export interface SubmitSubToSubTransferReq {
  currency: string;
  sub_account_from: string;
  sub_account_from_type: 'spot' | 'futures' | 'delivery' | 'cross_margin';
  sub_account_to: string;
  sub_account_to_type: 'spot' | 'futures' | 'delivery' | 'cross_margin';
  amount: string;
  sub_account_type?: string;
}

export interface SubmitMainSubTransferReq {
  currency: string;
  sub_account: string;
  direction: 'to' | 'from';
  amount: string;
  client_order_id?: string;
  sub_account_type?: 'spot' | 'futures' | 'cross_margin' | 'delivery';
}

/** GET /wallet/transfers */
export interface GetTransferReq {
  tx_id: string;
}
