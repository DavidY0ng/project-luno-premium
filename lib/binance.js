import Binance from 'node-binance-api';
const binance = new Binance()

export async function getBinancePrice(currency){
     let binanceCurrency
     if (currency === 'XBT') {
          binanceCurrency = 'BTC';
     } else {
          binanceCurrency = currency;
     }
     try {
     const binanceTicker = await binance.prices();
     return await binanceTicker[`${binanceCurrency}BUSD`]
     } catch (err) {
          if (err == unexpected){
          throw err
          }
     }
}
