// const inquirer = require("inquirer").default;
const promptSync = require("prompt-sync")();

console.log("Dice Roller Application starts...")

/**
 * Roll a random dice side from a variable-sided dice
 *
 * @param {number} [diceSide=6] The total number of sides in the dice
 * @returns {number}The side of the dice rolled
 */

function rollDice(diceSide=6) {
    if (diceSide <= 0) {
        throw new Error("Dice must be greater than 0.");
    }

    
    let diceResult = 0;
    diceResult = Math.ceil(Math.random() * diceSide);
    return diceResult;
}
// console.log("The side you rolled is: " + rollDice());

// user prompt with inquirer specifics
//const prompt = inquirer.createPromptModule();

// prompt([
//     {
//         type: "number",
//         name: "dice_side",
//         message: "How many sided dice do you want to roll?"
//     }
// ]).then((answer) => {
//     console.log(rollDice(answer.dice_side))
// });

function getDiceSide() {
const diceSide = promptSync("How many sided dice do you want to roll? ");

try {
    // create variable diceResult, executable function, parseInt makes it an integer
    const parsedDiceSide = parseInt(diceSide);
    if (isNaN(parsedDiceSide)){
        throw new Error(`Please enter a valid number.`);
    }
    const diceResult = rollDice(parsedDiceSide);
    console.log(`You rolled a ${diceResult}-sided dice.`);
    // because we put 'throw' need to catch the (error)
} catch (error){
    console.error("You got an error!");
    console.log(error); // this will give you the stack trace error
}
}
getDiceSide();