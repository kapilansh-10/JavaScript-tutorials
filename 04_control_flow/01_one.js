// /****************** if *****************************/

// <, >, <=, >=, ==, !=, ===

// if ( 2 == "2" ){
//     console.log("executed")
// }

// if ( 2 === "2" ){ // "===" this checks type also
//     console.log("executed")
// } 

// if ( 2 != 3 ){ // not equal to sign "!="
//     console.log("executed")
// }

// const temperature = 41

// if ( temperature === 40){
//     console.log("less than 40")
// }
// else{
//     console.log("greater than 40")
// }
// console.log("executed")

/****************** Scope Part *****************************/

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)// *will give error as it is out of scope*

// But when we use var

// if (score > 100) {
//     var power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)// *will run successfully as var is a global variable

/****************** Short Hand Notation *****************************/

// const balance = 1000

// if (balance>500) console.log("test") //implicit scope
// // for multiple lines

// if (balance>500) console.log("test"), // by giving comma
// console.log("this is explicit scope")

// But not recommended to write like this

/************************ Nesting *************************************/

// const balance = 1000

// if (balance < 500){
//     console.log("less than")
// } else if (balance < 750){
//     console.log("less than 750")
// } else if (balance < 900){
//     console.log("less than 900")
// } else{
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){ // AND smymbol *&&*
    console.log("Allowed to buy courses")
}

if (loggedInFromGoogle || loggedInFromEmail) { // OR symbol *||*
    console.log("User logged in")
}