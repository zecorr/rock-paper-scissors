
// Randomly return either Rock, Paper, or Scissors for computer player.
const getComputerChoice = function (){
    const choices = ["Rock!", "Paper!", "Scissors!"]
    const randomChoice = Math.floor(Math.random() * 3)
    console.log(choices[randomChoice])

}

getComputerChoice()

