const tinderUser = {}

tinderUser.id = "123ABC"
tinderUser.name = "Sammy"
tinderUser.IsLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kapilansh",
            lastname: "Patil"
        }
    }

}

console.log(regularUser.fullname.userfullname);

//! Copying objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);

//? another method
const obj4 = {5:"e",6:"f"}
// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

//? another method
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//! Arrays in Objects

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // Arrays in array

console.log(tinderUser.hasOwnProperty('IsLoggedIn'));

//! Object De-Structure


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course

// console.log(courseInstructor);

const {courseInstructor: instructor} = course //! OR
console.log(instructor);

/*

//! In React

const navbar = ({company}) => {

}

navbar(company="hitesh")

*/

//! Json API

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "999"


// }

//! Json Format
[
    {},
    {},
    {}

]


