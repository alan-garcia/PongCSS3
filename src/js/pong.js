const ball = document.querySelector('.ball');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const score1 = document.querySelector('.score-player1');
const score2 = document.querySelector('.score-player2');
const button = document.querySelector('.startButton');

button.addEventListener('click', () => {
    score1.textContent = '0';
    score2.textContent = '0';

    ball.classList.add('ball-animation');
    player1.classList.add('player1-animation');
    player2.classList.add('player2-animation');

    button.disabled = true;
    button.textContent = 'Playing...';
});

ball.addEventListener('animationend', () => {
    score2.textContent = '1';

    ball.classList.remove("ball-animation");
    player1.classList.remove("player1-animation");
    player2.classList.remove("player2-animation");

    button.disabled = false;
    button.textContent = 'Start Again';
});
