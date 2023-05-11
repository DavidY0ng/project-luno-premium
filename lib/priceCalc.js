export async function priceDiff1 (lunoUSDPrice, binanceUSDPrice) {
    const priceDiff = lunoUSDPrice - binanceUSDPrice
    const lunoPremium = (priceDiff/lunoUSDPrice)*100
    // console.log (priceDiff)
    return priceDiff
    
}

export async function lunoPremium (lunoUSDPrice, binanceUSDPrice) {
    const priceDiff = lunoUSDPrice - binanceUSDPrice
    const lunoPremium = (priceDiff/lunoUSDPrice)*100
    // console.log (lunoPremium)
    return lunoPremium
}
