//Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end, the number of tries needed should be printed.
//Inputting the same number multiple times should only count as one try. If the user provides an answer which isn't a number, print an error message and do not count this as a try.


let prompt = require("prompt-sync")();

let complete = () => {

  let randomNum = Math.floor(Math.random() * 10) + 1;

  let answer = 0;
  let triedNum = [];
  let guess = 0;
  //let res = "";

  while (answer !== randomNum) {
    
    answer = parseInt(prompt("Guess a number: "));

    if (isNaN(answer)) {
      console.log("Not a number");
    }

    if (triedNum.indexOf(answer) !== -1) {
      console.log("You already tried that number before");
    }

    if (triedNum.indexOf(answer) === -1 &&  answer > randomNum) {
      triedNum.push(answer);
      console.log("Your number is too large");
      ++guess;
    }
    
    if (triedNum.indexOf(answer) === -1 && answer < randomNum) {
      triedNum.push(answer);
      console.log("Your number is too small");
      ++guess;
    }
    
    if (answer === randomNum) {
      ++guess;
      break;
    }
  }
  console.log("Bingo!: " + guess + 'tries');
  return "Bingo!: " + guess + 'tries';
};

complete();

