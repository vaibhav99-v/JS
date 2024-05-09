const User={
    _email: "v@vv.com",
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }

}


const bunny = Object.create(User)

console.log(bunny.email);