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
let turn = currentPlayer;

let winnercolor = getComputedStyle(document.body).getPropertyValue('--winningcolor')
let resetcolor = getComputedStyle(document.body).getPropertyValue('--resetcolor')

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
            cells.forEach(cell => cell.removeEventListener('click', cellClicked))

            winning.map(cell => cells[cell].style.color=winnercolor)

            setTimeout(() => {document.getElementById('game--board').style.display = 'none';
            document.getElementById('game--score').style.display = "block"; }, 2500);

            document.getElementById('whowon').innerText = `Player ${currentPlayer} Has Won!`

            if(currentPlayer == X){
                xMarkScore()
            }else{
                oMarkScore()
            }
        } 
          
        let left = document.getElementById('left');
        let right = document.getElementById('right');
        currentPlayer = currentPlayer == X ? O : X;
        
        if(currentPlayer == O){
            right.style.color = '#ffffff'
            left.style.color = '#fcd03e'
        } else if (currentPlayer == X){
            left.style.color = '#ffffff'
            right.style.color = '#fcd03e'
        }
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
    }  
    return false;
}

function xMarkScore(){
    let xscore = parseInt(document.getElementById("x--score").innerText);
    document.getElementById("x--score").innerText = ++xscore;
}

function oMarkScore(){
    let oscore =parseInt(document.getElementById("o--score").innerText);
    document.getElementById("o--score").innerText = ++oscore;
}

function gameRestart(){
    const gameBoardSection = document.getElementById('game--board');
    const gameScore = document.getElementById('game--score'); 
    clearBoard()

    function clearBoard(e) {
        document.getElementById("0").innerHTML = ''
        document.getElementById("1").innerHTML = ''
        document.getElementById("2").innerHTML = ''
        document.getElementById("3").innerHTML = ''
        document.getElementById("4").innerHTML = ''
        document.getElementById("5").innerHTML = ''
        document.getElementById("6").innerHTML = ''
        document.getElementById("7").innerHTML = ''
        document.getElementById("8").innerHTML = ''

        document.getElementById("0").style.color = '#fcd03e'
        document.getElementById("1").style.color = '#fcd03e'
        document.getElementById("2").style.color = '#fcd03e'
        document.getElementById("3").style.color = '#fcd03e'
        document.getElementById("4").style.color = '#fcd03e'
        document.getElementById("5").style.color = '#fcd03e'
        document.getElementById("6").style.color = '#fcd03e'
        document.getElementById("7").style.color = '#fcd03e'
        document.getElementById("8").style.color = '#fcd03e'
    }

        cellsIndex = Array(9).fill(null);
        cells.forEach(cell => cell.addEventListener('click', cellClicked, {once: true}));

    if( gameBoardSection.style.display === 'none'){
        gameBoardSection.style.display = 'block';
        gameScore.style.display = 'none';
    }

}

startGame();






