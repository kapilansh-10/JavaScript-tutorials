// call is used to call a function with a given this value and arguments provided individually.
// call is used to invoke a function directly and pass the arguments one by one.
// In simple words call() allows for a function/method belonging to one object to be assigned and called for a different object.

function SetUsername(username){ // here we are creating a function which will set the username
    // complex DB calls 
    this.username = username // // here we are setting the username
    console.log("called")
}

function createUser(username, email, password){ // here we are creating a function which will create a user
    SetUsername.call(this, username) // here we are calling the SetUsername function with the this value as the current object
    
    this.email = email // here we are setting the email
    this.password = password // here we are setting the password 
}

const chai = new createUser("chai","chai@fb.com","123") // here we are creating a new user with the username, email and password
console.log(chai)

// Summary: In this code, we have created a function SetUsername which will set the username. We have created another function createUser which will create a user. We have used call to call the SetUsername function with the this value as the current object. We have created a new user with the username, email and password.