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
    }else if(computerChoice == 'rock'){
        if(playerChoice == 'paper'){
            alert('player wins');
            // playerWins = True;
        }else{
            alert('player loses');
            // computerWins = True;
        }
    }else if(computerChoice == 'paper'){
        if(playerChoice == 'scissors'){
            alert('player wins');
            // playerWins = True;
        }else{
            alert('player loses');
            // computerWins = True;
        }
    }else{
        if(playerChoice == 'rock'){
            alert('player wins');
            // playerWins = True;
        }else{
            alert('player loses');
            // computerWins = True;
        }
    }
    // return computerWins, playerWins

}

// function playGame(){
//     var computer = 0
//     var player = 0
//     for(i=1; i<=5; i++){
//         playRound()
//         if(computerWins == True){
//             computer++;
//             alert(computer)
//         }else if(playerWins == True){
//             player ++;
//         }else{
//             i--;
//         }
//     }

// }

playRound();
