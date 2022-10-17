console.log('Hello, Logic1')

let x=10;
if(x>2){
    console.log('Buy black Marker')
}else{
    console.log('Buy Any Color')
}


//1
const myVariable = false

//2
console.log(myVariable)

//3
if(myVariable){
    console.log('Variable is true')
}

//4
if(!myVariable){
    console.log('variable is changed')
}

if(myVariable){
    console.log('Variable is true')

}else {
    console.log('variable is changed')

}

//ELSE IF STATEMENT

const marker ='black'
const markerLength = 'short'

if(marker === 'black' && markerLength === 'short'){
    console.log('Buy black and short marker')
}else if ((marker==='red' || marker ==='green') && markerLength=== 'short'){
    console.log('Buy red or green marker and short')
}else{
    console.log('Buy any marker')
}
//NESTED IF
if(marker==='black'){
    if(markerLength==='short'){
        console.log('Buy black and short  marker')
    }else {
        console.log('Let\'s manage the long one')
    }
}

//PROMPT
// const age = window.prompt()
// console.log (age)

//1
// const userAge= window.prompt('Enter your current age')


//2
// const ageToNum =parseInt(userAge)
//3
// let message;
//4
// if (ageToNum >= 21){
//    message=('you can enter and purchase alcohol')
// }else if (ageToNum >=19){
//     message= 'you are allowed entry but can\'t purcahse alcohol'
// }else{
//     message= 'you are not allowed here'
// }
//  console.log(message)

 //conditional ternary operator

 const gender ="Male"

if(gender==='Male'){
    console.log('He is a boy')
}else if(gender === 'Female'){
    console.log('She is a girl')
}else{
    console.log('He or she is others')
}

gender ==='Male '? console.log('He is a boy'): gender ==='Female' ?  console.log('She is a girl'): console.log('He or she is others')

//1
let id = true

const message= id?'you are allowed inside': 'You are not allowed'
console.log(message)

//SWITCH STATEMENT
const currentDay = 'Wednesday'
switch(currentDay){
    case 'Monday':
        console.log('I hate Mondays');
        break;
    case 'Tuesday':
         console.log('Tuesdays is no class') 
         break;   
    case 'Wednesday':
         console.log('I love wednesdays') 
         break; 
    case 'Thursday':
         console.log('This is super story') 
          break; 
    case 'Friday':
         console.log('Thank God is Friday(TGIF)') 
         break;  
    case 'Saturday':
         console.log('And on the 7th day, He Rested') 
         break; 
    case 'Sunday':
         console.log('See you all after service') 
         break; 
    default:
            console.log('Invalid Day selected') 
                                  
}


