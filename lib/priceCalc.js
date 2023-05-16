export function priceDiff (lunoUSDPrice, binanceUSDPrice) {
    const priceDiff = lunoUSDPrice - binanceUSDPrice
    // console.log (priceDiff)
    return priceDiff
}


export function lunoPremium (lunoUSDPrice, binanceUSDPrice) {
    const priceDiff = lunoUSDPrice - binanceUSDPrice
    const lunoPremium = (priceDiff / lunoUSDPrice) * 100
    // console.log (lunoPremium)
    return lunoPremium
}