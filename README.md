# TicTacToe
## Purpose of the project
The purpose of this project is to showcase the functionality of JavaScript in a website, this is done by creating a small scale TicTacToe game for users’ to play against each other. The game is able to track the players' placements on the board to identify the winner between X and O as well as is able to keep score for the players and declare which player has won or if it is a tie. 

As TicTacToe is a simple and easy game, the purpose of it needs to be that it is simple in use and navigation for users to play the game.

## Features
The game has 4 sections:
- Section with Game rules
- Section with the Game board
- Section with Scores
- Section with a Thank you 

The theme of the site is blue, yellow and white/black, this theme is based on the background of the whole site
<img src="./assets/images/background.webp" alt="Background" width="75%" height="25%"/>

Each section contains the games title 'TicTacToe' which is a yellow 'Sriracha' font. The whole body is set to that font.
![Title](./assets/doc/title.PNG "Title")

### 1. Game rules 
- The features in this section include a how to play the game information as well as at the bottom of the sentence there's a 'Play!' button that is coded to hide the rules and show the game board section.
![Game Rules](./assets/doc/gamerules.PNG "Game Rules")

### 2.Game board
- The game has a simple 3x3 board with a little tint in each cell so that the board stand out more from the background
![Game Board](./assets/doc/board.PNG "Game Board")
- Game baord has a hover css style applies to it so that when a user hovers over it, the tint changes to a slightly more blue colour highlighting the selected cell as well as the cursor changes to a pointer cursor.
![Blue hover tint](./assets/doc/bluetint.png "Blue hover tint")

- Once the game board cells get clicked the marks will appear depending on who's turn it is. When user clicks there is a pop sound to indicate that a click has happened.
![X/O Placing](./assets/doc/xo.PNG "X/O placing")

<audio controls><source src="./assets/audio/clickaudio.mp3" type="audio/ogg"></audio>

- The game board also has two marks on the sides of the board which indicate who's turn it is. They indicate this by swapping color to white depending on whos turn it is.
![Turn indicators](./assets/doc/turntaking.PNG "Turn indicators")

- Once the winner of a round is declared by the board the marks turn blue depending on which mark has won. 
![Winner indicator](./assets/doc/winner.png "Winner indicator")

- Once a win or a tie has been settled, the game baord section will hide after a little delay to reveal the scoreboard and announce the winner.

### 3. Scoreboard
- The scoreboard consists of Player X and Player O score which goes up depending on how many round each won. with the win there's also an announcement that shows who won or if its a tie. 
![ScoreboardX](./assets/doc/scoreboard.PNG "ScoreboardX")
![ScoreboardO](./assets/doc/scoreboardo.PNG "ScoreboardO")
![Tie](./assets/doc/tie.PNG "Tie")

- In between the scores there's a blue firework gif as a little celebration gif of the games end. 
- At the bottom the the scoreboard theres two buttons one to reset the game and start a new round and one to quit the game which will take you to a thank you section.
![Thank You](./assets/doc/thankyou.PNG "Thank You")

## User Stories
1. Game rules
- As a user I want to know how to play the game with my friend.
- As a user I want to know what to expect from the game and the output I will get.

2. The game
- As a user I want to clearly see the board at all time.
- AS a user I want to be able to choose my next move
- As a user I want to clearly see who's turn it is.
- As a user I want to clearly see who's won and how. 

3. Score
- As a user I want to be able to see the score after each round that been played
- As a user I want to have the choice between playing again or qutting.
