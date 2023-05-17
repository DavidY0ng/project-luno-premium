export function priceDiff (lunoUSDPrice, binanceUSDPrice) {
    const priceDiff = lunoUSDPrice - binanceUSDPrice
    return priceDiff
}

export function lunoPremium (lunoUSDPrice, binanceUSDPrice) {
    const priceDiff = lunoUSDPrice - binanceUSDPrice
    const lunoPremium = (priceDiff / lunoUSDPrice) * 100
    return lunoPremium
}