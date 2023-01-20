const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let computerGuess = Math.floor(Math.random() * 100);
console.log(computerGuess);
function wrongNumber(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    readline.setPrompt("Too Big");
      readline.prompt();
  } else if (firstNumber < secondNumber) {
    readline.setPrompt("Too Small");
      readline.prompt();
  }
}
let recursiveAsyncReadline = function () {
  readline.question("Guess the number (0-100): \n", (number) => {
    let playerNumber = Number(number);

    if (playerNumber > 100 || playerNumber < 0) {
      readline.setPrompt("Please enter a valid number \n");
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
        } 
        else {
          readline.setPrompt(wrongNumber(playerNumber, computerGuess));
          readline.prompt();
        }
      });
    }
  });
};
recursiveAsyncReadline()
