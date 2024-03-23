#! /usr/bin/env node
import inquirer from "inquirer";

// i computer will generate a random number
// ii user input for guessing the number
// iii compare user input with computer generated number and show result

const randomnumber = 15;
const answer = await inquirer.prompt([
  {
    name: "userguessnumber",
    type: "number",
    message: "Please guess a number: ",
  },
]);

console.log(answer);