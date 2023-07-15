let dialogues = [
    "One day, you wake up in a room. Something tells you to follow your voice.",
]

//get all the divs
const screen = document.querySelector('.screen');
const dialogue = document.querySelector('.dialogue');
const userinput = document.querySelector('.userinput');
const audio = document.querySelector('#audio');
const typeSound = document.querySelector('#typesound');

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
        displayDialogue();
    } else {
        audio.pause();
    }
}


const timer = ms => new Promise(res => setTimeout(res,ms));

async function displayDialogue() {

    let temp = "";
    
    for (let i = 0; i < dialogues[0].length; i++) {
        
            temp += dialogues[0][i];
            dialogueText.textContent = temp;
            typeSound.play();
            dialogue.appendChild(dialogueText);
            await timer(40);
    }
}