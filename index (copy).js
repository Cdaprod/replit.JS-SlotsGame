// SLOT MACHINE GAME "David Cannan aka cdaprod"
// Original video url = ("https://youtu.be/E3XxeE7NF30")

// 1. Deposit some money ✅
// 2. Determine number of lines to bet on ✅
// 3. Collect a bet amount ✅
// 4. Spin the slot machine 
// 5. Check if the user won
// 6. Give user their winnings
// 7. Play again

//Global Variables
const prompt = require("prompt-sync")();

const ROWS = 3;
const CALLS = 3;

const SYMBOLS_COUNT = {
  "A": 2,
  "B": 4,
  "C": 6,
  "D": 8
}

const SYMBOL_VALUES = {
  "A": 5,
  "B": 4,
  "C": 3,
  "D": 2
}


// Funcs
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
  
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log(`Invalid deposit amount, try again!`);
      } else {
      return numberDepositAmount
      }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);
  
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
        console.log(`Invalid number of lines, try again!`);
    } else {
    return numberOfLines;
    }
  }
};
const getBet = (balance, lines) => {
  while (true) {
    const Bet = prompt("Enter the total bet per line: ");
    const numberBet = parseFloat(Bet);
  
    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
        console.log("Invalid bet, try again!");
    } else {
      return numberBet;
    }
  }
}

//Spin
const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [[], [], []];
  for (let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols];
    for (let i = 0; j < ROWS; i++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length)
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

spin();

//
const reels = spin();
console.log(reels);
let balance = deposit(); 
const numberOfLines = getNumberOfLines();
const Bet = getBet(balance, numberOfLines);

//
//
//

