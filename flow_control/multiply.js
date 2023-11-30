let rlSync = require('readline-sync');


function multiply(firstNumber, secondNumber) {
  firstNumber = rlSync.question('Enter the first Number: ');
  secondNumber = rlSync.question('Enter the second number: ');
  let answer = firstNumber * secondNumber;
  console.log(`${firstNumber} * ${secondNumber} = ${answer}`);
}

multiply()