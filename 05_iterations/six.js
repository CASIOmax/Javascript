const coding = ["js","ruby","c++","python"]

// const values =coding.forEach((index)=>{    //this doesnt return values
//     console.log(index);
//     return index
// })

// console.log(values)

const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=>num>5)            //this returns values   {} is use for return
// console.log(newNums);

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books=[
    {Model:1997,Genre:'History'},
    {Model:123,Genre:'por'},
    {Model:34,Genre:'fic'},
    {Model:546,Genre:'sda'}
]
let userBooks = books.filter((bk)=>bk.Genre === 'fic')
console.log(userBooks);
