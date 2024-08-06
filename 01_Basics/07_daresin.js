// Dates

let  myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(typeof myDate);

// let myCreatedDate=new Date(2024,0,23)
// console.log(myCreatedDate);
let myCreatedDate=new Date("01-13-2024")
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let oDate =new Date()
console.log(new Date);
//'${newDate.getDay()} and the time is'

// newDate.toLocaleString('default',{
//     weekday:"long"
// })
