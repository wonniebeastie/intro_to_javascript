let readlineSync = require('readline-sync');
/*
let age = readlineSync.question('How old are you?\n');
age = parseInt(age);

console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
*/

let age = readlineSync.question('How old are you?\n');
age = parseInt(age);
let future = 10;

console.log(`You are ${age} years old.`);


for (let i = 1; i <= 4; i++) {

  console.log(`In ${future} years, you'll be ${age + future} years old.`);

  future += 10;
  age += 10;
}