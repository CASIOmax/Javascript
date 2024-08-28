const User={
    _email:'sds@gma',
    _password:"abscj",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}

const tea = Object.create(User)
console.log(tea.email);
