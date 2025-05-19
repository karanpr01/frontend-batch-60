// Array Methods

// *1. Push Method --- Add element at the end of the array

// nums.push(10 , 12 , 34 , 56);
// console.log(nums);

// *2. PoP Method --- Remove element at the end of the array

// let res = nums.pop();

// console.log(res);
// console.log(nums);

// *3. Shift Method --- Remove element at the start of the array

// let res =  nums.shift()

// console.log(res)

// console.log(nums);

// *4. UnShift Method --- Add element at the start of the array

// let nums = [1,2,3,4,5];

// nums.unshift(12,34,5,6,7)

// console.log(nums);

// *Splice -

let nums = [1, 2, 3, 4, 5];

// 1. Remove

// nums.splice(0 , 2)
// console.log(nums)

// 2. Replace

// nums.splice(0 , 2 , "Suraj" , "Karan")
// console.log(nums)

// 3. Adding

// nums.splice(0 , 0 , "Hello" , "World")
// console.log(nums)

// * slice method

// let fruit = ["Apple" , "Banana" , "Orange" , "Mango"];

// let res = fruit.slice(0 , 2)

// console.log(res)
// console.log(fruit)

// *Sort method

let num = [12, 5567, 12, 4, 5, 8999, 0, 123121];

// num.sort()
// console.log(num)

// // Descending order

// num.sort((a,b) => b-a)
// console.log(num)

// *Reverse method

// let veggies = ["🥕" , "🫑" , "🍅" , "🍄‍🟫"]

// veggies.reverse()
// console.log(veggies)

// Concat method

// let fruitsEmoji = ["🍎" , "🍌" , "🍉" , "🍒"]
// let veggiesEmoji = ["🥕" , "🫑" , "🍅" , "🍄‍🟫"]
// let fastFoodEmoji = ["🍔" , "🍟" , "🍕" , "🌭"]

// let food = fruitsEmoji.concat(veggiesEmoji , fastFoodEmoji)
// console.log(food)

// Includes

// let veggies = ["🥕" , "🫑" , "🍅" , "🍄‍🟫"]

// console.log(veggies.includes("🫛"))

// Join method

// let veggies = ["🥕" , "🫑" , "🍅" , "🍄‍🟫"]

// console.log(veggies.join("~~"))

// forEach method

// numbers.forEach((element , index , array)=>{
//     console.log(element * index)
// })

// Map Method

// let newArray = numbers.map((element , index , array)=>{
//         return element % 2 === 0
//     })

//     console.log(newArray)

// let Even = numbers.filter((element , index , array)=>{
//     return element % 2 === 0;
// })

// console.log(Even)

// *reduce
// let numbers = [1, 2, 3, 4, 5];

// let Total = numbers.reduce((acc , currVal)=>{
//     return acc + currVal
// },0)

// console.log(Total)


// 