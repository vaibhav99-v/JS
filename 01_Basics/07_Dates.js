// Date

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 27);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 0, 27, 13, 20);
let myCreatedDate = new Date("01-27-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay() + 1);
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getMilliseconds());
console.log(newDate.getSeconds());
console.log(newDate.getTime());
console.log(newDate.getTimezoneOffset());
console.log(newDate.getUTCDate());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    hour: "2-digit",
    month:"long"
}))







