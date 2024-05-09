// let myName = "vaibhav    "

// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vaibhav = function(){
    console.log("vaibhav is present in all objects");
}

Array.prototype.heyVaibhav = function(){
    console.log('Vaibhav says hello');
}

// heroPower.vaibhav();

// myHeroes.vaibhav()
// myHeroes.heyVaibhav()
// heroPower.heyVaibhav()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiOrCode       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"vaibhav    ".trueLength()
"iceTea".trueLength()


