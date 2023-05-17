import { getLunoMYRPrice } from '../lib/luno.js';
import { getLunoUSDPrice } from '../lib/luno.js';
import { getBinancePrice } from '../lib/binance.js';
import { priceDiff , lunoPremium } from '../lib/priceCalc.js';
import { getForexPrice } from './forex.js';

export async function priceList() {
    let lunoMYRPrice = await getLunoMYRPrice()
    let lunoUSDPrice = await getLunoUSDPrice() 
    let binanceUSDPrice = await getBinancePrice()
    let priceDifference =  priceDiff(lunoUSDPrice, binanceUSDPrice)
    let lunoPremiumPercentage = lunoPremium(lunoUSDPrice, binanceUSDPrice)
    let USDMYRPrice = await getForexPrice();
    console.log("BTCMYR Price on Luno: ".padStart(40), "MYR " + parseFloat(lunoMYRPrice).toFixed(3));
    console.log("BTCUSD Price on Luno: ".padStart(40), "USD " + parseFloat(lunoUSDPrice).toFixed(3));
    console.log("BTCBUSD Price on Binance: ".padStart(40), "USD " + parseFloat(binanceUSDPrice).toFixed(3));
    console.log("Price difference of Luno and Binance: ".padStart(40), "USD " + parseFloat(priceDifference).toFixed(3));
    console.log("Luno Premium: ".padStart(40), parseFloat(lunoPremiumPercentage).toFixed(4) + "%");
    console.log("USDMYR: ".padStart(40), parseFloat(USDMYRPrice).toFixed(6));
    console.log("______________________________________________________".padStart(40));
}

priceList ()