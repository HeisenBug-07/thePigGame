var scores, roundScore, activePlayer, gamePlaying;

init();

// displaying score
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
        // displaying random dice on clicking ROLL DICE
        var dice = Math.floor(Math.random()*6) + 1;        
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dice + '.png'; 
        // updating the round score
        if (dice !==1 ){
            // adding round score
            roundScore +=dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else{
            nextPlayer();
        }
    }
});

// holding score
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        document.querySelector('.dice').style.display = 'none';
        // winning condition
        if (scores[activePlayer] >= 100){
            document.getElementById('name-' + activePlayer).textContent = 'WINNER';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        }
        else{
            nextPlayer();
        }
    }
});

// switching players function
function nextPlayer(){
        // switching players and reseting round score
        document.querySelector('#current-' + activePlayer).textContent = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer =  0;
        roundScore = 0;
        // toggling class after player switch
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}

// reset button
document.querySelector('.btn-new').addEventListener('click', init);


// new game
function init(){
    // initilizing everything
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // reseting players
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 1';
    // removing winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    // removing active class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    // reissuing active class to player 1
    document.querySelector('.player-0-panel').classList.add('active');

}