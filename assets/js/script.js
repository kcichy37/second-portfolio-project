/**Changes Game rules section display to 'none'
 * activated by 'Play!' button
 * result is Game board section display changed to 'block' */
function gameChange() {
    const rulesChange = document.getElementById('game--rules');
    //Hides Game rules
    if (rulesChange.style.display === 'none') {
        rulesChange.style.display = 'block';
    } else {
        rulesChange.style.display = 'none';
    };
    //Shows game board after game rules is hidden
    const gameBoardSection = document.getElementById('game--board');
    if (rulesChange.style.display === 'none') {
        gameBoardSection.style.display = 'block';
    }
}


/* Game board functionality */
let cells = Array.from(document.getElementsByClassName('cell'));
const O = 'O';
const X = 'X';
let currentPlayer = X;
let cellsIndex = Array(9).fill(null);
let movesLeft = 9

//Start of game functions
const startGame = () => {
    cells.forEach(cell => cell.addEventListener('click', cellClicked, {
        once: true
    }));
}

//function to allow users to put their marks down
function cellClicked(e) {
    const id = e.target.id

    //targets ID's of the cells to then place the current players mark
    if (!cellsIndex[id]) {
        cellsIndex[id] = currentPlayer
        e.target.innerText = currentPlayer;
        movesLeft--

        //function to declare a winner
        if (playerWon() !== false) {

            //Disabled users to place marks after winner is declared
            cells.forEach(cell => cell.removeEventListener('click', cellClicked))

            //changes winners marks colour to blue to show where the win occured
            let winnercolor = getComputedStyle(document.body).getPropertyValue('--winningcolor')
            let winning = playerWon();
            winning.map(cell => cells[cell].style.color = winnercolor)

            /**Once user is declared a winner
             * this will change the game board display to 'none'
             * and switch to game score by changing game score
             * display to 'block'.
             * 
             * Delay is set in place before the change in section
             * for user to be able to easily identify where the win occured
             */
            setTimeout(() => {
                document.getElementById('game--board').style.display = 'none';
                document.getElementById('game--score').style.display = "block";
            }, 2500);

            //Changes sentence to show who won between X or O
            document.getElementById('whowon').innerText = `Player ${currentPlayer} Has Won!`

            //Adds score to the winner 
            if (currentPlayer == X) {
                xMarkScore()
            } else {
                oMarkScore()
            }

            /**Declares a Tie 
             * Tie is only shown once all 9 cells are taken
             * such is counted by users moves 'movesLeft'
             * once it hits 0 it's a tie
             */
        } else if (movesLeft == 0) {
            setTimeout(() => {
                document.getElementById('game--board').style.display = 'none';
                document.getElementById('game--score').style.display = "block";
            }, 1000);
            document.getElementById('whowon').innerText = `It's A Tie`
        }

        //Switches turns between users. 
        currentPlayer = currentPlayer == X ? O : X;

        //Displays which users turn it is by changing X or O colour
        let left = document.getElementById('left');
        let right = document.getElementById('right');

        if (currentPlayer == O) {
            right.style.color = '#ffffff'
            left.style.color = '#fcd03e'
        } else if (currentPlayer == X) {
            left.style.color = '#ffffff'
            right.style.color = '#fcd03e'
        }
    }

    //Audio for when cells are clicked 
    const pop = document.getElementById("audio");
    pop.play();

}

//Winning combinations
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

//Function to determine which combination marks need to be in to be a winner
function playerWon() {
    for (const condition of winningConditions) {
        let [a, b, c] = condition;

        //Checks for marks position, if 3 same marks next to each other its a win
        if (cellsIndex[a] && (cellsIndex[a] == cellsIndex[b] && cellsIndex[a] == cellsIndex[c])) {
            return [a, b, c];
        }
    }
    return false;
}

//Increments X score if win
function xMarkScore() {
    let xscore = parseInt(document.getElementById("x--score").innerText);
    document.getElementById("x--score").innerText = ++xscore;
}

//Increments O score if win
function oMarkScore() {
    let oscore = parseInt(document.getElementById("o--score").innerText);
    document.getElementById("o--score").innerText = ++oscore;
}

//Game restart 
function gameRestart() {
    const gameBoardSection = document.getElementById('game--board');
    const gameScore = document.getElementById('game--score');
    movesLeft = 9;
    clearBoard()

    function clearBoard() {
        //Resets cells innerHTML to nothing
        document.getElementById("0").innerHTML = ''
        document.getElementById("1").innerHTML = ''
        document.getElementById("2").innerHTML = ''
        document.getElementById("3").innerHTML = ''
        document.getElementById("4").innerHTML = ''
        document.getElementById("5").innerHTML = ''
        document.getElementById("6").innerHTML = ''
        document.getElementById("7").innerHTML = ''
        document.getElementById("8").innerHTML = ''

        //Resets cells color after winners changed color 
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

    //Changes cells data to null again and allows users to input new X or O
    cellsIndex = Array(9).fill(null);
    cells.forEach(cell => cell.addEventListener('click', cellClicked, {
        once: true
    }));

    //Changes from score section to game board again
    if (gameBoardSection.style.display === 'none') {
        gameBoardSection.style.display = 'block';
        gameScore.style.display = 'none';
    }
}

//Function to quit game and takes to Thank you section
function quitButton() {
    const thankYou = document.getElementById('thankyou');
    const gameScore = document.getElementById('game--score');

    if (gameScore.style.display === 'block') {
        gameScore.style.display = 'none';
        thankYou.style.display = 'block';
    }
}

startGame();