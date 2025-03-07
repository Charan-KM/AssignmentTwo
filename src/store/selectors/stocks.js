import { createSelector } from "@reduxjs/toolkit";

const selectStocksState = (state) => state.stocks;

export const selectTopGainers = createSelector(
  [selectStocksState],
  (stocks) => stocks.topGainers
);

export const selectTopLosers = createSelector(
  [selectStocksState],
  (stocks) => stocks.topLosers
);

export const selectStocksStatus = createSelector(
  [selectStocksState],
  (stocks) => ({ status: stocks.status, error: stocks.error })
);