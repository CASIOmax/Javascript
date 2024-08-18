function sayMyName(){
    console.log("Hisenberg");
}

// sayMyName()

function addno(num1,num2){
    return num1+num2;
    //return result;
    console.log("hitesh");       //doesnt print anything after reutn
}
const result=addno(3,3)         //if you dont pass a parameter it sayas undefined
// console.log(result);

function login(username ="sam"){       //default value
    if(username===undefined){      //or if(!username)
        console.log("plesae enter a name");
    }
    else{
        return `${username} is very good`
    }
}

// const result2=login("Henry")
// console.log(result2);
// const result3=login()
// console.log(result3);

//Scenario: Where you dont know how many parameters will the user pass, such as a user buying stuff on your website

function calculateCartPrice(val1, val2, ...num1){   //Rest and spread opertor      for now its rest separator
    return num1
}
//console.log(calculateCartPrice(300,400,500,2000));  //val1 takes 300 and val2 takes 400

const user={
    username:"Sajjad",
    price:919
}

function handleObject(anyObj){
    console.log(`Usernmae is ${anyObj.username} and price is${anyObj.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:300
})

const myNewArray=[200,300,500]

function returnSecondValue(getArray){
    return getArray[0]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,500]));
