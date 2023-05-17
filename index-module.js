import prompt from "prompt-sync";
import dotenv from "dotenv";
import { getLunoMYRPrice } from './lib/luno.js';
import { getLunoUSDPrice } from './lib/luno.js';
import { getBinancePrice } from './lib/binance.js';
import { priceDiff , lunoPremium } from './lib/priceCalc.js';
// import { getForexPrice } from './lib/forex.js';
dotenv.config();

// currency input 
let currency;
const input = prompt({ sigint: true });
currency = input("Enter currency: ").toUpperCase();

// converting XBT to BTC for binance
let binanceCurrency; 
if (currency === 'XBT') {
        binanceCurrency = 'BTC';
} else {
        binanceCurrency = currency;
}

// Initialize all the function and prints the prices
export async function priceList() {
    let lunoMYRPrice = await getLunoMYRPrice(currency)
    let lunoUSDPrice = await getLunoUSDPrice(currency) 
    let binanceUSDPrice = await getBinancePrice(currency)
    let priceDifference =  priceDiff(lunoUSDPrice, binanceUSDPrice)
    let lunoPremiumPercentage = lunoPremium(lunoUSDPrice, binanceUSDPrice)
    // USDMYRPrice = await getForexPrice();
    console.log(`${currency}MYR Price on Luno: `.padStart(40), "MYR " + parseFloat(lunoMYRPrice).toFixed(3));
    console.log(`${currency}USD Price on Luno: `.padStart(40), "USD " + parseFloat(lunoUSDPrice).toFixed(3));
    console.log(`${binanceCurrency}BUSD Price on Binance: `.padStart(40), "USD " + parseFloat(binanceUSDPrice).toFixed(3));
    console.log("Price difference of Luno and Binance: ".padStart(40), "USD " + parseFloat(priceDifference).toFixed(3));
    console.log("Luno Premium: ".padStart(40), parseFloat(lunoPremiumPercentage).toFixed(4) + "%");
    // console.log("USDMYR: ".padStart(40), parseFloat(USDMYRPrice).toFixed(6));
    console.log("______________________________________________________".padStart(40));
}

priceList();

//Looping the price list
function priceLoop(){
    let i = 1;
    setTimeout(function(){
        priceList();
        i++;
        if (i<10) {
            priceLoop();
        }
    },2000)
}

priceLoop()


