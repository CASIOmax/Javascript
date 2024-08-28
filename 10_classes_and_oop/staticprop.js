class USer{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username:${this.username}`)
    }
    static createID(){
        return `123`
    }
}
const Sajjad = new USer("Sajjad")
// console.log(Sajjad.createID())

class Teacher extends USer{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone =new Teacher("iphone","I@gmail")
iphone.logMe()
console.log(iphone.createID())