// Primitive

// 7 types of Primitive Datatypes
// String, Number, Boolean, null, undefined, symbol, BigInt


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');


console.log(id === anotherId);

const bigNumber = 234465765856454n;



// Reference (Non Primitive)

// Array, Objects, Functions


const heros = ["shaktiman", 'nagaraj', 'krrish'];

let myObj = {
    name : "vaibhav",
    age : 22
}


const myFunction = function(){
    console.log("Hello World!");
}


console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof myFunction);
console.log(typeof myObj);

