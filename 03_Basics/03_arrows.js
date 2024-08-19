const user = {
    username: "Sajjad",
    price: 320,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to My Website`);
        
    }
}

// user.welcomeMessage()
// user.username="Ahmad"
// user.welcomeMessage()

// console.log(this);     //here the this refers to an empty object {}
// wehn you run in the browser outputs window. Because window is the golbal object

// function chai(){
//     let username="Sajjad"
//     console.log(this.username);      //undefined, cant use it here
// }
// chai()


const chai= () => {                //arrow function
    let username="Sajjad"
    console.log(this.username);       //still undefined
    
}
// chai()

//Explicit return
// const addtwo= (num1,num2)=>{
//     return num1+num2;
// }
// console.log(addtwo(3,4));


//implicit return
// const addtwo= (num1,num2)=> num1+num2;     
// const addtwo= (num1,num2)=> (num1+num2)        //if use curly bracket than we need to use reutn
const addtwo= (num1,num2)=> ({username:"Sajjad"})        //object return
console.log(addtwo(3,4));


//loop Syntaxes
// const myarray=[3,3,32,2]
// myarray.forEach(function () {})
// myarray.forEach(()=>{})