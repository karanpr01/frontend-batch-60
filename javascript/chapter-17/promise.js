// let myPromise = new Promise((resolve , reject)=>{
// resolve({name:"Suraj"})
// })

// // resolve ----> then(()=>{})
// // reject ----> catch(()=>{})

// myPromise.then((value)=>{
//     console.log(value)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{console.log("Always Runs")})

// 1. creating promise
// 2. consuming promise

// Promise ( age >= 18 Resolve , reject )


let agePromise = new Promise((resolve, reject) => {
    let age = 19
  if (age > 18) {
    resolve("Age is greater");
  } else {
    reject ("Age must be greater than 18.");
  }
});

agePromise.then((v)=>{console.log(v)})
.catch((err)=>{
    console.log(err)
})
