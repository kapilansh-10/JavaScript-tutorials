// Promise: It is an object that may produce a single value some time in the future: either a resolved value or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
// In simple words it is a placeholder for a value that we don't have yet but we will have in the future.


const promiseOne = new Promise(function(resolve,reject){ // Promise is a constructor function
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // it connects the then() part
    },1000)
})

promiseOne.then(function(){ // then() is used to consume the promise
    console.log("Promise consumed"); // it will run after the resolve() is called
})

// Second Method - Promise with async task

new Promise(function(resolve,reject){ // resolve and reject are the functions that are passed to the promise
    setTimeout(function(){ 
        console.log('Async task 2')
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved')
})

// Third Method - Promise with data

const promiseThree = new Promise(function(resolve,reject){ 
    setTimeout(function(){ 
        resolve({username: "chai", email: "chai@example.com"}) 
    },1000) 
})

promiseThree.then(function(user){ // user is the data that is passed to the resolve()
    console.log(user) // {username: "chai", email: "chai@example.com"}
})

// Fourth Method - Promise with reject

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){ 
        let error = true
        if (!error) { // if error is false then resolve() will run
            resolve({username: "kapilansh", password: "123"}) // it will pass the data to the then()
        }
        else { // if error is true then reject() will run
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour 
.then((user) => { // it will run if resolve() is called
    console.log(user) // {username: "kapilansh", password: "123"}
    return user.username // it will pass the username to the next then()
}).then((username) => { // it will run after the first then() is completed
    console.log(username) // kapilansh
}).catch(function(error){ // it will run if reject() is called
    console.log(error) // ERROR: Something went wrong
}).finally(() => console.log("The promise is either resolved or rejected")) // it will run after the then() or catch() is completed 

/*

// Fifth Method - Promise with async task and data

const promiseFive = new Promise(function(resolve,reject){ //
    setTimeout(function(){ 
        let error = true
        if (!error){
            resolve({username: "javaScript", password: "123"})
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try { // try and catch is used to handle the error
        const response = await promiseFive // it will wait for the promise to be resolved or rejected
        console.log(response) // {username: "javaScript", password: "123"}
    } catch (error) { // it will run if reject() is called
        console.log(error) // ERROR: Something went wrong
    }
}

consumePromiseFive()


async function getAllusers(){ // it will fetch the data from the api
    try { 
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // it will wait for the data to be fetched
        const data = await response.json() // it will wait for the data to be converted to json
        console.log(data) // it will print the data
    } catch (error) { // it will run if there is an error
        console.log("E:", error) // it will print the error
    }
}

getAllusers()

*/

// Above example by then() and catch() can be written in async and await

fetch('https://jsonplaceholder.typicode.com/users') // it will fetch the data from the api
.then((response) => { // it will run after the data is fetched
    return response.json() // it will convert the data to json and pass it to the next then()
})
.then((data) =>{ // it will run after the first then() is completed
    console.log(data) // it will print the data
})
.catch((error) => console.log(error)) // it will run if there is an error