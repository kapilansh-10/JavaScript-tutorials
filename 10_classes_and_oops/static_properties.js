// static properties are properties that are shared by all instances of a class.
// Static properties are accessed using the class name.


class User{
    constructor(username){
        this.username = username;
    }

    logME(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // Static method can be called without creating an instance of the class 
        return `123`
    }
}

const kapilansh = new User("kapialnsh")
// console.log(kapilansh.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logME() // No Error
console.log(iphone.createId()) // Error

// summary: static properties are properties that are shared by all instances of a class. Static properties are accessed using the class name. Static methods can be called without creating an instance of the class. 