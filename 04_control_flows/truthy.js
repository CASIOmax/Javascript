// truthy and falsy values

//falsy values
//false, 0,-0,BigInt 0n, "",nu;;,undefined, NaN

//truthy values
//other values are truth sych as "0",'false',"",[],{},function () {}

// const userEmail=[]
// if(userEmail.length===0){
//     console.log("Empty Array")
// }

// const userobject={}
// if(Object.keys(userobject).length===0){
//     console.log("Empty Object")
// }

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1=5??10
// val1=null??10       //if value is null assign other value
val1=undefined??null ??10 ??20   //assign the first value after null or undefined
console.log(val1);

//Terniary Operator

// condition ? true :false
const ice=39
ice>=80?console.log("dumb"):console.log("more dumb!")