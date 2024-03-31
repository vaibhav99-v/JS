// const coding = ['js', "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// } )

// console.log(values);

// In for each loop we cannot return the values of arrays and objects so, this is the drawback of for each loop.

// ## Filter() -> This method is used to return the values of array and objects.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )

// console.log(newNums);


// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// console.log(newNums);


// const newNums = []
 
// myNums.filter( (num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const myBooks = [
    { title: 'Book One', genre: 'Fiction', publish: 1989},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 2000},
    { title: 'Book Three', genre: 'Science', publish: 1971},
    { title: 'Book Four', genre: 'History', publish: 1996},
    { title: 'Book Five', genre: 'Non-Fiction', publish: 1991},
    { title: 'Book Six', genre: 'Fiction', publish: 2005},
    { title: 'Book Seven', genre: 'History', publish: 2011},
    { title: 'Book Eight', genre: 'Science', publish: 1996},
    { title: 'Book Nine', genre: 'Fiction', publish: 1989},
    { title: 'Book Ten', genre: 'Comic', publish: 1989},
    { title: 'Book Eleven', genre: 'Biopic', publish: 1983},
];

let userBooks = myBooks.filter( (bk) => bk.genre === 'Fiction')

userBooks = myBooks.filter( (bk) => {return bk.publish >= 2000})

userBooks = myBooks.filter( (bk) => bk.publish <= 2000 && bk.genre === 'Science' )

console.log(userBooks);


