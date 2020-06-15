let money = +prompt("What is your budget for a month", ''),
    time = prompt("Enter a date in YYYY-MM-DD format", '');

let appData = {
    budget: money,
    timeDate: time,
    expenses: {
    },
    optionalExpenses: {
    },
    income: [],
    savings: "false"
};

for (let i = 0; i < 2; i++){
    let mandatoryExpense = prompt("Enter mandatory expense name in this month", ''),
        cost = prompt("How much will it cost?", '');

        if(typeof(mandatoryExpense) === "string" && typeof(mandatoryExpense) != null && typeof(cost) != null
        && mandatoryExpense != '' && cost != '' && mandatoryExpense.length < 50){

            console.log("done")
            appData.expenses[mandatoryExpense] = cost;
        } else {
            console.log("bad data");
            i--;
        }
};

// let i = 0;
// while (i < 2){
//     let mandatoryExpense = prompt("Enter mandatory expense name in this month", ''),
//         cost = prompt("How much will it cost?", '');

//         if(typeof(mandatoryExpense) === "string" && typeof(mandatoryExpense) != null && typeof(cost) != null
//         && mandatoryExpense != '' && cost != '' && mandatoryExpense.length < 50){

//             console.log("done")
//             appData.expenses[mandatoryExpense] = cost;
//         } else {
//             console.log("bad data");
//             i--;
//         }
//     i++;
// }

// let i = 0;
// do{    
//     let mandatoryExpense = prompt("Enter mandatory expense name in this month", ''),
//         cost = prompt("How much will it cost?", '');

//         if(typeof(mandatoryExpense) === "string" && typeof(mandatoryExpense) != null && typeof(cost) != null
//         && mandatoryExpense != '' && cost != '' && mandatoryExpense.length < 50){

//             console.log("done")
//             appData.expenses[mandatoryExpense] = cost;
//         } else {
//             console.log("bad data");
//             i--;
//         }
//     i++ 
// } while (i < 2);


appData.moneyPerDay = appData.budget / 30;

alert("Everyday budget is " + appData.moneyPerDay);

if (appData.moneyPerDay < 20){
    console.log("Below border");
} else if (appData.moneyPerDay > 20 && appData.moneyPerDay < 50){
    console.log("On border");
} else if (appData.moneyPerDay > 50){
    console.log("Above border");
} else {
    console.log("Error");
};


//Сколько типов данных существует в JS?
//7: number, string, boolean, symbol, object, null, underfines

//Как вывести информацию в консоль?
//console.log("text")

//Какая функция операторов || и &&?
//|| - логическле или, && - логическое и 

//Сколько видов циклов существует в JS?
// while, do...while, for  его вариации