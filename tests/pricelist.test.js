// test file
beforeEach(() => {
  jest.resetModules(); // reset module mocks before each test
});

const MOCK_LUNO_MYR_PRICE = 91000;
const MOCK_LUNO_USD_PRICE = 91000;
const MOCK_BINANCE_PRICE = 89000;
const MOCK_RATES = 4.55;


test("Console.log if successful", async () => {
  const { priceList } = require("../lib/pricelist.js");

 
  jest.mock("../lib/luno.js", () => {
    return {
      getLunoMYRPrice: jest.fn(() => {
        return new Promise((res) => {
          res(MOCK_LUNO_MYR_PRICE);
        });
      }),
      getLunoUSDPrice: jest.fn(() => {
        return new Promise((res) => {
          res(MOCK_LUNO_USD_PRICE);
        });
      }),
    };
  });

  jest.mock("../lib/binance.js", () => {
    return {
      getBinancePrice: jest.fn(() => {
        return new Promise((res) => {
          res(MOCK_BINANCE_PRICE);
        });
      }),
    };
  });

  jest.mock("../lib/forex.js", () => {
    return {
      getForexPrice: jest.fn(() => {
        return new Promise((res) => {
          res(MOCK_RATES);
        });
      }),
    };
  });

  console.log = jest.fn(() => undefined);
  await priceList();

  expect (console.log).toHaveBeenCalledWith("BTCMYR Price on Luno: ".padStart(40), "MYR " + parseFloat(MOCK_LUNO_MYR_PRICE).toFixed(3))
  expect (console.log).toHaveBeenCalledWith("BTCUSD Price on Luno: ".padStart(40), "USD " + parseFloat(MOCK_LUNO_USD_PRICE).toFixed(3))
  expect (console.log).toHaveBeenCalledWith("BTCBUSD Price on Binance: ".padStart(40), "USD " + parseFloat(MOCK_BINANCE_PRICE).toFixed(3))
  expect (console.log).toHaveBeenCalledWith("USDMYR: ".padStart(40), parseFloat(MOCK_RATES).toFixed(6))
})




  



