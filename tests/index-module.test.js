import { priceList } from "../index-module";
import { getLunoMYRPrice } from './lib/luno.js';
import { getLunoUSDPrice } from './lib/luno.js';
import { getBinancePrice } from './lib/binance.js';
import { priceDiff , lunoPremium } from './lib/priceCalc.js';

test ( async () => {

  const MOCK_LUNO_MYR_PRICE = 91000;
  jest.mock("../lib/luno.js", () => {
    return {
      getLunoMYRPrice() {
        return new Promise((res) => {
          res(MOCK_LUNO_MYR_PRICE);
        });
      },
    };
  });

  const MOCK_LUNO_USD_PRICE = 91000;
  jest.mock("../lib/luno.js", () => {
    return {
      getLunoUSDPrice() {
        return new Promise((res) => {
          res(MOCK_LUNO_USD_PRICE);
        });
      },
    };
  });

  const MOCK_BINANCE_PRICE = 89000
  jest.mock("../lib/binance.js", () => {
    return {
      getBinancePrice() {
        return new Promise((res) => {
          res(MOCK_BINANCE_PRICE);
        });
      },
    };
  });

  expect (console.log).toHaveBeenCalledWith(`${currency}MYR Price on Luno: `.padStart(40), "MYR " + parseFloat(MOCK_LUNO_MYR_PRICE).toFixed(3));
  expect (console.log).toHaveBeenCalledWith(`${currency}USD Price on Luno: `.padStart(40), "USD " + parseFloat(MOCK_LUNO_USD_PRICE).toFixed(3));
  expect (console.log).toHaveBeenCalledWith(`${binanceCurrency}BUSD Price on Binance: `.padStart(40), "USD " + parseFloat(MOCK_BINANCE_PRICE).toFixed(3));


})




  



