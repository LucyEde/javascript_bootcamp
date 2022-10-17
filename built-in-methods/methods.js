console.log('Hello built-in methods')

let arrr =['grapefruit',4,'hello',5.6,true];

function printStuff(element, index){
    console.log(`Printing stuff;${element} on array position: ${index}`);// string interpolation
}
arrr.forEach(printStuff);

arrr.forEach((e, i)=>{
   console.log(`Best way of printing element:${e} on array positon${i}`)
})


let arr =['squirrel',5,'Tjed',new Date(),true];
function checkString(element,index){
    return typeof element ==='string';
}
//
let filterArr2 = arr.filter(checkString)
console.log(filterArr2)
//
let filterArr = arr.filter((e,i)=>typeof e ==='string');
console.log(filterArr)
console.log(arr.every(checkString))
// within
arrayy=['grapefruit',4,'hello',5.6,true];
arrayy.copyWithin(0,2,4)
console.log(arrayy)

//map
let Arr = [1000,2000,3000,4000,];
let mappedArry = Arr.map(x=>`$${x}`);
console.log(mappedArry)

//
let Arr2 = [1,2,3,4,];
let mappedArry2 = Arr2.map(x=>x+1);
console.log(mappedArry2)

//