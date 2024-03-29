#!  /usr/bin/env node

import inquirer from "inquirer";

// // //1>computer will generate  random number
// // //2.input usser for number guess
// // //3.compare users input with computer generated number

 const randomNumber = Math.floor(Math.random()* 6 + 1);
 console.log(randomNumber);


const answers = await inquirer.prompt([
   {
    name: "userGuessnumber",
    type: "number",
    message:"please guess a number between 1 to 6:",

   }
]);

if(answers.userGuessnumber === randomNumber){
    console.log("congratulations you guess right number.")

} else{
    console.log("you guess a wrong number");

}

