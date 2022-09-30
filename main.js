console.log("Connected")
// Task 1 (Logic) plan

// Create two variables to store the moves (player move, computer move)


// Create if statemets to determine the winner
// Create a function using the logice we just created
// The varieables that we just hard coded will now be taken as parameters of the function.


let computerMove = "rock"

function getWinner(playerMove = prompt("What's your move?")){
    if(playerMove === computerMove){
        return 0;
    }
        if (playerMove === "rock" && computerMove === "paper" ){ 
            return -1;
        }      
            if (playerMove === "rock" && computerMove === "scissors"){
                return 1;
            }                
                if (playerMove === "scissors" && computerMove === "rock"){
                    return -1;
                }                
                    if (playerMove === "scissors" && computerMove === "paper"){
                        return 1;
                    }                        
                        if (playerMove === "paper" && computerMove === "rock"){
                            return 1;
                        }
                            if (playerMove === "paper" && computerMove === "scissors"){
                                return -1;
                            } else {
                                console.log("Choose between rock, scissors or paper")
                            } 
                                                  
}                    
let result = getWinner()
 
alert(result)


//Task 3: User Input - instead of hard-coding player move, get the player move from their input, which we get by prompting them
// Display result of function as an alert. 
