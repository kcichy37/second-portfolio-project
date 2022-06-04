/** This function allows there to be different sections at different times.
 * First section is the "Game Rules", we can proceed futher by clicking the play button
 * this will hide the rules and show the "Game Board" section.
 * Next section which is the "Game Score" will show only once the game is completed,
 * and will be triggered by a Win, Loss, or Tie.
 */

/* Game rules to Game board*/
function gameChange(){
    const rulesChange = document.getElementById('game--rules');
        if (rulesChange.style.display === 'none') {
            rulesChange.style.display = 'block';
        } else {
            rulesChange.style.display = 'none';
        };

    const gameBoardSection = document.getElementById('game--board');
        if(rulesChange.style.display === 'none'){ 
            gameBoardSection.style.display = 'block';
        }
}


/* Game board functionality */
let cells = Array.from(document.getElementsByClassName('cell'));
const O = 'O';
const X = 'X';
let currentPlayer = X

const startGame = () => {
    cells.forEach(cell => cell.addEventListener('click', cellClicked, { once: true}));
}

function cellClicked(e){
    e.target.innerText = currentPlayer;

    currentPlayer = currentPlayer == X ? O : X; 
}

const pop = document.getElementById("audio"); 

function playAudio() { 
  pop.play(); 
} 



