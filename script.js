function getComputerChoice(){
    var arr = ['rock', 'paper', 'scissors'];
    rndnum = Math.floor(Math.random()*3);
    return arr[rndnum]
}

function getPlayerChoice(){
    var choice = prompt("choose rock, paper or scissors");
    var filteredChoice = choice.toLowerCase();
    return filteredChoice
}

function playRound(){
    var computerChoice = getComputerChoice();
    alert(computerChoice);
    var playerChoice = getPlayerChoice();

    // computerWins = False;
    // playerWins = False;

    if(computerChoice === playerChoice){
        alert("draw");
        return 1
    }else if(computerChoice == 'rock'){
        if(playerChoice == 'paper'){
            alert('player wins');
            return 2
            // playerWins = True;
        }else{
            alert('player loses');
            return 3
            // computerWins = True;
        }
    }else if(computerChoice == 'paper'){
        if(playerChoice == 'scissors'){
            alert('player wins');
            return 2
            // playerWins = True;
        }else{
            alert('player loses');
            return 3
            // computerWins = True;
        }
    }else{
        if(playerChoice == 'rock'){
            alert('player wins');
            return 2
            // playerWins = True;
        }else{
            alert('player loses');
            return 3
            // computerWins = True;
        }
    }
    // return computerWins, playerWins

}

function playGame(){
    var computer = 0
    var player = 0

    for(i=1; i<=5; i++){
        round = playRound()
        if(round == 1){
            i--;
        }else if(round == 2){
            player++;
        }else{
            computer++;
        }
    }
    if(computer > player){
        alert("computer wins")
    }else{
        alert("player wins")
    }

}

playGame();
