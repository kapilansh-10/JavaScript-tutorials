// ProtoType is a parent object of all objects in JS and it contains all the methods and properties that all objects can access.

// let myName = "kapilansh" // string
// let myName = "kapilansh   " // string

// console.log(myName.truelength) // undefined


let myHeroes = ["thor","spiderman"] // array

let heroPower = { // object
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){ // method
        console.log(`Spidy power is ${this.spiderman}`) // this refers to the object heroPower 
    }
}

Object.prototype.kapilansh = function(){ // method
    console.log(`kapilansh is present in all objects`)
}

// Above code work is that we are adding a new method to the Object prototype. So, all the objects in JS will have this method.

Array.prototype.heyKapilansh = function(){
    console.log(`kapilansh says hello`)
}

// Above code work is that we are adding a new method to the Array prototype. So, all the arrays in JS will have this method.


// heroPower.kapilansh() // kapilansh is present in all objects

myHeroes.kapilansh() // kapilansh is present in all objects
myHeroes.heyKapilansh() // kapilansh says hello
// heroPower.heyKapilansh() // heroPower.heyKapilansh is not a function because heyKapilansh is a method of Array prototype and heroPower is an object not an array.


// inheritance 


const User = { // parent object
    name: 'chai',
    email: 'chai@google.com'
}

const Teacher = function(){ // child object
    makeVideo: true
}

const TeachingSupport = function(){ // grandchild object
    isAvailable: false
}

const TAsupport = function(){ // grandchild object 
    makeAssignment: 'JS assignment' 
    fullTime: true
    __proto__: TeachingSupport
}

Teacher.__proto__ = User // old syntax which is used for inheritance in JS i.e prototype chaining , in simple words Teacher is a child object of User object


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) // new syntax which is used for inheritance in JS i.e prototype chaining , in simple words TeachingSupport is a child object of Teacher object


let anotherUsername = "ChaiaurCode     " // string

String.prototype.truelength = function(){ // method
    console.log(`${this}`) // ChaiaurCode 
    console.log(`True length is: ${this.trim().length}`) // True length is: 10
}

anotherUsername.truelength() // True length is: 10