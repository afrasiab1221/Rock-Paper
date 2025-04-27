function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10);
    if (choice >= 0 && choice < 4) {
        return "rock";
    } else if (choice >= 4 && choice < 7) {
        return "scissor";
    } else {
        return "paper";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const scoreDisplay = document.querySelector(".score");
    const winnerDisplay = document.querySelector(".winner");

    function updateScore() {
        scoreDisplay.textContent = `Your score: ${humanScore}  Computer Score: ${computerScore}`;
        
        if (humanScore >= 5) {
            winnerDisplay.textContent = "You won!";
            disableButtons();
        } else if (computerScore >= 5) {
            winnerDisplay.textContent = "You Lost!";
            disableButtons();
        }
    }

    function disableButtons() {
        document.querySelectorAll(".Choices button").forEach(button => {
            button.disabled = true;
        });
    }

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        
        humanChoice = humanChoice.toLowerCase();
        
        if (humanChoice === "rock") {
            if (computerChoice === "scissor") humanScore++;
            else if (computerChoice === "paper") computerScore++;
        } 
        else if (humanChoice === "scissor") {
            if (computerChoice === "rock") computerScore++;
            else if (computerChoice === "paper") humanScore++;
        } 
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") humanScore++;
            else if (computerChoice === "scissor") computerScore++;
        }

        updateScore();
    }

    // Set up event listeners
    document.querySelector(".rock").addEventListener("click", () => playRound("rock"));
    document.querySelector(".paper").addEventListener("click", () => playRound("paper"));
    document.querySelector(".scissor").addEventListener("click", () => playRound("scissor"));
}

playGame();