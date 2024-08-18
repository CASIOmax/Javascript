//Singleton = When object is made from a constructer it is a unique object

//Object Literal = Not Unique objects
const mySym = Symbol("key1")    //must declare a symbol before use
console.log(typeof mySym)
const JSUser = {      //here always use const name = Value

    name:"Sajjad",      //key:value
    
    "full name":"Sajjad Ahmad",    //Can do like that but you need to call it as JSUser["full name"] not as JSUser.full name
    
    [mySym]:"mykey1",       //Interviwe questio, declare and print a symbol in an object. [Symbol]="Value"
    
    age:18,
    location:"Pakistan",
    Email:"super@gmail.com",
    isloggedin:false,
    lastLoginDays:["SAturday","Sunday"]
}

console.log(JSUser.Email)        //not prefered
console.log(JSUser["Email"])     //more prefered syntax
console.log(JSUser[mySym])
console.log(typeof (JSUser[mySym]))

JSUser.Email="Newbie@gmail.com"
// Object.freeze(JSUser)
JSUser.Email="sdadwe@gmail.com"
console.log(JSUser)

JSUser.greeting = function(){
    console.log("Hello JS USer");
}
JSUser.greetingtwo = function(){
    console.log(`Hello JS USer, ${this.name}`);
}
console.log(JSUser.greeting());
console.log(JSUser.greetingtwo());