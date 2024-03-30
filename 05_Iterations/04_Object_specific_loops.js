const myObject ={
    js : 'javascript',
    cpp : 'C++',
    py : 'python',
    rb : 'ruby'
}

for (const key in myObject) {
    // console.log(`${key} is the shortcut of ${myObject[key]}`);
    }


    const map = new Map()
    map.set('IN', "India")
    map.set('USA', "United States of America")
    map.set('FRA',"France")
    map.set('GER',"Germany")
    map.set('AUS',"Austrailia")

for (const key in map) {
    console.log(key);     // It will not give us any output because map is not iterable
}