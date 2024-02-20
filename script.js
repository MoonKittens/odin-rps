function getComputerChoice(){
    var arr = ['rock', 'paper', 'scissors'];
    rndnum = Math.floor(Math.random()*3);
    return arr[rndnum]
}

// function getPlayerChoice(){
//     buttons = document.querySelectorAll('button')

//     buttons.forEach((button) => {
//         button.addEventListener('click', ()=>{
//             console.log(button.id)
//             return button.id
//         })
//     })
// }

function playRound(playerChoice, computerChoice){
    const container = document.querySelector(".container")
    const result = document.createElement('div');
    container.appendChild(result)

    if(computerChoice === playerChoice){
        result.textContent = "draw";
        return 1
    }else if(computerChoice == 'rock'){
        if(playerChoice == 'paper'){
            result.textContent = "player wins";
            return 2
        }else{
            result.textContent = "player loses";
            return 3
        }
    }else if(computerChoice == 'paper'){
        if(playerChoice == 'scissors'){
            result.textContent = "player wins";
            return 2
        }else{
            result.textContent = "player loses";
            return 3
        }
    }else{
        if(playerChoice == 'rock'){
            result.textContent = "player wins";
            return 2
        }else{
            result.textContent = "player loses";
            return 3
        }
    }

}

function playGame(playerChoice, computerChoice){
    var computer = 0
    var player = 0

    for(i=1; i<=5; i++){    
        if(player == 3){
            alert("player wins")
            break;
        }else if(computer == 3){
            alert("computer wins")
            break;
        }else{
            var round = playRound(playerChoice, computerChoice);
            if(round == 1){
                i--;
            }else if(round == 2){
                player++;
            }else{
                computer++;
            }
        }
        
    }
    if(computer > player){
        alert("computer wins")
    }else{
        alert("player wins")
    }

}


var computerChoice = getComputerChoice();
console.log(computerChoice);

buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        var playerChoice = button.id;
        playGame(playerChoice, computerChoice);
    })
})