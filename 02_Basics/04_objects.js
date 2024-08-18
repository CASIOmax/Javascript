// const appUser = new Object()    //singelton object
const appUser ={}         //non-singelton object
appUser.id="123abc"
appUser.name="SAmm"
appUser.logged=false

// console.log(appUser);

const regularUser = {
    email:"someone@gmail.com",
    fullname :{
        userfullname:{
            firstname: "Sammy",
            lastname: "Dave"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={1:"a",2:"b",3:"c"}
const obj2 ={4:"a",5:"b",6:"c"}

// const obj3={obj1,obj2} //add an object inside the object
// const obj3=Object.assign({},obj1,obj2)     //{source}, target
const obj3={...obj1,...obj2}         //spreading vALUES
// console.log(obj3);

//database scenario access and object value in an array
const user=[
    {
        id:1,
        email:"ssss@gmails"
    },
    {},
    {}
]

user[1].email
// console.log(appUser);
// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));
// console.log(appUser.hasOwnProperty('logged'));

const course={
    coursename:"Js in Urdu",
    price: "999",
    courseInstructor:"Sajjad"
}

// course.clourse Instructor
const {courseInstructor: instructor}=course
console.log(instructor)


//react conept
// const navbar = ({company})=>{

// }
// navbar(company="sajjad")

//API Stuctures
//inobjectform
// {
//     "coursename":"Js in Urdu",
//     "price": "free",
//     "courseInstructor":"Sajjad"
// }

//in array form
//[
//{},
//{},
//{}
//]