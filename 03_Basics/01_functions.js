
function sayMyName(){
    console.log('V');
    console.log("A");
    console.log("I");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("V");
}

// sayMyName() 

// function addTwoNumbers(num1,num2) // -> num1 and num2 are parameters
// {
//     console.log(num1 + num2);
// }

// let result = addTwoNumbers(4,2) // -> here num1 and num2 are arguments
// console.log(result);

function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3,5);

// console.log(`Result: ${result}`);


function loginUserMessage(username){
    if(username === undefined){                // if(username === undefined) and if(!username) both are same logic
        console.log("Please Enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vaibhav"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}

//'...' is also known as rest operator and spread operator. We are using this operator to take multiple arguments

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username : "justin",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({          // We can pass object argument also
    username: "Billie",
    price: 499
})

const myNewArray = [300, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 800]));

