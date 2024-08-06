const name= "sajjad"
const repoCount=50
//console.log(name + repoCount + "Value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sajjad-Ahmad')
console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString=gameName.substring(0,3);        //cant give negative values in string
console.log(newString);

const anotherString=gameName.slice(-9,10);
console.log(anotherString);

const newStringOne="   Sajjad Ahmad  "
console.log(newStringOne);
console.log(newStringOne.trim());               //Removes first and last space    //use MDN

const url="https://Sajjad.com/sajjad%20ahmad"        //Someone accidently gves space between sajjad and ahmad so browser change space to %20 and we want to remove it
console.log(url.replace('%20','-'));
console.log(url.includes('sajjad'));

console.log(gameName.split('-'));             //splits based on the thing
console.log(gameName.split('a'));


