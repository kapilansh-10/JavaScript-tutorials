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
console.log(loginUserMessage())