//*  3. **`setTimeout()` & `setInterval()` in JavaScript**

// ! 1. SetTimeout() is used to execute a function once after a specified delay

// setTimeout(()=>{} , delay )

// let id = setTimeout((username) => {
//     console.log(`Hello! ${username}`)
// }, 3000 , "Suraj");

// clearTimeout(id)


// ! 2. SetInterval() is used to execute a function on a interval 

let count = 0;
let id = setInterval(() => {
  console.log(`Count: ${++count}`);
  if (count === 5) clearInterval(id);
}, 1000);