const marvel = ['ironman','captainAmerica','thor'];
const dc =['superman','batman','flash']
let y  =3;
// console.log(marvel.concat(dc));
const allHeros = [...marvel,...dc]//spread Operator
// console.log(allHeros);
// console.log(Array.isArray(allHeros));

// console.log(Array.isArray(y));
// console.log(Array.from("Unais"));
let a = 100;
let b = 200;
let c = 300;
console.log(Array.of(a,b,c));//make array of variable or values given