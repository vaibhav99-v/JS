let a = 20
const b = 30
var c = 40

if (true) {
    let a = 20  
    const b = 30
    var c = 40
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);   // let will throw an error
// console.log(b);    // const will throw an error
// console.log(c);     // var will print and but it is not a good thing


function one(){
    const username = "vaibhav"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two();
}

one()

if (true) {
    const username = "vaibhav"
    if (username == "vaibhav") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

console.log(addone(5));

function addone(num) {
    return num + 1
}


// addTwo(5);   // It will throw an error like Cannot access before initialization

const addTwo = function (num) {  // It is function or expression
    return num + 2
}


