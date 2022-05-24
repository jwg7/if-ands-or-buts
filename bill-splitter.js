const prompt = require('prompt-sync')({sigint: true});

let person1 = Number(prompt(`How much did Person 1 pay? `));

let person2 = Number(prompt(`How much did Person 2 pay? `));


if (person1 > person2) {
    console.log(`Person 2 owes person 1 $${((person1 + person2) / 2) - person2}.`)
} else if (person2 > person1) {
    console.log(`Person 1 owes person 2 $${((person1 + person2) / 2) - person1}.`)
};