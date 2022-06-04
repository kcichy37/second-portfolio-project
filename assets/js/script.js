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

startGame()