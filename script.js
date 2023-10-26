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
let computerChoice
let winner

// Variables to target elements
const rockButton = document.getElementById('rock-btn')
const paperButton = document.getElementById('paper-btn')
const scissorsButton = document.getElementById('scissors-btn')
const animation = document.querySelector('.animation')
const roundOutcome = document.querySelector('.round-outcome')
const winnerFade = document.getElementById('winner')

// Handle click function
rockButton.addEventListener('click', () => {
    animationFade()
    setTimeout(() => {playerChoice = rock}, 1400)
    setTimeout(() => {computerChoice = randomChoice()}, 1405)
    setTimeout(game, 1410)
})
paperButton.addEventListener('click', () => {
    animationFade()
    setTimeout(() => {playerChoice = paper}, 1400)
    setTimeout(() => {computerChoice = randomChoice()}, 1405)
    setTimeout(game, 1410)
})
scissorsButton.addEventListener('click', () => {
    animationFade()
    setTimeout(() => {playerChoice = scissors}, 1400)
    setTimeout(() => {computerChoice = randomChoice()}, 1405)
    setTimeout(game, 1410)
})

// Randomly return either Rock, Paper, or Scissors.
const randomChoice = () => choices[Math.floor(Math.random() * 3)]

// Display starting scoreboard equal to zero
document.getElementById("playerScore").innerHTML = playerScore
document.getElementById("computerScore").innerHTML = computerScore

// Handle round logic
const playRound = function (playerSelection, computerSelection){
    const displayPlayerChoice = document.getElementById("playerChoice").innerHTML = playerChoice
    const displayComputerChoice = document.getElementById("computerChoice").innerHTML = computerChoice
    if (playerSelection === computerSelection){
        displayPlayerChoice        
        displayComputerChoice
        document.getElementById('winner').innerHTML = draw
        return draw
    } else if (playerSelection === rock && computerSelection === paper){
        computerScore++
        document.getElementById("computerScore").innerHTML = computerScore
        displayPlayerChoice        
        displayComputerChoice
        document.getElementById('winner').innerHTML = computerWins
        return computerWins
    } else if (playerSelection === rock && computerSelection === scissors){
        playerScore++
        document.getElementById("playerScore").innerHTML = playerScore;
        displayPlayerChoice        
        displayComputerChoice
        document.getElementById('winner').innerHTML = playerWins
        return playerWins
    } else if (playerSelection === paper && computerSelection === rock){
        playerScore++
        document.getElementById("playerScore").innerHTML = playerScore;
        displayPlayerChoice        
        displayComputerChoice
        document.getElementById('winner').innerHTML = playerWins
        return playerWins
    } else if (playerSelection === paper && computerSelection === scissors){
        computerScore++
        document.getElementById("computerScore").innerHTML = computerScore
        displayPlayerChoice        
        displayComputerChoice
        document.getElementById('winner').innerHTML = computerWins
        return computerWins
    } else if (playerSelection === scissors && computerSelection === rock){
        computerScore++
        document.getElementById("computerScore").innerHTML = computerScore
        displayPlayerChoice        
        displayComputerChoice
        document.getElementById('winner').innerHTML = computerWins
        return computerWins
    } else if (playerSelection === scissors && computerSelection === paper){
        playerScore++
        document.getElementById("playerScore").innerHTML = playerScore;
        displayPlayerChoice        
        displayComputerChoice
        document.getElementById('winner').innerHTML = playerWins
        return playerWins
    } 
}

// Run game
const game = () =>  playRound(playerChoice, computerChoice)

// Handle animation fade
function animationFade() {
    animation.style.opacity = 0
    roundOutcome.style.opacity = 0

    setTimeout(() => {
        animation.textContent = fadeChoices[0];
        animation.style.opacity = 1; 
    }, 190); 
    setTimeout(() => {
        animation.style.opacity = 0;  
    }, 380); 
    setTimeout(() => {
        animation.textContent = fadeChoices[1];
        animation.style.opacity = 1; 
    }, 570); 
    setTimeout(() => {
        animation.style.opacity = 0;  
    }, 760); 
    setTimeout(() => {
        animation.textContent = fadeChoices[2];
        animation.style.opacity = 1; 
    }, 950); 
    setTimeout(() => {
        animation.style.opacity = 0;  
    }, 1140); 
    setTimeout(() => {
        animation.textContent = fadeChoices[3];
        animation.style.opacity = 1;
    }, 1330); 
    setTimeout(() => {
        roundOutcome.style.opacity = 1 
        winnerFade.style.opacity = 1 
    }, 1520)
    setTimeout(() => {
       animation.style.opacity = 0 
    }, 1910);
    setTimeout(() => {
        winnerFade.style.opacity = 0 
     }, 2410);
}