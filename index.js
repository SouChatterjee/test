// async function nill(){
//   console.log("jhfjfjfjfj")
//   const url='https://api.github.com/users';
//   const response=await fetch(url)
//   console.log("before response");
//   const users= await response.json();
//   console.log("users Resolved");
   
//   return users;
//   // return "Nill"
// }
// console.log("Before Calling Nill");
// let a=nill();
// console.log("After Calling Nill")
// console.log(a)


// a.then((data)=>console.log(data))



//Promise in JavaScript.....

//resolve and reject are two parameter and also a function in this Promise object in javascript.

// function func1(){
//   return new Promise(function(resolve,reject){
//     setTimeout(()=>{
//       const error=true;
//       if(!error){
//         console.log("Promise has been resolved");
//         resolve("solving");
//       }
//       else{
//         console.log("Your promise has not resolved")
//         reject("sorry not fulfilled")
//       }
//     },2000)
//   })
// }

// func1().then(function(){
//   console.log("Thanks for resolving")
// })

// .catch(function(error){
//   console.log("very bad " +error)
// })



