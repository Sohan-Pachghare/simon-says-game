# simon-says-game
 A Simon-like memory game. 
 
 Game Mechanics:

Players repeat a sequence of button presses that the game generates.
The sequence length increases with each correct round.
Visuals and Interaction:

Buttons flash when pressed (both by the game and the user).
Game progress is displayed on screen, and it tracks the user's score and high score.
Key Functionalities:

gameFlash() and userFlash() handle visual feedback.
levelup() generates the next sequence.
checkAns() verifies user input and updates the game state.
The game resets after an incorrect input.

Controls:
        The game starts on a key press and buttons are clicked to play.
