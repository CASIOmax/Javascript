// Immediately Invoked function Expressions (IIFE)  
// use to get the pollution flobal space varaiable , we go for immediate execution 
//()()

(function chai(){                 //this is a named IIFE
    console.log("DB Connected");
})();
//here we need to stop the context, end the line, or else the next function wont work
//write two IIFE add a semicolon

( (name) => {          //parameter
    console.log("DB Connect 2 ${name{");
})('Sajjad')      //Argument
// chai()