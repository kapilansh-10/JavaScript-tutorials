// for of

// These are array specific loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World!"
for (const greet of greetings){
    // console.log(`Each character is: ${greet}`);    
}

// Maps

const map = new Map()
map.set("IN", "INDIA")
map.set("USA", "United States of America")
map.set("Fr", "France")

// console.log(map)

for (const key of map){
    // console.log(key);
    
}

// Will give outuput as array


for (const [key,value] of map){
    // console.log(key, " :- ",value);
    
}

// For of Loop in Objects

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key,value] of myObject){
//     console.log(key, " :- ",value);
    
// }

// Will give error as Objects are not iterable like Maps

