// ## Map

myNums = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10) // It's automatically return the values
// const newNums = myNums.map( (num) => {return num + 10}) // need to write return if we have scope

// ## Chaining

const newNums = myNums.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >= 40)

console.log(newNums);

