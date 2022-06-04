function gameChange(){
    const rulesChange = document.getElementById('game--rules');
        if (rulesChange.style.display === 'none') {
            rulesChange.style.display = 'block';
        } else {
            rulesChange.style.display = 'none';
        };

    const gameBoard = document.getElementById('game--board');
        if(rulesChange.style.display === 'none'){ 
            gameBoard.style.display = 'block';
        }
}
