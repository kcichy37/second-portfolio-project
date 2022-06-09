# TicTacToe
## Purpose of the project
The purpose of this project is to showcase the functionality of JavaScript in a website, this is done by creating a small-scale TicTacToe game for users to play against each other. The game is able to track the players' placements on the board to identify the winner between X and O as well as is able to keep score for the players and declare which player has won or if it is a tie. 

As TicTacToe is a simple and easy game, the purpose of it needs to be that it is simple in use and navigation for users to play the game.

## User Stories
1. Game rules
- As a user, I want to know how to play the game with my friend.
- As a user, I want to know what to expect from the game and the output I will get.

2. The game
- As a user, I want to clearly see the board at all times.
- As a user, I want to be able to choose my next move
- As a user, I want to clearly see who's turn it is.
- As a user, I want to clearly see who's won and how. 

3. Score
- As a user, I want to be able to see the score after each round that has been played
- As a user, I want to have the choice between playing again or quitting.

## Features
The game has 4 sections:
- Section with Game rules
- Section with the Game board
- Section with Scores
- Section with a Thank you 

The theme of the site is blue, yellow and white/black, this theme is based on the background of the whole site
<img src="./assets/images/background.webp" alt="Background" width="75%" height="25%"/>

Each section contains the game's title 'TicTacToe' which is in a yellow 'Sriracha' font. The whole body is set to that font.

![Title](./doc/title.PNG "Title")

### 1. Game rules 
- The features in this section include a how to play the game information as well as at the bottom of the sentence there's a 'Play!' button that is coded to hide the rules and show the game board section.
![Game Rules](./doc/gamerules.PNG "Game Rules")

### 2. Game board
- The game has a simple 3x3 board with a little tint in each cell so that the board stands out more from the background

![Game Board](./doc/board.PNG "Game Board")
- Game board has a hover CSS style applied to it so that when a user hovers over it, the tint changes to a slightly more blue color highlighting the selected cell as well as the cursor changes to a pointer cursor.
![Blue hover tint](./doc/bluetint.png "Blue hover tint")

- Once the game board cells get clicked the marks will appear depending on who's turn it is. When the user clicks there is a pop sound to indicate that a click has happened.
![X/O Placing](./doc/xo.PNG "X/O placing")

<audio controls><source src="./assets/audio/clickaudio.mp3" type="audio/ogg"></audio>

- The game board also has two marks on the sides of the board which indicate who's turn it is. They indicate this by swapping color to white depending on whose turn it is.
![Turn indicators](./doc/turntaking.PNG "Turn indicators")

- Once the winner of a round is declared by the board the marks turn blue depending on which mark has won. 
![Winner indicator](./doc/winner.png "Winner indicator")

- Once a win or a tie has been settled, the game board section will hide after a little delay to reveal the scoreboard and announce the winner.

### 3. Scoreboard
- The scoreboard consists of Player X and Player O score which goes up depending on how many round each won. with the win there's also an announcement that shows who won or if its a tie. 
![ScoreboardX](./doc/scoreboard.PNG "ScoreboardX")
![ScoreboardO](./doc/scoreboardo.PNG "ScoreboardO")
![Tie](./doc/tie.PNG "Tie")

- At the bottom the scoreboard there's two buttons one to reset the game and start a new round and one to quit the game which will take you to a thank you section.

![Thank You](./doc/thankyou.PNG "Thank You")

## Future Feature
- The future features I would like to add to the game are: 
    - Games against a computer with two difficulty levels, easy and hard. Easy will be the computer placing X/O randomly on the grid, and hard will be an actual 
    AI trying to win against you. 
    - Multiplayer games against other people, could be played across all platforms with internet access.

### Wireframes/Planning
### Initial idea
- My [Initial Idea](./doc/initialidea.PNG) was to have everything on one page, and also include a computer player, however, after a discussion with my mentor we decided it was the best idea to have different sections rather than everything crumped on one page and not to involve a computer, but rather focus on getting familiar with JavaScript by having different sections and focusing on player v player.
   
### Code Validation 
- The HTML code has been validated in the W3C Markup Validation Service and the HTML file haw came back with no errors.
- CSS Code has been validated in the W3C CSS Validation Service and all CSS code has come back with no errors (CSS level 3 + SVG)
- I have also used the lighthouse app on the page I have created to test for accessibility:
![Lighthouse Result](./doc/section1.PNG "Lighthouse result")
- JSHint at first got 9 warnings due to 'jshint eversion 6', but after putting a comment on top of the JavaScript file '/*jshint esversion: 6 */' there are no faults. 

### Page testing
- Game rules 
    - The testing I have done on the game rules section is mainly for the button and the function to change its display to none and show another section. The button has a hover CSS added to it and a pointer cursor. I have tested for that by hovering over and the result was a darker shade of blue to highlight the mouse being over the button. 

    ![Play button](./doc/playbutton.png "Play button")
    ![Highlighted play button](./doc/playbutton2.png "Highlighted play button")

    - Tested the display functionality by simply pressing the 'Play!' button and the response was as expected.

- Gameboard
    - The gameboard had the most testing done to it.  First tests were performed on the grid.
        - The grid has a hover class applied to it as shown in the features, when a user hovers over it changes the cell's color to slightly darker blue, which is an indicator for users to know thats the cell thats being selected by them.
        - After ensuring the grid is responsive to the hover, I started to write the code that with a click of a mouse will put either an X mark or O mark depending on the user's turn. I tested this by clicking every cell on the board to make sure every cell responds to the data input from JavaScript. 
        - Following the placement of X/O marks there's a pop audio to indicate a mark has been put down. When testing to see if each cell responds to clicks and place marks the audio was tested as well as they are coded to perform their functions at the same time.

    - Checking for wins and indications who won
        - The board has 8 combinations where a win can occur, I had to test that every combination responds to having either a 3* X or O mark in a row and will result in a win by playing a few rounds and making sure that I had 3*X in 8 combinations and the same for the O mark. All have come back successfully and declared a win when in those combinations
        - To show the winning combinations and winning marks, the marks will return blue. This was just like testing for winning combinations to ensure the wins turn blue in every cell.
        - The game also has a draw function, the draw function responds only when the grid is full, this was tested by filling out the grid and the expected result was a draw section which was a success.

     - The last function on the game board is who's turn it is
        - The two mark's on the board side indicate whose turn it is by turning white depending on whether it is X's turn or O's, this was tested by switching between turns, and as expected the two marks were switching colors.
    
- Scoreboard
    - To get to the scoreboard section, the game has to result in a win or tie.
    - The main functions of the scoreboard is the scorekeeping and the who won or if tied announcements
        - The scores increments each time X/O wins, this was tested by playing a few rounds and seeing if after each win it is adding the scores correctly. Which as expected it was.
        ![Scores](./doc/scores.PNG "Scores")
        - The who won or if tied was tested in the same way as the scorekeeping, by playing a few rounds to see results, and as expected all returned successfully.
        ![Player X won](./doc/playerx.PNG "Player X won")
        ![Player O won](./doc/playero.PNG "Player O won")
        ![Tie](./doc/tie.PNG "Tie")

    -  The scoreboard also consists of two buttons, the Restart button, and the Quit button.
        - The restart button takes you back to the gameboard upon clicking it and also restarts the game so another round can be played. 
        - Quit button takes you to the Thank you page after clicking it.
        - Both buttons have been tested by seeing the response after clicking, and also both have hover CSS applied like the 'Play!' button.

## Fixed bugs
- Audio 
    - The audio had a little silent moment after the pop noise, therefore if another cell was clicked another pop noise would play. This was fixed by trimming the audio.
- Winner color not resetting
    - After a winner was declared and it change the mark's color to blue, resetting the board didn't change the color back to yellow, therefore, I wrote a code that individually changes each cell back to yellow.

## Unfixed bugs
- The audio problem still proceeds if clicked too quickly.

## Supported screens and Browsers
- I confirmed the website is responsive by using the dev toolkit on Mozilla firefox, as well as, opening the website on iPhones 12/13 Pro Max and Samsung Galaxy S10 +. Looks good and works properly on most standard screen sizes.
-Tested the site on Mozilla Firefox, Chrome, and Safari (iOS). No problems relating to design or the site itself on any of these sites.
![Responsiveness](./doc/responsive.png "Responsiveness")

## Deployment 
### Github
- Site was deployed to GitHub pages. The steps for deployment are as follows:
    - In the GitHub repository, navigate to the Setting Tab, then to the 'Pages' tab on the left
    - In the 'pages' tab find Source, press the dropdown menu and select 'Main' and save
    - Once saved, the page will provide a link to the completed website.

### Gitpod
- Site is deployed on Github by:
    1. Download the Github extension for your browser so the code opens in the browser.
    2. Going to the site's dedicated repository.
    3. above the commits, there's a green button with 'Gitpod'
    4. By clicking that, Gitpod will open its code creator site
    5. On Github we go to the terminal and type in 'python3 -m http.server' 
    6. A pop-up will open, press preview and the website will deploy.

## Credits
- [w3schools](https://www.w3schools.com/) was used for extra help with code.
- [Siphiwo Julayi](https://www.youtube.com/c/SiphiwoJulayi) videos helped with building the game board. 
- [Adam Nagy](https://dev.to/javascriptacademy/create-a-simple-tic-tac-toe-game-using-html-css-javascript-i4k) Read the blog for general knowledge on how one would build a TicTacToe game
- [Web Dev Simplified](https://www.youtube.com/c/WebDevSimplified) video helped with building the game board.

## Media
- Images used were used from Google images for educational purposes only, the media used was the background and the firework gif
- Audio for click was bought from https://www.epidemicsound.com/music/featured/
