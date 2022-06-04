function gameChange(){
    let rulesChange = document.getElementById('game--rules');
        if (rulesChange.style.display === 'none') {
            rulesChange.style.display = 'block';
        } else {
            rulesChange.style.display = 'none';
        };

    let gameBoard = document.getElementById('game--board');
        if(rulesChange.style.display === 'none'){ 
            gameBoard.style.display = 'block';
            console.log('yes');
        }
}
