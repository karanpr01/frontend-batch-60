"use strict";
// ## 🔹 1. `this` in Global Scope

// console.log(this)


// ## 🔹 2. `this` in Function Scope


// function greet(){
//     console.log(this)
// }

// greet()

// ## 🔹 3. `this` in objects

// let person1 = {
//     name:"Suraj",
//     age:21,
//     printName:function(){
//         console.log(this.name , this.age)
//     }
// }

// person1.printName()

// let person2 = {
//     name:"Karan",
//     age:22
// }

// // Call , Bind , Apply

// person1.printName.call(person2)



// ## 🔹 4. `this` in Arrow Functions

//  const Hello = ()=>{
//     console.log(this)
//  }

//  Hello()

// *Lexically enclosed context

// const user = {
//     name:"Alice",
//     greet:()=>{
//         console.log(this)
//         const x =  ()=>{
//         }
//         x()
//     }
// }

// user.greet()