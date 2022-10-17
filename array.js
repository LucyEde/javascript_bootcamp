console.log('ARRAYS')

const myStudent = ['Miriam','Delight','Progress','Petra','Dappa','Tems','Caleb','Felix','Henry','Cruz','Paul','Fidelis','Camilus','Victory','Grace','Amas'];
console.log(myStudent)

var firstName = myStudent[0]
console.log(firstName)

var firstName = myStudent[4]
console.log (firstName)

var myName = myStudent[3]
console.log(myName)

//overwrite element

myStudent[7]='Christian'
console.log(myStudent)

//myStudent[3]= 'Temple'
//console.log(myStudent)

let numOfStudents = myStudent.length
console.log(numOfStudents)


//Exercise1

const shopList = ['Milk','bread','Apples']
console.log(shopList)

var list = shopList.length
console.log(list)


shopList[1]= 'Bananas'
console.log(shopList)

//Array methods
//adding & replacing elements

myStudent.push('Petra');// adding element to the last
console.log(myStudent)

myStudent.unshift('Wilson');//adding element to the start of array
console.log(myStudent)

myStudent.shift()  // removing the first element in an array
console.log(myStudent)

myStudent.pop() //removes the last element in the array
console.log(myStudent)

myStudent.splice(11, 1) // removes an element from the array
console.log(myStudent)

myStudent.splice(14, 1 , 'Queen') //replaces element 
console.log(myStudent)
 
//finding element

const petraIndex = myStudent.indexOf('Petra')
console.log(petraIndex)
 
//higher order function,(function in  a  function)
const arr= ['Wilson',' Daniel','Wilson', 'Joe', 'Raymond','Wilson']
const wilsonIndex= arr.filter((name) => name === 'Wilson')
console.log(wilsonIndex)

const sortedArr =myStudent.sort()
console.log(sortedArr)

myStudent.reverse()
console.log(myStudent)

//Exercise 2
//1
const shoppingList = []
console.log(shoppingList)
//2
shoppingList.push('Milk', ' Bread', 'Apples')
console.log (shoppingList)
//3
shoppingList.splice(1,1,'Bananas','Eggs')
console.log(shoppingList)
//4

const lastItem = shoppingList.pop()
console.log(lastItem)
console.log(shoppingList)

//5
shoppingList.sort()
console.log(shoppingList)

//6
const milkIndex = shoppingList.indexOf('Milk')
console.log(milkIndex)

//7
shoppingList.splice(1,0,'carrots','Lettuce')
console.log(shoppingList)

//8
const newList =['Juice','Pop']
console.log(newList)

//9
const concat1 = shoppingList.concat(newList)
console.log(concat1)
const concat2 =concat1.concat(newList)
console.log(concat2)

//10
const lastIndex = concat2.length-1
console.log(lastIndex)


//MultiDimensional Array

const myArr =[
    [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4],],
    [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,'W',4],],
    [[1,2,3,4],[1,2,3,4],[1,'R',3,4],[1,2,3,4],]
];

console.log(myArr [1][3][2])
console.log(myArr [2][2][1])

//objects in javaScriipt

const petra ={
    firstName:'Petra',
    lastName: 'Lucy',
    age: '24',
    gender: 'Female',
    height:'5.4',
    weight: '57'
}
const myHeight = petra.height  //using dot notation
console.log(myHeight)

const myWeight = petra['weight']
console.log(myWeight)

petra['weight']=  '60'
console.log(petra)

petra ['lastName'] = 'Jones'
petra.middleName = 'Lucy'
console.log(petra)

//1
const car ={
    make: 'Benz',
    model: 'c300',
    type: 'SUV',
    price: '5000',
    yOP: '2017',
    color: 'Black',
    forSale: 'Available'
}

//2
 let color = 'color';
 car ['color'] = 'Silver'
 console.log (car)

//3
color = 'forSale';
car['forSale']= 'False'
console.log(car)  

//4
const make = car.make;
const model =car['model']
console.log(`Make:${make}`)
console.log(`Model:${model}`)

//5
const forSale =car['forSale']
console.log(`Is car for sale?:${forSale}`)

//working with objects and arrays

const students={
    fullName: 'Peter Obi',
    jambReg: '402645HB',
    natNum: 'u2014/5575001',
    bio:{
        age:'32',
        gender: 'M',
        dob:'12/2/1990',
        stateOfOrigin: 'Anambra',
        lga:'njikoka',
        healthStatus:{
            bloodgroup: 'O+',
            genotype:'AA',
            mantus:false,
        }
    },
    levels: ['LV100','LV200','LV300','LV400',],
    currentLevel: 'LV300',
    courses: [
        {
            'YR1': {
                sem1:['Mth110.1', 'Ges100.1', 'Phy101.1'],
                sem2:['Mth114.2', 'Ges104.2', 'Phy102.2']
            },
            'YR2':{
                sem1: [],
                sem2: [],
            }
        }
    ]
}

const myGenotype= students.bio['healthStatus']['genotype']
console.log(myGenotype)

console.log(students.currentLevel)

const ges104 = students.courses[0].YR1['sem2'][1]
console.log(ges104)


//1
 const people ={
    friends:[]
 }

 //2
 const mary ={
            firstName: 'Mary',
            lastName: 'Jones',
            id: '05'
        }

const blessing = {
            firstName: 'Blessing',
            lastName: 'Jones',
            id: '04'
        }

 const grace ={
            firstName: 'Grace',
            lastName: 'Jones',
            id: '03'
        }
 
//3
people.friends.push(mary, blessing, grace)
console.log(people)


//Operator

const sum = 7 + 3;
const minus = 7 - 3;
const times = 7 * 3;
const divide = 7 / 3;
const raise = 7 ** 3;
const modulus = 7 % 3;

//Assignment
//1
const theList = ['Laurence','Svekis','True',35,null, undefined,
   {
    test:'One',
    score: 55
   },
    ['One','Two']
];
console.log(theList)

theList.shift(0);
console.log(theList)

theList.pop(6);
console.log(theList)

theList.pop(5);
console.log(theList)

theList.pop(4)
console.log(theList)
theList.pop(3)
console.log(theList)

theList.unshift('First')
console.log(theList)

theList[3]='hello World'
console.log(theList)

theList[2]='MIDDLE'
console.log(theList)

theList.push('LAST');
console.log(theList)


//2

const storeItems =[]
console.log (storeItems)

const item1 ={
    name:'iphone',
    model:'14pro',
    cost:'1500',
    qty:'2'
}
const item2 ={
    name:'Tecno',
    model:'camon9',
    cost:'300',
    qty:'6'
}
const item3 ={
    name:'Samsung',
    model:'Galaxy10',
    cost:'700',
    qty:'3'
}

storeItems.push(item1,item2,item3)
console.log(storeItems)

const itemQty = storeItems[2].cost;
console.log(itemQty)

