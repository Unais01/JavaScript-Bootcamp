let email = "abcd123@gmail.com";
let username = email;
username="xyz123@gmail.com";
// console.log(email);
// console.log(username);

let myObj = {
    name:"xyz",
    age:20,
    country:"india"
}
//Pass by refernce +++ refrence stored in Heap memory+++
let myObj_2 = myObj;

console.log(myObj_2.name);
console.log(myObj.name);

myObj_2.name = "John Doe";
console.log(myObj_2.name);
console.log(myObj.name);

