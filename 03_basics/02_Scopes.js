/*
let a = 10
const b = 20
var c = 30

console.log(a)
console.log(b)
console.log(c)
*/

/*
if(true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a) // Will give error
// console.log(b) // Will give error
console.log(c) // Will get printed cause of var
*/

/*
if(true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a) // Will give error
// console.log(b) // Will give error
console.log(c) // Will get printed cause of var

*/

var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER:",a)
}
console.log("Outer:", a) // Will print 300 cause of let
// console.log(b) // 
console.log(c) // Will print 30 only cause of var