const marvel_heroes = ["Ironman","Thor","Hulk"]
const dc_heroes = ["Superman","Batman","Flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]) // To get elements of 2nd array we have to use this context


// const AllHeroes = marvel_heroes.concat(dc_heroes) // To combine two or more arrays concat is used
// console.log(AllHeroes);

const all_new_heores = [...marvel_heroes, ...dc_heroes] // This method is mainly used
console.log(all_new_heores);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Kapilansh"));
console.log(Array.from("Kapilansh"));
console.log(Array.from({name: "Kapilansh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

