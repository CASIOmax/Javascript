const user={
    username: "Sajjad",
    logInCount: 8,
    signedIn:true,

    getUserDeatils : function(){
        console.log(`Got user detials : ${this.username}`)
        // console.log(this)                //what is this. in this context
    }
}
// console.log(user)
// console.log(user.username)
// console.log(user.getUserDeatils())

// console.log(this)                //what is this. in this global context  =  {}

function adduser(username,age){
    this.username=username;
    this.age=age;

    this.greeting=function(){
        console.log(`Greetings my user ${this.username} of age ${this.age} `)
    }

    // return this
}

const userOne=new adduser("Sajjad",21)
const usertne=new adduser("sdada",231)

// console.log(userOne.constructor)

userOne.greeting()
usertne.greeting()