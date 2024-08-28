function User(email,passsword){
    this._email=email
    this._passsword=passsword

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email=value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const test =new User("cahaichais","Chai")
console.log(test.email);

