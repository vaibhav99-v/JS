const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descriptor);

const myObject = {
    name : "username",
    price: 304,
    isLoggedIn: true,
    orderList: function(){
        console.log("Order is unavailable");
    }
}

const objectDesc = Object.getOwnPropertyDescriptor(myObject, 'name')

console.log(objectDesc);

const newObjectDesc = Object.defineProperty(myObject, 'name', {
    writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(myObject, 'name'));

for (let [key,value] of Object.entries(myObject)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
    
}