let a = 20
const b = 30
var c = 40

if (true) {
    let a = 20  
    const b = 30
    var c = 40
}

console.log(a);   // let will throw an error
console.log(b);    // const will throw an error
console.log(c);     // var will print and but it is not a good thing
