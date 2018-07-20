/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

var dice =  Math.floor(Math.random() * 6) + 1;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.dice').style.display = 'none'; // this method changes the css selector//



document.querySelector('.btn-roll').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6 ) + 1;

   
    //2 - Displays the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //3 - Update the round score IF the rolled not was 1
    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
        //change the player if the dice is 1
       nextPlayer();

    }
}); //this method reads a class and adds a eventlistener click and then calls a function//

    document.querySelector('.btn-hold').addEventListener('click', function() { //listener to btn-hold button with a anonymous function
        scores[activePlayer] += roundScore; // the score of the active player gets the roudscore var plus the previous score.
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; //gets the id selector and then sets up the score + activePlayer and changes the text content 
        if (score[activePlayer] >= 100) { //if statement to compare which one is the winner
            document.querySelector('#name-' + activePlayer).textContent = "Vencedor!"; //gets the query id and then sets up the name- plus activeplayer. and of course changes the textcontent on the page
        }
        nextPlayer();
    });

    function nextPlayer() { // this function is used to changes the players during the game ;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // if statement that I did and don't uderstood though LOL;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0'; // this two lines sets the score to zero on the UI
        document.getElementById('current-1').textContent = '0'; // either
        
        document.querySelector('.player-0-panel').classList.toggle('active'); // it's like a if/else statemet. it's apply on something if that something doesn't has something and vice-versa LOL for exemple a class
        document.querySelector('.player-1-panel').classList.toggle('active'); //either

        document.querySelector('dice').style.display = 'none'; // it's hides the dice when it's not used;
    }

