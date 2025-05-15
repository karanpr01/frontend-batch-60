// // console.log("Hello")

// // console.log("hello")
// // console.log("hello")

// // console.log("Hello")
// // console.log("hello")
// // console.log("hello")

// // * For Loop

// // 1 - 100 ( 1 , 2 ,3 ,--- 100)

// // for(initialation  , condition , increment/decrement){
// //     // code to execute
// // }

// // for(let i = 1; i <=5; i++){
// //     console.log(i)

// //     console.log("Hello world🔥")
// //         // console.log(1)
// //         // console.log(2)
// //         // console.log(3)
// //         // console.log(4)
// //         // console.log(5)
// //     }

// let num = 1;
// while (num <= 100) {
//   console.log(num);

//   num++;
// }

// let a = 1;
// do {
//   console.log("DO WHILE LOOP", a);
// } while (a > 100);

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 10; i > 5; i--) {
//   console.log(i);
// }

// let i = 10;

// while (i > 5) {
//   console.log(i);

//   i--;
// }

// Write a `while` loop that sums all numbers from 1 to 100 and prints the result.

// let i = 1;
// let sum = 0;
// while(i<=100){
//     sum += i;
//     console.log(i)
//     i++
// }

// console.log(sum)


// Write a `for` loop that prints the numbers from 10 down to 1, but **stops early** if the number is divisible by 4 (use `break`).
let i =100
do{
    console.log(i)
    if(i % 4 === 0){
        break;
    }
i--
}while(i>=1)

for(let i = 99; i>=1;i--){
    if(i % 4 === 0){
        break;
    }

    console.log(i)
}