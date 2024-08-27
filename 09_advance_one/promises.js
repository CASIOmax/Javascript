// fetch('https://something.com').then().catch().finally()

// const promiseOne=new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls, cryptography,network 
//     setTimeout(function(){
//         console.log('Async taks is complete');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })      //connection with resolve


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     resolve({username:"chai", email:"chai@example.com"})
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"Sajjad",Password:"231321"})
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })

// promiseFour.then().catch()

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);             //chaining -> value used from upper then
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>console.log("The promise is either resolved or rejected"))



// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"Sajjad",Password:"231321"})
//         }
//         else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Javascript",Password:"231321"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
});

async function consumePromiseFive(){             //promise is an object
    try{
        const response=await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))