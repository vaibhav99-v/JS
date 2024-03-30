const coding = ["js", "py", "cpp", "java", "c"]

coding.forEach( function (item){
    // console.log(item);
})

coding.forEach( (item) => {
    // console.log(item);
})

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
// } )

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : '.js'
    },
    {
        languageName : "java",
        languageFileName : '.java'
    },
    {
        languageName : "python",
        languageFileName : '.py'
    },
]

myCoding.forEach( (item) => {
    console.log(`${item.languageFileName} is the file name of ${item.languageName}`);
} )


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FRA',"France")
map.set('GER',"Germany")
map.set('AUS',"Austrailia")

map.forEach( (key, value) => {
    console.log(`${key}'s code is ${value}`);
} )