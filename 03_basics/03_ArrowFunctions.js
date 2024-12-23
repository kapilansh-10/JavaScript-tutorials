const user = {
    username: "kapilansh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) // Gives o/p as {}, which is empty

// function chai(){
//     let username = "kapilansh"
//     console.log(this.username)
// }

// chai()

// const chai = function() {
//     let username = "kapilansh"
//     console.log(this.username)
// }

// chai()

// +++++++++++++++++++++ Arrow Functions +++++++++++++++++++++++++++ //

// const chai = () => {
//     let username = "kapilansh"
//     console.log(this.username)
// }

// chai()

/*
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(5, 2))

*/

// Implicit Return

// const addTwo = (num1, num2) => num1 + num2

//                   OR by using paranthesis

// const addTwo = (num1, num2) => (num1 + num2)

// For Objects

const addTwo = (num1, num2) => ({username: "kapilansh"})

console.log(addTwo(5, 10))