/*
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());     // changed number to string
console.log(balance.toFixed(1))      // after point how many numbers

const othernumber = 123.46575

console.log(othernumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
*/


// ************************** Maths *********************************

console.log(Math);
console.log(Math.abs(-4));    // converts '-' into '+' but not the reverse
console.log(Math.round(4.4));      //  round of figure
console.log(Math.ceil(4.2));      //  number more than 4 will show 5 as output
console.log(Math.floor(4.4));      //  reverse the ceil case

console.log(Math.random());      // give any random number from 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20  

console.log(Math.floor(Math.random() * (max - min + 1)) + min)