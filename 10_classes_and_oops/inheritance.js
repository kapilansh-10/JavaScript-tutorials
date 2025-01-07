// inheritnace in classes in javascript can be done using extends keyword and super keyword which is used to call the constructor of the parent class in the child class constructor 

class User{  // parent class
    constructor(username){ // constructor
        this.username = username; 
    }

    logMe(){ // method
        console.log(`USERNAME is ${this.username}`)  
    }
}

class Teacher extends User { // extends keyword is used to inherit the User class in Teacher class
    constructor(username, email, password){ // constructor
        super(username); // super keyword is used to call the constructor of the parent class
        this.email = email; 
        this.password = password;
    }

    addCourse(){ // method
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123") // creating an instance of Teacher class with username, email and password as arguments to the constructor 

chai.addCourse() // works as addCourse is inherited by Teacher class from User class, o/p - A new course was added by chai

const masalaChai = new User('masalaChai') // creating an instance of User class with username as argument to the constructor, o/p - USERNAME is masalaChai

// masalaChai.addCourse() // error as addCourse is not a function as it is not inherited by User class from Teacher class 
masalaChai.logMe() // works as logMe is inherited by User class from Teacher class

chai.logMe() // works as logMe is inherited by Teacher class from User class

console.log(chai instanceof Teacher) // true as chai is an instance of Teacher class

console.log(chai instanceof User) // true as chai is an instance of User class