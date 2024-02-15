// Primitive

// 7 types of Primitive Datatypes
// String, Number, Boolean, null, undefined, symbol, BigInt

                    // Datatypes => typeof
const score = 100;  // Number => number
const scoreValue = 100.3; // Decimal number => number

const isLoggedIn = false; // Boolean => boolean 
const outsideTemp = null  // null => object
let userEmail; // undefined => undefined

const id = Symbol('123'); // symbol => symbol
const anotherId = Symbol('123'); 

// console.log(typeof id);
// console.log(id === anotherId);

const bigNumber = 234465765856454n; //bigInt => bigint



// Reference (Non Primitive)

// Array, Objects, Functions


const heros = ["shaktiman", 'nagaraj', 'krrish']; // Array => object

let myObj = {
    name : "vaibhav",
    age : 22
} // object => object


const myFunction = function(){
    console.log("Hello World!");
} // function => function


console.log(typeof myFunction);


