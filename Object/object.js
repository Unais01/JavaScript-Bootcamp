const obj ={
    name:"unais",
    age:20,
    gender:"male",
    loggedIn:true,
    worked:["Mon","Fri","Sat","Sun"]
}
// console.log(obj.name);
// console.log(obj.gender);
// console.log(obj.age);
// console.log(obj.worked);
Object.freeze(obj);
obj.name = "shaikh"
console.log(obj.name);
