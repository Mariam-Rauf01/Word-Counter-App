#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright.bold.italic("_________* Welcome to Word Counter App *_________ \n"));
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blueBright.bold.italic("Enter your sentence to count the word: "),
    },
]);
const words = answers.sentence.trim().split(" ");
if (words[0] === "")
    words.shift();
console.log("\n", chalk.greenBright.italic(words));
console.log("\n", chalk.yellowBright.bold.italic(`Your sentence word count is: ${chalk.greenBright.italic(words.length)}`));
console.log(chalk.greenBright.bold.italic("\n_________* Thank you for using our app *_________"));
