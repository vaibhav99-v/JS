const user = {
    username: "vaibhav",
    price: 999,
    welcomeMessage : function (username) {
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Billu";

// user.welcomeMessage();

// console.log(this);  // It will give empty object


// function aiseHi(){
//     console.log(this);
// }

// const aiseHi = function (){
//     let username = "Billu"
//     console.log(this.username);
// }


const aiseHi = () => {              // Arrow function
    let username = "Billu"
    console.log(this);
}



// aiseHi()


// const addition = (num1, num2) => {  // Arrow function
//     return num1 + num2           // Explicit return
// }

// Another way to define Arrow function
const addition = (num1, num2) => num1 + num2  // Implicit return

console.log(addition(3,4))