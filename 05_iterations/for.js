//for in for objects
const object={
    Director:"Christopher",
    movie:"Interstellar"
}

for (const key in object) {
    console.log(`${key} for is ${object[key]}`);
    
}

const map=new Map()   //not iteratable
map.set('PK',"Pakistan")
map.set('CH',"China")
map.set('CH',"China")  

for (const key in map) {
    console.log();
    
}