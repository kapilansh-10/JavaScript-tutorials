// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // ** NAMED IIFE ** //
    console.log(`DB connected`)
})();

// give * ; * after writing otherwise it will give error

// (() => {
//     console.log(`DB connected two`)
// }) ();

((name) => {
console.log(`DB connected two, ${name}`);
}) ("kapilansh")