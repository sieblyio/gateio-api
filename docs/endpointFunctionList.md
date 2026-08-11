
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/gateio-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/tiagosiebler/gateio-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/tiagosiebler/gateio-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/tiagosiebler/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

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
| [getSystemMaintenanceStatus()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L703) |  | GET | `/v1/public/system_info` |
| [submitWithdrawal()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L720) | :closed_lock_with_key:  | POST | `/withdrawals` |
| [submitSpotMainAccountTransfer()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L734) | :closed_lock_with_key:  | POST | `/withdrawals/push` |
| [cancelWithdrawal()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L750) | :closed_lock_with_key:  | DELETE | `/withdrawals/{withdrawal_id}` |
| [getCurrencyChains()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L767) |  | GET | `/wallet/currency_chains` |
| [createDepositAddress()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L777) | :closed_lock_with_key:  | GET | `/wallet/deposit_address` |
| [getWithdrawalRecords()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L791) | :closed_lock_with_key:  | GET | `/wallet/withdrawals` |
| [getDepositRecords()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L805) | :closed_lock_with_key:  | GET | `/wallet/deposits` |
| [submitTransfer()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L824) | :closed_lock_with_key:  | POST | `/wallet/transfers` |
| [getTransfer()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L828) | :closed_lock_with_key:  | GET | `/wallet/transfers` |
| [submitMainSubTransfer()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L840) | :closed_lock_with_key:  | POST | `/wallet/sub_account_transfers` |
| [getMainSubTransfers()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L854) | :closed_lock_with_key:  | GET | `/wallet/sub_account_transfers` |
| [submitSubToSubTransfer()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L868) | :closed_lock_with_key:  | POST | `/wallet/sub_account_to_sub_account` |
| [getTransferStatus()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L883) | :closed_lock_with_key:  | GET | `/wallet/order_status` |
| [getWithdrawalStatus()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L899) | :closed_lock_with_key:  | GET | `/wallet/withdraw_status` |
| [getSubBalance()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L911) | :closed_lock_with_key:  | GET | `/wallet/sub_account_balances` |
| [getSubMarginBalances()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L923) | :closed_lock_with_key:  | GET | `/wallet/sub_account_margin_balances` |
| [getSubFuturesBalances()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L935) | :closed_lock_with_key:  | GET | `/wallet/sub_account_futures_balances` |
| [getSubCrossMarginBalances()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L948) | :closed_lock_with_key:  | GET | `/wallet/sub_account_cross_margin_balances` |
| [getSavedAddresses()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L960) | :closed_lock_with_key:  | GET | `/wallet/saved_address` |
| [getTradingFees()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L970) | :closed_lock_with_key:  | GET | `/wallet/fee` |
| [getBalances()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L991) | :closed_lock_with_key:  | GET | `/wallet/total_balance` |
| [getSmallBalances()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1000) | :closed_lock_with_key:  | GET | `/wallet/small_balance` |
| [convertSmallBalance()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1010) | :closed_lock_with_key:  | POST | `/wallet/small_balance` |
| [getSmallBalanceHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1023) | :closed_lock_with_key:  | GET | `/wallet/small_balance_history` |
| [getPushOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1035) | :closed_lock_with_key:  | GET | `/wallet/push` |
| [getLowCapExchangeList()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1044) | :closed_lock_with_key:  | GET | `/wallet/getLowCapExchangeList` |
| [createSubAccount()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1059) | :closed_lock_with_key:  | POST | `/sub_accounts` |
| [getSubAccounts()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1070) | :closed_lock_with_key:  | GET | `/sub_accounts` |
| [getSubAccount()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1080) | :closed_lock_with_key:  | GET | `/sub_accounts/{user_id}` |
| [createSubAccountApiKey()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1090) | :closed_lock_with_key:  | POST | `/sub_accounts/{user_id}/keys` |
| [getSubAccountApiKeys()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1103) | :closed_lock_with_key:  | GET | `/sub_accounts/{user_id}/keys` |
| [updateSubAccountApiKey()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1117) | :closed_lock_with_key:  | PUT | `/sub_accounts/{user_id}/keys/{key}` |
| [deleteSubAccountApiKey()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1128) | :closed_lock_with_key:  | DELETE | `/sub_accounts/{user_id}/keys/{key}` |
| [getSubAccountApiKey()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1143) | :closed_lock_with_key:  | GET | `/sub_accounts/{user_id}/keys/{key}` |
| [lockSubAccount()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1158) | :closed_lock_with_key:  | POST | `/sub_accounts/{user_id}/lock` |
| [unlockSubAccount()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1168) | :closed_lock_with_key:  | POST | `/sub_accounts/{user_id}/unlock` |
| [getSubAccountMode()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1182) | :closed_lock_with_key:  | GET | `/sub_accounts/unified_mode` |
| [getUnifiedAccountInfo()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1201) | :closed_lock_with_key:  | GET | `/unified/accounts` |
| [getUnifiedMaxBorrow()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1217) | :closed_lock_with_key:  | GET | `/unified/borrowable` |
| [getUnifiedMaxTransferable()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1233) | :closed_lock_with_key:  | GET | `/unified/transferable` |
| [getUnifiedMaxTransferables()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1248) | :closed_lock_with_key:  | GET | `/unified/transferables` |
| [getUnifiedBatchMaxBorrowable()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1257) | :closed_lock_with_key:  | GET | `/unified/batch_borrowable` |
| [submitUnifiedBorrowOrRepay()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1275) | :closed_lock_with_key:  | POST | `/unified/loans` |
| [getUnifiedLoans()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1287) | :closed_lock_with_key:  | GET | `/unified/loans` |
| [getUnifiedLoanRecords()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1297) | :closed_lock_with_key:  | GET | `/unified/loan_records` |
| [getUnifiedInterestRecords()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1309) | :closed_lock_with_key:  | GET | `/unified/interest_records` |
| [getUnifiedRiskUnitDetails()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1320) | :closed_lock_with_key:  | GET | `/unified/risk_units` |
| [setUnifiedAccountMode()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1332) | :closed_lock_with_key:  | PUT | `/unified/unified_mode` |
| [getUnifiedAccountMode()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1341) | :closed_lock_with_key:  | GET | `/unified/unified_mode` |
| [getUnifiedEstimateRate()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1353) | :closed_lock_with_key:  | GET | `/unified/estimate_rate` |
| [getUnifiedCurrencyDiscountTiers()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1364) |  | GET | `/unified/currency_discount_tiers` |
| [getLoanMarginTiers()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1376) |  | GET | `/unified/loan_margin_tiers` |
| [portfolioMarginCalculate()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1393) |  | POST | `/unified/portfolio_calculator` |
| [setUserLeverage()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1399) | :closed_lock_with_key:  | POST | `/unified/leverage/user_setting` |
| [getUserCurrencyLeverageConfig()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1413) | :closed_lock_with_key:  | GET | `/unified/leverage/user_currency_config` |
| [getUserCurrencyLeverageSettings()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1427) | :closed_lock_with_key:  | GET | `/unified/leverage/user_currency_setting` |
| [updateUserCurrencyLeverage()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1442) | :closed_lock_with_key:  | POST | `/unified/leverage/user_currency_setting` |
| [getUnifiedLoanCurrencies()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1457) | :closed_lock_with_key:  | GET | `/unified/currencies` |
| [getHistoricalLendingRates()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1469) | :closed_lock_with_key:  | GET | `/unified/history_loan_rate` |
| [submitUnifiedLoanRepay()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1475) | :closed_lock_with_key:  | POST | `/unified/loans/repay` |
| [getEstimatedQuickRepayment()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1482) | :closed_lock_with_key:  | GET | `/unified/estimated_quick_repayment` |
| [createQuickRepayment()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1489) | :closed_lock_with_key:  | POST | `/unified/quick_repayment` |
| [setUnifiedDeltaNeutral()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1500) | :closed_lock_with_key:  | POST | `/unified/delta_neutral` |
| [getUnifiedDeltaNeutral()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1509) | :closed_lock_with_key:  | GET | `/unified/delta_neutral` |
| [getSpotCurrencies()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1529) |  | GET | `/spot/currencies` |
| [getSpotCurrency()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1539) |  | GET | `/spot/currencies/{currency}` |
| [getSpotCurrencyPairs()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1548) |  | GET | `/spot/currency_pairs` |
| [getSpotCurrencyPair()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1558) |  | GET | `/spot/currency_pairs/{currency_pair}` |
| [getSpotTicker()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1572) |  | GET | `/spot/tickers` |
| [getSpotOrderBook()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1587) |  | GET | `/spot/order_book` |
| [getSpotTrades()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1600) |  | GET | `/spot/trades` |
| [getSpotCandles()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1612) |  | GET | `/spot/candlesticks` |
| [getSpotFeeRates()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1624) | :closed_lock_with_key:  | GET | `/spot/fee` |
| [getSpotBatchFeeRates()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1633) | :closed_lock_with_key:  | GET | `/spot/batch_fee` |
| [getSpotAccounts()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1645) | :closed_lock_with_key:  | GET | `/spot/accounts` |
| [getSpotAccountBook()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1657) | :closed_lock_with_key:  | GET | `/spot/account_book` |
| [submitSpotBatchOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1676) | :closed_lock_with_key:  | POST | `/spot/batch_orders` |
| [getSpotOpenOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1703) | :closed_lock_with_key:  | GET | `/spot/open_orders` |
| [submitSpotClosePosCrossDisabled()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1719) | :closed_lock_with_key:  | POST | `/spot/cross_liquidate_orders` |
| [submitSpotOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1735) | :closed_lock_with_key:  | POST | `/spot/orders` |
| [getSpotOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1752) | :closed_lock_with_key:  | GET | `/spot/orders` |
| [cancelSpotOpenOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1767) | :closed_lock_with_key:  | DELETE | `/spot/orders` |
| [batchCancelSpotOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1795) | :closed_lock_with_key:  | POST | `/spot/cancel_batch_orders` |
| [getSpotOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1820) | :closed_lock_with_key:  | GET | `/spot/orders/{order_id}` |
| [updateSpotOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1837) | :closed_lock_with_key:  | PATCH | `/spot/orders/{order_id}` |
| [cancelSpotOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1865) | :closed_lock_with_key:  | DELETE | `/spot/orders/{order_id}` |
| [getSpotTradingHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1894) | :closed_lock_with_key:  | GET | `/spot/my_trades` |
| [submitSpotCountdownOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1923) | :closed_lock_with_key:  | POST | `/spot/countdown_cancel_all` |
| [batchUpdateSpotOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1942) | :closed_lock_with_key:  | POST | `/spot/amend_batch_orders` |
| [getSpotInsuranceHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1969) | :closed_lock_with_key:  | GET | `/spot/insurance_history` |
| [submitSpotPriceTriggerOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1983) | :closed_lock_with_key:  | POST | `/spot/price_orders` |
| [getSpotAutoOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L1995) | :closed_lock_with_key:  | GET | `/spot/price_orders` |
| [cancelAllOpenSpotOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2007) | :closed_lock_with_key:  | DELETE | `/spot/price_orders` |
| [getPriceTriggeredOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2020) | :closed_lock_with_key:  | GET | `/spot/price_orders/{order_id}` |
| [cancelSpotTriggeredOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2032) | :closed_lock_with_key:  | DELETE | `/spot/price_orders/{order_id}` |
| [listSpotPovOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2038) | :closed_lock_with_key:  | GET | `/spot/pov_orders` |
| [createSpotPovOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2042) | :closed_lock_with_key:  | POST | `/spot/pov_orders` |
| [cancelSpotPovOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2046) | :closed_lock_with_key:  | POST | `/spot/pov_orders/cancel` |
| [getSpotPovOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2052) | :closed_lock_with_key:  | GET | `/spot/pov_orders/{order_id}` |
| [cancelSpotPovOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2056) | :closed_lock_with_key:  | POST | `/spot/pov_orders/{order_id}/cancel` |
| [setCollateralCurrency()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2068) | :closed_lock_with_key:  | POST | `/unified/collateral_currencies` |
| [getMarginAccounts()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2089) | :closed_lock_with_key:  | GET | `/margin/accounts` |
| [getMarginBalanceHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2103) | :closed_lock_with_key:  | GET | `/margin/account_book` |
| [getFundingAccounts()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2121) | :closed_lock_with_key:  | GET | `/margin/funding_accounts` |
| [updateAutoRepaymentSetting()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2139) | :closed_lock_with_key:  | POST | `/margin/auto_repay` |
| [getAutoRepaymentSetting()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2150) | :closed_lock_with_key:  | GET | `/margin/auto_repay` |
| [getMarginTransferableAmount()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2164) | :closed_lock_with_key:  | GET | `/margin/transferable` |
| [getCrossMarginCurrencies()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2181) |  | GET | `/margin/cross/currencies` |
| [getCrossMarginCurrency()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2192) |  | GET | `/margin/cross/currencies/{currency}` |
| [getCrossMarginAccount()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2204) | :closed_lock_with_key:  | GET | `/margin/cross/accounts` |
| [getCrossMarginAccountHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2217) | :closed_lock_with_key:  | GET | `/margin/cross/account_book` |
| [submitCrossMarginBorrowLoan()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2234) | :closed_lock_with_key:  | POST | `/margin/cross/loans` |
| [getCrossMarginBorrowHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2249) | :closed_lock_with_key:  | GET | `/margin/cross/loans` |
| [getCrossMarginBorrowLoan()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2262) | :closed_lock_with_key:  | GET | `/margin/cross/loans/{loan_id}` |
| [submitCrossMarginRepayment()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2277) | :closed_lock_with_key:  | POST | `/margin/cross/repayments` |
| [getCrossMarginRepayments()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2293) | :closed_lock_with_key:  | GET | `/margin/cross/repayments` |
| [getCrossMarginInterestRecords()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2306) | :closed_lock_with_key:  | GET | `/margin/cross/interest_records` |
| [getCrossMarginTransferableAmount()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2322) | :closed_lock_with_key:  | GET | `/margin/cross/transferable` |
| [getEstimatedInterestRates()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2338) | :closed_lock_with_key:  | GET | `/margin/cross/estimate_rate` |
| [getCrossMarginBorrowableAmount()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2352) | :closed_lock_with_key:  | GET | `/margin/cross/borrowable` |
| [getMarginUserLoanTiers()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2365) | :closed_lock_with_key:  | GET | `/margin/user/loan_margin_tiers` |
| [getMarginPublicLoanTiers()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2381) |  | GET | `/margin/loan_margin_tiers` |
| [setMarginUserLeverage()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2397) | :closed_lock_with_key:  | POST | `/margin/leverage/user_market_setting` |
| [getMarginUserAccounts()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2414) | :closed_lock_with_key:  | GET | `/margin/user/account` |
| [getLendingMarkets()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2429) |  | GET | `/margin/uni/currency_pairs` |
| [getLendingMarket()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2444) |  | GET | `/margin/uni/currency_pairs/{currency_pair}` |
| [getEstimatedInterestRate()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2456) | :closed_lock_with_key:  | GET | `/margin/uni/estimate_rate` |
| [submitMarginUNIBorrowOrRepay()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2466) | :closed_lock_with_key:  | POST | `/margin/uni/loans` |
| [getMarginUNILoans()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2482) | :closed_lock_with_key:  | GET | `/margin/uni/loans` |
| [getMarginUNILoanRecords()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2492) | :closed_lock_with_key:  | GET | `/margin/uni/loan_records` |
| [getMarginUNIInterestRecords()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2504) | :closed_lock_with_key:  | GET | `/margin/uni/interest_records` |
| [getMarginUNIMaxBorrow()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2516) | :closed_lock_with_key:  | GET | `/margin/uni/borrowable` |
| [getFlashSwapCurrencyPairs()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2532) |  | GET | `/flash_swap/currency_pairs` |
| [submitFlashSwapOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2548) | :closed_lock_with_key:  | POST | `/flash_swap/orders` |
| [getFlashSwapOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2560) | :closed_lock_with_key:  | GET | `/flash_swap/orders` |
| [getFlashSwapOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2572) | :closed_lock_with_key:  | GET | `/flash_swap/orders/{order_id}` |
| [submitFlashSwapOrderPreview()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2582) | :closed_lock_with_key:  | POST | `/flash_swap/orders/preview` |
| [getFuturesContracts()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2599) |  | GET | `/futures/{settle}/contracts` |
| [getFuturesContract()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2614) |  | GET | `/futures/{settle}/contracts/{contract}` |
| [getFuturesOrderBook()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2629) |  | GET | `/futures/{settle}/order_book` |
| [getFuturesTrades()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2642) |  | GET | `/futures/{settle}/trades` |
| [getFuturesCandles()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2657) |  | GET | `/futures/{settle}/candlesticks` |
| [getPremiumIndexKLines()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2670) |  | GET | `/futures/{settle}/premium_index` |
| [getFuturesTickers()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2683) |  | GET | `/futures/{settle}/tickers` |
| [getFundingRates()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2700) |  | GET | `/futures/{settle}/funding_rate` |
| [getBatchFundingRates()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2716) |  | POST | `/futures/{settle}/funding_rates` |
| [getFuturesInsuranceBalanceHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2734) |  | GET | `/futures/{settle}/insurance` |
| [getFuturesStats()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2753) |  | GET | `/futures/{settle}/contract_stats` |
| [getIndexConstituents()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2764) |  | GET | `/futures/{settle}/index_constituents/{index}` |
| [getLiquidationHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2781) |  | GET | `/futures/{settle}/liq_orders` |
| [getRiskLimitTiers()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2798) |  | GET | `/futures/{settle}/risk_limit_tiers` |
| [getFuturesAccount()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2811) | :closed_lock_with_key:  | GET | `/futures/{settle}/accounts` |
| [getFuturesAccountBook()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2825) | :closed_lock_with_key:  | GET | `/futures/{settle}/account_book` |
| [getFuturesPositions()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2838) | :closed_lock_with_key:  | GET | `/futures/{settle}/positions` |
| [getFuturesPosition()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2853) | :closed_lock_with_key:  | GET | `/futures/{settle}/positions/{contract}` |
| [updateFuturesMargin()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2870) | :closed_lock_with_key:  | POST | `/futures/{settle}/positions/{contract}/margin` |
| [updateFuturesLeverage()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2898) | :closed_lock_with_key:  | POST | `/futures/{settle}/positions/{contract}/leverage` |
| [getFuturesContractLeverage()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2918) | :closed_lock_with_key:  | GET | `/futures/{settle}/get_leverage/{contract}` |
| [updateFuturesPositionMode()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2934) | :closed_lock_with_key:  | POST | `/futures/{settle}/positions/cross_mode` |
| [updatePositionRiskLimit()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2951) | :closed_lock_with_key:  | POST | `/futures/{settle}/positions/{contract}/risk_limit` |
| [updateFuturesDualMode()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2971) | :closed_lock_with_key:  | POST | `/futures/{settle}/dual_mode` |
| [getDualModePosition()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2987) | :closed_lock_with_key:  | GET | `/futures/{settle}/dual_comp/positions/{contract}` |
| [updateDualModePositionMargin()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3002) | :closed_lock_with_key:  | POST | `/futures/{settle}/dual_comp/positions/{contract}/margin` |
| [updateDualModePositionLeverage()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3018) | :closed_lock_with_key:  | POST | `/futures/{settle}/dual_comp/positions/{contract}/leverage` |
| [updateDualModePositionRiskLimit()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3042) | :closed_lock_with_key:  | POST | `/futures/{settle}/dual_comp/positions/{contract}/risk_limit` |
| [submitFuturesOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3069) | :closed_lock_with_key:  | POST | `/futures/{settle}/orders` |
| [getFuturesOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3090) | :closed_lock_with_key:  | GET | `/futures/{settle}/orders` |
| [cancelAllFuturesOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3105) | :closed_lock_with_key:  | DELETE | `/futures/{settle}/orders` |
| [getFuturesOrdersByTimeRange()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3125) | :closed_lock_with_key:  | GET | `/futures/{settle}/orders_timerange` |
| [submitFuturesBatchOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3148) | :closed_lock_with_key:  | POST | `/futures/{settle}/batch_orders` |
| [getFuturesOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3173) | :closed_lock_with_key:  | GET | `/futures/{settle}/orders/{order_id}` |
| [cancelFuturesOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3190) | :closed_lock_with_key:  | DELETE | `/futures/{settle}/orders/{order_id}` |
| [updateFuturesOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3215) | :closed_lock_with_key:  | PUT | `/futures/{settle}/orders/{order_id}` |
| [getFuturesTradingHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3236) | :closed_lock_with_key:  | GET | `/futures/{settle}/my_trades` |
| [getFuturesTradingHistoryByTimeRange()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3251) | :closed_lock_with_key:  | GET | `/futures/{settle}/my_trades_timerange` |
| [getFuturesPositionHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3264) | :closed_lock_with_key:  | GET | `/futures/{settle}/position_close` |
| [getFuturesLiquidationHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3277) | :closed_lock_with_key:  | GET | `/futures/{settle}/liquidates` |
| [getFuturesAutoDeleveragingHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3290) | :closed_lock_with_key:  | GET | `/futures/{settle}/auto_deleverages` |
| [setFuturesOrderCancelCountdown()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3307) | :closed_lock_with_key:  | POST | `/futures/{settle}/countdown_cancel_all` |
| [getFuturesUserTradingFees()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3324) | :closed_lock_with_key:  | GET | `/futures/{settle}/fee` |
| [batchCancelFuturesOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3342) | :closed_lock_with_key:  | POST | `/futures/{settle}/batch_cancel_orders` |
| [batchUpdateFuturesOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3369) | :closed_lock_with_key:  | POST | `/futures/{settle}/batch_amend_orders` |
| [getRiskLimitTable()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3391) |  | GET | `/futures/{settle}/risk_limit_table` |
| [submitFuturesPriceTriggeredOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3404) | :closed_lock_with_key:  | POST | `/futures/{settle}/price_orders` |
| [getFuturesAutoOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3417) | :closed_lock_with_key:  | GET | `/futures/{settle}/price_orders` |
| [cancelAllOpenFuturesOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3430) | :closed_lock_with_key:  | DELETE | `/futures/{settle}/price_orders` |
| [getFuturesPriceTriggeredOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3446) | :closed_lock_with_key:  | GET | `/futures/{settle}/price_orders/{order_id}` |
| [cancelFuturesPriceTriggeredOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3461) | :closed_lock_with_key:  | DELETE | `/futures/{settle}/price_orders/{order_id}` |
| [updateFuturesPriceTriggeredOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3476) | :closed_lock_with_key:  | PUT | `/futures/{settle}/price_orders/amend` |
| [createTrailOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3491) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/trail/create` |
| [terminateTrailOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3509) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/trail/stop` |
| [batchTerminateTrailOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3522) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/trail/stop_all` |
| [getTrailOrderList()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3537) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/trail/list` |
| [getTrailOrderDetail()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3550) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/trail/detail` |
| [updateTrailOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3568) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/trail/update` |
| [getTrailOrderChangeLog()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3581) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/trail/change_log` |
| [createChaseOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3594) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/chase/create` |
| [stopChaseOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3604) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/chase/stop` |
| [stopAllChaseOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3614) | :closed_lock_with_key:  | POST | `/futures/{settle}/autoorder/v1/chase/stop_all` |
| [getChaseOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3626) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/chase/list` |
| [getChaseOrderDetail()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3634) | :closed_lock_with_key:  | GET | `/futures/{settle}/autoorder/v1/chase/detail` |
| [getFuturesPositionCloseHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3643) | :closed_lock_with_key:  | GET | `/futures/{settle}/position_close_history` |
| [getFuturesInsuranceHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3652) | :closed_lock_with_key:  | GET | `/futures/{settle}/insurance` |
| [getAllDeliveryContracts()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3669) |  | GET | `/delivery/{settle}/contracts` |
| [getDeliveryContract()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3681) |  | GET | `/delivery/{settle}/contracts/{contract}` |
| [getDeliveryOrderBook()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3696) |  | GET | `/delivery/{settle}/order_book` |
| [getDeliveryTrades()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3709) |  | GET | `/delivery/{settle}/trades` |
| [getDeliveryCandles()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3723) |  | GET | `/delivery/{settle}/candlesticks` |
| [getDeliveryTickers()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3734) |  | GET | `/delivery/{settle}/tickers` |
| [getDeliveryInsuranceBalanceHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3751) |  | GET | `/delivery/{settle}/insurance` |
| [getDeliveryAccount()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3770) | :closed_lock_with_key:  | GET | `/delivery/{settle}/accounts` |
| [getDeliveryBook()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3781) | :closed_lock_with_key:  | GET | `/delivery/{settle}/account_book` |
| [getDeliveryPositions()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3792) | :closed_lock_with_key:  | GET | `/delivery/{settle}/positions` |
| [getDeliveryPosition()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3802) | :closed_lock_with_key:  | GET | `/delivery/{settle}/positions/{contract}` |
| [updateDeliveryMargin()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3817) | :closed_lock_with_key:  | POST | `/delivery/{settle}/positions/{contract}/margin` |
| [updateDeliveryLeverage()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3835) | :closed_lock_with_key:  | POST | `/delivery/{settle}/positions/{contract}/leverage` |
| [updateDeliveryRiskLimit()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3853) | :closed_lock_with_key:  | POST | `/delivery/{settle}/positions/{contract}/risk_limit` |
| [submitDeliveryOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3873) | :closed_lock_with_key:  | POST | `/delivery/{settle}/orders` |
| [getDeliveryOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3888) | :closed_lock_with_key:  | GET | `/delivery/{settle}/orders` |
| [cancelAllDeliveryOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3901) | :closed_lock_with_key:  | DELETE | `/delivery/{settle}/orders` |
| [getDeliveryOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3920) | :closed_lock_with_key:  | GET | `/delivery/{settle}/orders/{order_id}` |
| [cancelDeliveryOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3935) | :closed_lock_with_key:  | DELETE | `/delivery/{settle}/orders/{order_id}` |
| [getDeliveryTradingHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3950) | :closed_lock_with_key:  | GET | `/delivery/{settle}/my_trades` |
| [getDeliveryClosedPositions()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3963) | :closed_lock_with_key:  | GET | `/delivery/{settle}/position_close` |
| [getDeliveryLiquidationHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3976) | :closed_lock_with_key:  | GET | `/delivery/{settle}/liquidates` |
| [getDeliverySettlementHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L3989) | :closed_lock_with_key:  | GET | `/delivery/{settle}/settlements` |
| [submitDeliveryTriggeredOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4002) | :closed_lock_with_key:  | POST | `/delivery/{settle}/price_orders` |
| [getDeliveryAutoOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4017) | :closed_lock_with_key:  | GET | `/delivery/{settle}/price_orders` |
| [cancelAllOpenDeliveryOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4030) | :closed_lock_with_key:  | DELETE | `/delivery/{settle}/price_orders` |
| [getDeliveryTriggeredOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4046) | :closed_lock_with_key:  | GET | `/delivery/{settle}/price_orders/{order_id}` |
| [cancelTriggeredDeliveryOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4061) | :closed_lock_with_key:  | DELETE | `/delivery/{settle}/price_orders/{order_id}` |
| [getOptionsUnderlyings()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4080) |  | GET | `/options/underlyings` |
| [getOptionsExpirationTimes()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4090) |  | GET | `/options/expirations` |
| [getOptionsContracts()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4100) |  | GET | `/options/contracts` |
| [getOptionsContract()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4113) |  | GET | `/options/contracts/{contract}` |
| [getOptionsSettlementHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4123) |  | GET | `/options/settlements` |
| [getOptionsContractSettlement()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4135) |  | GET | `/options/settlements/{contract}` |
| [getOptionsMySettlements()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4150) | :closed_lock_with_key:  | GET | `/options/my_settlements` |
| [getOptionsOrderBook()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4164) |  | GET | `/options/order_book` |
| [getOptionsTickers()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4176) |  | GET | `/options/tickers` |
| [getOptionsUnderlyingTicker()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4190) |  | GET | `/options/underlying/tickers/{underlying}` |
| [getOptionsCandles()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4204) |  | GET | `/options/candlesticks` |
| [getOptionsUnderlyingCandles()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4214) |  | GET | `/options/underlying/candlesticks` |
| [getOptionsTrades()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4226) |  | GET | `/options/trades` |
| [getOptionsAccount()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4237) | :closed_lock_with_key:  | GET | `/options/accounts` |
| [getOptionsAccountChange()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4247) | :closed_lock_with_key:  | GET | `/options/account_book` |
| [getOptionsPositionsUnderlying()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4259) | :closed_lock_with_key:  | GET | `/options/positions` |
| [getOptionsPositionContract()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4271) | :closed_lock_with_key:  | GET | `/options/positions/{contract}` |
| [getOptionsLiquidation()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4283) | :closed_lock_with_key:  | GET | `/options/position_close` |
| [submitOptionsOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4296) | :closed_lock_with_key:  | POST | `/options/orders` |
| [getOptionsOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4308) | :closed_lock_with_key:  | GET | `/options/orders` |
| [cancelAllOpenOptionsOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4320) | :closed_lock_with_key:  | DELETE | `/options/orders` |
| [getOptionsOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4334) | :closed_lock_with_key:  | GET | `/options/orders/{order_id}` |
| [amendOptionsOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4346) | :closed_lock_with_key:  | PUT | `/options/orders/{order_id}` |
| [cancelOptionsOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4361) | :closed_lock_with_key:  | DELETE | `/options/orders/{order_id}` |
| [submitOptionsCountdownCancel()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4380) | :closed_lock_with_key:  | POST | `/options/countdown_cancel_all` |
| [getOptionsPersonalHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4396) | :closed_lock_with_key:  | GET | `/options/my_trades` |
| [setOptionsMMPSettings()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4408) | :closed_lock_with_key:  | POST | `/options/mmp` |
| [getOptionsMMPSettings()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4420) | :closed_lock_with_key:  | GET | `/options/mmp` |
| [resetOptionsMMPSettings()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4432) | :closed_lock_with_key:  | POST | `/options/mmp/reset` |
| [getLendingCurrencies()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4448) |  | GET | `/earn/uni/currencies` |
| [getLendingCurrency()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4458) |  | GET | `/earn/uni/currencies/{currency}` |
| [submitLendOrRedeemOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4468) | :closed_lock_with_key:  | POST | `/earn/uni/lends` |
| [getLendingOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4478) | :closed_lock_with_key:  | GET | `/earn/uni/lends` |
| [updateLendingOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4490) | :closed_lock_with_key:  | PATCH | `/earn/uni/lends` |
| [getLendingRecords()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4503) | :closed_lock_with_key:  | GET | `/earn/uni/lend_records` |
| [getLendingTotalInterest()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4516) | :closed_lock_with_key:  | GET | `/earn/uni/interests/{currency}` |
| [getLendingInterestRecords()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4529) | :closed_lock_with_key:  | GET | `/earn/uni/interest_records` |
| [updateInterestReinvestment()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4542) | :closed_lock_with_key:  | PUT | `/earn/uni/interest_reinvest` |
| [getLendingInterestStatus()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4558) | :closed_lock_with_key:  | GET | `/earn/uni/interest_status/{currency}` |
| [getLendingAnnualizedTrendChart()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4573) | :closed_lock_with_key:  | GET | `/earn/uni/chart` |
| [getLendingEstimatedRates()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4581) | :closed_lock_with_key:  | GET | `/earn/uni/rate` |
| [submitMultiLoanOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4598) | :closed_lock_with_key:  | POST | `/loan/multi_collateral/orders` |
| [getMultiLoanOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4610) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/orders` |
| [getMultiLoanOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4622) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/orders/{order_id}` |
| [repayMultiLoan()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4632) | :closed_lock_with_key:  | POST | `/loan/multi_collateral/repay` |
| [getMultiLoanRepayRecords()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4642) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/repay` |
| [updateMultiLoan()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4654) | :closed_lock_with_key:  | POST | `/loan/multi_collateral/mortgage` |
| [getMultiLoanAdjustmentRecords()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4666) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/mortgage` |
| [getMultiLoanCurrencyQuota()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4678) | :closed_lock_with_key:  | GET | `/loan/multi_collateral/currency_quota` |
| [getMultiLoanSupportedCurrencies()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4690) |  | GET | `/loan/multi_collateral/currencies` |
| [getMultiLoanRatio()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4699) |  | GET | `/loan/multi_collateral/ltv` |
| [getMultiLoanFixedRates()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4708) |  | GET | `/loan/multi_collateral/fixed_rate` |
| [getMultiLoanCurrentRates()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4721) |  | GET | `/loan/multi_collateral/current_rate` |
| [getDualInvestmentProducts()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4743) |  | GET | `/earn/dual/investment_plan` |
| [getDualInvestmentOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4754) | :closed_lock_with_key:  | GET | `/earn/dual/orders` |
| [submitDualInvestmentOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4766) | :closed_lock_with_key:  | POST | `/earn/dual/orders` |
| [getDualOrderRefundPreview()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4775) | :closed_lock_with_key:  | GET | `/earn/dual/order-refund-preview` |
| [submitDualOrderRefund()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4784) | :closed_lock_with_key:  | POST | `/earn/dual/order-refund` |
| [updateDualOrderReinvest()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4793) | :closed_lock_with_key:  | POST | `/earn/dual/modify-order-reinvest` |
| [getDualProjectRecommend()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4804) | :closed_lock_with_key:  | GET | `/earn/dual/project-recommend` |
| [getEarnFixedTermProducts()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4813) |  | GET | `/earn/fixed-term/product` |
| [getEarnFixedTermProductsByAsset()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4822) |  | GET | `/earn/fixed-term/product/{asset}/list` |
| [createEarnFixedTermLend()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4832) | :closed_lock_with_key:  | POST | `/earn/fixed-term/user/lend` |
| [getEarnFixedTermLends()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4841) | :closed_lock_with_key:  | GET | `/earn/fixed-term/user/lend` |
| [createEarnFixedTermPreRedeem()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4850) | :closed_lock_with_key:  | POST | `/earn/fixed-term/user/pre-redeem` |
| [getEarnFixedTermHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4861) | :closed_lock_with_key:  | GET | `/earn/fixed-term/user/history` |
| [createAutoInvestPlan()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4870) | :closed_lock_with_key:  | POST | `/earn/autoinvest/plans/create` |
| [updateAutoInvestPlan()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4879) | :closed_lock_with_key:  | POST | `/earn/autoinvest/plans/update` |
| [stopAutoInvestPlan()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4886) | :closed_lock_with_key:  | POST | `/earn/autoinvest/plans/stop` |
| [addAutoInvestPlanPosition()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4893) | :closed_lock_with_key:  | POST | `/earn/autoinvest/plans/add_position` |
| [getAutoInvestCoins()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4904) | :closed_lock_with_key:  | GET | `/earn/autoinvest/coins` |
| [getAutoInvestMinAmount()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4913) | :closed_lock_with_key:  | POST | `/earn/autoinvest/min_invest_amount` |
| [getAutoInvestPlanRecords()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4924) | :closed_lock_with_key:  | GET | `/earn/autoinvest/plans/records` |
| [getAutoInvestOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4933) | :closed_lock_with_key:  | GET | `/earn/autoinvest/orders` |
| [getAutoInvestConfig()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4942) | :closed_lock_with_key:  | GET | `/earn/autoinvest/config` |
| [getAutoInvestPlanDetail()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4949) | :closed_lock_with_key:  | GET | `/earn/autoinvest/plans/detail` |
| [getAutoInvestPlans()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4958) | :closed_lock_with_key:  | GET | `/earn/autoinvest/plans/list_info` |
| [getStakingCoins()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4970) | :closed_lock_with_key:  | GET | `/earn/staking/coins` |
| [submitStakingSwap()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L4983) | :closed_lock_with_key:  | POST | `/earn/staking/swap` |
| [getAccountDetail()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5002) | :closed_lock_with_key:  | GET | `/account/detail` |
| [getAccountRateLimit()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5011) | :closed_lock_with_key:  | GET | `/account/rate_limit` |
| [createStpGroup()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5021) | :closed_lock_with_key:  | POST | `/account/stp_groups` |
| [getStpGroups()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5031) | :closed_lock_with_key:  | GET | `/account/stp_groups` |
| [getStpGroupUsers()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5041) | :closed_lock_with_key:  | GET | `/account/stp_groups/{stp_id}/users` |
| [addUsersToStpGroup()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5051) | :closed_lock_with_key:  | POST | `/account/stp_groups/{stp_id}/users` |
| [deleteUserFromStpGroup()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5067) | :closed_lock_with_key:  | DELETE | `/account/stp_groups/{stp_id}/users` |
| [setGTDeduction()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5085) | :closed_lock_with_key:  | POST | `/account/debit_fee` |
| [getGTDeduction()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5096) | :closed_lock_with_key:  | GET | `/account/debit_fee` |
| [getAccountMainKeys()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5105) | :closed_lock_with_key:  | GET | `/account/main_keys` |
| [getAgencyTransactionHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5121) | :closed_lock_with_key:  | GET | `/rebate/agency/transaction_history` |
| [getAgencyCommissionHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5134) | :closed_lock_with_key:  | GET | `/rebate/agency/commission_history` |
| [getPartnerTransactionHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5148) | :closed_lock_with_key:  | GET | `/rebate/partner/transaction_history` |
| [getPartnerCommissionHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5163) | :closed_lock_with_key:  | GET | `/rebate/partner/commission_history` |
| [getPartnerSubordinateList()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5186) | :closed_lock_with_key:  | GET | `/rebate/partner/sub_list` |
| [getPartnerAgentDataAggregated()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5196) | :closed_lock_with_key:  | GET | `/rebate/partner/data/aggregated` |
| [getBrokerCommissionHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5209) | :closed_lock_with_key:  | GET | `/rebate/broker/commission_history` |
| [getBrokerTransactionHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5222) | :closed_lock_with_key:  | GET | `/rebate/broker/transaction_history` |
| [getUserRebateInfo()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5231) | :closed_lock_with_key:  | GET | `/rebate/user/info` |
| [createOTCQuote()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5266) | :closed_lock_with_key:  | POST | `/otc/quote` |
| [createOTCFiatOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5278) | :closed_lock_with_key:  | POST | `/otc/order/create` |
| [createOTCStablecoinOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5292) | :closed_lock_with_key:  | POST | `/otc/stable_coin/order/create` |
| [getOTCBankList()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5301) | :closed_lock_with_key:  | GET | `/otc/bank/list` |
| [getOTCBankListLegacy()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5308) | :closed_lock_with_key:  | GET | `/otc/bank_list` |
| [createOTCBank()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5315) | :closed_lock_with_key:  | POST | `/otc/bank/delete` |
| [deleteOTCBank()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5326) | :closed_lock_with_key:  | POST | `/otc/bank/delete` |
| [setDefaultOTCBank()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5333) | :closed_lock_with_key:  | POST | `/otc/bank/set_default` |
| [getOTCBankSupplementChecklist()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5340) | :closed_lock_with_key:  | GET | `/otc/bank/bank_supplement_checklist` |
| [submitOTCBankPersonalSupplement()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5349) | :closed_lock_with_key:  | POST | `/otc/order/paid` |
| [submitOTCBankEnterpriseSupplement()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5368) | :closed_lock_with_key:  | POST | `/otc/order/paid` |
| [markOTCOrderAsPaid()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5404) | :closed_lock_with_key:  | POST | `/otc/order/paid` |
| [cancelOTCOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5418) | :closed_lock_with_key:  | POST | `/otc/order/cancel` |
| [getOTCFiatOrderList()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5430) | :closed_lock_with_key:  | GET | `/otc/order/list` |
| [getOTCStablecoinOrderList()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5444) | :closed_lock_with_key:  | GET | `/otc/stable_coin/order/list` |
| [getOTCFiatOrderDetail()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5458) | :closed_lock_with_key:  | GET | `/otc/order/detail` |
| [getP2PMerchantUserInfo()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5472) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/get_user_info` |
| [getP2PMerchantCounterpartyUserInfo()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5481) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/get_counterparty_user_info` |
| [getP2PMerchantMyselfPayment()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5493) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/get_myself_payment` |
| [getP2PMerchantSpotBalance()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5506) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/set_merchant_work_hours` |
| [setP2PMerchantWorkHours()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5515) | :closed_lock_with_key:  | POST | `/p2p/merchant/account/set_merchant_work_hours` |
| [getP2PMerchantPendingTransactionList()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5526) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/get_pending_transaction_list` |
| [getP2PMerchantCompletedTransactionList()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5538) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/get_completed_transaction_list` |
| [getP2PMerchantTransactionDetails()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5550) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/get_transaction_details` |
| [confirmP2PMerchantPayment()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5562) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/confirm-payment` |
| [confirmP2PMerchantReceipt()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5573) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/confirm-receipt` |
| [cancelP2PMerchantTransaction()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5584) | :closed_lock_with_key:  | POST | `/p2p/merchant/transaction/cancel` |
| [placeP2PMerchantBizPushOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5595) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/place_biz_push_order` |
| [updateP2PMerchantAdsStatus()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5606) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/ads_update_status` |
| [getP2PMerchantAdsDetail()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5619) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/ads_detail` |
| [getP2PMerchantMyAdsList()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5628) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/my_ads_list` |
| [getP2PMerchantAdsList()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5639) | :closed_lock_with_key:  | POST | `/p2p/merchant/books/ads_list` |
| [getP2PMerchantChatsList()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5648) | :closed_lock_with_key:  | POST | `/p2p/merchant/chat/get_chats_list` |
| [sendP2PMerchantChatMessage()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5659) | :closed_lock_with_key:  | POST | `/p2p/merchant/chat/send_chat_message` |
| [uploadP2PMerchantChatFile()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5670) | :closed_lock_with_key:  | POST | `/p2p/merchant/chat/upload_chat_file` |
| [getCrossExSymbols()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5691) |  | GET | `/crossex/rule/symbols` |
| [getCrossExRiskLimits()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5703) |  | GET | `/crossex/rule/risk_limits` |
| [getCrossExTransferCoins()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5717) |  | GET | `/crossex/transfers/coin` |
| [createCrossExTransfer()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5731) | :closed_lock_with_key:  | POST | `/crossex/transfers` |
| [getCrossExTransferHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5745) | :closed_lock_with_key:  | GET | `/crossex/transfers` |
| [createCrossExOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5759) | :closed_lock_with_key:  | POST | `/crossex/orders` |
| [cancelBatchCrossExOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5765) | :closed_lock_with_key:  | POST | `/crossex/batch_cancel_orders` |
| [cancelCrossExOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5779) | :closed_lock_with_key:  | DELETE | `/crossex/orders/{order_id}` |
| [modifyCrossExOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5792) | :closed_lock_with_key:  | PUT | `/crossex/orders/{order_id}` |
| [getCrossExOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5807) | :closed_lock_with_key:  | GET | `/crossex/orders/{order_id}` |
| [createCrossExConvertQuote()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5819) | :closed_lock_with_key:  | POST | `/crossex/convert/quote` |
| [createCrossExConvertOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5833) | :closed_lock_with_key:  | POST | `/crossex/convert/orders` |
| [updateCrossExAccount()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5847) | :closed_lock_with_key:  | PUT | `/crossex/accounts` |
| [getCrossExAccounts()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5861) | :closed_lock_with_key:  | GET | `/crossex/accounts` |
| [setCrossExPositionLeverage()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5873) | :closed_lock_with_key:  | POST | `/crossex/positions/leverage` |
| [getCrossExPositionLeverage()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5887) | :closed_lock_with_key:  | GET | `/crossex/positions/leverage` |
| [setCrossExMarginPositionLeverage()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5901) | :closed_lock_with_key:  | POST | `/crossex/margin_positions/leverage` |
| [getCrossExMarginPositionLeverage()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5917) | :closed_lock_with_key:  | GET | `/crossex/margin_positions/leverage` |
| [closeCrossExPosition()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5931) | :closed_lock_with_key:  | POST | `/crossex/position` |
| [getCrossExInterestRate()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5945) | :closed_lock_with_key:  | GET | `/crossex/interest_rate` |
| [getCrossExFeeRate()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5958) | :closed_lock_with_key:  | GET | `/crossex/fee` |
| [getCrossExPositions()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5970) | :closed_lock_with_key:  | GET | `/crossex/positions` |
| [getCrossExMarginPositions()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5984) | :closed_lock_with_key:  | GET | `/crossex/margin_positions` |
| [getCrossExAdlRank()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L5998) | :closed_lock_with_key:  | GET | `/crossex/adl_rank` |
| [getCrossExOpenOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6010) | :closed_lock_with_key:  | GET | `/crossex/open_orders` |
| [getCrossExHistoryOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6024) | :closed_lock_with_key:  | GET | `/crossex/history_orders` |
| [getCrossExHistoryPositions()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6038) | :closed_lock_with_key:  | GET | `/crossex/history_positions` |
| [getCrossExHistoryMarginPositions()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6052) | :closed_lock_with_key:  | GET | `/crossex/history_margin_positions` |
| [getCrossExHistoryMarginInterests()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6066) | :closed_lock_with_key:  | GET | `/crossex/history_margin_interests` |
| [getCrossExHistoryTrades()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6080) | :closed_lock_with_key:  | GET | `/crossex/history_trades` |
| [getCrossExAccountBook()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6094) | :closed_lock_with_key:  | GET | `/crossex/account_book` |
| [getCrossExCoinDiscountRate()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6108) | :closed_lock_with_key:  | GET | `/crossex/coin_discount_rate` |
| [listCrossExMarketTickers()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6114) |  | GET | `/crossex/market/tickers` |
| [listCrossExMarketFundingInfo()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6120) |  | GET | `/crossex/market/funding_info` |
| [getAlphaAccounts()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6138) | :closed_lock_with_key:  | GET | `/alpha/accounts` |
| [getAlphaAccountBook()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6150) | :closed_lock_with_key:  | GET | `/alpha/account_book` |
| [createAlphaQuote()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6164) | :closed_lock_with_key:  | POST | `/alpha/quote` |
| [createAlphaOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6176) | :closed_lock_with_key:  | POST | `/alpha/orders` |
| [getAlphaOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6188) | :closed_lock_with_key:  | GET | `/alpha/orders` |
| [getAlphaOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6200) | :closed_lock_with_key:  | GET | `/alpha/order` |
| [getAlphaCurrencies()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6212) |  | GET | `/alpha/currencies` |
| [getAlphaTickers()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6224) |  | GET | `/alpha/tickers` |
| [getTradFiMT5Account()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6230) | :closed_lock_with_key:  | GET | `/tradfi/users/mt5-account` |
| [getTradFiSymbolCategories()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6234) |  | GET | `/tradfi/symbols/categories` |
| [getTradFiSymbols()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6240) |  | GET | `/tradfi/symbols` |
| [getTradFiSymbolCommissions()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6244) |  | GET | `/tradfi/symbols/commissions` |
| [getTradFiSymbolDetail()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6250) | :closed_lock_with_key:  | GET | `/tradfi/symbols/detail` |
| [getTradFiKlines()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6256) |  | GET | `/tradfi/symbols/{symbol}/klines` |
| [getTradFiTicker()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6263) |  | GET | `/tradfi/symbols/{symbol}/tickers` |
| [createTradFiUser()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6267) | :closed_lock_with_key:  | POST | `/tradfi/users` |
| [getTradFiAssets()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6271) | :closed_lock_with_key:  | GET | `/tradfi/users/assets` |
| [createTradFiTransaction()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6275) | :closed_lock_with_key:  | POST | `/tradfi/transactions` |
| [getTradFiTransactions()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6281) | :closed_lock_with_key:  | GET | `/tradfi/transactions` |
| [createTradFiOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6287) | :closed_lock_with_key:  | POST | `/tradfi/orders` |
| [getTradFiOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6293) | :closed_lock_with_key:  | GET | `/tradfi/orders` |
| [modifyTradFiOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6297) | :closed_lock_with_key:  | PUT | `/tradfi/orders/{orderId}` |
| [cancelTradFiOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6304) | :closed_lock_with_key:  | DELETE | `/tradfi/orders/{orderId}` |
| [getTradFiOrderHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6308) | :closed_lock_with_key:  | GET | `/tradfi/orders/history` |
| [getTradFiPositions()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6314) | :closed_lock_with_key:  | GET | `/tradfi/positions` |
| [modifyTradFiPosition()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6320) | :closed_lock_with_key:  | PUT | `/tradfi/positions/{positionId}` |
| [closeTradFiPosition()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6329) | :closed_lock_with_key:  | POST | `/tradfi/positions/{positionId}/close` |
| [getTradFiPositionHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6338) | :closed_lock_with_key:  | GET | `/tradfi/positions/history` |
| [getTradFiOrderLog()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6347) | :closed_lock_with_key:  | GET | `/tradfi/orders/log/{log_id}` |
| [getStockUserAssets()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6355) | :closed_lock_with_key:  | GET | `/stock/users/assets` |
| [getStockSymbols()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6361) |  | GET | `/stock/symbols` |
| [getStockSymbolDetail()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6367) | :closed_lock_with_key:  | GET | `/stock/symbols/detail` |
| [getStockOrderBook()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6373) |  | GET | `/stock/market/{symbol}/orderbook` |
| [getStockOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6377) | :closed_lock_with_key:  | GET | `/stock/orders` |
| [createStockOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6383) | :closed_lock_with_key:  | POST | `/stock/orders` |
| [cancelAllStockOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6389) | :closed_lock_with_key:  | DELETE | `/stock/orders` |
| [getStockOrderHistory()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6393) | :closed_lock_with_key:  | GET | `/stock/orders/history` |
| [updateStockOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6399) | :closed_lock_with_key:  | PUT | `/stock/orders/{orderId}` |
| [cancelStockOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6406) | :closed_lock_with_key:  | DELETE | `/stock/orders/{orderId}` |
| [getStockPositions()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6412) | :closed_lock_with_key:  | GET | `/stock/positions` |
| [closeStockPosition()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6418) | :closed_lock_with_key:  | POST | `/stock/positions/close` |
| [getStockTransactions()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6424) | :closed_lock_with_key:  | GET | `/stock/transactions` |
| [createStockTransaction()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6430) | :closed_lock_with_key:  | POST | `/stock/transactions` |
| [getStockExchanges()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6436) |  | GET | `/stock/exchanges` |
| [getStockFeeRate()](https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L6440) |  | GET | `/stock/fee-rate` |

# WebsocketAPIClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [WebsocketAPIClient.ts](/src/WebsocketAPIClient.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the Gate.io API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewSpotOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L97) | :closed_lock_with_key:  | WS | `spot.order_place` |
| [cancelSpotOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L111) | :closed_lock_with_key:  | WS | `spot.order_cancel` |
| [cancelSpotOrderById()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L125) | :closed_lock_with_key:  | WS | `spot.order_cancel_ids` |
| [cancelSpotOrderForSymbol()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L139) | :closed_lock_with_key:  | WS | `spot.order_cancel_cp` |
| [updateSpotOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L153) | :closed_lock_with_key:  | WS | `spot.order_amend` |
| [getSpotOrderStatus()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L167) | :closed_lock_with_key:  | WS | `spot.order_status` |
| [getSpotOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L181) | :closed_lock_with_key:  | WS | `spot.order_list` |
| [submitNewFuturesOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L203) | :closed_lock_with_key:  | WS | `futures.order_place` |
| [submitNewFuturesBatchOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L219) | :closed_lock_with_key:  | WS | `futures.order_batch_place` |
| [cancelFuturesOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L235) | :closed_lock_with_key:  | WS | `futures.order_cancel` |
| [cancelFuturesOrderById()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L251) | :closed_lock_with_key:  | WS | `futures.order_cancel_ids` |
| [cancelFuturesAllOpenOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L267) | :closed_lock_with_key:  | WS | `futures.order_cancel_cp` |
| [updateFuturesOrder()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L283) | :closed_lock_with_key:  | WS | `futures.order_amend` |
| [getFuturesOrders()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L299) | :closed_lock_with_key:  | WS | `futures.order_list` |
| [getFuturesOrderStatus()](https://github.com/tiagosiebler/gateio-api/blob/master/src/WebsocketAPIClient.ts#L315) | :closed_lock_with_key:  | WS | `futures.order_status` |