function multiplyBy5(num){
    return num *5
}
multiplyBy5.power=2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function creatUser(username,score){
    this.username=username
    this.score=score
}
creatUser.prototype.increment=function(){
    this.score++
}
creatUser.prototype.printMe=function(){
    console.log(`The score is ${this.score}`)
}
const chai= new creatUser("chai",25)
const tea = new creatUser("tea",250)

chai.printMe()