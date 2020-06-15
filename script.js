let money = +prompt("What is your budget for a month", '');
let time = prompt("Enter a date in YYYY-MM-DD format", '');

let mandatoryExpense = prompt("Enter mandatory expense name in this month", '');
let cost = +prompt("How much will it cost?", '');

let appData = {
    budget: money,
    timeDate: time,
    expenses: {
        mandatoryExpense: cost
    },
    optionalExpenses: {
    },
    income: [],
    savings: "false"
};

alert (money/30);

//Сколько типов данных существует в JS?
//7: number, string, boolean, symbol, object, null, underfines

//Как вывести информацию в консоль?
//console.log("text")

//Какая функция операторов || и &&?
//|| - логическле или, && - логическое и 