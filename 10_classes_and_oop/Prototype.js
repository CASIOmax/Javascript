// let myName="Sajjad"

// console.log(myName.truelength);

let myHeroe = ["thor","spide","bat"]

let heroPower={
    thor:"hammer",
    spide:"sling",
    bat : "money",

    getSpiderPower:function(){
        console.log(`Spide power is ${this.spide}`);
    }
}

Object.prototype.sajjad=function(){                      //gave object superpower, created a prototype
    console.log(`Sajjad is present in all Object`)
}

Array.prototype.heysajjad=function(){
    console.log(`Sajjad is functional`)
}

heroPower.sajjad()
myHeroe.sajjad()
// heroPower.heysajjad()


//Inheritance
const User={
    username:"Chai"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvaialble:false
}
const TASupport ={
    makeAssign:'JS Assgiment',
    fulltime: false,
    __proto__:TeachingSupport          //inherited from teaching support
}

Teacher.__proto__=User            //inheriting properties by teacher

//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)         //teaching support gets teacher stuff

let anotherUsername = "Chai aur code"

String.prototype.trueLenght=function(){
    // console.log(`${this.username}`)
    console.log(`Ture Lenght is: ${this.trim().length}`);
    
}
anotherUsername.trueLenght()
"sajjad".trueLenght()
"bus".trueLenght()