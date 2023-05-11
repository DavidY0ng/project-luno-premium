// import Binance from 'node-binance-api';
// async function getPrices() {
//     const binance = new Binance()
//     try {
//       return await binance.prices()
//     } catch (err) {
//       if (err == unexpected) {
//         throw err // crash the application if we got an unexpected error
//       }
      
//       return await binance.prices() // retry once if we got an expected error
//     }
//   }
  
// //   const prices = await getPrices()
// //   console.log(prices)

// function divide(x, y) {
//     if (y === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     return x / y;
//   }

//   const division = divide(1,0)
//   console.log(division)

let res;

try {
  res = fetch("some_url")
} catch(err) {
  // catch the error, don't let the program crash
  console.log(err) // you can write any code here. in this case, 
}

// the next lines of code will likely need to use `res` from fetch. But res is not assigned because of the error.

// so, we will need to write code that gracefully handle the error

// possible example:

if (res) {
  // request succeeded; go with the usual flow
} else {
  console.log("Retrieving data failed, please try again")
}