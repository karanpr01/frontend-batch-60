// fetch("https://api.github.com/users/aestheticsuraj234" , {
//     method:"GET",
//     body:JSON.stringify({name:"Suraj"})
// })
//   .then((res) => {
//    return res.json()
//   })
//   .then((val)=>{
//     console.log(val)
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //

async function fetchGithubData(username) {
  try {
    let res = await fetch(`https://api.github.com/user/${username}`);
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Always run")
  }
}

fetchGithubData("Aestheticsuraj234");

// make atleast 3 custom promises and use there async/await for consuming it
