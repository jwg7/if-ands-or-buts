const pinCode = '1234';

const prompt = require('prompt-sync')({sigint: true});

let userGuess = Number(prompt(`Enter the correct pincode: `));

if (userGuess === 1234) {
    console.log(`success`);
} else {
    console.log(`failure`);
}