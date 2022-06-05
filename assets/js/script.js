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
let currentPlayer = X;
let cellsIndex = Array(9).fill(null);

const startGame = () => {
    cells.forEach(cell => cell.addEventListener('click', cellClicked, { once: true}));
}

function cellClicked(e){
    const id = e.target.id

    if(!cellsIndex[id]){
        cellsIndex[id] = currentPlayer
        e.target.innerText = currentPlayer;

        if(playerWon() !==false){
            let winning = playerWon();
            console.log(winning);
            cells.forEach(cell => cell.removeEventListener('click', cellClicked))
        } 
        currentPlayer = currentPlayer == X ? O : X;
    }
    
    const pop = document.getElementById("audio"); 
    pop.play(); 

}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]

function playerWon(){
    for(const condition of winningConditions){
        let [a, b, c] = condition;

        if(cellsIndex[a] && (cellsIndex[a] == cellsIndex[b] && cellsIndex[a] == cellsIndex[c])) {
        return [a, b, c];
        }
        break
    }   
    return false;
}

startGame();






