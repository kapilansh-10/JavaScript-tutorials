// Classes in JavaScript are syntactic sugar over JavaScript's existing prototype-based inheritance.
// Classes are a template for creating objects. They encapsulate data with code to work on that data.
// Classes in JS are defined using the class keyword.
// In simple words class is a blueprint for creating objects.

// Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data, in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).
// In simple words, OOP is a programming paradigm that uses "objects" to design applications and computer programs.



const user = { // Object
    username: "kapilansh", // Properties
    loginCount: 8, 
    signedIn: true,

    getUserDetails: function(){ // Method
        // console.log("Got user details from Database")
        // console.log(`Username: ${this.username}`) // this refers to the object
        console.log(this)
    }

}

console.log(user.username) // Accessing properties
// console.log(user.getUserDetails()) // Accessing method
// console.log(this) // this refers to the global object


function User(username, loginCount, isLoggedIn){ // Constructor function
    this.username = username // this refers to the object
    this.loginCount = loginCount 
    this.isLoggedIn = isLoggedIn 

    this.Greeting = function(){ // Method
        console.log(`Welcome ${this.username}`) // this refers to the object
    }

    // return this
}

const userOne = new User("kapilansh",12,true) // Object
const userTwo = new User("Chai aur Code",11,false) 

console.log(userOne.constructor) // Accessing constructor
// console.log(userTwo) // Accessing object