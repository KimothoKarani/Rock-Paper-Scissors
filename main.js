const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
const div = document.createElement('div');


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click' , (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    e.target.style.backgroundColor = 'red'
    e.target.style.color = 'white'
    e.target.style.border = 'none'
    e.target.style.fontSize = '1.5rem'
    e.target.style.fontWeight = 'bold'

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
    
    if (randomNumber == 1) {
        computerChoice = 'rock'
    }

    if (randomNumber == 2) {
        computerChoice = 'paper'
    }
    if (randomNumber == 3) {
         computerChoice = 'scissors'
     }

     computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        result = "You draw"
    }

    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = "You win"
    }

    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = "You lose"
    }

    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = "You win"
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = "You lose"

    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = "You lose"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = "You win"
    }

    resultDisplay.innerHTML = result
    
}
