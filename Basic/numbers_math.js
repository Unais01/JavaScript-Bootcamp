const score = 599;
const balance = new Number(1000);

// console.log(score);
// console.log(typeof score);
// console.log(balance);
// console.log(typeof balance);
// console.table((score,balance))
// let convertToarray = (balance.toString().split(''));
// for(let i =  0 ;i<convertToarray.length;i++){
//     console.log(convertToarray[i]);
// }

// let bankBalance = 100000000;
// console.log(bankBalance.toLocaleString('en-IN'));

// // console.log(Math);

// console.log(Math.abs(-3));
// console.log(Math.round(4.3));
// console.log(Math.round(4.9));
// console.log(Math.ceil(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.1));
// console.log(Math.floor(4.9));

let generateRandom= Math.random();
// console.log(Math.floor(generateRandom*10)+1);
let min = 10;
let max =20;
console.log((Math.floor(generateRandom*(max-min+1)))+min);