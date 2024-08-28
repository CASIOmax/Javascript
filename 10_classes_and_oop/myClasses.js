// //ES6

// class User {
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const test = new User("Carlo","Carlo@gmail.cm","sdadawdww")

// console.log(test.encryptPassword());
// console.log(test.changeUsername());


//If not use classes than behind the scene

function User(username,email,password){
        this.username=username
        this.email=email
        this.password=password
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const tester = new User("Carlo","Carlo@gmail.cm","sdadawdww")

console.log(tester.encryptPassword());
console.log(tester.changeUsername());

