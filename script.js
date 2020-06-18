let money, time;
function start(){
    money = +prompt("What is your budget for a month", '');
    time = prompt("Enter a date in YYYY-MM-DD format", '');

    while(isNaN(money) || money == '' || money == null){
        money = +prompt("What is your budget for a month", '');
    }
};
start();

let appData = {
    budget: money,
    timeDate: time,
    expenses: {
    },
    optionalExpenses: {
    },
    income: [],
    savings: true,
    chooseExpenses: function(){
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
            }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Everyday budget is " + appData.moneyPerDay);   
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 20){
            console.log("Below border");
        } else if (appData.moneyPerDay > 20 && appData.moneyPerDay < 50){
            console.log("On border");
        } else if (appData.moneyPerDay > 50){
            console.log("Above border");
        } else {
            console.log("Error");
        }   
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt("What is the saving amount?", ''),
                percent = +prompt("What is the percent?", '');
    
            appData.monthIncome = save/100/12*percent;
            alert("Moneth income is " + appData.monthIncome);    
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i <= 3; i++){
            appData.optionalExpenses[i] = prompt("What is your optional expense?", '');
            console.log(appData.optionalExpenses)
        }
    },
    chooseIncome: function(){
        let item = prompt("What are your incomes (list separated by comma)?");
        //appData.income = item.split(", ");
        //appData.income.push(prompt("Something else?"));
        //appData.income.sort();
        if (typeof(item) === 'string' && item != null && item != ''){
            appData.income = item.split(", ");
        }
        let extraQuestion = prompt("Something else?");
        if (typeof(extraQuestion) === 'string' && extraQuestion != null && extraQuestion != ''){
            appData.income.push(extraQuestion);
        }
        appData.income.sort();
        appData.income.forEach(function (item, index){
            console.log(`Ways to get extra income: 
            ${index+1}: ${item}`)
        });
    }
};

function showData(){
    for (let key in appData){
    console.log(`Out application conatins the following data: ${appData[key]}`);
    }
}
showData();


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

//Сколько типов данных существует в JS?
//7: number, string, boolean, symbol, object, null, underfines

//Как вывести информацию в консоль?
//console.log("text")

//Какая функция операторов || и &&?
//|| - логическле или, && - логическое и 

//Сколько видов циклов существует в JS?
// while, do...while, for  его вариации

// Что значит () после названия функции?
// вызов функции

//Как перебрать свойства объекта?
// через цикл for in