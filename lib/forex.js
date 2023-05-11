export async function getForexPrice (){
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
const forex = await getForexPrice()
console.log (forex)
