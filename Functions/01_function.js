function greet(){
    console.log("good Morning");
}
// greet()
function addNumbers(num1,num2){
    return num1+num2
}
const ref = addNumbers(3,4)
// console.log(ref)

function loggedIn(username=""){
    return `${username} logged In`
}
// console.log(loggedIn("unais"));