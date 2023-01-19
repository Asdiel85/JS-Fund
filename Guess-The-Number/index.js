const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let computerGuess = Math.floor(Math.random() * 100);
let recursiveAsyncReadline = function () {
  readline.question("Guess the number (0-100): ", (number) => {
    let playerNumber = Number(number)
  
   if(playerNumber > 100 || playerNumber < 0) {
    console.log("Please enter a valid number");
   } else if (playerNumber > computerGuess) {
    console.log("Number too big")
   } else if (playerNumber < computerGuess) {
    console.log("Number too small");
   } else if(playerNumber === computerGuess) {
    console.log("Nice you guessed it");
    readline.close();
   }
    
  });
}
recursiveAsyncReadline();