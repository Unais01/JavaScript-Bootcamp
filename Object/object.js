const obj = {
    name: "unais",
    age: 20,
    gender: "male",
    loggedIn: true,
    worked: ["Mon", "Fri", "Sat", "Sun"]
}
// console.log(obj.name);
// console.log(obj.gender);
// console.log(obj.age);
// console.log(obj.worked);
// Object.freeze(obj);
// obj.name = "shaikh"
// console.log(obj.name);

//merging object + singleton and non-sigleton object

const tinderUser = new Object();
const instaUser = {};
// console.log(tinderUser);
// console.log(instaUser);

const a = {
    car: "volkswagen",
    speed: 150
}
const b = {
    company: "Tesla",
    veloctiy: 200

}

const c = Object.assign({},a,b);
// console.log(c);
// const c = {...a,...b};
// console.log(c);

//Array of Objects

const DB = [
    {
        id:1,
        email:"xyz@gmail.com"
    },
    {
        id:2,
        email:"abc@gmail.com"
    }
]
// console.log(DB[0]);
// console.log(DB[1]);
// console.log(Object.keys(a));
// console.log(Object.values(a));
// console.log(a.hasOwnProperty("car")); //return object contain or not


//Object De-Structuring
const course = {
    courseName:"DSA In C++",
    courseInstructor:["Sanket Singh","Raghav Garg"],
    coursePrice:2500,
    recorded:true,
    duration:"4 months"
}

// console.log(course.courseInstructor);
// console.log(course.duration);
// const {courseName:cn,courseInstructor:ct} = course;
// console.log(cn);
// console.log(ct);
const {courseName,courseInstructor} = course;
// courseName="JS in Hindi";//assignment to constant variable
// console.log(courseName);