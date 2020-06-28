let startBtn = document.getElementById('start'),
    result = document.querySelector('.result-table'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.querySelectorAll('.expenses-item'), 
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

let money, time;

startBtn.addEventListener('click', function(){    
    time = prompt("Enter a date in YYYY-MM-DD format", '');
    money = +prompt("What is your budget for a month", '');

    while(isNaN(money) || money == '' || money == null){
        money = +prompt("What is your budget for a month", '');
    }
    appData.budget = money;
    appData.timeDate = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
            if(typeof(a) === "string" && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && b.length < 50){
                console.log("done");
                appData.expenses[a] = b;
                sum += +b;
            } else {
                console.log("bad data");
                i--;
            }
        }
        expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
	    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function(){
    if(appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget-expensesValue.innerHTML) / 30).toFixed(1);
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 20){
            levelValue.textContent = "Below border";
        } else if (appData.moneyPerDay > 20 && appData.moneyPerDay < 50){
            levelValue.textContent = "On border";
        } else if (appData.moneyPerDay > 50){
            levelValue.textContent = "Above border";
        } else {
            levelValue.textContent = "Error";
        }  
    } else {
        dayBudgetValue.textContent = "Error";
    }

     
});

incomeItem.addEventListener('input', function(){
    let item = incomeItem.value;
    appData.income = item.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if (appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;

    appData.monthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);  
    }
});

let appData = {
    budget: money,
    timeDate: time,
    expenses: {
    },
    optionalExpenses: {
    },
    income: [],
    savings: false
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