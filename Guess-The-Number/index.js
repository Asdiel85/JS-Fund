const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let computerGuess = Math.floor(Math.random() * 100);
console.log(computerGuess);
function wrongNumber(firstNumber, secondNumber) {
  if (firstNumber > 100 || firstNumber < 0) {
    readline.setPrompt("Please enter a valid number \n");
    readline.prompt();
  } else if (isNaN(firstNumber)) {
    readline.setPrompt("Please enter a valid number \n");
    readline.prompt();
  }
   else {
    if (firstNumber > secondNumber) {
      readline.setPrompt("Too Big \n");
      readline.prompt();
    } else if (firstNumber < secondNumber) {
      readline.setPrompt("Too Small \n");
      readline.prompt();
    }
  }
}
let recursiveAsyncReadline = function () {
  readline.question("Guess the number (0-100): \n", (number) => {
    let playerNumber = Number(number);

    if (playerNumber == computerGuess) {
      console.log("Nice!!!");
      readline.close();
    } else {
      wrongNumber(playerNumber, computerGuess);
      readline.on("line", (playerNumber) => {
        if (playerNumber == computerGuess) {
          console.log("Congatulations you have guessed the number!!!");
          readline.close();
        } else {
          wrongNumber(playerNumber, computerGuess);
        }
      });
    }
  });
};
recursiveAsyncReadline();
