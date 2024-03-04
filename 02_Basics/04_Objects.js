// const tinderUser = new Object(); //singleton Object
const tinderUser = {}  // non singleton Object

tinderUser.id ="123";
tinderUser.name = "Billu";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname :
        {
            firstname: "Vaibhav",
            lastname: "Vishwakarma"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {
    1: "a", 2: "b"
}

const obj2 = {
    3: "c", 4: "d"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 2,
        email: "v@gmail.com"
    },
    {
        id: 3,
        email: "v@gmail.com"
    },
    {
        id: 4,
        email: "v@gmail.com"
    },
]

users[1].id

console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "English",
    price: "999",
    courseInstructor: "Billa"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  //de-structuring the objects

console.log(instructor);


// API's (Application programming interface)

// 
