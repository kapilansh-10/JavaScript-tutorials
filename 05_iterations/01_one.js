// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the best number");
//     }
//     console.log(i)
    
// }

// console.log(element)

/* Inner and Outer distinguish loop
for(let i=0; i<=10; i++){
    console.log(`Outer loop value: ${i}`)
    for (let j=0; j<=10; j++){
        console.log(`Inner loop value: ${j}`)
    }
}
*/

/* Table loop from 0 to 10;
for(let i=0; i<=10; i++){
    console.log(`Outer loop value: ${i}`)
    for (let j=0; j<=10; j++){
        console.log(i + "*" + j + " = " + i*j)
    }
}
*/

// Using for loop in an Array

/*
let myArray = ["Flash","Batman","Superman"]
console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}
*/

// Break Statement in For Loop

/*
for( let i=1; i<=20;i++){
    if(i==5){
        console.log(`Detected 5`)
        break
    }
    console.log(`Value of i is ${i}`)
}
*/

// Continue Statement in For Loop

for( let i=1; i<=20;i++){
    if(i==5){
        console.log(`Detected 5`)
        continue
    }
    console.log(`Value of i is ${i}`)
}