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

    // await binance.prices(`${binanceCurrency}BUSD`)
    //     const binanceUSD = ticker[`${binanceCurrency}BUSD`]
    //     console.log(binanceUSD)
    //     return binanceUSD

}


// const price = await getBinancePrice('ETH')
// console.log(price)



//     return new Promise((resolve, reject) => {
//           binance.prices(`${binanceCurrency}BUSD`, (error, ticker) => {
//             console.log(binanceCurrency)
//             const binanceUSDLastTrade = ticker[`${binanceCurrency}BUSD`];
//             console.log(binanceUSDLastTrade)
//             console.log(binanceCurrency);
//             console.log(ticker);
//             console.log("hi");
//             console.info("Price of BTC on Binance: ", binanceUSDLastTrade);
//             resolve(binanceUSDLastTrade)
//             return(binanceUSDLastTrade)
          
//         });
//     });
// }

// getBinancePrice('BTC')

// export async function binanceUSD(){
//     let binanceUSDPrice = await getBinancePrice ()
//     // console.log(binanceUSDPrice)
//     return binanceUSDPrice, binanceCurrency
// }

