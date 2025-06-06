function greet(username ,callback ){
    console.log("Hello " + username)
    callback();
}


greet("Suraj" , function(){
    console.log("Hello world")
})


console.log("before calling settimeout")
setTimeout(() => {
  console.log("Callback after 2 seconds");
}, 2000);


console.log("Afet calling   settimeout")