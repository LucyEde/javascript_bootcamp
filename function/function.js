console.log('Welcome to functions');

//Invoking or creating a function

function sayHello(){
    let you =prompt('What\'s your name?')
    console.log("Hello,"+ you + "!")
}

//Calling a function
sayHello()

//parametres and arguements
function sayHello2(name){
    console.log('Hello,' + name)
}
sayHello2('Wilson')

/////
function addTwoNum(x,y){
    console.log(x+y)
}
addTwoNum(12,12)

//Special Functions

let addTwoNum2 = (x,y)=> console.log(x+y)

addTwoNum(7,7)

//Special functions wit array methods
const arr =['Sam','Ada','Potty']
arr.forEach((item,index)=>console.log(`${index +1}. ${item}`))

//spread operators(...)
let spread =['Sam','Ada','Potty']
let message =['Saul','Adam',spread,'Musa']
console.log(message)

//
let spreads = ['Sam','Ada','Potty']
let messages = ['Saul','Adam','Petra',...spreads,'Musa']
console.log(messages)

//rest parameter( for strings only)

function addArr(x, ...y){
    console.log(x + y);
}
addArr('Hii','Wilson','Whats up');

let addThreeNum = (x, y, z) => x + y + z

p = addThreeNum(7,2,6)
console.log(p)




