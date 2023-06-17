//Variables & Datatypes 

// A. Q+A

const n1 = 0; //define
let n2; //declare
var n3;

console.log(n1,n2,n3)


n2 = 'hey'
n3 = false
console.log(n1,n2,n3)
/*

//declare - when we create the variable or object   
//assing - giving value 
//defining is both (declare)


//pseudocoding the functional step logic in plain language before coding

//planning should be majority of your time and the rest spent coding 


*/



//Strings Section


let firstVariable = "Hello World";
firstVariable = 1;
let secondVariable = firstVariable
console.log(firstVariable,secondVariable)
secondVariable = 'new String'
let name1 = 'George Costanza'
let sentence = "Hello my name is "
let myName = sentence + name1
console.log(firstVariable,secondVariable)
console.log(myName)


//Booleans 

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";


console.log(a < b)
console.log(c > d)
console.log('Name' === 'Name')
//FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false)
console.log(false && false &&false &&false &&false || true)
console.log(false === false)
console.log(e === 'Kevin')
console.log(a + b ===c)
console.log(a * a === d)


//The farm 

let animal  = 'cow' || 'chicken'
console.log(animal)
if(animal ==='cow'){
    console.log('mooooo')

}
else{
    console.log("You're not a cow")
}


// Driver's Ed 

let personAge = 25;
personAge >= 16 ? console.log('Here are the keys!'):console.log("Sorry you're too young")


//Loops 
//good
// for(let i = 0; i<100; i++){
//     console.log('This is good')
// }

//not good
// for(i = 0; i<100; i++){
//     console.log('This not good')
// }


// //a 
// for(let i = 0; i<=10; i++){
//     console.log(i)
// }

// //b 
// for(let i = 10; i<=400; i++){
//     console.log(i)
// }

//c
// for(let i = 12; i<=4000; i+=3){
//     console.log(i)
// }

//getEven
// for(let i = 0; i<=100; i++){
//     if(i % 2 === 0){
//         console.log(`Even Number ${i}`)
        
//     }
    
// }

//Give me 5 

// let stringHigh5 = 'High 5'
// let aCrowd = 'This is a crowd'
// for(let i = 0; i <= 100; i ++){


//     if(i%3===0 && i % 5===0){
//         console.log(`I found a ${i}! ${stringHigh5}`)
//         console.log(`I found a ${i}! ${aCrowd}`)
//     }
//     //this is 5
//     else if(i % 5===0){
//         console.log(`I found a ${i}! ${stringHigh5}`)
//     }
//     //this is 
//     else if(i%3===0){
//         console.log(`I found a ${i}! ${aCrowd}`)
//     }
    
//     else{
//         console.log(i)
//     }

// }


//Bank Account 

let bankAccount = 0
// for(let i = 0; i<=10;i++){
//     bankAccount += i
//     console.log(bankAccount)
// }

// for(let i = 0; i<=100;i++){
//         bankAccount =bankAccount+(i*2)
//     console.log(bankAccount)
// }


//Arrays

//Objects in array 

//No there is no order

//

// let arr = [1,4,3,2]
// console.log(arr)
// arr.sort()
// console.log(arr)


let quotes = ['quote1','quote2','quote3']

const randomThings = [1,10,'Hello',true]

console.log(randomThings[0])
//easy if you know it 
randomThings[2]= "World"

// console.log(randomThings[randomThings.indexOf('Hello')])
//if you didnt know the specific word 
// randomThings[randomThings.indexOf('Hello')] = "World"

const ourClass = ['Salty','Zoom', 'Sardine','Slack','Github']

ourClass[2]
ourClass[4] = "Octocat"
ourClass.push("Cloud City")



const myArray = [5,10,500,20]
myArray.push('Aegon')
myArray.push('Anything')
myArray.shift()
console.log(myArray)
myArray.unshift('Bob Marley')
console.log(myArray)
myArray.pop()
console.log(myArray)

myArray.reverse()
console.log(myArray)

// let arRR = myArray.toReversed()
// console.log(arRR)

// let num = 0
// if(num<100){
//     console.log('Little number')
// }
// else{
//     console.log('Big nubmer')

// }


// if(num<5){
//     console.log('Little number')
// }
// else if(num>10){
//     console.log('Big nubmer')

// }
// else{
//     console.log('Monkey')
// }



const kristynsCloset = [
    'left shoe',
    'cowboy boots',
    'right sock',
    'GA hoodie',
    'green pants',
    'yellow knit hat',
    'marshamallow peeps'
];

const thomsCloset = [
    [
        'grey button-up',
        'dark grey button-up',
        'light blue button-up',
        'blue button-up',
    ],[
        'grey jeans',
        'jeans',
        'PJs',
    ],[
        'wool mittens',
        'wool scarf',
        'raybans'
    ]
];


let rSock = kristynsCloset[2]
console.log('Kristyn is rocking that ' + rSock + ' today!');
kristynsCloset.splice(kristynsCloset.length-2,'raybands')
console.log(kristynsCloset)