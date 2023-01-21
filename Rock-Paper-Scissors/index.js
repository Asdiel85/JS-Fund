const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let computerMove = Math.floor(Math.random() * 3) + 1;

switch (computerMove) {
  case 1:
    computerMove = rock;
    break;
  case 2:
    computerMove = paper;
    break;
  case 3:
    computerMove = scissors;
    break;
}

let readInput = function () {
  readline.question("Lets play, make your move: \n", (playerTurn) => {
    if (playerTurn === "r" || playerTurn == "rock") {
      playerTurn = rock;
    } else if (playerTurn == "p" || playerTurn == "paper") {
      playerTurn = paper;
    } else if (playerTurn == "s" || playerTurn == "scissors") {
      playerTurn = scissors;
    } else {
      //TODO Implement logic
    }
    console.log(`The computer chose ${computerMove}`);
    switch (playerTurn) {
      case rock:
        if (computerMove === scissors) {
          console.log("You won");
        } else if (computerMove === paper) {
          console.log("You lost");
        } else if (computerMove === rock) {
          console.log("Draw");
        }
        break;
      case paper:
        if (computerMove === scissors) {
          console.log("You lost");
        } else if (computerMove === paper) {
          console.log("Draw");
        } else if (computerMove === rock) {
          console.log("You won");
        }
        break;
      case scissors:
        if (computerMove === scissors) {
          console.log("Draw");
        } else if (computerMove === paper) {
          console.log("You won");
        } else if (computerMove === rock) {
          console.log("You lost");
        }
        break;
    }
  });
};

readInput();
