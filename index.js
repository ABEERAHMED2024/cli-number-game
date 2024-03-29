#! usr/bin/env node 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// // //1>computer will generate  random number
// // //2.input usser for number guess
// // //3.compare users input with computer generated number
var randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
var answers = await inquirer_1.default.prompt([
    {
        name: "userGuessnumber",
        type: "number",
        message: "please guess a number between 1 to 6:",
    }
]);
if (answers.userGuessnumber === randomNumber) {
    console.log("congratulations you guess right number.");
}
else {
    console.log("you guess a wrong number");
}
