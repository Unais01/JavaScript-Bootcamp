const user = {
    name:"xyz",
    email:"abc@gmail.com",
    job:false
}

function objectInFunction(genericObject){
    return `The user's name is ${genericObject.name} and email is ${genericObject.email}`
}

const call = objectInFunction(user);
// console.log(call)
//console.log(objectInFunction({name:'hitesh',email:"xyz"}));

const myarray = [1,2,5,8,7];
function arrayInFunction(anyarray){
    console.log(anyarray[1]);
}
// arrayInFunction(myarray)
// arrayInFunction([5,6,8,4,1,2,484])


function calculateCartPrice(...itemPrice){
    return itemPrice;
}
// console.log(calculateCartPrice(1,5,100,23));

console.log("addOne",addOne(6))
// console.log("addTwo",addTwo(8))
function addOne(num){
    return num+1;
}


const addTwo = function(num){
    return num+2;
}

// console.log("addOne",addOne(6))
// console.log("addTwo",addTwo(8))