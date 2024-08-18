function sayMyName(){
    console.log("Hisenberg");
}

sayMyName()

function addno(num1,num2){
    return num1+num2;
    //return result;
    console.log("hitesh");       //doesnt print anything after reutn
}
const result=addno(3,3)         //if you dont pass a parameter it sayas undefined
console.log(result);

function login(username ="sam"){       //default value
    if(username===undefined){      //or if(!username)
        console.log("plesae enter a name");
    }
    else{
        return `${username} is very good`
    }
}

const result2=login("Henry")
console.log(result2);
const result3=login()
console.log(result3);

