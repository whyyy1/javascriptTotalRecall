/* 
I. Variable & Datatypes
A. Q + A
1. 
let varName = value  ** most flexible
const varName = value  **constant
var varName = value  ** old school
2. by reassigning the variable
    var = newValue
3. declare new variable and assign the old variable to it
let newVar = oldVar
4. declare: grab the memory for the variable                  let
   assign: set a value to the variable                        =
   define: setting up code to use later function/class/if/for {}
5. plain english code meant to be understood by humans. useful translation layer for communicating with non-coders and for planning out future code 
6. 80% thinking about it 20% writing it
*/

// B. Strings
// 1.
let firstVariable
// 2.
firstVariable = 'Hello World'
// 3.
firstVariable = 33
// 4.
let secondVariable = firstVariable
// 5.
secondVariable = 'any string'
// 6.
// the value of first variable ?
// 33
console.log(firstVariable)
// 7.
let yourName = 'Dominic'
let greeting = "Hello, my name is " + yourName
console.log(greeting)

// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin'

console.log(a < b)
console.log(c > d)
console.log('Name' === 'Name')
console.log(true || false)
console.log (false && false && false && false || true)
console.log(e === 'Kevin')
// console.log(e && 'Kevin') why does this print 'Kevin'
console.log(a < b !== c)
console.log(a * a === d)
console.log(48 == '48')

// D. The farm
// 1.
let animal = 'cow'
// 2.
if(animal === 'cow'){
  console.log('MOOOOOOOOOOOO')
}
// 3.
else{
  console.log("Hey! You're not a cow.")
}
// 4.
//using replit but would commit here if in vs code

// E. Driver's Ed
// 1.
let personsAge = 17
// 2.
if(personsAge >= 16) {
  console.log("Here are the keys!")
}
else{
  console.log("Sorry, you're too young.")
}

// II. Loops
// A. The basics
// 1.
for(let i = 0; i <= 10; i++) {
  console.log(i);
}
// 2.
for(let i = 10; i <= 400; i++) {
  // console.log(i);
}
// 3.
for(let i = 12; i <= 4000; i += 3) {
  // console.log(i);
} 

// B. Get even
// 1.
for(let i = 1; i <= 100; i++) {
  let line = i  
// 2.
  if(i % 2 === 0) {
    line += ' is an even number'
  }
  console.log(line);
}

// C. Give me Five
// 1.
for(let i = 0; i <= 100; i++){
// 3.
  if(i !== 0 ) {
    if(i % 5 === 0 && i % 3 === 0){
      console.log(`I found a ${i}. High Five! Three is a crowd!`)
    }
    else if(i % 5 === 0){
      console.log(`I found a ${i}. High Five!`)
    }
// 2.
    else if( i % 3 === 0){
      console.log(`I found a ${i}. Three is a crowd!`)
    }
  }  
}

// D. Savings account
// 1.
let bank_account = 0;
for(let i = 1; i <= 10; i++) {
  bank_account += i;
}
console.log(bank_account)
//2.
let afterBonus = 0
for(let i = 1; i <= 100; i++){
  afterBonus += (i * 2);
}
console.log(afterBonus)

// III. Arrays & Control flow
// A. Talk about it
// 1. The things in an array are called elements/entries/values/items
// 2. Yes, arrays are always ordered.
// 3. Shopping list, 3 dimesional space

// B.
// 1.
const quotes = ['Hey there', 'The sky is not falling', 'Everything is under control']

// C.
const randomThings = [1, 10, "Hello", true]
// 1.
randomThings[0]
//2.
randomThings[2] = "World"
// 3.
console.log(randomThings)

// D.
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// 1. 
ourClass[2]
// 2.
ourClass[4] = "Octocat"
// 3.
ourClass.push("Cloud City")
console.log(ourClass)

// E.
const myArray = [5, 10, 500, 20]
// 1.
myArray.push('Aegon')
myArray.push('Jade')
// 2.
myArray.shift()
// 3.
myArray.unshift('Bob Marley')
// 4.
myArray.pop()
console.log(myArray)
// 5.
console.log(myArray.reverse())
console.log(myArray)
// It did mutate the array because we didnt have to save it to a new array to get the results. It returns itself back.

// F. Biggie Smalls
let count = 101;
// 1.
if(count < 100){
  console.log('little number')
}
else  // (count >= 100)
{
  console.log('big number')
}

// G. Monkey in the middle
let monkeyNumber = 6
if(monkeyNumber < 5) {
  console.log('little number')
}
else if(monkeyNumber > 10) {
  console.log('big number')
}
else{
  console.log('monkey')
}

// H. What's in Your Closet

const kristynsCloset = [
  'left shoe',
  'cowboy boots',
  'right sock',
  'GA hoodie',
  'green pants',
  'yellow knit hat',
  'marshmallow peeps',
];

const thomsCloset = [
  [
    //These are Thom's shirts
    'grey button-up',
    'dark grey button-up',
    'light blue button-up',
    'blue button-up',
  ],[
    //These are Thom's pants
    'grey jeans',
    'jeans',
    'PJs',
  ],[
    //These are Thom's accesssories
    'wool mittens',
    'wool scarf',
    'raybans',
  ]
]
// 1.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
// 2.
kristynsCloset.splice(6, 0, 'raybans')
// 3.
kristynsCloset[5] = 'stained knit hat'
console.log(kristynsCloset)
// 4.
let shirt = thomsCloset[0][0]
// 5.
let pants = thomsCloset[1][2]
// 6.
let accessory = thomsCloset[2][0]
// 7.
console.log(`Thoms is looking fierce in a ${shirt}, ${pants}, and ${accessory}!`)
// 8.
thomsCloset[1][2] = 'Footie Pajamas'

// IV. Functions
// A.
//Skipping because it told us to.
// B. printCool
function printCool(name) {
  console.log(`${name} is cool.`);
}
printCool('Captian Reynolds')
// C. calculateCube
function calculateCube(number) {
  return number**3
}
console.log(calculateCube(3));
// D. isVowel
function isVowel(string) {
  let letter = string.toLowerCase()
  switch(letter){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;      
    default :
      return false;
  }
}

console.log(isVowel('a'))
console.log(isVowel('E'))
console.log(isVowel('I'))
console.log(isVowel('o'))
console.log(isVowel('U'))
console.log(isVowel('y'))
console.log(isVowel('1'))

// E. getTwoLengths
function getTwoLengths(string1, string2) {
  // let array = [];
  // array.push(string1.length)
  // array.push(string2.length)
  return [string1.length, string2.length]
}

console.log(getTwoLengths("hey", "there"))

// F. getMultipleLengths

function getMultipleLengths(array){
  let arr = [];
  for(let i = 0; i < array.length; i++){
    arr.push(array[i].length)
  }
  return arr
}
console.log(getMultipleLengths(["hi", "you", 'whjat', 'is', "for", "dinner"]))

// G. maxOfThree
function maxOfThree(num1, num2, num3){
  // return Math.max(num1, num2, num3)
  if(num1 >= num2 && num1 >= num3){
    return num1;
  }
  else if(num2 >= num3){
    return num2;
  }
  else{
    return num3;
  }
}


console.log(maxOfThree(1, 2, 3))
console.log(maxOfThree(1, 3, 2))
console.log(maxOfThree(3, 2, 1))

// H. printLongestWord
inputArray = ['Hey', 'Hello', 'testing', 'sdifguhsdifugh', 'a', 'asd', 'sduiyhfgudyfghuiysdgfuysdgfsd']
function printLongestWord(array){
  let longestWord = array[0];
  for(let i in array){
    // console.log(i);
    if(longestWord.length < array[i].length){
      longestWord = array[i];
    }    
  }
  return longestWord;
}
console.log(printLongestWord(inputArray));

// V. Objects

// A. Make a user object
// 1.
const user = {
// 2. 
  name: 'mike',
  email: 'mike@gmail.com',
  age: 97,
  purchased: [],
};

// B. Update the user
// 1.
user.email = 'miketheman@gmail.com';
console.log(user.email);
// 2.
user.age++;
console.log(user.age);

// C. Adding keys and values
// 1.
user.location = 'Denver';
console.log(user.location);

// D. Shopaholic!
// 1.
user.purchased.push('Carbohydrates', 'peace of mind', 'Merino jodhpurs');
// 2.
// user.purchased.push('peace of mind');
// console.log(user.purchased);
// 3.
// user.purchased.push('Merino jodhpurs');
// 4.
console.log(user.purchased[2]);

// E. Object-within-object

// 1.
user.friend = {
    name: "Grace Hopper",
    age: 85,
    purchased: [],
    location: '',
}
// 2.
console.log(user.friend.name);
// 3.
console.log(user.friend.location);
// 4.
user.friend.age = 55;
// 5. 
// 6.
// 7.
user.friend.purchased.push('the one ring', 'A Latte');
console.log(user.friend.purchased);

// F. Loops
// 1.
for(let i of user.purchased){
  console.log(i);
}
// 2.
for(let i of user.friend.purchased){
  console.log(i);
}

// G. Functions can operate on objects
// 1.
function updateUser(){
// 2.
  user.age++;
// 3.
  user.name = user.name.toUpperCase();
}
updateUser();
console.log(user);
// .4
function oldAndLoud(person){
  person.age++;
  person.name = person.name.toUpperCase();
}
oldAndLoud(user.friend)
console.log(user.friend)

// CAT COMBINATOR

// 1. Mama cat
const cat1 = {
  name: 'Mama',
  breed: 'Calico',
  age: 97,
}
console.log(cat1.age)
console.log(cat1.breed)

// 2. Papa cat
const cat2 = {
  name: 'Papa',
  breed: 'Minx',
  age: 87,
}
console.log(cat2.age)
console.log(cat2.breed)

// 3. Combine Cats!
// 1.
function combineCats(mama, papa){
  // console.log(mama, papa)
  return {name: mama.name + papa.name, age: 1, breed: mama.breed + '-'+ papa.breed}
}
combineCats(cat1, {name: 'new cat', breed: 'blackcat', age: 44})

// 2.
console.log(combineCats(cat1, cat2))

// 4. Cat braind bender
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))))


// PART 2 --------------------------------------

// Section 1 Arrays, Loops, and Conditional Reps

// Part II: JavaScript Reps
///////////////////////////
// Easy Going
///////////////////////////
console.log("Easy Going");
for(let i = 1; i <= 20; i++){  
  console.log(i);
}

///////////////////////////
// Get Even
///////////////////////////
console.log("Get Even");
for(let i = 0; i <= 200; i++){  
  if(i % 2 === 0){
    console.log(i);
  }
}
///////////////////////////
// Fizz Buzz
///////////////////////////

console.log("Fizz Buzz Exercise");
for(let i = 1; i <= 100; i++){  
  if(i % 5 === 0 && i % 3 === 0){
    console.log(`FizzBuzz`);
  }
  else if(i % 3 === 0){
    console.log('Fizz')
  }
  else if(i % 5 === 0){
    console.log('Buzz')
  }
  else{
    console.log(i)
  }  
}

///////////////////////////
// Wild Wild Life
///////////////////////////

console.log("Wild Wild Life Exercise");
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgon Dog", 2, "Upside Down"]


// 1.
plantee[2]++;
console.log(plantee)
// 2.
wolfy[3] = 'Gotham City';
console.log(wolfy)
// 3.
dart[3] += ' Hawkins';
console.log(dart)
// 4.
wolfy.shift();
console.log(wolfy)
wolfy.unshift('Gameboy')
console.log(wolfy)

///////////////////////////
// Yell at the Ninja Turtles
///////////////////////////

console.log("Yell at the Ninja Turtles");

    
    
    
let turtleArray = ['Donatello', 'Leonardo', 'Raphael', 'Michelangelo']
for(let turtle of turtleArray){  
  console.log(turtle.toUpperCase());
}

///////////////////////////
// Methods, Revisited
///////////////////////////
console.log("Methods, Revisited");

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s moving castle','Django Unchained', 'Titanic'];

console.log(favMovies.at(-1)); 

// 1.
favMovies.sort();
console.log(favMovies);
// It mutated the reference in the memory so yes it is altered
// 2.
favMovies.pop();
// 3.
favMovies.push('Guardians of the Galaxy');
// 4.
favMovies.reverse();
// 5.
favMovies.shift();
// 6.
favMovies.unshift();
// It returns the length of the new array
// 7.
favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar')
console.log(favMovies)
// Yes this alters our array and returns the removed value 
// 8.
let newSlice = favMovies.slice(0, Math.floor((favMovies.length/2)));
console.log(favMovies)
// 9.
// we returned the first half of the initial array this is a copy it did not remove the original piece
console.log(newSlice)
// 10.
console.log(favMovies)
// 11.
console.log(favMovies.indexOf('Titanic'))
// returns -1 if its not in the array
// 12.
// No we shouldnt use let to define an array because the contents can still be changed when it is set as a constant. 

///////////////////////////
// Where is Waldo
///////////////////////////
console.log("Where is Waldo");
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia",
   ["Baked Goods", "Waldo"]
  ]
];
// remove EGGBERT
whereIsWaldo.splice(1, 1);
// change Neff to No One
whereIsWaldo[1][2] = 'No One';
// Access and console.log("waldo")
console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1])
///////////////////////////
// Excited Kitten
///////////////////////////
console.log("Excited Kitten");
// 1.
let catResponses = ['HUMAN, WHY YOU TAKIG PICTURES OF ME?', 'THE CATNIP MADE ME DO IT', 'WHY DOES THE RED DOT ALWAYS GET AWAY AT RANDOM']

for(let i = 0; i < 20; i++){
  if(i % 2 === 0 ){
    console.log(catResponses[Math.floor(Math.random()*3)])
  }
  else{
  console.log("Love me, pet me! HSSSSSS!")  
  }
}
// 2.
// see above

///////////////////////////
// Find the Median
///////////////////////////
console.log("Find the Median");

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
let median = Math.floor(nums.length / 2)
console.log(nums[median]);

///////////////////////////
// Return of the Closets
///////////////////////////
console.log("Return of the Closets");
// 1. Alien Attire

// const kristynsCloset=[
// "left shoe",
// "cowboy boots",
// "right sock",
// "GA hoodie",
// "grren pants",
// "yellow knit hat",
// marshmallow peeps"
// ];


// cost thomsCloset=[
// [ 
// //these are Thoms's shirts
//   "gry button-up","dark grey button-up","light blue button-up","blue button-up",],
// [
// //these are Thoms's pants
// "grey jeans","jeans""PJs"],
// [
// //these are accessories
// "wool mittens","Wool scarf","raybans"]
// ];

let kristynsShoe = kristynsCloset.splice(0, 1);
thomsCloset[2].push(kristynsShoe[0])
console.log(kristynsCloset)
console.log(thomsCloset)

// 2. Dress Us Up

let outfit1 = {item1: kristynsCloset[0], item2: kristynsCloset[4], item3: kristynsCloset[2]}
let outfit2 = {item1: kristynsCloset[1], item2: kristynsCloset[5], item3: kristynsCloset[3]}
let outfit3 = {item1: kristynsCloset[1], item2: kristynsCloset[3], item3: kristynsCloset[4]}

let outfit4 = {item1: thomsCloset[0][0], item2: thomsCloset[1][0], item3: thomsCloset[2][0]}
let outfit5 = {item1: thomsCloset[0][1], item2: thomsCloset[1][1], item3: thomsCloset[2][1]}
let outfit6 = {item1: thomsCloset[0][2], item2: thomsCloset[1][2], item3: thomsCloset[2][2]}
console.log('--------------------------------')
function closetPrint(...object){
  for(let item of object) {
    console.log(`You are wearing ${item.item1}, ${item.item2}, and a fierce ${item.item3}`)
  }
}
closetPrint(outfit1, outfit2, outfit3, outfit4, outfit5, outfit6)

// Dirty Laundry
console.log("Dirty Laundry")
for(let item of kristynsCloset){
  console.log(`WHIRR: now washing ${item}`)
}

console.log('--------------------')
for(let i = 0; i < thomsCloset.length; i++){
  for(let j = 0; j < thomsCloset[i].length; j++){
    console.log(`WHIRR: now washing ${thomsCloset[i][j]}`)
  }
}
// Inventory
// 2.
for(let i = 0; i < thomsCloset.length; i++){
  console.log(thomsCloset[i]);
};

