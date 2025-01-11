class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value.toUpperCase()
    }

}

const kapilansh = new User("kapil@ai.com","abc")
console.log(kapilansh.password)
console.log(kapilansh.email)