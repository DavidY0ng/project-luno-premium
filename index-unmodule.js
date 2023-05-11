import Binance from 'node-binance-api';
import prompt from "prompt-sync";
import dotenv from "dotenv";

dotenv.config();
const binance = new Binance()

let lunoMYRPrice;
let lunoUSDPrice;
let USDMYRPrice;
let binanceUSDPrice;
let lunoPremiumPercentage;
let currency;
let binanceCurrency;
let priceDiff;
let i = 1;

const input = prompt({ sigint: true });
currency = input("Enter currency: ").toUpperCase();


async function getLunoMYRPrice(){
    const lunoPriceMYRAPI = (`https://api.luno.com/api/1/ticker?pair=${currency}MYR`)
    return await fetch(lunoPriceMYRAPI)
        .then(response => response.json())
        .then(text => {
            const lunoMYRLastTrade = text.last_trade;
            // console.log("Price of XBTMYR on Luno: ", lunoMYRLastTrade);
            return lunoMYRLastTrade
        });
}
async function lunoMYR(){
    lunoMYRPrice = await getLunoMYRPrice ()
    console.log(lunoMYRPrice)
    return lunoMYRPrice
}

async function getLunoUSDPrice(){
    const lunoPriceUSDAPI = `https://api.luno.com/api/1/ticker?pair=${currency}USDC`
    // const lunoPriceUSDAPI = ("https://api.luno.com/api/1/ticker?pair=XBTUSDC")
    return await fetch(lunoPriceUSDAPI)
        .then(response => response.json())
        .then(text => {
            const lunoUSDLastTrade = text.last_trade;
            // console.log(`Price of XBTUSDC on Luno: `, lunoUSDLastTrade);
            return lunoUSDLastTrade
        });
}
async function lunoUSD(){
    lunoUSDPrice = await getLunoUSDPrice ()
    // console.log(lunoUSDPrice)
    return lunoUSDPrice
}

async function getBinancePrice(){
    if (currency==='XBT') {
        binanceCurrency = 'BTC';
    } else {
        binanceCurrency = currency;
    }
               
    return new Promise((resolve,reject) => { 
        binance.prices(`${binanceCurrency}BUSD`, (error, ticker) => {
            // console.log(ticker)
            const binanceUSDLastTrade = ticker[`${binanceCurrency}BUSD`]
            // console.info("Price of BTC on Binance: ", binanceUSDLastTrade);
            resolve(binanceUSDLastTrade)
            return binanceUSDLastTrade
               
        });
    })
}
async function binanceUSD(){
    binanceUSDPrice = await getBinancePrice ()
    // console.log(binanceUSDPrice)
    return binanceUSDPrice
}

async function priceDifference () {
    await lunoUSD()
    await binanceUSD()
    const priceDiff = lunoUSDPrice - binanceUSDPrice
    // console.log ("Price difference of Luno and Binance: ", priceDiff)
    return priceDiff
}

async function lunoPremium () {
    await lunoUSD()
    await binanceUSD()
    priceDiff = lunoUSDPrice - binanceUSDPrice
    const lunoPremium = priceDiff/lunoUSDPrice
    return lunoPremium*100
}

async function getForexPrice (){
    var myHeader = new Headers();
    myHeader.append("apikey", process.env.FOREX_API);

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeader
    };

    return await fetch ("https://api.apilayer.com/fixer/latest?symbols=MYR&base=USD", requestOptions)
    .then(response => response.json())
    // .then(result => console.log(result))
    .then(result => {
        const USDMYR = result.rates.MYR;
        // console.log(USDMYR);
        return USDMYR; 
        
    })
        
}

async function USDMYR(){
    USDMYRPrice = await getForexPrice()
    // console.log(USDMYRPrice)
    return USDMYRPrice

}

async function priceList() {
    lunoMYRPrice = await getLunoMYRPrice();
    lunoUSDPrice = await getLunoUSDPrice();
    console.log(binanceCurrency)
    binanceUSDPrice = await getBinancePrice();
    //console.log(binanceCurrency)
    priceDiff = await priceDifference();
    lunoPremiumPercentage = await lunoPremium();
    // USDMYRPrice = await getForexPrice();
    console.log(`${currency}MYR Price on Luno: `.padStart(40), "MYR " + parseFloat(lunoMYRPrice).toFixed(3));
    console.log(`${currency}USD Price on Luno: `.padStart(40), "USD " + parseFloat(lunoUSDPrice).toFixed(3));
    console.log(`${binanceCurrency}BUSD Price on Binance: `.padStart(40), "USD " + parseFloat(binanceUSDPrice).toFixed(3));
    console.log("Price difference of Luno and Binance: ".padStart(40), "USD " + parseFloat(priceDiff).toFixed(6));
    console.log("Luno Premium: ".padStart(40), parseFloat(lunoPremiumPercentage).toFixed(4) + "%");
    console.log("USDMYR: ".padStart(40), parseFloat(USDMYRPrice).toFixed(6));
    console.log("______________________________________________________".padStart(40));
  }
  
  priceList();

function priceLoop(){
    setTimeout(function(){
        priceList();
        i++;
        if (i<10) {
            priceLoop();
        }
    },2000)
}

priceLoop()