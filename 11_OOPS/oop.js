const user = {
    username : "vaibhav",
    loginCount : 10,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);

    }
}

// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// # new

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("vaibhav", 12, true);
const userTwo = new User("ChaiAurCode", 5, false);
console.log(userOne.constructor);
// console.log(userTwo);

// // Steps

// When we are using new keyword

// 1) Empty Object will create so this is called instances.

// 2) Constructor function will call by new keyword. They packed all the arguments and provided them to us in this step.

// 3) this keyword will inject all the arguments 

// 4) We get all the arguments.