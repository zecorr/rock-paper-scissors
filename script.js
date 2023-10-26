// Global Variables
const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"
const choices = [rock, paper, scissors]
const fadeChoices = ["Rock!", "Paper!", "Scissors!", "Shoot!"]
const playerWins = "Player 1 wins!"
const computerWins = "Computer Wins!"
const draw = "Draw!"
let playerScore = 0
let computerScore = 0
let playerChoice


// Variables to target elements
const rockButton = document.getElementById('rock-btn')
const paperButton = document.getElementById('paper-btn')
const scissorsButton = document.getElementById('scissors-btn')
const animation = document.querySelector('.animation')
const roundOutcome = document.querySelector('.round-outcome')

// Handle click function
rockButton.addEventListener('click', () => {
    animationFade()
    setTimeout(() => {playerChoice = rock}, 1400)
    setTimeout(game, 1400)
})

paperButton.addEventListener('click', () => {
    animationFade()
    setTimeout(() => {playerChoice = paper}, 1400)
    setTimeout(game, 1400)
})

scissorsButton.addEventListener('click', () => {
    animationFade()
    setTimeout(() => {playerChoice = scissors}, 1400)
    setTimeout(game, 1400)
})

// Randomly return either Rock, Paper, or Scissors.
const randomChoice = () => choices[Math.floor(Math.random() * 3)]
const getComputerChoice = () => randomChoice()

// Display starting scoreboard equal to zero
document.getElementById("playerScore").innerHTML = playerScore
document.getElementById("computerScore").innerHTML = computerScore

// Handle round logic
const playRound = function (playerSelection, computerSelection){
    const displayPlayerChoice = document.getElementById("playerChoice").innerHTML = playerChoice
    const displayComputerChoice = document.getElementById("computerChoice").innerHTML = getComputerChoice()

    if (playerSelection === computerSelection){
        console.log(`${draw} Both players had ${computerSelection}`)
        displayPlayerChoice        
        displayComputerChoice
        return draw
    } else if (playerSelection === rock && computerSelection === paper){
        console.log(`${paper} beats ${rock}. ${computerWins}`)
        computerScore++
        document.getElementById("computerScore").innerHTML = computerScore
        displayPlayerChoice        
        displayComputerChoice
        return computerWins
    } else if (playerSelection === rock && computerSelection === scissors){
        console.log(`${rock} beats ${scissors}! ${playerWins}`)
        playerScore++
        document.getElementById("playerScore").innerHTML = playerScore;
        displayPlayerChoice        
        displayComputerChoice
        return playerWins
    } else if (playerSelection === paper && computerSelection === rock){
        console.log(`${paper} beats ${rock}. ${playerWins}`)
        playerScore++
        document.getElementById("playerScore").innerHTML = playerScore;
        displayPlayerChoice        
        displayComputerChoice
        return playerWins
    } else if (playerSelection === paper && computerSelection === scissors){
        console.log(`${scissors} beats ${paper}! ${computerWins}`)
        computerScore++
        document.getElementById("computerScore").innerHTML = computerScore
        displayPlayerChoice        
        displayComputerChoice
        return computerWins
    } else if (playerSelection === scissors && computerSelection === rock){
        console.log(`${rock} beats ${scissors}! ${computerWins}`)
        computerScore++
        document.getElementById("computerScore").innerHTML = computerScore
        displayPlayerChoice        
        displayComputerChoice
        return computerWins
    } else if (playerSelection === scissors && computerSelection === paper){
        console.log(`${scissors} beats ${paper}! ${playerWins}`)
        playerScore++
        document.getElementById("playerScore").innerHTML = playerScore;
        displayPlayerChoice        
        displayComputerChoice
        return playerWins
    } 
}




const game = () =>  playRound(playerChoice, getComputerChoice())



function animationFade() {
    animation.style.opacity = 0
    roundOutcome.style.opacity = 0

    setTimeout(() => {
        animation.textContent = fadeChoices[0];
        animation.style.opacity = 1; 
    }, 200); 
    setTimeout(() => {
        animation.style.opacity = 0;  
    }, 400); 
    setTimeout(() => {
        animation.textContent = fadeChoices[1];
        animation.style.opacity = 1; 
    }, 600); 
    setTimeout(() => {
        animation.style.opacity = 0;  
    }, 800); 
    setTimeout(() => {
        animation.textContent = fadeChoices[2];
        animation.style.opacity = 1; 
    }, 1000); 
    setTimeout(() => {
        animation.style.opacity = 0;  
    }, 1200); 
    setTimeout(() => {
        animation.textContent = fadeChoices[3];
        animation.style.opacity = 1;
    }, 1400); 
    setTimeout(() => {
        roundOutcome.style.opacity = 1 
    }, 1600)
    setTimeout(() => {
       animation.style.opacity = 0 
    }, 2000);
}