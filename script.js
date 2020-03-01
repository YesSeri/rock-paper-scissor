let turns = 0
let playerScore=0
let computerScore=0
let result = ''
const buttons = document.querySelectorAll('button')
const roundResult = document.querySelectorAll('.roundResult')

buttonListen()

function computerPlay (){
    let number=Math.floor(Math.random()*3)
    let choice = number === 0 ? "rock" : number === 1 ? "paper" : "scissor"
    return  choice
}

function playRound(computerSelection, playerSelection){
    if(playerSelection === computerSelection){
        return `It's a tie. ${(playerSelection)} vs ${computerSelection}.`
    } else{
        if(playerSelection==="rock"){
            if (computerSelection==="scissor"){
                return "You win. Rock beats scissor."

            }else{
                return "You lose. Rock loses to paper."
            }
        }else if(playerSelection==="scissor"){

            if (computerSelection==="paper"){
                return "You win. Scissor beats paper."
            }else{
                return "You lose. Scissor loses to rock."
            }
        }else{
            if (computerSelection==="rock"){
                return "You win. Paper beats rock."
            }else{
                return "You lose. Paper loses to scissor."
            }
        }
    }
}

function increaseScore(result){
    if (result.indexOf('win')!=-1){
        playerScore++
        return
    }else if (result.indexOf('lose')!=-1){
        computerScore++
    }
}

function outputScore(){
    document.getElementById("roundResult").innerHTML = `Turn: ${turns} - ${result}<br> Computer: ${computerScore}
    Player: ${playerScore}`
}

function game(playerSelection){
    turns++
    const computerSelection = computerPlay()
    result = playRound(computerSelection, playerSelection)
    increaseScore(result)
    outputScore()
    if (playerScore === 5 || computerScore===5 ){
        outputScore()
        reset()
    }
}

function buttonListen(){
    const buttons = document.querySelectorAll('button')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            game(button.id)
    })

})
}
function reset(){
    document.getElementById("roundResult").innerHTML = `FINISHED: ${result}<br>Turn: ${turns}<br>
    Computer: ${computerScore}
    Player: ${playerScore} <br>
    Start new game.`
    playerScore = 0
    computerScore = 0
    turns = 0   
}