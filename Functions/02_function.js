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