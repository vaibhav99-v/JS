const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`accumaltor : ${acc}, current value : ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);



let myTotal = myNums.reduce( (acc, currval) => {
    return acc + currval
}, 0 )


myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)

// console.log(myTotal); 

const shoppingCart = [
    {
        itemName : 'py course',
        coursePrice : 599
    },
    {
        itemName : 'web dev course',
        coursePrice : 1990
    },
    {
        itemName : 'data science course',
        coursePrice : 20000
    },
    {
        itemName : 'cpp & dsa course',
        coursePrice : 4999
    },
    {
        itemName : 'UI/UX course',
        coursePrice : 2500
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.coursePrice, 0)

console.log(totalPrice);