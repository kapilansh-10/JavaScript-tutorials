// ! object literals in javascript: objects are key value pairs in javascript and are used to store multiple values in a single variable

// ! Symbol is a primitive data type in javascript and is used to create unique identifiers for objects and properties in javascript

const mySym = Symbol("key1")


const JsUser = {
    name: "Kapilansh",
    "full name": "Kapilansh Patil",
    mySym: "key1", //* this is a string and not a symbol
    [mySym]: "key1", //* this is a symbol and not a string
    age: 18,
    location: "Nagpur",
    email: "kapilpatil2004@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

//* how to access object properties

// console.log(JsUser.email) //* dot notation to access object properties 
// console.log(JsUser["email"]) //* another way to access object properties
// console.log(JsUser["full name"])
// console.log(JsUser.mySym) //* this will print key1 as mySym is a string and not a symbol
// console.log(JsUser[mySym]) //* this will print undefined as mySym is a symbol and not a string

//* how to update object properties

JsUser.email = "kapil@google.com" //* dot notation to update object properties
// console.log(JsUser.email) //* updated email

// Object.freeze(JsUser) //* this will freeze the object and we cannot update the object properties
JsUser.email = "kapil@amazon.com" //* this will not update the email as the object is frozen 
// console.log(JsUser) //* email will remain unchanged

//* Adding function to object

JsUser.greeting = function(){
    console.log("Hello JavaScript User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser user, ${this.name}`)
}
console.log(JsUser.greeting()) //* this will print Hello JavaScript User
console.log(JsUser.greetingTwo()) //* this will print Hello JsUser user, Kapilansh