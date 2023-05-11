

export async function getLunoMYRPrice(currency){
    const lunoPriceMYRAPI = (`https://api.luno.com/api/1/ticker?pair=${currency}MYR`)
    return await fetch(lunoPriceMYRAPI)
        .then(response => response.json())
        .then(text => {
            const lunoMYRLastTrade = text.last_trade;
            // console.log("Price of XBTMYR on Luno: ", lunoMYRLastTrade);
            return lunoMYRLastTrade
        });
}


export async function getLunoUSDPrice(currency){
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
