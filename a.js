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