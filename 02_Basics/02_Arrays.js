const marvelHeroes = ["thor","Ironman", "spiderman"]
const dcHeroes = ["superman", "batman", "flash"]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);  This is the wrong way to concat two arrays

// const allHeroes = marvelHeroes.concat(dcHeroes);  This is the right way
// console.log(allHeroes); 

const allNewHeroes = [...marvelHeroes, ...dcHeroes] // '...' this is spread operator and it is the best and another way to concat the arrays

// console.log(allNewHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5,[3,2]]]];

const realAnotherArray = anotherArray.flat(Infinity) // We can put depth from 1 to Infinity

console.log(realAnotherArray);

console.log(Array.isArray("Vaibhav")); // It is used to check whether it is an array or not it will give boolean value
console.log(Array.from("Vaibhav")); // It is used to create an array
console.log(Array.from({name:"Vaibhav"})); // It will give empty array 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
