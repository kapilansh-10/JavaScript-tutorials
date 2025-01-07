// class is a blueprint for creating objects with data and functions
// class is a template for creating objects
// In simple words class is used to define the properties and behavior of an object

class User { // class keyword is used to create a class
    constructor(username, email, password){ // constructor is a special method for creating and initializing an object created with a class
        this.username = username; // this keyword is used to access the object's properties
        this.email = email; // this keyword is used to access the object's properties
        this.password = password; // this keyword is used to access the object's properties
    }

    encryptPassword(){ // here we are creating a method inside a class
        return `${this.password}abc` 
    }

    changeUsername(){ // here we are creating a method inside a class
        return`${this.username.toUpperCase()}` 
    }
}

const chai = new User("chai","chai@gmail.com","123") // new keyword is used to create an object of a class

console.log(chai.encryptPassword()); // o/p : 123abc
console.log(chai.changeUsername()); // o/p : CHAI

// Summary of above code: We can conclude that class is a blueprint for creating objects with data and functions. In this code, we have created a class User with the constructor method which will create and initialize an object created with a class. We have created two methods encryptPassword and changeUsername inside the class. We have created a new object chai of the class User and called the methods encryptPassword and changeUsername.



// behind the scene

function User(username, email, password){ // here we are creating a function which will create a user
    this.username = username; // here we are setting the username
    this.email = email; // here we are setting the email
    this.password = password; // here we are setting the password
}

User.prototype.encryptPassword = function(){ // here we are creating a method inside a function
    return `${this.password}abc` 
}

User.prototype.changeUsername = function(){ // here we are creating a method inside a function
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@gmail.com","123") // here we are creating a new object of the function User


console.log(tea.encryptPassword()); // o/p: 123abc
console.log(tea.changeUsername()); // o/p: TEA

// Summary of above code:In above code, we have created a function User which will create a user. We have created two methods encryptPassword and changeUsername inside the function. We have created a new object tea of the function User and called the methods encryptPassword and changeUsername.

// comparing above two code snippets, we can see that the class keyword is just a syntactic sugar for the constructor function and prototype methods. The class keyword makes it easier to define a constructor and prototype methods