// const userEmail = "h@hitesh.ai" // it is assmumed that's why it is truthy value

// if (userEmail) {
//     console.log("Got user email")
// } else {
//     console.log("Don't have user email")
// }

// const Useremail = "" // here it is empty string that's why it is falsy value

// if (Useremail) {
//     console.log("Got user email")
// } else {
//     console.log("Don't have user email")
// }

//*****Falsy Values*************/

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//*****Truthy Values*************/

// "0", 'false', " ", [], {}, function(){}

//**** Checking of Array *********/

const useremail = []
// if (useremail.length === 0) {
//     console.log("Array is Empty");    
// }

//**** Checking of Object *********/

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");     
// }

//********** Nullish Coalescing Operator (??): null undefined *********/

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // Takes the 1st valid value


console.log(val1);

//********** Terniary Operator *********/

// condition ? true : false

const IceTeaPrice = 100
IceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")