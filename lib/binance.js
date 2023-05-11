import Binance from 'node-binance-api';


export async function getBinancePrice(currency){
    let binanceCurrency
    if (currency === 'XBT') {
         binanceCurrency = 'BTC';
    } else {
         binanceCurrency = currency;
    }

    const binance = new Binance()
    const binanceTicker = await binance.prices();
    return await binanceTicker[`${binanceCurrency}USDT`]
}


// const price = await getBinancePrice('ETH')
// console.log(price)