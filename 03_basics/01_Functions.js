// Functions in JavaScript

function sayMyName(){
    console.log("K")
    console.log("A")
    console.log("P")
    console.log("I")
    console.log("L")
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1+number2;
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("Result: ", result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return (`${username}, just logged in`)
}

// console.log(loginUserMessage("Kapilansh"))
// console.log(loginUserMessage())

//! Functions with Objects and Array

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(3))
// console.log(calculateCartPrice(200,400,600)) // for this (...num1) is used which is called as rest //

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600,800,1000)) // Here only 800 and 1000 will get print as these values only get stored in num1,because 200 and 400 are stored in val1 and val2 //

// Now object part

const user = {
    username: "Kapilansh",
    price: 399
}

function handleObject(anyObject){
    console.log(`The user is ${anyObject.username}, and price is ${anyObject.price}`)
    return anyObject
}

// handleObject(user)

// Now passing the object directly
handleObject({
    username: "Tanky",
    price: 100
})

// Similarly, now passing arrays

const myNewArray = [1000, 2000, 3000]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([500,1500,4500]))