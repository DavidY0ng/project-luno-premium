import Binance from 'node-binance-api';
const binance = new Binance()

export async function getBinancePrice(currency){
    let binanceCurrency
    if (currency === 'XBT') {
         binanceCurrency = 'BTC';
    } else {
         binanceCurrency = currency;
    }

    
    const binanceTicker = await binance.prices();
    return await binanceTicker[`${binanceCurrency}BUSD`]
}


// const price = await getBinancePrice('ETH')
// console.log(price)