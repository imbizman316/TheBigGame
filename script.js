//get all the divs
const screen = document.querySelector('.screen');
const dialogue = document.querySelector('.dialogue');
const userinput = document.querySelector('.userinput');
const audio = document.querySelector('#audio');

const screentext = document.createElement('p');
screentext.textContent = 'Enter to start';
screentext.className = 'screentext';
screen.appendChild(screentext);

const dialogueText = document.createElement('p');
dialogueText.className = 'screentext';

window.addEventListener('keydown', playSound);

function playSound() {
    if (audio.paused) {
        audio.loop = true;
        audio.play();
        dialogueText.textContent = "One day, you wake up in a room. Something tells you to follow your voice."
        dialogue.appendChild(dialogueText);
    } else {
        audio.pause();
    }
}