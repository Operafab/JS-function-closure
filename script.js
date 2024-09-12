// Switch Statement


let sex = "Female"

person={
  name:"Tolu",
  gender: sex
}


switch(person.gender){
  case "Female":
    console.log("She is a female")
    break;
  case "Male":
    console.log("na man oooo......AH!!!")
    break;
  case "Hermerphrodite":
    console.log("na obanje ooo")
    break;
  default:
    console.log("This one no be human being")

}

// Ternary operators : short hand of an if else statement


// condition ? expressionIfTrue : expressionIfFalse;

let soup = "Vegetable Soup"
let response = soup ? "Yes, we have soup" : "sorry, no soup today";
console.log(response)



let isCustomerBanned = false;


let soupAccess = isCustomerBanned 
? "Sorry, no soup for you"
:soup
? `Yes, we have ${soup} Today`
:"Sorry. no soup for you"

console.log(soupAccess)



let testScore = 79

let myGrade=
testScore > 89 ? "A"
:testScore > 79 ? "B"
:testScore > 69 ? "C"
:testScore > 59 ? "D"
:"F";
console.log(`My test grade is a ${myGrade}.`)




let playerOne = "rock";
let computer = "scissors"

let result =
playerOne === computer
? "It's a tie"
: playerOne ==="rock" && computer === "paper"
? "Computer wins!"
:playerOne === "paper" && computer ==="scissors"
? "Computer wins"
:playerOne === "scissors" && computer ==="rock"
?"computer wins!"
:"Player One Wins!"
console.log(result)




