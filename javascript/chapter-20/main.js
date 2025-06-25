// var , let , const

// // var a = "Karan";
// // a = "likashdoilsqh";

// {
//    { var a = "Suraj";}
// }
// console.log(a)

// *let

// let name = "Karan"
// name = "karan"

// console.log(name)

// {
//     let name = "Suraj"
// }
// console.log(name)

// *const

// const PI = 3.14;

// PI = 22 / 7

// console.log(PI)

// *arrow

// function Add(a,b){
//     return a+b
// }

// const Add = (a,b)=> a+b

// console.log(Add(2,3))

// const sub = a => a-10;

// console.log(sub(20))

// Destructing [] , {}

// const [num1 , num2 , num3 , num4 , num5] = [12,34,5,6,67];

// console.log(num1 , num2 , num3 , num4 , num5)

// const user = { name: "Alice", age: 25 };

// const {name , age} = user

// console.log(name , age)

// function greet(name = "Guest") {
//   console.log(`Hello, ${name}`);
// }
// greet("Suraj"); // Hello, Guest

// Rest and Spread Operators `...`

// 1. rest

// function Add(...numbers) {
//     console.log(numbers)
//   return numbers.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);
// }

// console.log(Add(12, 34, 90 , 100 , 300 , 400));


// 2. spread(...)

// Shallow copy and deep copy , reference

// let arr1 = ["Suraj" , "Karan" , "Akash"]
// let arr2 = ["Priya" , "Shivani" , "Tanya"]

// let name = [...arr1 , ...arr2]

// console.log(name)


// let obj1 = {name:"suraj"}

// let obj2 = {age:21}

// let obj3 = {
//     ...obj1,
//     ...obj2
// }

// console.log(obj3)

// let map = new Map()


// map.("name","suraj")

// console.log(map)

// const set = new Set([1, 2, 2, 3]);
// console.log(set); // Set {1, 2, 3}