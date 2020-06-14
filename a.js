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
