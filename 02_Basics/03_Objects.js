// singleton
// Object.create  // Constructor

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Vaibhav",
    "full name": "Vaibhav Vishwakarma",
    [mySym]: "key1",
    age: 18,
    location: "Pune",
    email: "vaibhav99@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Two ways to access the object key

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "vaibhav.v@chatgpt.com"
// Object.freeze(jsUser)  // it will freeze the object in which we cannot change the values
jsUser.email = "vaibhav@microsoft.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}



jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // String Interpolation
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());