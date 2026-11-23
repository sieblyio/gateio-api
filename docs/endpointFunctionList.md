
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
| [getSystemMaintenanceStatus()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L759) |  | GET | `/v1/public/system_info` |
| [listAnnouncementArticles()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L763) |  | POST | `/ann/list_article` |
| [submitWithdrawal()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L785) | :closed_lock_with_key:  | POST | `/withdrawals` |
| [submitSpotMainAccountTransfer()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L799) | :closed_lock_with_key:  | POST | `/withdrawals/push` |
| [cancelWithdrawal()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L815) | :closed_lock_with_key:  | DELETE | `/withdrawals/{withdrawal_id}` |
| [getCurrencyChains()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L832) |  | GET | `/wallet/currency_chains` |
| [createDepositAddress()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L842) | :closed_lock_with_key:  | GET | `/wallet/deposit_address` |
| [getWithdrawalRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L858) | :closed_lock_with_key:  | GET | `/wallet/withdrawals` |
| [getDepositRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L872) | :closed_lock_with_key:  | GET | `/wallet/deposits` |
| [submitTransfer()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L891) | :closed_lock_with_key:  | POST | `/wallet/transfers` |
| [getTransfer()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L903) | :closed_lock_with_key:  | GET | `/wallet/transfers` |
| [submitMainSubTransfer()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L918) | :closed_lock_with_key:  | POST | `/wallet/sub_account_transfers` |
| [getMainSubTransfers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L932) | :closed_lock_with_key:  | GET | `/wallet/sub_account_transfers` |
| [submitSubToSubTransfer()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L946) | :closed_lock_with_key:  | POST | `/wallet/sub_account_to_sub_account` |
| [getTransferStatus()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L961) | :closed_lock_with_key:  | GET | `/wallet/order_status` |
| [getWithdrawalStatus()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L977) | :closed_lock_with_key:  | GET | `/wallet/withdraw_status` |
| [getSubBalance()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L989) | :closed_lock_with_key:  | GET | `/wallet/sub_account_balances` |
| [getSubMarginBalances()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1001) | :closed_lock_with_key:  | GET | `/wallet/sub_account_margin_balances` |
| [getSubFuturesBalances()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1013) | :closed_lock_with_key:  | GET | `/wallet/sub_account_futures_balances` |
| [getSubCrossMarginBalances()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1026) | :closed_lock_with_key:  | GET | `/wallet/sub_account_cross_margin_balances` |
| [getSavedAddresses()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1038) | :closed_lock_with_key:  | GET | `/wallet/saved_address` |
| [getTradingFees()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1048) | :closed_lock_with_key:  | GET | `/wallet/fee` |
| [getBalances()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1069) | :closed_lock_with_key:  | GET | `/wallet/total_balance` |
| [getSmallBalances()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1078) | :closed_lock_with_key:  | GET | `/wallet/small_balance` |
| [convertSmallBalance()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1088) | :closed_lock_with_key:  | POST | `/wallet/small_balance` |
| [getSmallBalanceHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1101) | :closed_lock_with_key:  | GET | `/wallet/small_balance_history` |
| [getPushOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1113) | :closed_lock_with_key:  | GET | `/wallet/push` |
| [getLowCapExchangeList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1122) | :closed_lock_with_key:  | GET | `/wallet/getLowCapExchangeList` |
| [createSubAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1137) | :closed_lock_with_key:  | POST | `/sub_accounts` |
| [getSubAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1148) | :closed_lock_with_key:  | GET | `/sub_accounts` |
| [getSubAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1158) | :closed_lock_with_key:  | GET | `/sub_accounts/{user_id}` |
| [createSubAccountApiKey()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1168) | :closed_lock_with_key:  | POST | `/sub_accounts/{user_id}/keys` |
| [getSubAccountApiKeys()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1181) | :closed_lock_with_key:  | GET | `/sub_accounts/{user_id}/keys` |
| [updateSubAccountApiKey()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1195) | :closed_lock_with_key:  | PUT | `/sub_accounts/{user_id}/keys/{key}` |
| [deleteSubAccountApiKey()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1206) | :closed_lock_with_key:  | DELETE | `/sub_accounts/{user_id}/keys/{key}` |
| [getSubAccountApiKey()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1221) | :closed_lock_with_key:  | GET | `/sub_accounts/{user_id}/keys/{key}` |
| [lockSubAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1236) | :closed_lock_with_key:  | POST | `/sub_accounts/{user_id}/lock` |
| [unlockSubAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1246) | :closed_lock_with_key:  | POST | `/sub_accounts/{user_id}/unlock` |
| [getSubAccountMode()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1260) | :closed_lock_with_key:  | GET | `/sub_accounts/unified_mode` |
| [getUnifiedAccountInfo()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1279) | :closed_lock_with_key:  | GET | `/unified/accounts` |
| [getUnifiedMaxBorrow()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1295) | :closed_lock_with_key:  | GET | `/unified/borrowable` |
| [getUnifiedMaxTransferable()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1311) | :closed_lock_with_key:  | GET | `/unified/transferable` |
| [getUnifiedMaxTransferables()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1326) | :closed_lock_with_key:  | GET | `/unified/transferables` |
| [getUnifiedBatchMaxBorrowable()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1335) | :closed_lock_with_key:  | GET | `/unified/batch_borrowable` |
| [submitUnifiedBorrowOrRepay()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1353) | :closed_lock_with_key:  | POST | `/unified/loans` |
| [getUnifiedLoans()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1365) | :closed_lock_with_key:  | GET | `/unified/loans` |
| [getUnifiedLoanRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1375) | :closed_lock_with_key:  | GET | `/unified/loan_records` |
| [getUnifiedInterestRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1387) | :closed_lock_with_key:  | GET | `/unified/interest_records` |
| [getUnifiedRiskUnitDetails()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1398) | :closed_lock_with_key:  | GET | `/unified/risk_units` |
| [setUnifiedAccountMode()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1410) | :closed_lock_with_key:  | PUT | `/unified/unified_mode` |
| [getUnifiedAccountMode()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1419) | :closed_lock_with_key:  | GET | `/unified/unified_mode` |
| [getUnifiedEstimateRate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1431) | :closed_lock_with_key:  | GET | `/unified/estimate_rate` |
| [getUnifiedCurrencyDiscountTiers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1442) |  | GET | `/unified/currency_discount_tiers` |
| [getLoanMarginTiers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1454) |  | GET | `/unified/loan_margin_tiers` |
| [portfolioMarginCalculate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1471) |  | POST | `/unified/portfolio_calculator` |
| [setUserLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1485) | :closed_lock_with_key:  | POST | `/unified/leverage/user_setting` |
| [getUserCurrencyLeverageConfig()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1499) | :closed_lock_with_key:  | GET | `/unified/leverage/user_currency_config` |
| [getUserCurrencyLeverageSettings()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1513) | :closed_lock_with_key:  | GET | `/unified/leverage/user_currency_setting` |
| [updateUserCurrencyLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1528) | :closed_lock_with_key:  | POST | `/unified/leverage/user_currency_setting` |
| [getUnifiedLoanCurrencies()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1543) | :closed_lock_with_key:  | GET | `/unified/currencies` |
| [getHistoricalLendingRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1555) | :closed_lock_with_key:  | GET | `/unified/history_loan_rate` |
| [submitUnifiedLoanRepay()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1561) | :closed_lock_with_key:  | POST | `/unified/loans/repay` |
| [getEstimatedQuickRepayment()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1568) | :closed_lock_with_key:  | GET | `/unified/estimated_quick_repayment` |
| [createQuickRepayment()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1575) | :closed_lock_with_key:  | POST | `/unified/quick_repayment` |
| [setUnifiedDeltaNeutral()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1586) | :closed_lock_with_key:  | POST | `/unified/delta_neutral` |
| [getUnifiedDeltaNeutral()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1595) | :closed_lock_with_key:  | GET | `/unified/delta_neutral` |
| [getSpotCurrencies()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1615) |  | GET | `/spot/currencies` |
| [getSpotCurrency()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1625) |  | GET | `/spot/currencies/{currency}` |
| [getSpotCurrencyPairs()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1634) |  | GET | `/spot/currency_pairs` |
| [getSpotCurrencyPair()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1644) |  | GET | `/spot/currency_pairs/{currency_pair}` |
| [getSpotTicker()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1658) |  | GET | `/spot/tickers` |
| [getSpotOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1673) |  | GET | `/spot/order_book` |
| [getSpotRpiOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1685) |  | GET | `/spot/rpi_order_book` |
| [getSpotTrades()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1698) |  | GET | `/spot/trades` |
| [getSpotCandles()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1710) |  | GET | `/spot/candlesticks` |
| [getSpotFeeRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1722) | :closed_lock_with_key:  | GET | `/spot/fee` |
| [getSpotBatchFeeRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1731) | :closed_lock_with_key:  | GET | `/spot/batch_fee` |
| [getSpotAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1743) | :closed_lock_with_key:  | GET | `/spot/accounts` |
| [getSpotAccountBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1755) | :closed_lock_with_key:  | GET | `/spot/account_book` |
| [submitSpotBatchOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1774) | :closed_lock_with_key:  | POST | `/spot/batch_orders` |
| [getSpotOpenOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1801) | :closed_lock_with_key:  | GET | `/spot/open_orders` |
| [submitSpotClosePosCrossDisabled()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1817) | :closed_lock_with_key:  | POST | `/spot/cross_liquidate_orders` |
| [submitSpotOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1833) | :closed_lock_with_key:  | POST | `/spot/orders` |
| [getSpotOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1850) | :closed_lock_with_key:  | GET | `/spot/orders` |
| [cancelSpotOpenOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1865) | :closed_lock_with_key:  | DELETE | `/spot/orders` |
| [batchCancelSpotOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1894) | :closed_lock_with_key:  | POST | `/spot/cancel_batch_orders` |
| [getSpotOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1919) | :closed_lock_with_key:  | GET | `/spot/orders/{order_id}` |
| [updateSpotOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1936) | :closed_lock_with_key:  | PATCH | `/spot/orders/{order_id}` |
| [cancelSpotOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1964) | :closed_lock_with_key:  | DELETE | `/spot/orders/{order_id}` |
| [getSpotTradingHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L1993) | :closed_lock_with_key:  | GET | `/spot/my_trades` |
| [submitSpotCountdownOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2022) | :closed_lock_with_key:  | POST | `/spot/countdown_cancel_all` |
| [batchUpdateSpotOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2041) | :closed_lock_with_key:  | POST | `/spot/amend_batch_orders` |
| [getSpotInsuranceHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2068) | :closed_lock_with_key:  | GET | `/spot/insurance_history` |
| [submitSpotPriceTriggerOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2082) | :closed_lock_with_key:  | POST | `/spot/price_orders` |
| [getSpotAutoOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2094) | :closed_lock_with_key:  | GET | `/spot/price_orders` |
| [cancelAllOpenSpotOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2106) | :closed_lock_with_key:  | DELETE | `/spot/price_orders` |
| [getPriceTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2119) | :closed_lock_with_key:  | GET | `/spot/price_orders/{order_id}` |
| [cancelSpotTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2131) | :closed_lock_with_key:  | DELETE | `/spot/price_orders/{order_id}` |
| [getSpotPovOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2145) | :closed_lock_with_key:  | GET | `/spot/pov_orders` |
| [createSpotPovOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2157) | :closed_lock_with_key:  | POST | `/spot/pov_orders` |
| [cancelSpotPovOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2169) | :closed_lock_with_key:  | DELETE | `/spot/pov_orders` |
| [getSpotPovOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2183) | :closed_lock_with_key:  | GET | `/spot/pov_orders/{order_id}` |
| [cancelSpotPovOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2195) | :closed_lock_with_key:  | DELETE | `/spot/pov_orders/{order_id}` |
| [setCollateralCurrency()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2207) | :closed_lock_with_key:  | POST | `/unified/collateral_currencies` |
| [getMarginAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2228) | :closed_lock_with_key:  | GET | `/margin/accounts` |
| [getMarginBalanceHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2242) | :closed_lock_with_key:  | GET | `/margin/account_book` |
| [getFundingAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2260) | :closed_lock_with_key:  | GET | `/margin/funding_accounts` |
| [updateAutoRepaymentSetting()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2278) | :closed_lock_with_key:  | POST | `/margin/auto_repay` |
| [getAutoRepaymentSetting()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2289) | :closed_lock_with_key:  | GET | `/margin/auto_repay` |
| [getMarginTransferableAmount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2303) | :closed_lock_with_key:  | GET | `/margin/transferable` |
| [getCrossMarginCurrencies()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2320) |  | GET | `/margin/cross/currencies` |
| [getCrossMarginCurrency()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2331) |  | GET | `/margin/cross/currencies/{currency}` |
| [getCrossMarginAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2343) | :closed_lock_with_key:  | GET | `/margin/cross/accounts` |
| [getCrossMarginAccountHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2356) | :closed_lock_with_key:  | GET | `/margin/cross/account_book` |
| [submitCrossMarginBorrowLoan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2373) | :closed_lock_with_key:  | POST | `/margin/cross/loans` |
| [getCrossMarginBorrowHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2388) | :closed_lock_with_key:  | GET | `/margin/cross/loans` |
| [getCrossMarginBorrowLoan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2401) | :closed_lock_with_key:  | GET | `/margin/cross/loans/{loan_id}` |
| [submitCrossMarginRepayment()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2416) | :closed_lock_with_key:  | POST | `/margin/cross/repayments` |
| [getCrossMarginRepayments()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2432) | :closed_lock_with_key:  | GET | `/margin/cross/repayments` |
| [getCrossMarginInterestRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2445) | :closed_lock_with_key:  | GET | `/margin/cross/interest_records` |
| [getCrossMarginTransferableAmount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2461) | :closed_lock_with_key:  | GET | `/margin/cross/transferable` |
| [getEstimatedInterestRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2477) | :closed_lock_with_key:  | GET | `/margin/cross/estimate_rate` |
| [getCrossMarginBorrowableAmount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2491) | :closed_lock_with_key:  | GET | `/margin/cross/borrowable` |
| [getMarginUserLoanTiers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2504) | :closed_lock_with_key:  | GET | `/margin/user/loan_margin_tiers` |
| [getMarginPublicLoanTiers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2520) |  | GET | `/margin/loan_margin_tiers` |
| [setMarginUserLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2536) | :closed_lock_with_key:  | POST | `/margin/leverage/user_market_setting` |
| [getMarginUserAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2553) | :closed_lock_with_key:  | GET | `/margin/user/account` |
| [getLendingMarkets()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2568) |  | GET | `/margin/uni/currency_pairs` |
| [getLendingMarket()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2583) |  | GET | `/margin/uni/currency_pairs/{currency_pair}` |
| [getEstimatedInterestRate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2595) | :closed_lock_with_key:  | GET | `/margin/uni/estimate_rate` |
| [submitMarginUNIBorrowOrRepay()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2607) | :closed_lock_with_key:  | POST | `/margin/uni/loans` |
| [getMarginUNILoans()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2623) | :closed_lock_with_key:  | GET | `/margin/uni/loans` |
| [getMarginUNILoanRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2633) | :closed_lock_with_key:  | GET | `/margin/uni/loan_records` |
| [getMarginUNIInterestRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2645) | :closed_lock_with_key:  | GET | `/margin/uni/interest_records` |
| [getMarginUNIMaxBorrow()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2657) | :closed_lock_with_key:  | GET | `/margin/uni/borrowable` |
| [getFlashSwapCurrencyPairs()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2673) |  | GET | `/flash_swap/currency_pairs` |
| [submitFlashSwapOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2689) | :closed_lock_with_key:  | POST | `/flash_swap/orders` |
| [getFlashSwapOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2701) | :closed_lock_with_key:  | GET | `/flash_swap/orders` |
| [getFlashSwapOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2713) | :closed_lock_with_key:  | GET | `/flash_swap/orders/{order_id}` |
| [submitFlashSwapOrderPreview()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2723) | :closed_lock_with_key:  | POST | `/flash_swap/orders/preview` |
| [getFuturesContracts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2740) |  | GET | `/futures/{settle}/contracts` |
| [getFuturesContract()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2755) |  | GET | `/futures/{settle}/contracts/{contract}` |
| [listFuturesADLRiskStates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2762) |  | GET | `/futures/{settle}/adl_risk_states` |
| [getFuturesOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2776) |  | GET | `/futures/{settle}/order_book` |
| [getFuturesRpiOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2792) |  | GET | `/futures/{settle}/rpi_order_book` |
| [getFuturesTrades()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2805) |  | GET | `/futures/{settle}/trades` |
| [getFuturesCandles()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2820) |  | GET | `/futures/{settle}/candlesticks` |
| [getPremiumIndexKLines()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2833) |  | GET | `/futures/{settle}/premium_index` |
| [getFuturesTickers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2846) |  | GET | `/futures/{settle}/tickers` |
| [getFundingRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2863) |  | GET | `/futures/{settle}/funding_rate` |
| [getBatchFundingRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2879) |  | POST | `/futures/{settle}/funding_rates` |
| [getFuturesInsuranceBalanceHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2897) |  | GET | `/futures/{settle}/insurance` |
| [getFuturesStats()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2916) |  | GET | `/futures/{settle}/contract_stats` |
| [getIndexConstituents()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2927) |  | GET | `/futures/{settle}/index_constituents/{index}` |
| [getLiquidationHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2944) |  | GET | `/futures/{settle}/liq_orders` |
| [getRiskLimitTiers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2961) |  | GET | `/futures/{settle}/risk_limit_tiers` |
| [getFuturesAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2974) | :closed_lock_with_key:  | GET | `/futures/{settle}/accounts` |
| [getFuturesAccountBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L2988) | :closed_lock_with_key:  | GET | `/futures/{settle}/account_book` |
| [getFuturesPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3001) | :closed_lock_with_key:  | GET | `/futures/{settle}/positions` |
| [getFuturesPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3016) | :closed_lock_with_key:  | GET | `/futures/{settle}/positions/{contract}` |
| [updateFuturesMargin()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3033) | :closed_lock_with_key:  | POST | `/futures/{settle}/positions/{contract}/margin` |
| [updateFuturesLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3061) | :closed_lock_with_key:  | POST | `/futures/{settle}/positions/{contract}/leverage` |
| [getFuturesContractLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3081) | :closed_lock_with_key:  | GET | `/futures/{settle}/get_leverage/{contract}` |
| [updateFuturesPositionMode()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3097) | :closed_lock_with_key:  | POST | `/futures/{settle}/positions/cross_mode` |
| [updatePositionRiskLimit()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3114) | :closed_lock_with_key:  | POST | `/futures/{settle}/positions/{contract}/risk_limit` |
| [updateFuturesDualMode()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3134) | :closed_lock_with_key:  | POST | `/futures/{settle}/dual_mode` |
| [getDualModePosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3150) | :closed_lock_with_key:  | GET | `/futures/{settle}/dual_comp/positions/{contract}` |
| [updateDualModePositionMargin()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3165) | :closed_lock_with_key:  | POST | `/futures/{settle}/dual_comp/positions/{contract}/margin` |
| [updateDualModePositionLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3181) | :closed_lock_with_key:  | POST | `/futures/{settle}/dual_comp/positions/{contract}/leverage` |
| [updateDualModePositionRiskLimit()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3205) | :closed_lock_with_key:  | POST | `/futures/{settle}/dual_comp/positions/{contract}/risk_limit` |
| [submitFuturesOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3232) | :closed_lock_with_key:  | POST | `/futures/{settle}/orders` |
| [getFuturesOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3253) | :closed_lock_with_key:  | GET | `/futures/{settle}/orders` |
| [cancelAllFuturesOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3268) | :closed_lock_with_key:  | DELETE | `/futures/{settle}/orders` |
| [getFuturesOrdersByTimeRange()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3288) | :closed_lock_with_key:  | GET | `/futures/{settle}/orders_timerange` |
| [submitFuturesBatchOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3311) | :closed_lock_with_key:  | POST | `/futures/{settle}/batch_orders` |
| [getFuturesOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3336) | :closed_lock_with_key:  | GET | `/futures/{settle}/orders/{order_id}` |
| [cancelFuturesOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3353) | :closed_lock_with_key:  | DELETE | `/futures/{settle}/orders/{order_id}` |
| [updateFuturesOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3378) | :closed_lock_with_key:  | PUT | `/futures/{settle}/orders/{order_id}` |
| [getFuturesTradingHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3399) | :closed_lock_with_key:  | GET | `/futures/{settle}/my_trades` |
| [getFuturesTradingHistoryByTimeRange()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3414) | :closed_lock_with_key:  | GET | `/futures/{settle}/my_trades_timerange` |
| [getFuturesPositionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3427) | :closed_lock_with_key:  | GET | `/futures/{settle}/position_close` |
| [getFuturesLiquidationHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3440) | :closed_lock_with_key:  | GET | `/futures/{settle}/liquidates` |
| [getFuturesAutoDeleveragingHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3453) | :closed_lock_with_key:  | GET | `/futures/{settle}/auto_deleverages` |
| [setFuturesOrderCancelCountdown()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3470) | :closed_lock_with_key:  | POST | `/futures/{settle}/countdown_cancel_all` |
| [getFuturesUserTradingFees()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3487) | :closed_lock_with_key:  | GET | `/futures/{settle}/fee` |
| [batchCancelFuturesOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3505) | :closed_lock_with_key:  | POST | `/futures/{settle}/batch_cancel_orders` |
| [batchUpdateFuturesOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3532) | :closed_lock_with_key:  | POST | `/futures/{settle}/batch_amend_orders` |
| [getRiskLimitTable()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3554) |  | GET | `/futures/{settle}/risk_limit_table` |
| [submitFuturesPriceTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3567) | :closed_lock_with_key:  | POST | `/futures/{settle}/price_orders` |
| [getFuturesAutoOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3580) | :closed_lock_with_key:  | GET | `/futures/{settle}/price_orders` |
| [cancelAllOpenFuturesOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3593) | :closed_lock_with_key:  | DELETE | `/futures/{settle}/price_orders` |
| [getFuturesPriceTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3609) | :closed_lock_with_key:  | GET | `/futures/{settle}/price_orders/{order_id}` |
| [cancelFuturesPriceTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3624) | :closed_lock_with_key:  | DELETE | `/futures/{settle}/price_orders/{order_id}` |
| [updateFuturesPriceTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3642) | :closed_lock_with_key:  | PUT | `/futures/{settle}/price_orders/amend/{order_id}` |
| [createTrailOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3660) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/trail/create` |
| [terminateTrailOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3679) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/trail/stop` |
| [batchTerminateTrailOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3698) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/trail/stop_all` |
| [getTrailOrderList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3717) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/trail/list` |
| [getTrailOrderDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3734) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/trail/detail` |
| [updateTrailOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3753) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/trail/update` |
| [getTrailOrderChangeLog()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3772) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/trail/change_log` |
| [createChaseOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3789) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/chase/create` |
| [stopChaseOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3799) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/chase/stop` |
| [stopAllChaseOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3809) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/chase/stop_all` |
| [getChaseOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3821) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/chase/list` |
| [getChaseOrderDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3829) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/chase/detail` |
| [getFuturesPositionCloseHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3838) | :closed_lock_with_key:  | GET | `/futures/{settle}/position_close_history` |
| [getFuturesInsuranceHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3847) | :closed_lock_with_key:  | GET | `/futures/{settle}/insurance` |
| [getAllDeliveryContracts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3864) |  | GET | `/delivery/{settle}/contracts` |
| [getDeliveryContract()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3876) |  | GET | `/delivery/{settle}/contracts/{contract}` |
| [getDeliveryOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3891) |  | GET | `/delivery/{settle}/order_book` |
| [getDeliveryTrades()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3904) |  | GET | `/delivery/{settle}/trades` |
| [getDeliveryCandles()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3918) |  | GET | `/delivery/{settle}/candlesticks` |
| [getDeliveryTickers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3929) |  | GET | `/delivery/{settle}/tickers` |
| [getDeliveryInsuranceBalanceHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3946) |  | GET | `/delivery/{settle}/insurance` |
| [getDeliveryAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3965) | :closed_lock_with_key:  | GET | `/delivery/{settle}/accounts` |
| [getDeliveryBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3976) | :closed_lock_with_key:  | GET | `/delivery/{settle}/account_book` |
| [getDeliveryPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3987) | :closed_lock_with_key:  | GET | `/delivery/{settle}/positions` |
| [getDeliveryPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L3997) | :closed_lock_with_key:  | GET | `/delivery/{settle}/positions/{contract}` |
| [updateDeliveryMargin()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4012) | :closed_lock_with_key:  | POST | `/delivery/{settle}/positions/{contract}/margin` |
| [updateDeliveryLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4030) | :closed_lock_with_key:  | POST | `/delivery/{settle}/positions/{contract}/leverage` |
| [updateDeliveryRiskLimit()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4048) | :closed_lock_with_key:  | POST | `/delivery/{settle}/positions/{contract}/risk_limit` |
| [submitDeliveryOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4068) | :closed_lock_with_key:  | POST | `/delivery/{settle}/orders` |
| [getDeliveryOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4083) | :closed_lock_with_key:  | GET | `/delivery/{settle}/orders` |
| [cancelAllDeliveryOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4096) | :closed_lock_with_key:  | DELETE | `/delivery/{settle}/orders` |
| [getDeliveryOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4115) | :closed_lock_with_key:  | GET | `/delivery/{settle}/orders/{order_id}` |
| [cancelDeliveryOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4130) | :closed_lock_with_key:  | DELETE | `/delivery/{settle}/orders/{order_id}` |
| [getDeliveryTradingHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4145) | :closed_lock_with_key:  | GET | `/delivery/{settle}/my_trades` |
| [getDeliveryClosedPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4158) | :closed_lock_with_key:  | GET | `/delivery/{settle}/position_close` |
| [getDeliveryLiquidationHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4171) | :closed_lock_with_key:  | GET | `/delivery/{settle}/liquidates` |
| [getDeliverySettlementHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4184) | :closed_lock_with_key:  | GET | `/delivery/{settle}/settlements` |
| [submitDeliveryTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4197) | :closed_lock_with_key:  | POST | `/delivery/{settle}/price_orders` |
| [getDeliveryAutoOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4212) | :closed_lock_with_key:  | GET | `/delivery/{settle}/price_orders` |
| [cancelAllOpenDeliveryOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4225) | :closed_lock_with_key:  | DELETE | `/delivery/{settle}/price_orders` |
| [getDeliveryTriggeredOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4241) | :closed_lock_with_key:  | GET | `/delivery/{settle}/price_orders/{order_id}` |
| [cancelTriggeredDeliveryOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4256) | :closed_lock_with_key:  | DELETE | `/delivery/{settle}/price_orders/{order_id}` |
| [getOptionsUnderlyings()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4275) |  | GET | `/options/underlyings` |
| [getOptionsExpirationTimes()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4285) |  | GET | `/options/expirations` |
| [getOptionsContracts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4295) |  | GET | `/options/contracts` |
| [getOptionsContract()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4308) |  | GET | `/options/contracts/{contract}` |
| [getOptionsSettlementHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4318) |  | GET | `/options/settlements` |
| [getOptionsContractSettlement()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4330) |  | GET | `/options/settlements/{contract}` |
| [getOptionsMySettlements()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4345) | :closed_lock_with_key:  | GET | `/options/my_settlements` |
| [getOptionsOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4359) |  | GET | `/options/order_book` |
| [getOptionsTickers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4371) |  | GET | `/options/tickers` |
| [getOptionsUnderlyingTicker()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4385) |  | GET | `/options/underlying/tickers/{underlying}` |
| [getOptionsCandles()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4399) |  | GET | `/options/candlesticks` |
| [getOptionsUnderlyingCandles()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4409) |  | GET | `/options/underlying/candlesticks` |
| [getOptionsTrades()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4421) |  | GET | `/options/trades` |
| [getOptionsAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4432) | :closed_lock_with_key:  | GET | `/options/accounts` |
| [getOptionsAccountChange()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4442) | :closed_lock_with_key:  | GET | `/options/account_book` |
| [getOptionsPositionsUnderlying()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4454) | :closed_lock_with_key:  | GET | `/options/positions` |
| [getOptionsPositionContract()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4466) | :closed_lock_with_key:  | GET | `/options/positions/{contract}` |
| [getOptionsLiquidation()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4478) | :closed_lock_with_key:  | GET | `/options/position_close` |
| [submitOptionsOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4491) | :closed_lock_with_key:  | POST | `/options/orders` |
| [getOptionsOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4503) | :closed_lock_with_key:  | GET | `/options/orders` |
| [cancelAllOpenOptionsOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4515) | :closed_lock_with_key:  | DELETE | `/options/orders` |
| [getOptionsOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4529) | :closed_lock_with_key:  | GET | `/options/orders/{order_id}` |
| [amendOptionsOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4541) | :closed_lock_with_key:  | PUT | `/options/orders/{order_id}` |
| [cancelOptionsOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4556) | :closed_lock_with_key:  | DELETE | `/options/orders/{order_id}` |
| [submitOptionsCountdownCancel()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4575) | :closed_lock_with_key:  | POST | `/options/countdown_cancel_all` |
| [getOptionsPersonalHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4591) | :closed_lock_with_key:  | GET | `/options/my_trades` |
| [setOptionsMMPSettings()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4603) | :closed_lock_with_key:  | POST | `/options/mmp` |
| [getOptionsMMPSettings()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4615) | :closed_lock_with_key:  | GET | `/options/mmp` |
| [resetOptionsMMPSettings()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4627) | :closed_lock_with_key:  | POST | `/options/mmp/reset` |
| [getLendingCurrencies()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4643) |  | GET | `/earn/uni/currencies` |
| [getLendingCurrency()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4653) |  | GET | `/earn/uni/currencies/{currency}` |
| [submitLendOrRedeemOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4663) | :closed_lock_with_key:  | POST | `/earn/uni/lends` |
| [getLendingOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4673) | :closed_lock_with_key:  | GET | `/earn/uni/lends` |
| [updateLendingOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4685) | :closed_lock_with_key:  | PATCH | `/earn/uni/lends` |
| [getLendingRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4698) | :closed_lock_with_key:  | GET | `/earn/uni/lend_records` |
| [getLendingTotalInterest()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4711) | :closed_lock_with_key:  | GET | `/earn/uni/interests/{currency}` |
| [getLendingInterestRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4724) | :closed_lock_with_key:  | GET | `/earn/uni/interest_records` |
| [updateInterestReinvestment()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4737) | :closed_lock_with_key:  | PUT | `/earn/uni/interest_reinvest` |
| [getLendingInterestStatus()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4753) | :closed_lock_with_key:  | GET | `/earn/uni/interest_status/{currency}` |
| [getLendingAnnualizedTrendChart()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4768) | :closed_lock_with_key:  | GET | `/earn/uni/chart` |
| [getLendingEstimatedRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4776) | :closed_lock_with_key:  | GET | `/earn/uni/rate` |
| [submitMultiLoanOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4793) | :closed_lock_with_key:  | POST | `/loan/multi_collateral/orders` |
| [getMultiLoanOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4805) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/orders` |
| [getMultiLoanOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4817) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/orders/{order_id}` |
| [repayMultiLoan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4827) | :closed_lock_with_key:  | POST | `/loan/multi_collateral/repay` |
| [getMultiLoanRepayRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4837) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/repay` |
| [updateMultiLoan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4849) | :closed_lock_with_key:  | POST | `/loan/multi_collateral/mortgage` |
| [getMultiLoanAdjustmentRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4861) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/mortgage` |
| [getMultiLoanCurrencyQuota()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4873) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/currency_quota` |
| [getMultiLoanSupportedCurrencies()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4885) |  | GET | `/loan/multi_collateral/currencies` |
| [getMultiLoanRatio()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4894) |  | GET | `/loan/multi_collateral/ltv` |
| [getMultiLoanFixedRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4903) |  | GET | `/loan/multi_collateral/fixed_rate` |
| [getMultiLoanCurrentRates()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4916) |  | GET | `/loan/multi_collateral/current_rate` |
| [getDualInvestmentProducts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4940) |  | GET | `/earn/dual/investment_plan` |
| [getDualInvestmentOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4951) | :closed_lock_with_key:  | GET | `/earn/dual/orders` |
| [submitDualInvestmentOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4963) | :closed_lock_with_key:  | POST | `/earn/dual/orders` |
| [getDualOrderRefundPreview()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4972) | :closed_lock_with_key:  | GET | `/earn/dual/order-refund-preview` |
| [submitDualOrderRefund()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4981) | :closed_lock_with_key:  | POST | `/earn/dual/order-refund` |
| [updateDualOrderReinvest()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L4990) | :closed_lock_with_key:  | POST | `/earn/dual/modify-order-reinvest` |
| [getDualProjectRecommend()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5001) | :closed_lock_with_key:  | GET | `/earn/dual/project-recommend` |
| [getDualStockInvestmentPlans()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5012) |  | GET | `/earn/dual/stock/investment_plan` |
| [getDualStockProjectRecommend()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5024) |  | GET | `/earn/dual/stock/project-recommend` |
| [getDualStockOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5033) | :closed_lock_with_key:  | GET | `/earn/dual/stock/orders` |
| [submitDualStockOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5045) | :closed_lock_with_key:  | POST | `/earn/dual/stock/orders` |
| [getDualStockBalance()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5054) | :closed_lock_with_key:  | GET | `/earn/dual/stock/balance` |
| [getDualStockOrderRefundPreview()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5061) | :closed_lock_with_key:  | GET | `/earn/dual/stock/order-refund-preview` |
| [submitDualStockOrderRefund()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5070) | :closed_lock_with_key:  | POST | `/earn/dual/stock/order-refund` |
| [updateDualStockOrderReinvest()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5079) | :closed_lock_with_key:  | POST | `/earn/dual/stock/modify-order-reinvest` |
| [getEarnFixedTermProducts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5090) |  | GET | `/earn/fixed-term/product` |
| [getEarnFixedTermProductsByAsset()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5099) |  | GET | `/earn/fixed-term/product/{asset}/list` |
| [createEarnFixedTermLend()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5109) | :closed_lock_with_key:  | POST | `/earn/fixed-term/user/lend` |
| [getEarnFixedTermLends()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5118) | :closed_lock_with_key:  | GET | `/earn/fixed-term/user/lend` |
| [createEarnFixedTermPreRedeem()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5127) | :closed_lock_with_key:  | POST | `/earn/fixed-term/user/pre-redeem` |
| [getEarnFixedTermHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5138) | :closed_lock_with_key:  | GET | `/earn/fixed-term/user/history` |
| [createAutoInvestPlan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5147) | :closed_lock_with_key:  | POST | `/earn/autoinvest/plans/create` |
| [updateAutoInvestPlan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5156) | :closed_lock_with_key:  | POST | `/earn/autoinvest/plans/update` |
| [stopAutoInvestPlan()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5163) | :closed_lock_with_key:  | POST | `/earn/autoinvest/plans/stop` |
| [addAutoInvestPlanPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5170) | :closed_lock_with_key:  | POST | `/earn/autoinvest/plans/add_position` |
| [getAutoInvestCoins()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5181) | :closed_lock_with_key:  | GET | `/earn/autoinvest/coins` |
| [getAutoInvestMinAmount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5190) | :closed_lock_with_key:  | POST | `/earn/autoinvest/min_invest_amount` |
| [getAutoInvestPlanRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5201) | :closed_lock_with_key:  | GET | `/earn/autoinvest/plans/records` |
| [getAutoInvestOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5210) | :closed_lock_with_key:  | GET | `/earn/autoinvest/orders` |
| [getAutoInvestConfig()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5219) | :closed_lock_with_key:  | GET | `/earn/autoinvest/config` |
| [getAutoInvestPlanDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5226) | :closed_lock_with_key:  | GET | `/earn/autoinvest/plans/detail` |
| [getAutoInvestPlans()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5235) | :closed_lock_with_key:  | GET | `/earn/autoinvest/plans/list_info` |
| [getStakingCoins()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5247) | :closed_lock_with_key:  | GET | `/earn/staking/coins` |
| [submitStakingSwap()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5260) | :closed_lock_with_key:  | POST | `/earn/staking/swap` |
| [getAccountDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5279) | :closed_lock_with_key:  | GET | `/account/detail` |
| [getAccountRateLimit()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5288) | :closed_lock_with_key:  | GET | `/account/rate_limit` |
| [createStpGroup()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5298) | :closed_lock_with_key:  | POST | `/account/stp_groups` |
| [getStpGroups()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5308) | :closed_lock_with_key:  | GET | `/account/stp_groups` |
| [getStpGroupUsers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5318) | :closed_lock_with_key:  | GET | `/account/stp_groups/{stp_id}/users` |
| [addUsersToStpGroup()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5328) | :closed_lock_with_key:  | POST | `/account/stp_groups/{stp_id}/users` |
| [deleteUserFromStpGroup()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5344) | :closed_lock_with_key:  | DELETE | `/account/stp_groups/{stp_id}/users` |
| [setGTDeduction()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5362) | :closed_lock_with_key:  | POST | `/account/debit_fee` |
| [getGTDeduction()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5373) | :closed_lock_with_key:  | GET | `/account/debit_fee` |
| [getAccountMainKeys()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5382) | :closed_lock_with_key:  | GET | `/account/main_keys` |
| [getAgencyTransactionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5398) | :closed_lock_with_key:  | GET | `/rebate/agency/transaction_history` |
| [getAgencyCommissionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5411) | :closed_lock_with_key:  | GET | `/rebate/agency/commission_history` |
| [getPartnerTransactionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5425) | :closed_lock_with_key:  | GET | `/rebate/partner/transaction_history` |
| [getPartnerCommissionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5440) | :closed_lock_with_key:  | GET | `/rebate/partner/commission_history` |
| [getPartnerSubordinateList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5463) | :closed_lock_with_key:  | GET | `/rebate/partner/sub_list` |
| [getPartnerAgentDataAggregated()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5473) | :closed_lock_with_key:  | GET | `/rebate/partner/data/aggregated` |
| [getBrokerCommissionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5486) | :closed_lock_with_key:  | GET | `/rebate/broker/commission_history` |
| [getBrokerTransactionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5499) | :closed_lock_with_key:  | GET | `/rebate/broker/transaction_history` |
| [getUserRebateInfo()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5508) | :closed_lock_with_key:  | GET | `/rebate/user/info` |
| [createOTCQuote()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5543) | :closed_lock_with_key:  | POST | `/otc/quote` |
| [createOTCFiatOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5555) | :closed_lock_with_key:  | POST | `/otc/order/create` |
| [createOTCStablecoinOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5569) | :closed_lock_with_key:  | POST | `/otc/stable_coin/order/create` |
| [getOTCBankList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5578) | :closed_lock_with_key:  | GET | `/otc/bank/list` |
| [getOTCBankListLegacy()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5585) | :closed_lock_with_key:  | GET | `/otc/bank_list` |
| [createOTCUploadPreUpload()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5589) | :closed_lock_with_key:  | POST | `/otc/upload/pre_upload` |
| [createOTCBank()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5598) | :closed_lock_with_key:  | POST | `/otc/bank/create` |
| [deleteOTCBank()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5612) | :closed_lock_with_key:  | POST | `/otc/bank/delete` |
| [setDefaultOTCBank()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5619) | :closed_lock_with_key:  | POST | `/otc/bank/set_default` |
| [getOTCBankSupplementChecklist()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5626) | :closed_lock_with_key:  | GET | `/otc/bank/bank_supplement_checklist` |
| [submitOTCBankPersonalSupplement()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5635) | :closed_lock_with_key:  | POST | `/otc/order/paid` |
| [submitOTCBankEnterpriseSupplement()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5654) | :closed_lock_with_key:  | POST | `/otc/order/paid` |
| [markOTCOrderAsPaid()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5690) | :closed_lock_with_key:  | POST | `/otc/order/paid` |
| [cancelOTCOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5704) | :closed_lock_with_key:  | POST | `/otc/order/cancel` |
| [getOTCFiatOrderList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5716) | :closed_lock_with_key:  | GET | `/otc/order/list` |
| [getOTCStablecoinOrderList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5730) | :closed_lock_with_key:  | GET | `/otc/stable_coin/order/list` |
| [getOTCFiatOrderDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5744) | :closed_lock_with_key:  | GET | `/otc/order/detail` |
| [getP2PMerchantUserInfo()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5758) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/get_user_info` |
| [getP2PMerchantCounterpartyUserInfo()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5767) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/get_counterparty_user_info` |
| [getP2PMerchantMyselfPayment()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5779) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/get_myself_payment` |
| [getP2PMerchantSpotBalance()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5792) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/set_merchant_work_hours` |
| [setP2PMerchantWorkHours()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5801) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/set_merchant_work_hours` |
| [getP2PMerchantPendingTransactionList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5812) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/get_pending_transaction_list` |
| [getP2PMerchantCompletedTransactionList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5824) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/get_completed_transaction_list` |
| [getP2PMerchantTransactionDetails()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5836) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/get_transaction_details` |
| [confirmP2PMerchantPayment()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5848) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/confirm-payment` |
| [confirmP2PMerchantReceipt()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5859) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/confirm-receipt` |
| [cancelP2PMerchantTransaction()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5870) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/cancel` |
| [placeP2PMerchantBizPushOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5881) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/place_biz_push_order` |
| [updateP2PMerchantAdsStatus()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5892) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/ads_update_status` |
| [getP2PMerchantAdsDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5905) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/ads_detail` |
| [getP2PMerchantMyAdsList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5914) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/my_ads_list` |
| [getP2PMerchantAdsList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5925) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/ads_list` |
| [getP2PMerchantChatsList()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5934) | :closed_lock_with_key:  | POST | `/p2p/merchant/chat/get_chats_list` |
| [sendP2PMerchantChatMessage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5945) | :closed_lock_with_key:  | POST | `/p2p/merchant/chat/send_chat_message` |
| [uploadP2PMerchantChatFile()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5957) | :closed_lock_with_key:  | POST | `/p2p/merchant/chat/upload_chat_file` |
| [preUploadP2PMerchantChatFile()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5973) | :closed_lock_with_key:  | POST | `/p2p/merchant/chat/pre_upload_chat_file` |
| [getCrossExSymbols()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L5996) |  | GET | `/crossex/rule/symbols` |
| [getCrossExRiskLimits()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6008) |  | GET | `/crossex/rule/risk_limits` |
| [getCrossExTransferCoins()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6022) |  | GET | `/crossex/transfers/coin` |
| [createCrossExTransfer()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6036) | :closed_lock_with_key:  | POST | `/crossex/transfers` |
| [getCrossExTransferHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6050) | :closed_lock_with_key:  | GET | `/crossex/transfers` |
| [createCrossExOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6067) | :closed_lock_with_key:  | POST | `/crossex/orders` |
| [cancelBatchCrossExOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6081) | :closed_lock_with_key:  | POST | `/crossex/batch_cancel_orders` |
| [cancelCrossExOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6095) | :closed_lock_with_key:  | DELETE | `/crossex/orders/{order_id}` |
| [modifyCrossExOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6108) | :closed_lock_with_key:  | PUT | `/crossex/orders/{order_id}` |
| [getCrossExOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6123) | :closed_lock_with_key:  | GET | `/crossex/orders/{order_id}` |
| [createCrossExConvertQuote()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6135) | :closed_lock_with_key:  | POST | `/crossex/convert/quote` |
| [createCrossExConvertOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6149) | :closed_lock_with_key:  | POST | `/crossex/convert/orders` |
| [updateCrossExAccount()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6163) | :closed_lock_with_key:  | PUT | `/crossex/accounts` |
| [getCrossExAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6177) | :closed_lock_with_key:  | GET | `/crossex/accounts` |
| [setCrossExPositionLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6189) | :closed_lock_with_key:  | POST | `/crossex/positions/leverage` |
| [getCrossExPositionLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6203) | :closed_lock_with_key:  | GET | `/crossex/positions/leverage` |
| [setCrossExMarginPositionLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6217) | :closed_lock_with_key:  | POST | `/crossex/margin_positions/leverage` |
| [getCrossExMarginPositionLeverage()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6233) | :closed_lock_with_key:  | GET | `/crossex/margin_positions/leverage` |
| [closeCrossExPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6247) | :closed_lock_with_key:  | POST | `/crossex/position` |
| [updateCrossExPositionsMargin()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6253) | :closed_lock_with_key:  | POST | `/crossex/positions/margin` |
| [getCrossExInterestRate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6267) | :closed_lock_with_key:  | GET | `/crossex/interest_rate` |
| [getCrossExFeeRate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6280) | :closed_lock_with_key:  | GET | `/crossex/fee` |
| [getCrossExPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6292) | :closed_lock_with_key:  | GET | `/crossex/positions` |
| [getCrossExSecurityPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6306) | :closed_lock_with_key:  | GET | `/crossex/security_positions` |
| [getCrossExMarginPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6320) | :closed_lock_with_key:  | GET | `/crossex/margin_positions` |
| [getCrossExAdlRank()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6334) | :closed_lock_with_key:  | GET | `/crossex/adl_rank` |
| [getCrossExOpenOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6346) | :closed_lock_with_key:  | GET | `/crossex/open_orders` |
| [getCrossExHistoryOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6360) | :closed_lock_with_key:  | GET | `/crossex/history_orders` |
| [getCrossExHistoryPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6374) | :closed_lock_with_key:  | GET | `/crossex/history_positions` |
| [getCrossExHistoryMarginPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6388) | :closed_lock_with_key:  | GET | `/crossex/history_margin_positions` |
| [getCrossExHistoryMarginInterests()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6402) | :closed_lock_with_key:  | GET | `/crossex/history_margin_interests` |
| [getCrossExHistoryTrades()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6416) | :closed_lock_with_key:  | GET | `/crossex/history_trades` |
| [getCrossExAccountBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6432) | :closed_lock_with_key:  | GET | `/crossex/account_book` |
| [getCrossExCoinDiscountRate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6446) | :closed_lock_with_key:  | GET | `/crossex/coin_discount_rate` |
| [getCrossExMarketTickers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6460) |  | GET | `/crossex/market/tickers` |
| [getCrossExMarketFundingInfo()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6474) |  | GET | `/crossex/market/funding_info` |
| [getAlphaAccounts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6492) | :closed_lock_with_key:  | GET | `/alpha/accounts` |
| [getAlphaAccountBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6504) | :closed_lock_with_key:  | GET | `/alpha/account_book` |
| [createAlphaQuote()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6518) | :closed_lock_with_key:  | POST | `/alpha/quote` |
| [createAlphaOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6530) | :closed_lock_with_key:  | POST | `/alpha/orders` |
| [getAlphaOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6542) | :closed_lock_with_key:  | GET | `/alpha/orders` |
| [getAlphaOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6554) | :closed_lock_with_key:  | GET | `/alpha/order` |
| [getAlphaCurrencies()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6566) |  | GET | `/alpha/currencies` |
| [getAlphaTickers()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6578) |  | GET | `/alpha/tickers` |
| [getTradFiMT5Account()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6584) | :closed_lock_with_key:  | GET | `/tradfi/users/mt5-account` |
| [getTradFiSymbolCategories()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6588) |  | GET | `/tradfi/symbols/categories` |
| [getTradFiSymbols()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6594) |  | GET | `/tradfi/symbols` |
| [getTradFiSymbolCommissions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6606) | :closed_lock_with_key:  | GET | `/tradfi/symbols/commissions` |
| [getTradFiSymbolDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6612) | :closed_lock_with_key:  | GET | `/tradfi/symbols/detail` |
| [getTradFiKlines()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6627) |  | GET | `/tradfi/symbols/{symbol}/klines` |
| [getTradFiTicker()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6634) |  | GET | `/tradfi/symbols/{symbol}/tickers` |
| [createTradFiUser()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6638) | :closed_lock_with_key:  | POST | `/tradfi/users` |
| [getTradFiAssets()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6642) | :closed_lock_with_key:  | GET | `/tradfi/users/assets` |
| [createTradFiTransaction()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6646) | :closed_lock_with_key:  | POST | `/tradfi/transactions` |
| [getTradFiTransactions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6652) | :closed_lock_with_key:  | GET | `/tradfi/transactions` |
| [createTradFiOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6658) | :closed_lock_with_key:  | POST | `/tradfi/orders` |
| [getTradFiOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6664) | :closed_lock_with_key:  | GET | `/tradfi/orders` |
| [modifyTradFiOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6668) | :closed_lock_with_key:  | PUT | `/tradfi/orders/{orderId}` |
| [cancelTradFiOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6675) | :closed_lock_with_key:  | DELETE | `/tradfi/orders/{orderId}` |
| [getTradFiOrderHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6679) | :closed_lock_with_key:  | GET | `/tradfi/orders/history` |
| [getTradFiPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6685) | :closed_lock_with_key:  | GET | `/tradfi/positions` |
| [modifyTradFiPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6691) | :closed_lock_with_key:  | PUT | `/tradfi/positions/{positionId}` |
| [closeTradFiPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6700) | :closed_lock_with_key:  | POST | `/tradfi/positions/{positionId}/close` |
| [getTradFiPositionHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6709) | :closed_lock_with_key:  | GET | `/tradfi/positions/history` |
| [getTradFiOrderLog()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6718) | :closed_lock_with_key:  | GET | `/tradfi/orders/log/{log_id}` |
| [getStockUserAssets()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6732) | :closed_lock_with_key:  | GET | `/stock/users/assets` |
| [setStockMarginFeature()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6744) | :closed_lock_with_key:  | PUT | `/stock/users/margin-feature` |
| [getStockBalanceRecords()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6756) | :closed_lock_with_key:  | GET | `/stock/users/balance-records` |
| [getStockSymbols()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6768) |  | GET | `/stock/symbols` |
| [getStockSymbolDetail()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6780) | :closed_lock_with_key:  | GET | `/stock/symbols/detail` |
| [getStockOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6792) |  | GET | `/stock/market/{symbol}/orderbook` |
| [getStockOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6802) | :closed_lock_with_key:  | GET | `/stock/orders` |
| [createStockOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6816) | :closed_lock_with_key:  | POST | `/stock/orders` |
| [cancelAllStockOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6827) | :closed_lock_with_key:  | DELETE | `/stock/orders` |
| [getStockOrderHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6837) | :closed_lock_with_key:  | GET | `/stock/orders/history` |
| [getStockOrderDeals()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6849) | :closed_lock_with_key:  | GET | `/stock/orders/deals` |
| [updateStockOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6862) | :closed_lock_with_key:  | PUT | `/stock/orders/{orderId}` |
| [cancelStockOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6875) | :closed_lock_with_key:  | DELETE | `/stock/orders/{orderId}` |
| [getStockPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6887) | :closed_lock_with_key:  | GET | `/stock/positions` |
| [closeStockPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6899) | :closed_lock_with_key:  | POST | `/stock/positions/close` |
| [getStockTransactions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6911) | :closed_lock_with_key:  | GET | `/stock/transactions` |
| [createStockTransaction()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6925) | :closed_lock_with_key:  | POST | `/stock/transactions` |
| [getStockExchanges()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6936) |  | GET | `/stock/exchanges` |
| [getStockFeeRate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6947) |  | GET | `/stock/fee-rate` |
| [getStockOptionFeeRate()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6960) |  | GET | `/stock_options/fee-rate` |
| [getStockOptionUnderlyings()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6972) |  | GET | `/stock_options/underlyings` |
| [getStockOptionContracts()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L6988) |  | GET | `/stock_options/contracts` |
| [getStockOptionExpirations()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L7004) |  | GET | `/stock_options/market/expirations` |
| [getStockOptionChain()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L7018) |  | GET | `/stock_options/market/chain` |
| [getStockOptionOrderBook()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L7032) |  | GET | `/stock_options/market/{symbol}/orderbook` |
| [getStockOptionPositions()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L7046) | :closed_lock_with_key:  | GET | `/stock_options/positions` |
| [closeStockOptionPosition()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L7060) | :closed_lock_with_key:  | POST | `/stock_options/positions/close` |
| [getStockOptionOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L7074) | :closed_lock_with_key:  | GET | `/stock_options/orders` |
| [createStockOptionOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L7088) | :closed_lock_with_key:  | POST | `/stock_options/orders` |
| [cancelAllStockOptionOrders()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L7102) | :closed_lock_with_key:  | DELETE | `/stock_options/orders` |
| [getStockOptionOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L7116) | :closed_lock_with_key:  | GET | `/stock_options/orders/{orderId}` |
| [updateStockOptionOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L7131) | :closed_lock_with_key:  | PUT | `/stock_options/orders/{orderId}` |
| [cancelStockOptionOrder()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L7148) | :closed_lock_with_key:  | DELETE | `/stock_options/orders/{orderId}` |
| [getStockOptionOrderHistory()](https://github.com/sieblyio/gateio-api/blob/master/src/RestClient.ts#L7162) | :closed_lock_with_key:  | GET | `/stock_options/orders/history` |

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