'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// Score by player
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

// Dice
const diceEl = document.querySelector('.dice');

// Button new
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Restart counters
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

// Current Score
let currentScore = 0;
// Tha current player in the first move
let activePlayer = 0;
// Total score
const scores = [0, 0];

// Rolling functionality
const rollDice = () => {
  let diceNum = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceNum}.png`;

  if (diceNum !== 1) {
    currentScore += diceNum;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};

btnRoll.addEventListener('click', rollDice);
