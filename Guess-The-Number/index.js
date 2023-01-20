const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let computerGuess = Math.floor(Math.random() * 100);
console.log(computerGuess);
function wrongNumber(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    console.log("Number too big, try again");
  } else if (firstNumber < secondNumber) {
    console.log("Number too small, try again");
  }
}
let recursiveAsyncReadline = function () {
  readline.question("Guess the number (0-100): \n", (number) => {
    let playerNumber = Number(number);

    if (playerNumber > 100 || playerNumber < 0) {
      readline.setPrompt("Please enter a valid number");
      readline.prompt();
    } else if (playerNumber == computerGuess) {
      console.log("Nice!!!");
      readline.close();
    } else {
      readline.setPrompt(wrongNumber(playerNumber, computerGuess));
      readline.prompt();
      readline.on("line", (playerNumber) => {
        if (playerNumber == computerGuess) {
          console.log("Nice!!!");
          readline.close();
        } else {
          readline.setPrompt(wrongNumber(playerNumber, computerGuess));
          readline.prompt();
        }
      });
    }
  });
};
recursiveAsyncReadline();
