

export async function getLunoMYRPrice(currency){
    const lunoRes = await fetch(`https://api.luno.com/api/1/ticker?pair=${currency}MYR`)
    if (lunoRes.status != 200) {
    return "Failed to retrieve price";
    } 
    const lunoTickerBTCMYR = await lunoRes.json();
    const lastTrade = lunoTickerBTCMYR.last_trade
    // console.log(lastTrade)
    return lastTrade // should return the expected value
  
}


// console.log(await getLunoMYRPrice('ETH'))


export async function getLunoUSDPrice(currency){
    const lunoRes = await fetch (`https://api.luno.com/api/1/ticker?pair=${currency}USDC`)
    if (lunoRes.status != 200) {
    return "Failed to retrieve price";
    } 
    const lunoTickerBTCUSD = await lunoRes.json();
    const lastTrade = lunoTickerBTCUSD.last_trade
    // console.log(lastTrade)
    return lastTrade // should return the expected valu
    }

// console.log(await getLunoUSDPrice('ETH'))
