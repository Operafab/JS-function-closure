


let fruit = "Apple";

switch(fruit){
  case "Banana":
    console.log("This is a Banana")
  break;

  case "Apple":
    console.log("This is a Apple")
    break;

  case "Carrot":
    console.log("This is a carrot")
    break;
  default:
  console.log("This is a bomb") 

}

let age = 18;

let canVote = (age >= 18) ? "Yes, you can vote" 
: "No, you are not elligible to vote";
console.log(canVote)


// Loops are used to perform different actions based on condition
for (let i = 0; i < 5; i++){
  console.log(i)
}

let b = 0;
while ( b < 8){
  console.log(b)
  b++
}

for (let kenaz = 2; kenaz < 20; kenaz ++){
  console.log(kenaz)
}

// function- a block of code designed to be re-usuable.

// function declaration
// parameters are varables declared in a function
// arguements are values passed to the function when its called

function functionName(parameters){
  
}
let name = "ralph"

function greet(name){
 console.log("Hello," + name ) 
}

console.log(greet("Ralph"))

// function expression- assigns function to a variable

// const functionName = function (){

// }


// arrow function(ES6)-provides a more concise syntax and handle this keyword differently compared to regular 

const arrow = (a, b) => {
  return a + b

}

console.log(arrow(5,4))


function sayHi (name){
  console.log(`Hello ${name}`)
}
sayHi()


const cohort = (tutor, student) =>{
  const tutor1= "Raphael"
  const tutor2 = "Emmanuel"
  const student1 = "Teamlead"
  const student2 = "alamu"
  return console.log(`Mr. ${tutor1} is the tutor of the year, while Mr.  ${student1} is a part of the cohort`)

}


const tester = () =>{
  console.log(3+5)

}

tester()


const logAge = (name, age) =>{
  console.log(`${name} is ${age} years old`)
}

logAge("Joe", 34)




const select =() => {
  const sentence = console.log("I love the world")
  return sentence
} 

select()

// ==== SCOPE- current context in which variables, expressions, functions are accessible 
// global scope
let name2 = "Opera"

const logName = () =>{
  console.log(name2)
}
logName()



const globalVar = "Am global";
function acessGlobal (){

  console.log(globalVar)
}

globalVar


const example = ()=>{
  let localScope = "Local Champion"
  console.log(localScope)
}

example()


const someFunction = () =>{
  let name = "julius"
  console.log(name)
  const anotheFunction2 = () =>{
    let name = "julius"
    console.log(name)
  }
  
}

console.log(someFunction())

const someFunction2 = () =>{
  const name = "John";
  console.log(name)
}

const anotherFunction1 =()=>{
  const name = "Kanaz";
  console.log(name)
}

someFunction2()
anotherFunction1()


// ==== BLOCK SCOPE ====
if (true){
  let blockScoped = "You have been blocked"
  console.log(blockScoped);
}

// A behaviour where variables and functions are moved or "hoisted"


greeting()
function greeting (){
  console.log("Hello")
}

var myFunc = function(){
  console.log("Hi")
}
myFunc()

// Function is a block if code designed to perform a certain task, it is executed when it is called or invoked
// Types of JS function

// function declararion is whwen the function is declared with the ket word function
// function expression is when the function is declared wit the key word function and paced in a variable

//====Function Declaration=====.

function multiply (number){
  return number * number 
}



function substraction(a,b){
  return a - b;
}
  // const subResult = substraction(5,4)
console.log(substraction(5,4))

//====Assign value to params====
function division(c,d=7){
  return c / d
}
 console.log(division(21))

//  ==== function exoression ====

const greetings = function sayHi(name){
  console.log(`Hello ${name}`)
}

greetings("Opera")


// function expression to calculate the sum of two numbers


const summation = function addition(number, number){
  console.log(number + number )
}

summation(5,8)

// Arrow function
const arrows = (x,y) =>x * y;
console.log(arrows(2,4));

const example3 = (tutor, student) =>{
  const tutors1 = "OG";
  const tutors2 = "Teddy"; 

  const students1 = "Mubi";
  const students2 = "Rodiat";
  return console.log(`Mr ${tutors2} is the tutor, while ${students1} is part of the cohorts`)

};
example3()

// Global Scope
const scope = 2

const testScope = () => {
  const b = 10
  console.log(scope + b)
}

testScope() 



let num = 5
 const testNum = () =>{
  console.log(num)
  num = 10
 }

 testNum()
 console.log(num)

//  Local Scope- when variables are declared within a function
function localScope(){
  const names ="OG"
  const isPresent = true;
  const potBelly = true;
  console.log(names,isPresent,potBelly)
}
localScope()


const someFunctions = () =>{
  const name = "Yemi"

  const anotherFunction = (a) =>{
    console.log(name)
    return a * a
  }
 console.log(anotherFunction(5))
};

someFunctions()


// Hoisting

hoistedFunction()

function hoistedFunction(){
  console.log("I am hoisted")
}

// Closure - a function inside a function that remembers its variable from its outer scope, even after the outer function has returned, this concept allows its inner function to have access to the variable of outer functions  even after the outer function has finished execution.
console.log(myHoistedFn())

function myHoistedFn(a,b){
return a - b;
}



// function outerFunction(outerVariable){
//   return 
//   function innerFunction(innerVariable){
//     console.log(`outer Variable ${outerVariable}`)
//     console.log(`inner Variable ${innerVariable}`)

//   }

// }


// const newFunction = outerFunction("outside")
// newFunction("inside")



const outer =() =>{
  const outerVar = "Hello"
  const inner = () =>{
    const innerVar = "Opera"
    console.log(outerVar, innerVar)
  }
  return inner
}


const innerFn = outer()
console.log(innerFn())



const init = () => {
  const hobby = "Football"
  const displayHobby = ()=>{
    console.log(hobby)
  }
  return displayHobby
  
}

const answer = init()
answer()

function checkmate(){
  let name = "Teddy"
  console.log(`Outer function is for ${name}`)

  function checking(){
    console.log(`The user is ${name}`)
  }
  return checking()
}

checkmate()


const outerFn =() =>{
  const example = "JavaScript"
  console.log(example)

  const innerFn= () =>{
    console.log("I am inner Function")

    const nestedInnerFn2 = () =>{
      console.log("I am nested inner function")
    }
   return nestedInnerFn2()
  }
  return innerFn()
}

outerFn()




