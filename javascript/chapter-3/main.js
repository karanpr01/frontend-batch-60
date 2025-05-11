// let age = 18;

// // console.log(age >= 18)

// if(age < 18){
// console.log("Yes you can drive🏎️")
// }

// else if(age > 18){
//     console.log("Age is greate than 18")
// }

// else if(age === 18){
//     console.log("Age is equal to 18")
// }

// else{
// console.log(" You can't drive🔥")
// }


let day = 14;

switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;        
    case 4:
        console.log("Thursday")    
        break;
    case 5:
        console.log("Friday") 
        break;
    case 6:
        console.log("Saturday");
        break;       
    case 7:
        console.log("Sunday") 
        break;
    
     default:
        console.log("Invalid day")


    }


    let userRole = "MODERATOR"
    let Role =  userRole === "ADMIN" ? "ADMIN" : "USER"

    console.log(Role)