//array
const myArray=[1,2,3,4,5]

//array methods

// myArray.push(6)
// myArray.pop()
// myArray.unshift(4)                //adds at the start of array, but if there are 10,000 entries than issue [optimization]
// myArray.shift()                   //removes the first value

// console.log(myArray.includes(5));
// console.log(myArray.indexOf(5));

// const newArr=myArray.join()         //converts array to string
// console.log(myArray);
// console.log(newArr);

// slice splice

console.log("A",myArray);

const myn1=myArray.slice(1,3)
console.log(myn1);
console.log("B",myArray);

const myn2=myArray.splice(1,3)           //make changes to the original array
console.log(myn2);
console.log("C",myArray);
