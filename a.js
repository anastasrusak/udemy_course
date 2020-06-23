'use strict';

// conversion to String
//1.
console.log(typeof(String(4))); // String(4) - obsolete
//2.
console.log("WW"+ 5);
console.log('http://vk.com/catalog' + 5);

//convert to number
//1.
console.log(typeof(Number('5'))); // String(4) - obsolete
//2.
console.log(typeof(+'5'));
console.log(5 + +'5');
//3.
console.log(typeof(parseInt('15px', 10)));
console.log(parseInt('15px', 10));

//let ans = +prompt("hello?", '');


// convert to boolean
//1. 
// 0, '', null, undefined, NaN = false
// the rest is true
//2. 
console.log(typeof(Boolean('5')));
//3.
console.log(typeof(!!'5'));


//alert("Hello");
//confirm("Are you here?")
//let answer = prompt("Are you 18?", "Yes")

let num = 50;

(num == 50) ? console.log("True") : console.log("False");

switch(num){
    case num < 49:
        console.log("False");
        break;
    case num > 100:
        console.log("Too much");
        break;
    case num > 80:
        console.log("Still to much");
        break;
    case 50:  // а не num==50
        console.log("True");
        break;
    default:
        console.log("Something wrong");
        break;
}

let num = 50;

while (num < 55){
    console.log(num);
    num++;
}

let num = 50;

do{
    console.log(num);
    num++;
}
while (num < 56);

for (let i = 1; i < 8; i++){
    if (i ==6){
        break; // прервет весь цикл
    }
    console.log(i)
}

for (let i = 1; i < 8; i++){
    if (i ==6){
        continue; // пропустит 6
    }
    console.log(i)
}

// function declaration  - объявлена в потоке кода, можно вызвать до объявления

function showFirstMessage(text){
    alert(text);
    console.log(num)
}

showFirstMessage("Hello");


function calc(a, b){
    return a + b;
}

console.log(calc(3, 4));

function returnVal(){
    let num = 50;
    return num;
}

let anotherNum = retVal(); 

// function expression  - функция присвоена в переменную, создается тогда, когда код доходит

let calc = function(a, b){
    return a + b;
}

// стрелочная функция 

let calc = (a, b) => {a + b};

// свойства и методы

let str = "test";
console.log(str.length); // свойство

console.log(str.toUpperCase()); // метод

let twelve = "12.2"
console.log(Math.round(twelve));

let twelve = "12.2px"
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

//callback
//1. no callback
function first(){
    setTimeout(function(){
        console.log(1);
    }, 500)
}

function second(){
    console.log(2);
}

first();
second(); //сначала выведется 2, потом 1

//2. callback
function learnJS(lang, callback){
    console.log("I learn " + lang);
    callback();
}
learnJS("JavaScript", function() {
    console.log("I pass third lesson");
}) //сначала выполнится 1, потом 2

// или

function learnJS(lang, callback){
    console.log("I learn " + lang);
    callback();
}

function done(){
    console.log("I pass third lesson"); 
}

learnJS("JavaScript", done); //done  - не вызов ф-ции, а саму ф-цию, чтобы она потом выполнилась сама

// объекты
let obj = new Object();

let options = {
   width: 1024,
   height: 1024,
   name: "test"
}

console.log(options.name);
options.bool = false; //добавить новый ключ

delete options.bool; //удаление свойства

options.colors = {
    border: "black",
    background: "red"
};

for (let key in options){
    console.log('Option ' + key + ' has value ' + options[key]);
}

console.log(Object.keys(options).length);

// arrays

let arr = [1, 2, 3, 4, 5];

arr.pop(); // удалить элемент с конца
arr.push("5"); // добавить элемент с конец строки
arr.shift(); // удаляетс первый элемент массива
arr.unshift("first"); //добавить первый эдемент 

arr.forEach(function(item, i, mass){
    console.log(i + ' : ' + item + '( (array: ' + mass + ')' );
});

console.log(arr);

let mass = [1, 3, 4, 6, 7];

for (let key in mass){
    console.log(key);
} // выведет индексы

for (let key of mass){
    console.log(key);
} // выведет значения

let ans = prompt("", ""),
    arr = [];

arr = ans.split(',');
console.log(arr);    

let arr = ["aaa", "ddd", "rrr"],
    i = arr.join(', ');

console.log(i);    

let arr = ["1", "15", "4"],
    i = arr.sort(compareNum);

function compareNum(a, b){
    return a-b;
}

console.log(arr);  

//ООП

let soldier = {
    health: 400, 
    armor: 100
};

let john = {
    health: 100 
};

john.__proto__ = soldier; //теперь у джона есть armor, джон теперь потомок солдата

//работа с DOM
// получение элементов
let box = document.getElementById('idName');

let btn = document.getElementsByTagName('button'); //несколько кнопок - получаем псевомассив
console.log(btn[0]) //одна кнопка
console.log(btn) //коллекци кнопок

let circle = document.getElementsByClassName('className');

let heart = document.querySelectorAll('.heart'); //получаем класс (через точку), id -через #, атрибут - через [] 
let heart = document.querySelectorAll('.wrapper .heart');  //вложенный класс

let oneHeart = document.querySelector('.heart'); //получаем первый элемент на страницу с таким селектором
let wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue'; 
btn[1].style.borderRadius = '100%';

for (let i = 0; i < heart.length; i++){
    heart[i].style.backgroundColor = 'blue';
}

heart.forEach(function(item, i, hearts){
    item.style.backgroundColor = 'blue';
});

let div = document.createElement('div'); // создает элемент
let text = document.createTextNode('I am here'); // создае текст вне обертки тегов

div.classList.add('black'); //black - класс созданный заранее в css файле

document.body.appendChild(div); //добавить элемент в файл html в концы боди
wrapper.appendChild(div); // wrapper - родитель, добавление в конец родителя

document.body.insertBefore(div, circle[0]); //circle[0] - перед чем вставить div
document.body.removeChild(circle[1]); //удаление элемента у родителя

document.body.replaceChild(btn[2], circle[2]); //заменить один элемент другим

div.innerHTML = 'Hello World'; //добавление html кода в элемент
div.innerHTML = '<h1>Hello World</h1>'; //добавится тэг

div.textContent = 'Hello World' //добавление именно текста, позволяет избежать ввода юзером не текста

