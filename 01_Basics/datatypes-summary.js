// Primitive Type
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid);
//const bignum=231309291323n

// Reference (Non-primitive Type)
// Array, Objects, Functions

const hero = ["SAjjad","umer"];
let myobj = {
    name:"Rehan",
    age:"22",
}
const myFunction = function(){
    console.log("Greetings");
}


//++++++++++++++++++++++++++++
//Memories
// Stack(Primitive),heap(Non-Primitive)
let mynmae="sajjad"
let anothername=mynmae
console.log(anothername);          //Here it gets a copy of my name

let userOne ={
    name:"sajjad",
    email:"idk@gmail.com",
}
let userTwo = userOne                      //This references the original one
userTwo.email="dumb@gmail.com"             // Changes the original value
console.log(userOne.email);          
console.log(userTwo.email);          


// Primitive goes to Stack 
// No-primite goes to heap       // Gives original reference