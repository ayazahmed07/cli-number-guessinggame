#! /usr/bin/env node
import inquirer from "inquirer";
// i computer will generate a random number
// ii user input for guessing the number
// iii compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 5 + 1); // returns the value from 1 to 5
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Please guess a number between 1 to 5: ",
    },
]);
if (answer.userguessednumber === randomnumber) {
    console.log("Congratulations you guessed the right number");
}
else {
    console.log("oh! You Guessed The Wrong Number.");
}
