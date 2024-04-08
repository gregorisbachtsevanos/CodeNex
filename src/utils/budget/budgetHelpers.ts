import currency from "currency.js";
import { currenciesSymbol, defaultCurrencyCode } from "./constants";

export const amountToCurrency = (amount: number, decimals = 2) => {
  return currency(amount, {
    symbol: currenciesSymbol[defaultCurrencyCode] || defaultCurrencyCode,
    precision: decimals,
    increment: 0,
  }).format();
};
