console.log("Connected")
// Task 1 (Logic) plan
// Create two variables to store the moves (our move, computer move)
// Create an object with three properties insite, being rock, 
//paper and scizor. Doing that for player and computer.


// Create if statemets to determine the winner

let playerMove = "rock"
let computerMove = "rock"


if(playerMove === computerMove){console.log("It's a draw!")
}

if (playerMove === "rock" && computerMove === "paper" ){ 
    console.log("You've lost!")}
    

if (playerMove === "rock" && computerMove === "scissors"){
    console.log("You won!")}
        
if (playerMove === "scissors" && computerMove === "rock"){
            console.log("You've lost!")}
       
if (playerMove === "scissors" && computerMove === "paper"){
            console.log("You win!")}
        
if (playerMove === "paper" && computerMove === "rock"){
                console.log("You win!")}

if (playerMove === "paper" && computerMove === "scissors"){
                console.log("You've lost!")} 
    