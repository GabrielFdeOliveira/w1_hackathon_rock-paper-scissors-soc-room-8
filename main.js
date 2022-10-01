console.log("Connected")
// Task 1 (Logic) plan
// Create two variables to store the moves (player move, computer move)
// Create if statemets to determine the winner
// Create a function using the logice we just created
// The varieables that we just hard coded will now be taken as parameters of the function.
// Use the function Math.random to replace our hard coded computerMove then 
// translate the result into an usable string to finally compare with playerMove
//show a result on alert


/* V: I have added counters here which we can make increase later in the 'if' statements. I have added ++ 
    counters to the if statements, and a general games counter to the while loop.
    I have also added all the count totals to the alert message at the end of the while loop */

let winCount = 0
let lossCount = 0
let gamesCount = 0
let tieCount = 0

// V: On lines 15 and 69 I have turned this into a do/while loop

//G: Here I stored the player name using the prompt funtion
let playerName = prompt("Hello! What's your name?") 
                console.log(playerName)

do{

// The values from math.random will be respectively paper = 0, scissors = 1 and rock = 2. 
//LEAVE COMMENT WITH LINE


let computerMove = Math.floor(Math.random()*3)

//V: I am adding the code below so that the computer move gets translated from a number to a string. This is because I think we are getting 'undefined' returned because we are using numbers, not string, to compare them. 

if(computerMove === 0){
    computerMove = "paper"
}
    if(computerMove === 1){
        computerMove = "scissors"
        //G: here I replaced another comparison with if by an else, to make the code cleaner, also indented it.
    // if(computerMove === 2){ 
        }else {
            computerMove = "rock"
        }

console.log(computerMove)

function getWinner(playerMove = prompt("What's your move " + playerName + "?")){
    if(playerMove === computerMove){tieCount++
        return 0;
    }
        if (playerMove === "rock" && computerMove === "paper" ){
            lossCount++;
            return -1;            
        }      
            if (playerMove === "rock" && computerMove === "scissors"){
                winCount++;
                return 1;
            }                
                if (playerMove === "scissors" && computerMove === "rock"){
                    lossCount++;
                    return -1;
                }                
                    if (playerMove === "scissors" && computerMove === "paper"){
                        winCount++;
                        return 1;
                    }                        
                        if (playerMove === "paper" && computerMove === "rock"){
                            winCount++;
                            return 1;
                        }
                            if (playerMove === "paper" && computerMove === "scissors"){
                                lossCount++;
                                return -1;                        
                            } else {
                                console.log("Please choose between rock, scissors or paper " + playerName + ".")
                            } 
                                                  
}                    
let result = getWinner()

//G: Here I translated the getWinner result into a string so it can be understood in the alert instead of showing -1, 0 and 1.
if(result === 1){
    result = "You won! "
    }if (result === -1){
        result = "You've lost! "
        }if (result === 0){
            result = "It's a draw! "
        }

gamesCount++


alert(result + " After playing " + gamesCount + " games with me, all of which I have LOVED, you have won = " + winCount + ", lost = " + lossCount + ", and tied = " + tieCount + " games!")

response = confirm("Do you wanna keep playing with me " + playerName + "???? I'm having a WONDERFUL time...")

} while(response)

//Task 3: User Input - instead of hard-coding player move, get the player move from their input, which we get by prompting them
// Display result of function as an alert. 
