//Получить кнопку "Начать расчет" через id

let start = document.getElementById('start');

//Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с 
// и заканчивая)
let result = document.querySelector('.result-table');
console.log(result)
let values = result.querySelectorAll('[class*="value"]');
console.log(values)

//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let input = document.querySelectorAll('.expenses-item');
console.log(input)

//Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 
let button1 = document.getElementsByTagName('button')[0];
let button2 = document.getElementsByTagName('button')[1];
let button3 = document.getElementsByTagName('button')[2];
console.log('button1', button1);
console.log('button2', button2);
console.log('button3', button3);

//Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optExpenses = document.querySelectorAll('.optionalexpenses-item');
console.log(optExpenses);

//Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let possibleIncome = document.querySelector('.choose-income-label');
console.log(possibleIncome);

let checkSavings = document.querySelector('.checksavings');
console.log(checkSavings);

let sum = document.querySelector('.sum');
console.log(sum);

let percent = document.querySelector('.percent');
console.log(percent);

let year = document.querySelector('.year');
console.log(year);

let month = document.querySelector('.month');
console.log(month);

let day = document.querySelector('.day');
console.log(day);



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
        if (typeof(item) != 'string' || typeof(item) == null && item == ''){
            console.log("Wrong data");   
        } else{
            appData.income = item.split(", ");
            appData.income.push(prompt("Something else?"));
            appData.income.sort();
        }
        appData.income.forEach(function (item, index){
            alert(`Ways to get extra income: ${index+1} - ${item}`)
        });
    }
};

function showData(){
    for (let key in appData){
    console.log(`Out application conatins the following data: ${key} - ${appData[key]}`);
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

//Как можно изменить размер шрифта элемента при помощи JS?
//через fontSize