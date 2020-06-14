const fetch = require('node-fetch');
//async function test(){
//const result = await fetch('http://swapi.dev/api/planets/1/')
// const list = await result.json()
// console.log('result', result)
// console.log(list)


//     const promise = new Promise((resolve, reject)=>{
//         const result = fetch('http://swapi.dev/api/plants/1/');
//         resolve (result);
//         reject('ddd');
//     })
//     return promise
// }

// const bbbb = (arg1) => console.log(arg1)

// function bbb(arg1) {
//     console.log(arg1)
// }

// bbbb('Nastya')

// test()
//     .then((result) => result.json())
//     .then((list) => console.log(list))
//     .catch((d)=>console.log(D))

/////////////////////////////////////////////////////////////////////
// async function getExchangeRate(){

//     let currentDate = new Date();
//     // console.log('currentDate', currentDate)
//     let firstDate = new Date(Date.now() - 1000*60*60*24*10)

//     let currentDt = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
//     let firstDt = `${firstDate.getFullYear()}-${firstDate.getMonth()+1}-${firstDate.getDate()}`

//     //let dateMinucTen = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
//     // console.log(currentDt)
//     // console.log('firstDt', firstDt)
//     // console.log('waiting for response...');
//     let exchangeRate = await fetch ('https://api.exchangeratesapi.io/history?start_at=' + firstDt + '&end_at=' + currentDt + '&base=USD');
//     let result = await exchangeRate.json();
//     // console.log(result);

//     result['2020-01-06']

//     //console.log(Object.keys(result.rates))
//     const dates = Object.keys(result.rates);
//     // console.log (dates);
//     dates.sort((a, b) => {
//         var nameA = a;
//         var nameB = b;
//         if (nameA < nameB) {
//           return -1;
//         }
//         if (nameA > nameB) {
//           return 1;
//         }
//         return 0;
//       });

//     // console.log(dates)
//     let rr = [];

//     dates.reduce((previousValue, currentItem, index, arr) => {
//         console.log('previousValue', result.rates[previousValue].RUB, 'currentItem',
//          result.rates[currentItem].RUB, 'index', index);
//         let symb = '+ ';

//         if(result.rates[currentItem].RUB < result.rates[previousValue].RUB) symb = '- '


//         rr.push(symb + result.rates[currentItem].RUB )
//         return currentItem

//     });
//     console.log('rr', rr);

//     // const rubRates = Object.entries(rate.RUB)
//     // console.log(rubRates)

// };


// getExchangeRate()

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let arrSal = Object.entries(salaries);
  console.log('arrSal', arrSal)




}

topSalary(salaries)