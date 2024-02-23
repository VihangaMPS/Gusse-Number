'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess, typeof guess);

  if (!guess) {
    // when no input
    document.querySelector('.message').textContent = 'No Number !';
  } else if (guess == secretNumber) {
    //when you win
    document.querySelector('.message').textContent = 'Correct Number !';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    //when number too high
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Lost the Game !';
    }
  } else if (guess < secretNumber) {
    //when number too low
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Lost the Game !';
    }
  }
});
