// Reduce Method

/*
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc = ${acc}, currval = ${currval}`);    
    return acc + currval
}, acc = 0)

console.log(myTotal);
*/

// Above Example in Arrow Function

/*
const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc,currval)=>{
    console.log(`acc = ${acc}, currval = ${currval}`)
    return acc +currval
}, acc = 0)

console.log(myTotal)
*/

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile development",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    }
]

const PriceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(PriceToPay);
