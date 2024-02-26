function getComputerChoice(){
    var arr = ['rock', 'paper', 'scissors'];
    rndnum = Math.floor(Math.random()*3);
    return arr[rndnum]
}


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

function playGame(){
    var computer = 0
    var player = 0
    var rounds = 0

    buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', ()=>{
            var computerChoice = getComputerChoice();
            var playerChoice = button.id;
            var roundResult = playRound(playerChoice, computerChoice);

            if(rounds < 3){
                if(roundResult == 1){
                    rounds--;
                    console.log(rounds);
    
                }else if(roundResult == 2){
                    player++;
                    rounds++;
                    console.log(rounds);
                }else{
                    computer++;
                    rounds++;
                    console.log(rounds);
                }

            }else{
                if(player > computer){
                    alert('player wins');

                }else{
                    alert('computer wins');
                }
            }
            
        })
    })

}


playGame();