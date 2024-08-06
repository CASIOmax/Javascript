const hero=["Imran","Nawaz","Bhutto"]
const villian=["Buttsahab","Mujib","Bashir"]

// hero.push(villian)
// console.log(hero[3][2]);

// const allman=hero.concat(villian)
// console.log(allman);

// const all=[...hero,...villian]
// console.log(all);

// const another=[1,2,3,[4,5,[6,4,5]],5,6,7]
// const realarray=another.flat(Infinity)     //simpliies and display in array    (infinity) replace it with depth ,here depth is 3, array in array which is in another array
// console.log(realarray);

console.log(Array.isArray("Sajjad"));    //checks its array or not
console.log(Array.from("Sajjad"));    //converts into array
console.log(Array.from({name:"Sajjad"}));    //interesting

let sc1=100
let sc2=200
let sc3=300
console.log(Array.of(sc1,sc2,sc3));    //converts multiple into arrays

