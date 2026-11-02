
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/gateio-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/gateio-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/gateio-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/sieblyio/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [RestClient](#RestClientts)
- [WebsocketAPIClient](#WebsocketAPIClientts)


If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.


# RestClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [RestClient.ts](/src/RestClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getSystemMaintenanceStatus()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L719) |  | GET | `/v1/public/system_info` |
| [listAnnouncementArticles()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L723) |  | POST | `/ann/list_article` |
| [submitWithdrawal()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L745) | :closed_lock_with_key:  | POST | `/withdrawals` |
| [submitSpotMainAccountTransfer()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L759) | :closed_lock_with_key:  | POST | `/withdrawals/push` |
| [cancelWithdrawal()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L775) | :closed_lock_with_key:  | DELETE | `/withdrawals/{withdrawal_id}` |
| [getCurrencyChains()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L792) |  | GET | `/wallet/currency_chains` |
| [createDepositAddress()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L802) | :closed_lock_with_key:  | GET | `/wallet/deposit_address` |
| [getWithdrawalRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L818) | :closed_lock_with_key:  | GET | `/wallet/withdrawals` |
| [getDepositRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L832) | :closed_lock_with_key:  | GET | `/wallet/deposits` |
| [submitTransfer()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L851) | :closed_lock_with_key:  | POST | `/wallet/transfers` |
| [getTransfer()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L863) | :closed_lock_with_key:  | GET | `/wallet/transfers` |
| [submitMainSubTransfer()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L878) | :closed_lock_with_key:  | POST | `/wallet/sub_account_transfers` |
| [getMainSubTransfers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L892) | :closed_lock_with_key:  | GET | `/wallet/sub_account_transfers` |
| [submitSubToSubTransfer()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L906) | :closed_lock_with_key:  | POST | `/wallet/sub_account_to_sub_account` |
| [getTransferStatus()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L921) | :closed_lock_with_key:  | GET | `/wallet/order_status` |
| [getWithdrawalStatus()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L937) | :closed_lock_with_key:  | GET | `/wallet/withdraw_status` |
| [getSubBalance()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L949) | :closed_lock_with_key:  | GET | `/wallet/sub_account_balances` |
| [getSubMarginBalances()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L961) | :closed_lock_with_key:  | GET | `/wallet/sub_account_margin_balances` |
| [getSubFuturesBalances()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L973) | :closed_lock_with_key:  | GET | `/wallet/sub_account_futures_balances` |
| [getSubCrossMarginBalances()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L986) | :closed_lock_with_key:  | GET | `/wallet/sub_account_cross_margin_balances` |
| [getSavedAddresses()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L998) | :closed_lock_with_key:  | GET | `/wallet/saved_address` |
| [getTradingFees()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1008) | :closed_lock_with_key:  | GET | `/wallet/fee` |
| [getBalances()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1029) | :closed_lock_with_key:  | GET | `/wallet/total_balance` |
| [getSmallBalances()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1038) | :closed_lock_with_key:  | GET | `/wallet/small_balance` |
| [convertSmallBalance()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1048) | :closed_lock_with_key:  | POST | `/wallet/small_balance` |
| [getSmallBalanceHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1061) | :closed_lock_with_key:  | GET | `/wallet/small_balance_history` |
| [getPushOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1073) | :closed_lock_with_key:  | GET | `/wallet/push` |
| [getLowCapExchangeList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1082) | :closed_lock_with_key:  | GET | `/wallet/getLowCapExchangeList` |
| [createSubAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1097) | :closed_lock_with_key:  | POST | `/sub_accounts` |
| [getSubAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1108) | :closed_lock_with_key:  | GET | `/sub_accounts` |
| [getSubAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1118) | :closed_lock_with_key:  | GET | `/sub_accounts/{user_id}` |
| [createSubAccountApiKey()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1128) | :closed_lock_with_key:  | POST | `/sub_accounts/{user_id}/keys` |
| [getSubAccountApiKeys()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1141) | :closed_lock_with_key:  | GET | `/sub_accounts/{user_id}/keys` |
| [updateSubAccountApiKey()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1155) | :closed_lock_with_key:  | PUT | `/sub_accounts/{user_id}/keys/{key}` |
| [deleteSubAccountApiKey()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1166) | :closed_lock_with_key:  | DELETE | `/sub_accounts/{user_id}/keys/{key}` |
| [getSubAccountApiKey()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1181) | :closed_lock_with_key:  | GET | `/sub_accounts/{user_id}/keys/{key}` |
| [lockSubAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1196) | :closed_lock_with_key:  | POST | `/sub_accounts/{user_id}/lock` |
| [unlockSubAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1206) | :closed_lock_with_key:  | POST | `/sub_accounts/{user_id}/unlock` |
| [getSubAccountMode()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1220) | :closed_lock_with_key:  | GET | `/sub_accounts/unified_mode` |
| [getUnifiedAccountInfo()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1239) | :closed_lock_with_key:  | GET | `/unified/accounts` |
| [getUnifiedMaxBorrow()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1255) | :closed_lock_with_key:  | GET | `/unified/borrowable` |
| [getUnifiedMaxTransferable()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1271) | :closed_lock_with_key:  | GET | `/unified/transferable` |
| [getUnifiedMaxTransferables()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1286) | :closed_lock_with_key:  | GET | `/unified/transferables` |
| [getUnifiedBatchMaxBorrowable()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1295) | :closed_lock_with_key:  | GET | `/unified/batch_borrowable` |
| [submitUnifiedBorrowOrRepay()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1313) | :closed_lock_with_key:  | POST | `/unified/loans` |
| [getUnifiedLoans()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1325) | :closed_lock_with_key:  | GET | `/unified/loans` |
| [getUnifiedLoanRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1335) | :closed_lock_with_key:  | GET | `/unified/loan_records` |
| [getUnifiedInterestRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1347) | :closed_lock_with_key:  | GET | `/unified/interest_records` |
| [getUnifiedRiskUnitDetails()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1358) | :closed_lock_with_key:  | GET | `/unified/risk_units` |
| [setUnifiedAccountMode()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1370) | :closed_lock_with_key:  | PUT | `/unified/unified_mode` |
| [getUnifiedAccountMode()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1379) | :closed_lock_with_key:  | GET | `/unified/unified_mode` |
| [getUnifiedEstimateRate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1391) | :closed_lock_with_key:  | GET | `/unified/estimate_rate` |
| [getUnifiedCurrencyDiscountTiers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1402) |  | GET | `/unified/currency_discount_tiers` |
| [getLoanMarginTiers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1414) |  | GET | `/unified/loan_margin_tiers` |
| [portfolioMarginCalculate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1431) |  | POST | `/unified/portfolio_calculator` |
| [setUserLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1445) | :closed_lock_with_key:  | POST | `/unified/leverage/user_setting` |
| [getUserCurrencyLeverageConfig()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1459) | :closed_lock_with_key:  | GET | `/unified/leverage/user_currency_config` |
| [getUserCurrencyLeverageSettings()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1473) | :closed_lock_with_key:  | GET | `/unified/leverage/user_currency_setting` |
| [updateUserCurrencyLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1488) | :closed_lock_with_key:  | POST | `/unified/leverage/user_currency_setting` |
| [getUnifiedLoanCurrencies()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1503) | :closed_lock_with_key:  | GET | `/unified/currencies` |
| [getHistoricalLendingRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1515) | :closed_lock_with_key:  | GET | `/unified/history_loan_rate` |
| [submitUnifiedLoanRepay()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1521) | :closed_lock_with_key:  | POST | `/unified/loans/repay` |
| [getEstimatedQuickRepayment()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1528) | :closed_lock_with_key:  | GET | `/unified/estimated_quick_repayment` |
| [createQuickRepayment()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1535) | :closed_lock_with_key:  | POST | `/unified/quick_repayment` |
| [setUnifiedDeltaNeutral()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1546) | :closed_lock_with_key:  | POST | `/unified/delta_neutral` |
| [getUnifiedDeltaNeutral()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1555) | :closed_lock_with_key:  | GET | `/unified/delta_neutral` |
| [getSpotCurrencies()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1575) |  | GET | `/spot/currencies` |
| [getSpotCurrency()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1585) |  | GET | `/spot/currencies/{currency}` |
| [getSpotCurrencyPairs()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1594) |  | GET | `/spot/currency_pairs` |
| [getSpotCurrencyPair()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1604) |  | GET | `/spot/currency_pairs/{currency_pair}` |
| [getSpotTicker()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1618) |  | GET | `/spot/tickers` |
| [getSpotOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1633) |  | GET | `/spot/order_book` |
| [getSpotRpiOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1645) |  | GET | `/spot/rpi_order_book` |
| [getSpotTrades()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1658) |  | GET | `/spot/trades` |
| [getSpotCandles()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1670) |  | GET | `/spot/candlesticks` |
| [getSpotFeeRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1682) | :closed_lock_with_key:  | GET | `/spot/fee` |
| [getSpotBatchFeeRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1691) | :closed_lock_with_key:  | GET | `/spot/batch_fee` |
| [getSpotAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1703) | :closed_lock_with_key:  | GET | `/spot/accounts` |
| [getSpotAccountBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1715) | :closed_lock_with_key:  | GET | `/spot/account_book` |
| [submitSpotBatchOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1734) | :closed_lock_with_key:  | POST | `/spot/batch_orders` |
| [getSpotOpenOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1761) | :closed_lock_with_key:  | GET | `/spot/open_orders` |
| [submitSpotClosePosCrossDisabled()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1777) | :closed_lock_with_key:  | POST | `/spot/cross_liquidate_orders` |
| [submitSpotOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1793) | :closed_lock_with_key:  | POST | `/spot/orders` |
| [getSpotOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1810) | :closed_lock_with_key:  | GET | `/spot/orders` |
| [cancelSpotOpenOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1825) | :closed_lock_with_key:  | DELETE | `/spot/orders` |
| [batchCancelSpotOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1854) | :closed_lock_with_key:  | POST | `/spot/cancel_batch_orders` |
| [getSpotOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1879) | :closed_lock_with_key:  | GET | `/spot/orders/{order_id}` |
| [updateSpotOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1896) | :closed_lock_with_key:  | PATCH | `/spot/orders/{order_id}` |
| [cancelSpotOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1924) | :closed_lock_with_key:  | DELETE | `/spot/orders/{order_id}` |
| [getSpotTradingHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1953) | :closed_lock_with_key:  | GET | `/spot/my_trades` |
| [submitSpotCountdownOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1982) | :closed_lock_with_key:  | POST | `/spot/countdown_cancel_all` |
| [batchUpdateSpotOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2001) | :closed_lock_with_key:  | POST | `/spot/amend_batch_orders` |
| [getSpotInsuranceHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2028) | :closed_lock_with_key:  | GET | `/spot/insurance_history` |
| [submitSpotPriceTriggerOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2042) | :closed_lock_with_key:  | POST | `/spot/price_orders` |
| [getSpotAutoOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2054) | :closed_lock_with_key:  | GET | `/spot/price_orders` |
| [cancelAllOpenSpotOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2066) | :closed_lock_with_key:  | DELETE | `/spot/price_orders` |
| [getPriceTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2079) | :closed_lock_with_key:  | GET | `/spot/price_orders/{order_id}` |
| [cancelSpotTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2091) | :closed_lock_with_key:  | DELETE | `/spot/price_orders/{order_id}` |
| [getSpotPovOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2105) | :closed_lock_with_key:  | GET | `/spot/pov_orders` |
| [createSpotPovOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2117) | :closed_lock_with_key:  | POST | `/spot/pov_orders` |
| [cancelSpotPovOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2129) | :closed_lock_with_key:  | DELETE | `/spot/pov_orders` |
| [getSpotPovOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2143) | :closed_lock_with_key:  | GET | `/spot/pov_orders/{order_id}` |
| [cancelSpotPovOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2155) | :closed_lock_with_key:  | DELETE | `/spot/pov_orders/{order_id}` |
| [setCollateralCurrency()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2167) | :closed_lock_with_key:  | POST | `/unified/collateral_currencies` |
| [getMarginAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2188) | :closed_lock_with_key:  | GET | `/margin/accounts` |
| [getMarginBalanceHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2202) | :closed_lock_with_key:  | GET | `/margin/account_book` |
| [getFundingAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2220) | :closed_lock_with_key:  | GET | `/margin/funding_accounts` |
| [updateAutoRepaymentSetting()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2238) | :closed_lock_with_key:  | POST | `/margin/auto_repay` |
| [getAutoRepaymentSetting()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2249) | :closed_lock_with_key:  | GET | `/margin/auto_repay` |
| [getMarginTransferableAmount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2263) | :closed_lock_with_key:  | GET | `/margin/transferable` |
| [getCrossMarginCurrencies()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2280) |  | GET | `/margin/cross/currencies` |
| [getCrossMarginCurrency()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2291) |  | GET | `/margin/cross/currencies/{currency}` |
| [getCrossMarginAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2303) | :closed_lock_with_key:  | GET | `/margin/cross/accounts` |
| [getCrossMarginAccountHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2316) | :closed_lock_with_key:  | GET | `/margin/cross/account_book` |
| [submitCrossMarginBorrowLoan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2333) | :closed_lock_with_key:  | POST | `/margin/cross/loans` |
| [getCrossMarginBorrowHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2348) | :closed_lock_with_key:  | GET | `/margin/cross/loans` |
| [getCrossMarginBorrowLoan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2361) | :closed_lock_with_key:  | GET | `/margin/cross/loans/{loan_id}` |
| [submitCrossMarginRepayment()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2376) | :closed_lock_with_key:  | POST | `/margin/cross/repayments` |
| [getCrossMarginRepayments()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2392) | :closed_lock_with_key:  | GET | `/margin/cross/repayments` |
| [getCrossMarginInterestRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2405) | :closed_lock_with_key:  | GET | `/margin/cross/interest_records` |
| [getCrossMarginTransferableAmount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2421) | :closed_lock_with_key:  | GET | `/margin/cross/transferable` |
| [getEstimatedInterestRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2437) | :closed_lock_with_key:  | GET | `/margin/cross/estimate_rate` |
| [getCrossMarginBorrowableAmount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2451) | :closed_lock_with_key:  | GET | `/margin/cross/borrowable` |
| [getMarginUserLoanTiers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2464) | :closed_lock_with_key:  | GET | `/margin/user/loan_margin_tiers` |
| [getMarginPublicLoanTiers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2480) |  | GET | `/margin/loan_margin_tiers` |
| [setMarginUserLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2496) | :closed_lock_with_key:  | POST | `/margin/leverage/user_market_setting` |
| [getMarginUserAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2513) | :closed_lock_with_key:  | GET | `/margin/user/account` |
| [getLendingMarkets()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2528) |  | GET | `/margin/uni/currency_pairs` |
| [getLendingMarket()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2543) |  | GET | `/margin/uni/currency_pairs/{currency_pair}` |
| [getEstimatedInterestRate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2555) | :closed_lock_with_key:  | GET | `/margin/uni/estimate_rate` |
| [submitMarginUNIBorrowOrRepay()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2565) | :closed_lock_with_key:  | POST | `/margin/uni/loans` |
| [getMarginUNILoans()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2581) | :closed_lock_with_key:  | GET | `/margin/uni/loans` |
| [getMarginUNILoanRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2591) | :closed_lock_with_key:  | GET | `/margin/uni/loan_records` |
| [getMarginUNIInterestRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2603) | :closed_lock_with_key:  | GET | `/margin/uni/interest_records` |
| [getMarginUNIMaxBorrow()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2615) | :closed_lock_with_key:  | GET | `/margin/uni/borrowable` |
| [getFlashSwapCurrencyPairs()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2631) |  | GET | `/flash_swap/currency_pairs` |
| [submitFlashSwapOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2647) | :closed_lock_with_key:  | POST | `/flash_swap/orders` |
| [getFlashSwapOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2659) | :closed_lock_with_key:  | GET | `/flash_swap/orders` |
| [getFlashSwapOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2671) | :closed_lock_with_key:  | GET | `/flash_swap/orders/{order_id}` |
| [submitFlashSwapOrderPreview()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2681) | :closed_lock_with_key:  | POST | `/flash_swap/orders/preview` |
| [getFuturesContracts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2698) |  | GET | `/futures/{settle}/contracts` |
| [getFuturesContract()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2713) |  | GET | `/futures/{settle}/contracts/{contract}` |
| [listFuturesADLRiskStates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2720) |  | GET | `/futures/{settle}/adl_risk_states` |
| [getFuturesOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2734) |  | GET | `/futures/{settle}/order_book` |
| [getFuturesRpiOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2750) |  | GET | `/futures/{settle}/rpi_order_book` |
| [getFuturesTrades()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2763) |  | GET | `/futures/{settle}/trades` |
| [getFuturesCandles()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2778) |  | GET | `/futures/{settle}/candlesticks` |
| [getPremiumIndexKLines()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2791) |  | GET | `/futures/{settle}/premium_index` |
| [getFuturesTickers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2804) |  | GET | `/futures/{settle}/tickers` |
| [getFundingRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2821) |  | GET | `/futures/{settle}/funding_rate` |
| [getBatchFundingRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2837) |  | POST | `/futures/{settle}/funding_rates` |
| [getFuturesInsuranceBalanceHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2855) |  | GET | `/futures/{settle}/insurance` |
| [getFuturesStats()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2874) |  | GET | `/futures/{settle}/contract_stats` |
| [getIndexConstituents()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2885) |  | GET | `/futures/{settle}/index_constituents/{index}` |
| [getLiquidationHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2902) |  | GET | `/futures/{settle}/liq_orders` |
| [getRiskLimitTiers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2919) |  | GET | `/futures/{settle}/risk_limit_tiers` |
| [getFuturesAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2932) | :closed_lock_with_key:  | GET | `/futures/{settle}/accounts` |
| [getFuturesAccountBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2946) | :closed_lock_with_key:  | GET | `/futures/{settle}/account_book` |
| [getFuturesPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2959) | :closed_lock_with_key:  | GET | `/futures/{settle}/positions` |
| [getFuturesPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2974) | :closed_lock_with_key:  | GET | `/futures/{settle}/positions/{contract}` |
| [updateFuturesMargin()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2991) | :closed_lock_with_key:  | POST | `/futures/{settle}/positions/{contract}/margin` |
| [updateFuturesLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3019) | :closed_lock_with_key:  | POST | `/futures/{settle}/positions/{contract}/leverage` |
| [getFuturesContractLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3039) | :closed_lock_with_key:  | GET | `/futures/{settle}/get_leverage/{contract}` |
| [updateFuturesPositionMode()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3055) | :closed_lock_with_key:  | POST | `/futures/{settle}/positions/cross_mode` |
| [updatePositionRiskLimit()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3072) | :closed_lock_with_key:  | POST | `/futures/{settle}/positions/{contract}/risk_limit` |
| [updateFuturesDualMode()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3092) | :closed_lock_with_key:  | POST | `/futures/{settle}/dual_mode` |
| [getDualModePosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3108) | :closed_lock_with_key:  | GET | `/futures/{settle}/dual_comp/positions/{contract}` |
| [updateDualModePositionMargin()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3123) | :closed_lock_with_key:  | POST | `/futures/{settle}/dual_comp/positions/{contract}/margin` |
| [updateDualModePositionLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3139) | :closed_lock_with_key:  | POST | `/futures/{settle}/dual_comp/positions/{contract}/leverage` |
| [updateDualModePositionRiskLimit()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3163) | :closed_lock_with_key:  | POST | `/futures/{settle}/dual_comp/positions/{contract}/risk_limit` |
| [submitFuturesOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3190) | :closed_lock_with_key:  | POST | `/futures/{settle}/orders` |
| [getFuturesOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3211) | :closed_lock_with_key:  | GET | `/futures/{settle}/orders` |
| [cancelAllFuturesOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3226) | :closed_lock_with_key:  | DELETE | `/futures/{settle}/orders` |
| [getFuturesOrdersByTimeRange()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3246) | :closed_lock_with_key:  | GET | `/futures/{settle}/orders_timerange` |
| [submitFuturesBatchOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3269) | :closed_lock_with_key:  | POST | `/futures/{settle}/batch_orders` |
| [getFuturesOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3294) | :closed_lock_with_key:  | GET | `/futures/{settle}/orders/{order_id}` |
| [cancelFuturesOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3311) | :closed_lock_with_key:  | DELETE | `/futures/{settle}/orders/{order_id}` |
| [updateFuturesOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3336) | :closed_lock_with_key:  | PUT | `/futures/{settle}/orders/{order_id}` |
| [getFuturesTradingHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3357) | :closed_lock_with_key:  | GET | `/futures/{settle}/my_trades` |
| [getFuturesTradingHistoryByTimeRange()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3372) | :closed_lock_with_key:  | GET | `/futures/{settle}/my_trades_timerange` |
| [getFuturesPositionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3385) | :closed_lock_with_key:  | GET | `/futures/{settle}/position_close` |
| [getFuturesLiquidationHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3398) | :closed_lock_with_key:  | GET | `/futures/{settle}/liquidates` |
| [getFuturesAutoDeleveragingHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3411) | :closed_lock_with_key:  | GET | `/futures/{settle}/auto_deleverages` |
| [setFuturesOrderCancelCountdown()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3428) | :closed_lock_with_key:  | POST | `/futures/{settle}/countdown_cancel_all` |
| [getFuturesUserTradingFees()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3445) | :closed_lock_with_key:  | GET | `/futures/{settle}/fee` |
| [batchCancelFuturesOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3463) | :closed_lock_with_key:  | POST | `/futures/{settle}/batch_cancel_orders` |
| [batchUpdateFuturesOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3490) | :closed_lock_with_key:  | POST | `/futures/{settle}/batch_amend_orders` |
| [getRiskLimitTable()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3512) |  | GET | `/futures/{settle}/risk_limit_table` |
| [submitFuturesPriceTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3525) | :closed_lock_with_key:  | POST | `/futures/{settle}/price_orders` |
| [getFuturesAutoOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3538) | :closed_lock_with_key:  | GET | `/futures/{settle}/price_orders` |
| [cancelAllOpenFuturesOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3551) | :closed_lock_with_key:  | DELETE | `/futures/{settle}/price_orders` |
| [getFuturesPriceTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3567) | :closed_lock_with_key:  | GET | `/futures/{settle}/price_orders/{order_id}` |
| [cancelFuturesPriceTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3582) | :closed_lock_with_key:  | DELETE | `/futures/{settle}/price_orders/{order_id}` |
| [updateFuturesPriceTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3600) | :closed_lock_with_key:  | PUT | `/futures/{settle}/price_orders/amend/{order_id}` |
| [createTrailOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3618) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/trail/create` |
| [terminateTrailOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3636) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/trail/stop` |
| [batchTerminateTrailOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3649) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/trail/stop_all` |
| [getTrailOrderList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3664) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/trail/list` |
| [getTrailOrderDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3677) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/trail/detail` |
| [updateTrailOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3695) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/trail/update` |
| [getTrailOrderChangeLog()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3708) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/trail/change_log` |
| [createChaseOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3721) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/chase/create` |
| [stopChaseOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3731) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/chase/stop` |
| [stopAllChaseOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3741) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/chase/stop_all` |
| [getChaseOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3753) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/chase/list` |
| [getChaseOrderDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3761) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/chase/detail` |
| [getFuturesPositionCloseHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3770) | :closed_lock_with_key:  | GET | `/futures/{settle}/position_close_history` |
| [getFuturesInsuranceHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3779) | :closed_lock_with_key:  | GET | `/futures/{settle}/insurance` |
| [getAllDeliveryContracts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3796) |  | GET | `/delivery/{settle}/contracts` |
| [getDeliveryContract()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3808) |  | GET | `/delivery/{settle}/contracts/{contract}` |
| [getDeliveryOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3823) |  | GET | `/delivery/{settle}/order_book` |
| [getDeliveryTrades()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3836) |  | GET | `/delivery/{settle}/trades` |
| [getDeliveryCandles()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3850) |  | GET | `/delivery/{settle}/candlesticks` |
| [getDeliveryTickers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3861) |  | GET | `/delivery/{settle}/tickers` |
| [getDeliveryInsuranceBalanceHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3878) |  | GET | `/delivery/{settle}/insurance` |
| [getDeliveryAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3897) | :closed_lock_with_key:  | GET | `/delivery/{settle}/accounts` |
| [getDeliveryBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3908) | :closed_lock_with_key:  | GET | `/delivery/{settle}/account_book` |
| [getDeliveryPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3919) | :closed_lock_with_key:  | GET | `/delivery/{settle}/positions` |
| [getDeliveryPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3929) | :closed_lock_with_key:  | GET | `/delivery/{settle}/positions/{contract}` |
| [updateDeliveryMargin()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3944) | :closed_lock_with_key:  | POST | `/delivery/{settle}/positions/{contract}/margin` |
| [updateDeliveryLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3962) | :closed_lock_with_key:  | POST | `/delivery/{settle}/positions/{contract}/leverage` |
| [updateDeliveryRiskLimit()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3980) | :closed_lock_with_key:  | POST | `/delivery/{settle}/positions/{contract}/risk_limit` |
| [submitDeliveryOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4000) | :closed_lock_with_key:  | POST | `/delivery/{settle}/orders` |
| [getDeliveryOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4015) | :closed_lock_with_key:  | GET | `/delivery/{settle}/orders` |
| [cancelAllDeliveryOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4028) | :closed_lock_with_key:  | DELETE | `/delivery/{settle}/orders` |
| [getDeliveryOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4047) | :closed_lock_with_key:  | GET | `/delivery/{settle}/orders/{order_id}` |
| [cancelDeliveryOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4062) | :closed_lock_with_key:  | DELETE | `/delivery/{settle}/orders/{order_id}` |
| [getDeliveryTradingHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4077) | :closed_lock_with_key:  | GET | `/delivery/{settle}/my_trades` |
| [getDeliveryClosedPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4090) | :closed_lock_with_key:  | GET | `/delivery/{settle}/position_close` |
| [getDeliveryLiquidationHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4103) | :closed_lock_with_key:  | GET | `/delivery/{settle}/liquidates` |
| [getDeliverySettlementHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4116) | :closed_lock_with_key:  | GET | `/delivery/{settle}/settlements` |
| [submitDeliveryTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4129) | :closed_lock_with_key:  | POST | `/delivery/{settle}/price_orders` |
| [getDeliveryAutoOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4144) | :closed_lock_with_key:  | GET | `/delivery/{settle}/price_orders` |
| [cancelAllOpenDeliveryOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4157) | :closed_lock_with_key:  | DELETE | `/delivery/{settle}/price_orders` |
| [getDeliveryTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4173) | :closed_lock_with_key:  | GET | `/delivery/{settle}/price_orders/{order_id}` |
| [cancelTriggeredDeliveryOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4188) | :closed_lock_with_key:  | DELETE | `/delivery/{settle}/price_orders/{order_id}` |
| [getOptionsUnderlyings()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4207) |  | GET | `/options/underlyings` |
| [getOptionsExpirationTimes()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4217) |  | GET | `/options/expirations` |
| [getOptionsContracts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4227) |  | GET | `/options/contracts` |
| [getOptionsContract()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4240) |  | GET | `/options/contracts/{contract}` |
| [getOptionsSettlementHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4250) |  | GET | `/options/settlements` |
| [getOptionsContractSettlement()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4262) |  | GET | `/options/settlements/{contract}` |
| [getOptionsMySettlements()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4277) | :closed_lock_with_key:  | GET | `/options/my_settlements` |
| [getOptionsOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4291) |  | GET | `/options/order_book` |
| [getOptionsTickers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4303) |  | GET | `/options/tickers` |
| [getOptionsUnderlyingTicker()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4317) |  | GET | `/options/underlying/tickers/{underlying}` |
| [getOptionsCandles()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4331) |  | GET | `/options/candlesticks` |
| [getOptionsUnderlyingCandles()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4341) |  | GET | `/options/underlying/candlesticks` |
| [getOptionsTrades()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4353) |  | GET | `/options/trades` |
| [getOptionsAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4364) | :closed_lock_with_key:  | GET | `/options/accounts` |
| [getOptionsAccountChange()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4374) | :closed_lock_with_key:  | GET | `/options/account_book` |
| [getOptionsPositionsUnderlying()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4386) | :closed_lock_with_key:  | GET | `/options/positions` |
| [getOptionsPositionContract()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4398) | :closed_lock_with_key:  | GET | `/options/positions/{contract}` |
| [getOptionsLiquidation()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4410) | :closed_lock_with_key:  | GET | `/options/position_close` |
| [submitOptionsOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4423) | :closed_lock_with_key:  | POST | `/options/orders` |
| [getOptionsOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4435) | :closed_lock_with_key:  | GET | `/options/orders` |
| [cancelAllOpenOptionsOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4447) | :closed_lock_with_key:  | DELETE | `/options/orders` |
| [getOptionsOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4461) | :closed_lock_with_key:  | GET | `/options/orders/{order_id}` |
| [amendOptionsOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4473) | :closed_lock_with_key:  | PUT | `/options/orders/{order_id}` |
| [cancelOptionsOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4488) | :closed_lock_with_key:  | DELETE | `/options/orders/{order_id}` |
| [submitOptionsCountdownCancel()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4507) | :closed_lock_with_key:  | POST | `/options/countdown_cancel_all` |
| [getOptionsPersonalHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4523) | :closed_lock_with_key:  | GET | `/options/my_trades` |
| [setOptionsMMPSettings()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4535) | :closed_lock_with_key:  | POST | `/options/mmp` |
| [getOptionsMMPSettings()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4547) | :closed_lock_with_key:  | GET | `/options/mmp` |
| [resetOptionsMMPSettings()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4559) | :closed_lock_with_key:  | POST | `/options/mmp/reset` |
| [getLendingCurrencies()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4575) |  | GET | `/earn/uni/currencies` |
| [getLendingCurrency()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4585) |  | GET | `/earn/uni/currencies/{currency}` |
| [submitLendOrRedeemOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4595) | :closed_lock_with_key:  | POST | `/earn/uni/lends` |
| [getLendingOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4605) | :closed_lock_with_key:  | GET | `/earn/uni/lends` |
| [updateLendingOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4617) | :closed_lock_with_key:  | PATCH | `/earn/uni/lends` |
| [getLendingRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4630) | :closed_lock_with_key:  | GET | `/earn/uni/lend_records` |
| [getLendingTotalInterest()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4643) | :closed_lock_with_key:  | GET | `/earn/uni/interests/{currency}` |
| [getLendingInterestRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4656) | :closed_lock_with_key:  | GET | `/earn/uni/interest_records` |
| [updateInterestReinvestment()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4669) | :closed_lock_with_key:  | PUT | `/earn/uni/interest_reinvest` |
| [getLendingInterestStatus()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4685) | :closed_lock_with_key:  | GET | `/earn/uni/interest_status/{currency}` |
| [getLendingAnnualizedTrendChart()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4700) | :closed_lock_with_key:  | GET | `/earn/uni/chart` |
| [getLendingEstimatedRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4708) | :closed_lock_with_key:  | GET | `/earn/uni/rate` |
| [submitMultiLoanOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4725) | :closed_lock_with_key:  | POST | `/loan/multi_collateral/orders` |
| [getMultiLoanOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4737) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/orders` |
| [getMultiLoanOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4749) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/orders/{order_id}` |
| [repayMultiLoan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4759) | :closed_lock_with_key:  | POST | `/loan/multi_collateral/repay` |
| [getMultiLoanRepayRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4769) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/repay` |
| [updateMultiLoan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4781) | :closed_lock_with_key:  | POST | `/loan/multi_collateral/mortgage` |
| [getMultiLoanAdjustmentRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4793) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/mortgage` |
| [getMultiLoanCurrencyQuota()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4805) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/currency_quota` |
| [getMultiLoanSupportedCurrencies()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4817) |  | GET | `/loan/multi_collateral/currencies` |
| [getMultiLoanRatio()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4826) |  | GET | `/loan/multi_collateral/ltv` |
| [getMultiLoanFixedRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4835) |  | GET | `/loan/multi_collateral/fixed_rate` |
| [getMultiLoanCurrentRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4848) |  | GET | `/loan/multi_collateral/current_rate` |
| [getDualInvestmentProducts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4872) |  | GET | `/earn/dual/investment_plan` |
| [getDualInvestmentOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4883) | :closed_lock_with_key:  | GET | `/earn/dual/orders` |
| [submitDualInvestmentOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4895) | :closed_lock_with_key:  | POST | `/earn/dual/orders` |
| [getDualOrderRefundPreview()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4904) | :closed_lock_with_key:  | GET | `/earn/dual/order-refund-preview` |
| [submitDualOrderRefund()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4913) | :closed_lock_with_key:  | POST | `/earn/dual/order-refund` |
| [updateDualOrderReinvest()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4922) | :closed_lock_with_key:  | POST | `/earn/dual/modify-order-reinvest` |
| [getDualProjectRecommend()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4933) | :closed_lock_with_key:  | GET | `/earn/dual/project-recommend` |
| [getDualStockInvestmentPlans()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4944) |  | GET | `/earn/dual/stock/investment_plan` |
| [getDualStockProjectRecommend()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4956) |  | GET | `/earn/dual/stock/project-recommend` |
| [getDualStockOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4965) | :closed_lock_with_key:  | GET | `/earn/dual/stock/orders` |
| [submitDualStockOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4977) | :closed_lock_with_key:  | POST | `/earn/dual/stock/orders` |
| [getDualStockBalance()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4986) | :closed_lock_with_key:  | GET | `/earn/dual/stock/balance` |
| [getDualStockOrderRefundPreview()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4993) | :closed_lock_with_key:  | GET | `/earn/dual/stock/order-refund-preview` |
| [submitDualStockOrderRefund()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5002) | :closed_lock_with_key:  | POST | `/earn/dual/stock/order-refund` |
| [updateDualStockOrderReinvest()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5011) | :closed_lock_with_key:  | POST | `/earn/dual/stock/modify-order-reinvest` |
| [getEarnFixedTermProducts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5022) |  | GET | `/earn/fixed-term/product` |
| [getEarnFixedTermProductsByAsset()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5031) |  | GET | `/earn/fixed-term/product/{asset}/list` |
| [createEarnFixedTermLend()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5041) | :closed_lock_with_key:  | POST | `/earn/fixed-term/user/lend` |
| [getEarnFixedTermLends()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5050) | :closed_lock_with_key:  | GET | `/earn/fixed-term/user/lend` |
| [createEarnFixedTermPreRedeem()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5059) | :closed_lock_with_key:  | POST | `/earn/fixed-term/user/pre-redeem` |
| [getEarnFixedTermHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5070) | :closed_lock_with_key:  | GET | `/earn/fixed-term/user/history` |
| [createAutoInvestPlan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5079) | :closed_lock_with_key:  | POST | `/earn/autoinvest/plans/create` |
| [updateAutoInvestPlan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5088) | :closed_lock_with_key:  | POST | `/earn/autoinvest/plans/update` |
| [stopAutoInvestPlan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5095) | :closed_lock_with_key:  | POST | `/earn/autoinvest/plans/stop` |
| [addAutoInvestPlanPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5102) | :closed_lock_with_key:  | POST | `/earn/autoinvest/plans/add_position` |
| [getAutoInvestCoins()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5113) | :closed_lock_with_key:  | GET | `/earn/autoinvest/coins` |
| [getAutoInvestMinAmount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5122) | :closed_lock_with_key:  | POST | `/earn/autoinvest/min_invest_amount` |
| [getAutoInvestPlanRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5133) | :closed_lock_with_key:  | GET | `/earn/autoinvest/plans/records` |
| [getAutoInvestOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5142) | :closed_lock_with_key:  | GET | `/earn/autoinvest/orders` |
| [getAutoInvestConfig()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5151) | :closed_lock_with_key:  | GET | `/earn/autoinvest/config` |
| [getAutoInvestPlanDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5158) | :closed_lock_with_key:  | GET | `/earn/autoinvest/plans/detail` |
| [getAutoInvestPlans()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5167) | :closed_lock_with_key:  | GET | `/earn/autoinvest/plans/list_info` |
| [getStakingCoins()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5179) | :closed_lock_with_key:  | GET | `/earn/staking/coins` |
| [submitStakingSwap()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5192) | :closed_lock_with_key:  | POST | `/earn/staking/swap` |
| [getAccountDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5211) | :closed_lock_with_key:  | GET | `/account/detail` |
| [getAccountRateLimit()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5220) | :closed_lock_with_key:  | GET | `/account/rate_limit` |
| [createStpGroup()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5230) | :closed_lock_with_key:  | POST | `/account/stp_groups` |
| [getStpGroups()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5240) | :closed_lock_with_key:  | GET | `/account/stp_groups` |
| [getStpGroupUsers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5250) | :closed_lock_with_key:  | GET | `/account/stp_groups/{stp_id}/users` |
| [addUsersToStpGroup()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5260) | :closed_lock_with_key:  | POST | `/account/stp_groups/{stp_id}/users` |
| [deleteUserFromStpGroup()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5276) | :closed_lock_with_key:  | DELETE | `/account/stp_groups/{stp_id}/users` |
| [setGTDeduction()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5294) | :closed_lock_with_key:  | POST | `/account/debit_fee` |
| [getGTDeduction()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5305) | :closed_lock_with_key:  | GET | `/account/debit_fee` |
| [getAccountMainKeys()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5314) | :closed_lock_with_key:  | GET | `/account/main_keys` |
| [getAgencyTransactionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5330) | :closed_lock_with_key:  | GET | `/rebate/agency/transaction_history` |
| [getAgencyCommissionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5343) | :closed_lock_with_key:  | GET | `/rebate/agency/commission_history` |
| [getPartnerTransactionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5357) | :closed_lock_with_key:  | GET | `/rebate/partner/transaction_history` |
| [getPartnerCommissionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5372) | :closed_lock_with_key:  | GET | `/rebate/partner/commission_history` |
| [getPartnerSubordinateList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5395) | :closed_lock_with_key:  | GET | `/rebate/partner/sub_list` |
| [getPartnerAgentDataAggregated()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5405) | :closed_lock_with_key:  | GET | `/rebate/partner/data/aggregated` |
| [getBrokerCommissionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5418) | :closed_lock_with_key:  | GET | `/rebate/broker/commission_history` |
| [getBrokerTransactionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5431) | :closed_lock_with_key:  | GET | `/rebate/broker/transaction_history` |
| [getUserRebateInfo()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5440) | :closed_lock_with_key:  | GET | `/rebate/user/info` |
| [createOTCQuote()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5475) | :closed_lock_with_key:  | POST | `/otc/quote` |
| [createOTCFiatOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5487) | :closed_lock_with_key:  | POST | `/otc/order/create` |
| [createOTCStablecoinOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5501) | :closed_lock_with_key:  | POST | `/otc/stable_coin/order/create` |
| [getOTCBankList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5510) | :closed_lock_with_key:  | GET | `/otc/bank/list` |
| [getOTCBankListLegacy()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5517) | :closed_lock_with_key:  | GET | `/otc/bank_list` |
| [createOTCUploadPreUpload()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5521) | :closed_lock_with_key:  | POST | `/otc/upload/pre_upload` |
| [createOTCBank()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5530) | :closed_lock_with_key:  | POST | `/otc/bank/create` |
| [deleteOTCBank()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5544) | :closed_lock_with_key:  | POST | `/otc/bank/delete` |
| [setDefaultOTCBank()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5551) | :closed_lock_with_key:  | POST | `/otc/bank/set_default` |
| [getOTCBankSupplementChecklist()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5558) | :closed_lock_with_key:  | GET | `/otc/bank/bank_supplement_checklist` |
| [submitOTCBankPersonalSupplement()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5567) | :closed_lock_with_key:  | POST | `/otc/order/paid` |
| [submitOTCBankEnterpriseSupplement()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5586) | :closed_lock_with_key:  | POST | `/otc/order/paid` |
| [markOTCOrderAsPaid()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5622) | :closed_lock_with_key:  | POST | `/otc/order/paid` |
| [cancelOTCOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5636) | :closed_lock_with_key:  | POST | `/otc/order/cancel` |
| [getOTCFiatOrderList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5648) | :closed_lock_with_key:  | GET | `/otc/order/list` |
| [getOTCStablecoinOrderList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5662) | :closed_lock_with_key:  | GET | `/otc/stable_coin/order/list` |
| [getOTCFiatOrderDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5676) | :closed_lock_with_key:  | GET | `/otc/order/detail` |
| [getP2PMerchantUserInfo()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5690) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/get_user_info` |
| [getP2PMerchantCounterpartyUserInfo()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5699) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/get_counterparty_user_info` |
| [getP2PMerchantMyselfPayment()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5711) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/get_myself_payment` |
| [getP2PMerchantSpotBalance()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5724) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/set_merchant_work_hours` |
| [setP2PMerchantWorkHours()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5733) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/set_merchant_work_hours` |
| [getP2PMerchantPendingTransactionList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5744) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/get_pending_transaction_list` |
| [getP2PMerchantCompletedTransactionList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5756) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/get_completed_transaction_list` |
| [getP2PMerchantTransactionDetails()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5768) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/get_transaction_details` |
| [confirmP2PMerchantPayment()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5780) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/confirm-payment` |
| [confirmP2PMerchantReceipt()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5791) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/confirm-receipt` |
| [cancelP2PMerchantTransaction()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5802) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/cancel` |
| [placeP2PMerchantBizPushOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5813) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/place_biz_push_order` |
| [updateP2PMerchantAdsStatus()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5824) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/ads_update_status` |
| [getP2PMerchantAdsDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5837) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/ads_detail` |
| [getP2PMerchantMyAdsList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5846) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/my_ads_list` |
| [getP2PMerchantAdsList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5857) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/ads_list` |
| [getP2PMerchantChatsList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5866) | :closed_lock_with_key:  | POST | `/p2p/merchant/chat/get_chats_list` |
| [sendP2PMerchantChatMessage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5877) | :closed_lock_with_key:  | POST | `/p2p/merchant/chat/send_chat_message` |
| [uploadP2PMerchantChatFile()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5888) | :closed_lock_with_key:  | POST | `/p2p/merchant/chat/upload_chat_file` |
| [getCrossExSymbols()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5911) |  | GET | `/crossex/rule/symbols` |
| [getCrossExRiskLimits()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5923) |  | GET | `/crossex/rule/risk_limits` |
| [getCrossExTransferCoins()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5937) |  | GET | `/crossex/transfers/coin` |
| [createCrossExTransfer()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5951) | :closed_lock_with_key:  | POST | `/crossex/transfers` |
| [getCrossExTransferHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5965) | :closed_lock_with_key:  | GET | `/crossex/transfers` |
| [createCrossExOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5982) | :closed_lock_with_key:  | POST | `/crossex/orders` |
| [cancelBatchCrossExOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5996) | :closed_lock_with_key:  | POST | `/crossex/batch_cancel_orders` |
| [cancelCrossExOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6010) | :closed_lock_with_key:  | DELETE | `/crossex/orders/{order_id}` |
| [modifyCrossExOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6023) | :closed_lock_with_key:  | PUT | `/crossex/orders/{order_id}` |
| [getCrossExOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6038) | :closed_lock_with_key:  | GET | `/crossex/orders/{order_id}` |
| [createCrossExConvertQuote()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6050) | :closed_lock_with_key:  | POST | `/crossex/convert/quote` |
| [createCrossExConvertOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6064) | :closed_lock_with_key:  | POST | `/crossex/convert/orders` |
| [updateCrossExAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6078) | :closed_lock_with_key:  | PUT | `/crossex/accounts` |
| [getCrossExAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6092) | :closed_lock_with_key:  | GET | `/crossex/accounts` |
| [setCrossExPositionLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6104) | :closed_lock_with_key:  | POST | `/crossex/positions/leverage` |
| [getCrossExPositionLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6118) | :closed_lock_with_key:  | GET | `/crossex/positions/leverage` |
| [setCrossExMarginPositionLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6132) | :closed_lock_with_key:  | POST | `/crossex/margin_positions/leverage` |
| [getCrossExMarginPositionLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6148) | :closed_lock_with_key:  | GET | `/crossex/margin_positions/leverage` |
| [closeCrossExPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6162) | :closed_lock_with_key:  | POST | `/crossex/position` |
| [updateCrossExPositionsMargin()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6168) | :closed_lock_with_key:  | POST | `/crossex/positions/margin` |
| [getCrossExInterestRate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6182) | :closed_lock_with_key:  | GET | `/crossex/interest_rate` |
| [getCrossExFeeRate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6195) | :closed_lock_with_key:  | GET | `/crossex/fee` |
| [getCrossExPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6207) | :closed_lock_with_key:  | GET | `/crossex/positions` |
| [getCrossExSecurityPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6221) | :closed_lock_with_key:  | GET | `/crossex/security_positions` |
| [getCrossExMarginPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6235) | :closed_lock_with_key:  | GET | `/crossex/margin_positions` |
| [getCrossExAdlRank()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6249) | :closed_lock_with_key:  | GET | `/crossex/adl_rank` |
| [getCrossExOpenOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6261) | :closed_lock_with_key:  | GET | `/crossex/open_orders` |
| [getCrossExHistoryOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6275) | :closed_lock_with_key:  | GET | `/crossex/history_orders` |
| [getCrossExHistoryPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6289) | :closed_lock_with_key:  | GET | `/crossex/history_positions` |
| [getCrossExHistoryMarginPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6303) | :closed_lock_with_key:  | GET | `/crossex/history_margin_positions` |
| [getCrossExHistoryMarginInterests()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6317) | :closed_lock_with_key:  | GET | `/crossex/history_margin_interests` |
| [getCrossExHistoryTrades()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6331) | :closed_lock_with_key:  | GET | `/crossex/history_trades` |
| [getCrossExAccountBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6347) | :closed_lock_with_key:  | GET | `/crossex/account_book` |
| [getCrossExCoinDiscountRate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6361) | :closed_lock_with_key:  | GET | `/crossex/coin_discount_rate` |
| [getCrossExMarketTickers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6375) |  | GET | `/crossex/market/tickers` |
| [getCrossExMarketFundingInfo()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6389) |  | GET | `/crossex/market/funding_info` |
| [getAlphaAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6407) | :closed_lock_with_key:  | GET | `/alpha/accounts` |
| [getAlphaAccountBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6419) | :closed_lock_with_key:  | GET | `/alpha/account_book` |
| [createAlphaQuote()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6433) | :closed_lock_with_key:  | POST | `/alpha/quote` |
| [createAlphaOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6445) | :closed_lock_with_key:  | POST | `/alpha/orders` |
| [getAlphaOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6457) | :closed_lock_with_key:  | GET | `/alpha/orders` |
| [getAlphaOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6469) | :closed_lock_with_key:  | GET | `/alpha/order` |
| [getAlphaCurrencies()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6481) |  | GET | `/alpha/currencies` |
| [getAlphaTickers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6493) |  | GET | `/alpha/tickers` |
| [getTradFiMT5Account()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6499) | :closed_lock_with_key:  | GET | `/tradfi/users/mt5-account` |
| [getTradFiSymbolCategories()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6503) |  | GET | `/tradfi/symbols/categories` |
| [getTradFiSymbols()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6509) |  | GET | `/tradfi/symbols` |
| [getTradFiSymbolCommissions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6521) | :closed_lock_with_key:  | GET | `/tradfi/symbols/commissions` |
| [getTradFiSymbolDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6527) | :closed_lock_with_key:  | GET | `/tradfi/symbols/detail` |
| [getTradFiKlines()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6542) |  | GET | `/tradfi/symbols/{symbol}/klines` |
| [getTradFiTicker()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6549) |  | GET | `/tradfi/symbols/{symbol}/tickers` |
| [createTradFiUser()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6553) | :closed_lock_with_key:  | POST | `/tradfi/users` |
| [getTradFiAssets()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6557) | :closed_lock_with_key:  | GET | `/tradfi/users/assets` |
| [createTradFiTransaction()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6561) | :closed_lock_with_key:  | POST | `/tradfi/transactions` |
| [getTradFiTransactions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6567) | :closed_lock_with_key:  | GET | `/tradfi/transactions` |
| [createTradFiOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6573) | :closed_lock_with_key:  | POST | `/tradfi/orders` |
| [getTradFiOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6579) | :closed_lock_with_key:  | GET | `/tradfi/orders` |
| [modifyTradFiOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6583) | :closed_lock_with_key:  | PUT | `/tradfi/orders/{orderId}` |
| [cancelTradFiOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6590) | :closed_lock_with_key:  | DELETE | `/tradfi/orders/{orderId}` |
| [getTradFiOrderHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6594) | :closed_lock_with_key:  | GET | `/tradfi/orders/history` |
| [getTradFiPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6600) | :closed_lock_with_key:  | GET | `/tradfi/positions` |
| [modifyTradFiPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6606) | :closed_lock_with_key:  | PUT | `/tradfi/positions/{positionId}` |
| [closeTradFiPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6615) | :closed_lock_with_key:  | POST | `/tradfi/positions/{positionId}/close` |
| [getTradFiPositionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6624) | :closed_lock_with_key:  | GET | `/tradfi/positions/history` |
| [getTradFiOrderLog()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6633) | :closed_lock_with_key:  | GET | `/tradfi/orders/log/{log_id}` |
| [getStockUserAssets()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6647) | :closed_lock_with_key:  | GET | `/stock/users/assets` |
| [getStockSymbols()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6659) |  | GET | `/stock/symbols` |
| [getStockSymbolDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6671) | :closed_lock_with_key:  | GET | `/stock/symbols/detail` |
| [getStockOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6683) |  | GET | `/stock/market/{symbol}/orderbook` |
| [getStockOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6693) | :closed_lock_with_key:  | GET | `/stock/orders` |
| [createStockOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6707) | :closed_lock_with_key:  | POST | `/stock/orders` |
| [cancelAllStockOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6718) | :closed_lock_with_key:  | DELETE | `/stock/orders` |
| [getStockOrderHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6728) | :closed_lock_with_key:  | GET | `/stock/orders/history` |
| [updateStockOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6741) | :closed_lock_with_key:  | PUT | `/stock/orders/{orderId}` |
| [cancelStockOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6754) | :closed_lock_with_key:  | DELETE | `/stock/orders/{orderId}` |
| [getStockPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6766) | :closed_lock_with_key:  | GET | `/stock/positions` |
| [closeStockPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6778) | :closed_lock_with_key:  | POST | `/stock/positions/close` |
| [getStockTransactions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6790) | :closed_lock_with_key:  | GET | `/stock/transactions` |
| [createStockTransaction()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6804) | :closed_lock_with_key:  | POST | `/stock/transactions` |
| [getStockExchanges()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6815) |  | GET | `/stock/exchanges` |
| [getStockFeeRate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6826) |  | GET | `/stock/fee-rate` |

# WebsocketAPIClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [WebsocketAPIClient.ts](/src/WebsocketAPIClient.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the Gate.io API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewSpotOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L97) | :closed_lock_with_key:  | WS | `spot.order_place` |
| [cancelSpotOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L111) | :closed_lock_with_key:  | WS | `spot.order_cancel` |
| [cancelSpotOrderById()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L125) | :closed_lock_with_key:  | WS | `spot.order_cancel_ids` |
| [cancelSpotOrderForSymbol()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L139) | :closed_lock_with_key:  | WS | `spot.order_cancel_cp` |
| [updateSpotOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L153) | :closed_lock_with_key:  | WS | `spot.order_amend` |
| [getSpotOrderStatus()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L167) | :closed_lock_with_key:  | WS | `spot.order_status` |
| [getSpotOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L181) | :closed_lock_with_key:  | WS | `spot.order_list` |
| [submitNewFuturesOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L203) | :closed_lock_with_key:  | WS | `futures.order_place` |
| [submitNewFuturesBatchOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L219) | :closed_lock_with_key:  | WS | `futures.order_batch_place` |
| [cancelFuturesOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L235) | :closed_lock_with_key:  | WS | `futures.order_cancel` |
| [cancelFuturesOrderById()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L251) | :closed_lock_with_key:  | WS | `futures.order_cancel_ids` |
| [cancelFuturesAllOpenOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L267) | :closed_lock_with_key:  | WS | `futures.order_cancel_cp` |
| [updateFuturesOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L283) | :closed_lock_with_key:  | WS | `futures.order_amend` |
| [getFuturesOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L299) | :closed_lock_with_key:  | WS | `futures.order_list` |
| [getFuturesOrderStatus()](https://github.com/sieblyio/gateio-api/blob/master/src/WebsocketAPIClient.ts#L315) | :closed_lock_with_key:  | WS | `futures.order_status` |