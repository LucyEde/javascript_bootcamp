console.log("welcome to functions");


//invoking or creating a function

function sayHello(){
    let you = prompt("What's your name? ")
    console.log("Hello, " + you + "!")
}

//calling a function
//sayHello()

//parameters and arguments
function sayHello2(name){
    console.log("Hello, " + name)
}

// sayHello2("wilson")

function addTwoNum(x,y){
    console.log(x + y)
}

// addTwoNum(12,12)

//special functions

let addTwoNum2 = (x,y)=> console.log(x+y)

addTwoNum2(7,7)


//special functions with array methods

const arr = ['sam', 'ada', 'potty']
arr.forEach( (item, index) => console.log(`${index+1}. ${item}`))

//spread operators(...)
let spread = ['sam', 'ada', 'potty']
let message = ['saul', 'adam', 'petra', spread, 'musa']
console.log(message)


let spreads = ['sam', 'ada', 'potty']
let messages = ['saul', 'adam', 'petra', ...spread, 'musa']
console.log(messages)


//rest parameter(for strings only)

function addArr(x, ...y){
    console.log(x + y);

}
addArr('hii', 'wilson', 'whats up');





let addThreeNum = (x, y ,z) =>{
    return x + y + z
}

p = addThreeNum(7,2,6)
console.log(p)