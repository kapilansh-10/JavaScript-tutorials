function multiplyBy5(num){ // this is a function
    return num*5
}

multiplyBy5.power = 2 // this is a property of the function object multiplyBy5 

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // undefined


function createUser(username, score){ // this is a constructor function
    this.username = username // this refers to the object
    this.score = score 
}

createUser.prototype.increment = function(){ // this is a method
    this.score++ // this refers to the object
}

createUser.prototype.printMe = function(){ // this is a method
    console.log(`score is ${this.score}`) // this refers to the object
}

const chai = new createUser("chai", 25) // this is an object
const tea = createUser("tea", 250) // this is an object


chai.printMe() // score is 25