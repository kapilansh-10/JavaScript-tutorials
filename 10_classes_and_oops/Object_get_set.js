const User = {
    _email: "kapil@ml.com",
    _password: "ullu",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this.email = value
    }
}

console.log(User.email)


const tea = Object.create(User)
console.log(tea.email)