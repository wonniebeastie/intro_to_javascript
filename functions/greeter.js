let rlSync = require('readline-sync');


function first() {
  let firstName = rlSync.question("What is your first name?\n");
  return firstName;
}

function last() {
  let lastName = rlSync.question("What is your last name?\n");
  return lastName;
}


console.log(`Hello, ${first()} ${last()}!`);