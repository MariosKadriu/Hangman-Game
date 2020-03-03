const wrongLettersEl = document.getElementById('wrong-letters');
const wordEl = document.getElementById('word');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
const playAgainBtn = document.getElementById('play-button');
const notification = document.getElementById('notification-container');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

// Select a random word from words array
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctWords = ['w', 'i', 'z', 'a', 'r', 'd'];
const wrongWords = [];

// Show hidden word
const displayWord = () => {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(
        letter => `
            <span class="letter">
              ${correctWords.includes(letter) ? letter : ''}
            </span>
          `
      )
      .join('')}
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You won! 😃';
    popup.style.display = 'flex';
  }
};

displayWord();
