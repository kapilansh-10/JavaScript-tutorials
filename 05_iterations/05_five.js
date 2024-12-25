// for each loop
/*

const coding = ["js","ruby","java","python","cpp"]

coding.forEach( function (val) {
    console.log(val);    
} )

 */

// Arrow Function

/*
const coding = ["js","ruby","java","python","cpp"]

coding.forEach( (item) => {
    console.log(item);    
} )
*/

/*
const coding = ["js","ruby","java","python","cpp"]
function printme(item){
    console.log(item);    
}

coding.forEach(printme)
*/

/*
const coding = ["js","ruby","java","python","cpp"]

coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
    
})
*/

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }

]

myCoding.forEach((item)=>{
    console.log(item.languageName) 
})