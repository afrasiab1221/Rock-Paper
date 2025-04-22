
function getComputerChoice(){
    let choice = Math.floor(Math.random()*10)
    // console.log(choice);
    
    if (choice>=0 && choice<4) {
        return "rock"
    } else if(choice>=4 && choice<7){
        return "scissor"
    } else{
        return "paper"
    }
}

function getHumanChoice(){
    let choice =prompt("Enter input")
    return choice
    // console.log("U entered", choice)
}

// +++++++++++++++++++++++++++++++++++++++++++



function playRound(humanChoice, computerChoice) {
    let humanScore = 0
    let computerScore = 0
   human = humanChoice.toLowerCase()
   computer = computerChoice.toLowerCase()
//    +++++++++++Checking values+++++++++++++++++++++++++++++
   if(human == "rock"){
      if(computer == "scissor")
        humanScore++;
      else if(computer == "paper")
        computerScore++;
   }
   else if(human == "scissor"){
      if(computer == "rock")
        computerScore++;
      else if(computer == "paper")
        humanScore++;
   }
   else {
      if(computer == "rock")
        humanScore++;
      else if(computer == "scissor")
        computerScore++;
   }

//    ++++++++++Declairing Winner+++++++++++++++++++++
     if (humanScore > computerScore) {
        console.log("Hurray!! U won")
     }else if(humanScore < computerScore){
        console.log("Oops!! better luck next time ")
     }else{
        console.log("Draw!! play again")
     }

    
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  
