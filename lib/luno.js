export async function getLunoMYRPrice(currency){
    try {
      const lunoRes = await fetch(`https://api.luno.com/api/1/ticker?pair=${currency}MYR`)
      if (lunoRes.status != 200) {
        throw ("Failed to retrieve price");
      }
      const lunoTickerBTCMYR = await lunoRes.json();
      const lastTrade = lunoTickerBTCMYR.last_trade;
      return lastTrade;
    } catch(err) {
      return "Failed to retrieve price";
    }
  }
// console.log(await getLunoMYRPrice('ETH'))

export async function getLunoUSDPrice(currency){
    try {
      const lunoRes = await fetch(`https://api.luno.com/api/1/ticker?pair=${currency}USDC`)
      if (lunoRes.status != 200) {
        throw ("Failed to retrieve price");
      }
      const lunoTickerBTCUSD = await lunoRes.json();
      const lastTrade = lunoTickerBTCUSD.last_trade;
      return lastTrade;
    } catch(err) {
      return "Failed to retrieve price";
    }
  }
// console.log(await getLunoUSDPrice('ETH'))

