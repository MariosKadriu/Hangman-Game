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

const correctWords = [];
const wrongWords = [];

/********** FUNCTIONS **********/
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

  // Removes \n from letters with '' to have the word joined together.
  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You won! 😃';
    popup.style.display = 'flex';
  }
};

// Show notification
const showNotification = () => {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
};

// Update the wrong letters
const updateWrongLettersEl = () => {
  console.log('Update wrong');
};

displayWord();

/********** EVENT LISTENERS **********/
// Keydown letter press
window.addEventListener('keydown', e => {
  // Check if the key that we pressed is between a-z
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctWords.includes(letter)) {
        correctWords.push(letter);

        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongWords.includes(letter)) {
        wrongWords.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});
