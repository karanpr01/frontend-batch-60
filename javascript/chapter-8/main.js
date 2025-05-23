// const MyObj ={
//     name:"Suraj",
//     age:21,
//     isStudent:true,
// }

// Singleton ( js-class)

// const user = new Object();

// user.name = "Suraj"
// user.age=21

// console.log(user)


// const MyObj ={
//     name:"Suraj",
//     age:21,
//     "isStudent":true,
//     "greet":function(){
//         console.log("Hello world")
//     }
// }

// console.log(MyObj["isStudent"])
// console.log(MyObj.isStudent)



const user = {name:"alice" , age:25};

console.log()

// console.log(Object.entries(user))

// console.log(Object.values(user))

// console.log(Object.keys(user));



// const a = { x: 1 };
// const b = { y: 2 };
// const c = Object.assign({}, a, b);

// console.log(c); 


const settings = { theme: "dark" };
Object.freeze(settings);

settings.theme = "light"; // ❌ Won’t work
console.log(settings.theme); // Output: "dark"