let a = 20
const b = 30
var c = 40

if (true) {
    let a = 20  
    const b = 30
    var c = 40
}

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

// one()

if (true) {
    const username = "vaibhav"
    if (username == "vaibhav") {
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);
}

console.log(username);