class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)           //gets from upper class
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`Me course is edited by ${this.username}`)
    }
}
const tester=new Teacher("test","test@gmail.com","21314")

tester.addCourse()

const testerSup=new User("testsup")
testerSup.logMe()
// testerSup.addCourse()
