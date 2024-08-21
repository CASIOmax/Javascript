// //reduce function
// const myNums = [1,2,3]

// const calc= myNums.reduce(function(accumalator,currentValue){
//     console.log(`acc: ${accumalator} and current: ${currentValue}`);
    
//     return accumalator+currentValue
// },1)
// console.log(calc)

//reduce function in arrow
const myNums = [1,2,3]

const calc= myNums.reduce((accumalator,currentValue)=> accumalator+currentValue,1)
console.log(calc)