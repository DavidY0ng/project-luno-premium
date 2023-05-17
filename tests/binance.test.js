beforeEach(() => {
    jest.resetModules();
  });
  
  test("Returns price if Binance request succeeds", async () => {
    const getBinancePrice = require('../lib/binance.js').getBinancePrice 
    jest.mock('node-binance-api', () => {
      return class Binance {
        prices() {
          return new Promise(res => {
            res({
              BTCBUSD: 9
            })
          })
        }
      }
    })
  
    expect(await getBinancePrice("BTC")).toBe(9);
  });

