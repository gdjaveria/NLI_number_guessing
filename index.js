#! /usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([]);
// computer generate a random number.
// user input for guessing number.
// compare user input to computer generated number and show result.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a right number between 1-10:",
    }]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
