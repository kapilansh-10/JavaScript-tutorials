const name = "Kapilansh"
const repoCount = "50"

// console.log(name + repoCount + " Value");
 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('kapilansh-pp-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString =gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    kapilansh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kapilansh.com/kapilansh%20patil"
console.log(url.replace('%20','-'));

console.log(url.includes("kapilansh"));

console.log(gameName.split('-'))

