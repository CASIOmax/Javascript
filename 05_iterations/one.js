//for loop
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

const myArra=["Sajjad","Ahmad","Haroon","Awais"]
for (let index = 0; index < myArra.length; index++) {
    const element = myArra[index];
    if(element=="Haroon"){
        break
    }
    console.log(element);
}