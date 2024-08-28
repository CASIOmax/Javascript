class User{
    constructor(email,passsword){
        this.email=email
        this.passsword=passsword
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }

    get passsword(){
        return `${this._passsword}Sajjad`
    }
    set passsword(value){
        this._passsword=value
    }
}

const sajjad=new User("Sajjad@gmail.com","avc")
console.log(sajjad.passsword)
console.log(sajjad.email)