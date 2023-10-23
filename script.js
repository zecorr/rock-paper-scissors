// Global Variables
const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"
const choices = [rock, paper, scissors]
const playerWins = "Player 1 wins!"
const computerWins = "Computer Wins!"
const draw = "Draw!"
let getPlayerChoice
const rockClick = () => (getPlayerChoice = rock, game())
const paperClick = () => (getPlayerChoice = paper, game())
const scissorsClick = () => (getPlayerChoice = scissors, game())

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
        return computerWins
    } else if (playerSelection === rock && computerSelection === scissors){
        console.log(`
        Player 1 has: ${playerSelection} 
        Computer has: ${computerSelection}`)
        console.log(`${rock} beats ${scissors}! ${playerWins}`)
        return playerWins
    } else if (playerSelection === paper && computerSelection === rock){
        console.log(`
        Player 1 has: ${playerSelection} 
        Computer has: ${computerSelection}`)
        console.log(`${paper} beats ${rock}. ${playerWins}`)
        return playerWins
    } else if (playerSelection === paper && computerSelection === scissors){
        console.log(`
        Player 1 has: ${playerSelection} 
        Computer has: ${computerSelection}`)
        console.log(`${scissors} beats ${paper}! ${computerWins}`)
        return computerWins
    } else if (playerSelection === scissors && computerSelection === rock){
        console.log(`
        Player 1 has: ${playerSelection} 
        Computer has: ${computerSelection}`)
        console.log(`${rock} beats ${scissors}! ${computerWins}`)
        return computerWins
    } else if (playerSelection === scissors && computerSelection === paper){
        console.log(`
        Player 1 has: ${playerSelection} 
        Computer has: ${computerSelection}`)
        console.log(`${scissors} beats ${paper}! ${playerWins}`)
        return playerWins
    } 
}

let playerScore = 0
let computerScore = 0


const game = function(){

    playRound(getPlayerChoice, getComputerChoice())

}