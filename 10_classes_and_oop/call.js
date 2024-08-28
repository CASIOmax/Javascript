function setUsername(username){
    //complex DB calls
    this.username=username
}

function createUser(username,email,password){
    // setUsername(username) // not called only referenced
    setUsername.call(this, username)     //Use our this not your this
    this.email=email
    this.password=password

}
const chai=new createUser("Sajjad","test@gmail","Password")
console.log(chai)