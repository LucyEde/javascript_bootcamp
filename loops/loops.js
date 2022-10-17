//while  Loop
 
let i =0;
while(i < 10){
    console.log(i);
    // i = i+1
    // i++;
    i+=2;
}

// we can have a while loop that looks for a value in an array,like this:
let someArray = ['Mike','Antal','Marc','Emir','Louiza','Jacky'];

let notFound = true;

while(notFound && someArray.length>0){
    if (someArray[0]==='Louiza'){
        console.log('Found her!');
        notFound = false;
    }else{
        someArray.shift();// removes first element
    }
}

//Do  while loop
// let number;
// let counter = 0
// do {
//     number = prompt(`please enter a number btween 0 and 100: counter${counter++}`);
// }while(!(number >=0 && number <100));

//Exercise While loop
//1

const maxValue= 100;

//2
const rnd  = Math.floor((Math.random() * maxValue)+ 1)
// console.log (rnd)

//3
let isCorrect = false;
let lives = 5;


let number =parseInt(window.prompt(`Enter the guessed number:lives-${lives}`))

while(!isCorrect && lives > 0){
    if(number === rnd){  
        isCorrect = true;
         console.log('Hurray, you guessed it right')
    }else{
        lives--;
        if(lives === 0){
            console.log('Game over')
            console.log(`Your number is :${rnd}`);
    }else{
        if(number > rnd){
            console.log('Your guess is high,go low')
            number = parseInt(window.prompt(`Enter the guessed number:lives-${lives}`))
        }else{
            console.log('Your guess is low,go high')
            number = parseInt(window.prompt(`Enter the guessed number:lives-${lives}`))
        }
    }
      
      
    }
}

//For -Loop

// for(let i =0; i<10;i++){
//     console.log(i)
// }


// let arr =[];
// for(let i =0; i < 100; i++){
//     arr.push(i);
// }
// console.log(arr);

// // Nested-Loop

// let arrOfArrays = [];

// for (let i =0; i<3; i++){
//     arrOfArrays.push([]);
//     for(let j = 0; j < 7; j++){
//         arrOfArrays[i].push(j);
//     }
// }
// console.log(arrOfArrays)

// //LOOPS AND ARRAYS
// let names= ['Chantal','John','Maxime','Bobbi','Jair',];
// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }