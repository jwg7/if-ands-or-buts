const prompt = require('prompt-sync')({ sigint: true });

let player1 = prompt(`Player 1: Enter rock, paper, or scissors: `);

let player2 = prompt(`Player 2: Enter rock, paper, or scissors: `);

if (player1 === 'rock' && player2 === 'rock') {
    console.log(`It's a tie!`)
} else if (player1 === 'paper' && player2 === 'paper') {
    console.log(`It's a tie!`)
} else if (player1 === 'scissors' && player2 === 'scissors') {
    console.log(`It's a tie!`)
} else if (player1 === 'rock' && player2 === 'paper') {
       console.log(`Player 2 wins! Paper beats rock.`)
} else if (player1 === 'rock' && player2 === 'scissors') {
    console.log(`Player 1 wins. Rock beats Scissors.`)
} else if (player1 === 'paper' && player2 === 'rock') {
    console.log(`Player 1 wins. Paper beats rock.`)
} else if (player1 === 'paper' && player2 === 'scissors') {
    console.log(`Player 2 wins. Scissors beats paper.`)
} else if (player1 === 'scissors' && player2 === 'rock') {
    console.log(`Player 2 wins. Rock beats scissors.`)
} else if (player1 === 'scissors' && player2 === 'paper') {
    console.log(`Player 1 wins. Scissors beats paper.`)
} else {
    console.log(`Please follow instuctions! No uppercase words, etc! Try again!`)
}