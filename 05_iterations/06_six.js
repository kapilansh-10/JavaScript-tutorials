const coding = ["js","ruby","java","python","cpp"]

/*
const values = coding.forEach( (item) => {
    // console.log(item);
    return item
} )

console.log(values);
*/

/*
const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const newNums = myNums.filter( (num) => num>4 )
console.log(newNums);
*/

// When we use filter we get a call back function , then give a condition, but make sure to assign it to a variable like above we assigned it to newNums

// Another method

/*
const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const newNums = myNums.filter( (num) => {
    return num>4
} )
console.log(newNums);
*/

// when using paranthesis () is will return itself but when using Scopes {} we have to return manually

// Now Same above example by using forEach, below

/*
const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const newNums = []

myNums.forEach((num) => {
    if (num>4){
        newNums.push(num)
    }
})

console.log(newNums)
*/

// Undestanding filter in a more detailed way by another example 

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981,
        edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
        edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999,
        edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
        edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009,
        edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987,
        edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986,
        edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011,
        edition: 2016}
]

let userBooks = books.filter( (bk) => bk.genre == "History" )

userBooks = books.filter((bk)=> bk.publish >= 1995 && bk.genre == "History")

console.log(userBooks)