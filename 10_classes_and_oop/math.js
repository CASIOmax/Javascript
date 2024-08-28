// const descriptior=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptior);


// console.log(Math.PI);


// const mynewObject=Object.create(null)

const test={
    name:"Bots",
    hp:97,
    isAvaialble:true,

    fun:function(){
        console.log("DUMB")
    }
}
// console.log(Object.getOwnPropertyDescriptor(test,"name"));

// Object.defineProperty(test,'name',{
//     writable:false,
//     enumerable:false,
//     configurable:true
// })
// console.log(Object.getOwnPropertyDescriptor(test,"name"));

for(let [key,value] of Object.entries(test)){
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`)
    }
}



