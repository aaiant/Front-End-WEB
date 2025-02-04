'use strict';

//  Modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelector('.rules');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add('hidden');
}

btnShowModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(typeof guess);

        if (!guess) {
            displayMessage('No number!');
        } else if (guess === secretNumber) {
            displayMessage('Correct number!');
            document.querySelector('body').style.background = 'linear-gradient(to top left, #249100, #00914b)';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        } else if (guess !== secretNumber) {
            if (score > 1) {
                if (guess > secretNumber) {
                    displayMessage('Too hot!😆');
                    document.querySelector('.number').textContent = '🌡️';
                } else {
                    displayMessage('Too cold!😀');
                    document.querySelector('.number').textContent = '🧊';
                }

                score--;
                document.querySelector('.score').textContent = score;
                document.querySelector('body').style.background = 'linear-gradient(to top left, #fc0000, #fc6f03)';
                setTimeout(function () {
                    document.querySelector('body').style.background = 'linear-gradient(to top left, #fcba03, #fc6f03)';
                }, 1200);

            } else {
                displayMessage('You lost the game!');
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.background = 'red';
            }
        }
    });

document.querySelector('.retry').addEventListener('click',
    function () {
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('body').style.background = 'linear-gradient(to top left, #fcba03, #fc6f03)';
    }
);