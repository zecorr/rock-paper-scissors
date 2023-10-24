// Global Variables
const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"
const choices = [rock, paper, scissors]
const playerWins = "Player 1 wins!"
const computerWins = "Computer Wins!"
const draw = "Draw!"
let playerScore = 0
let computerScore = 0
let playerChoice
document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore


// Onclick function to begin game after player picks their option
const rockClick = () => (playerChoice = rock, game())
const paperClick = () => (playerChoice = paper, game())
const scissorsClick = () => (playerChoice = scissors, game())

// Randomly return either Rock, Paper, or Scissors.
const randomChoice = () => choices[Math.floor(Math.random() * 3)]
const getComputerChoice = () => randomChoice()

// Handle round logic
const playRound = function (playerSelection, computerSelection){

    if (playerSelection === computerSelection){
        console.log(`${draw} Both players had ${computerSelection}`)
        return draw
    } else if (playerSelection === rock && computerSelection === paper){
        console.log(`
        Player 1 has: ${playerSelection} 
        Computer has: ${computerSelection}`)
        console.log(`${paper} beats ${rock}. ${computerWins}`)
        computerScore++
        document.getElementById("computerScore").innerHTML = computerScore
        return computerWins
    } else if (playerSelection === rock && computerSelection === scissors){
        console.log(`
        Player 1 has: ${playerSelection} 
        Computer has: ${computerSelection}`)
        console.log(`${rock} beats ${scissors}! ${playerWins}`)
        playerScore++
        document.getElementById("playerScore").innerHTML = playerScore;
        return playerWins
    } else if (playerSelection === paper && computerSelection === rock){
        console.log(`
        Player 1 has: ${playerSelection} 
        Computer has: ${computerSelection}`)
        console.log(`${paper} beats ${rock}. ${playerWins}`)
        playerScore++
        document.getElementById("playerScore").innerHTML = playerScore;
        return playerWins
    } else if (playerSelection === paper && computerSelection === scissors){
        console.log(`
        Player 1 has: ${playerSelection} 
        Computer has: ${computerSelection}`)
        console.log(`${scissors} beats ${paper}! ${computerWins}`)
        computerScore++
        document.getElementById("computerScore").innerHTML = computerScore
        return computerWins
    } else if (playerSelection === scissors && computerSelection === rock){
        console.log(`
        Player 1 has: ${playerSelection} 
        Computer has: ${computerSelection}`)
        console.log(`${rock} beats ${scissors}! ${computerWins}`)
        computerScore++
        document.getElementById("computerScore").innerHTML = computerScore
        return computerWins
    } else if (playerSelection === scissors && computerSelection === paper){
        console.log(`
        Player 1 has: ${playerSelection} 
        Computer has: ${computerSelection}`)
        console.log(`${scissors} beats ${paper}! ${playerWins}`)
        playerScore++
        document.getElementById("playerScore").innerHTML = playerScore;
        return playerWins
    } 
}




const game = () =>  playRound(playerChoice, getComputerChoice())

// create score board
// create div showing what each player picked and the outcome
// create rock papers scissors shoot animation (1 - 1.5 seconds) upon button click



