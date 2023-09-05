const reels = document.querySelectorAll('.reel');
const spinButton = document.getElementById('spin-button');
const scoreDisplay = document.getElementById('score');

let score = 0;

const images = [
  '../img/smiley1.jpg',
  '../img/smiley2.jpg',
  '../img/smiley3.jpg',
  '../img/smiley4.jpg',
  '../img/smiley5.jpg',
  '../img/smiley6.jpg',
  '../img/smiley7.jpg',
  '../img/smiley8.jpg',
  '../img/smiley9.jpg',
];

function spinReels() {
  reels.forEach((reel, index) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      reel.innerHTML = `<img class="slot-image" src="${images[randomIndex]}" alt="Smiley ${randomIndex + 1}">`;
      checkWin();
    }, index * 500);
  });
}

function checkWin() {
  const symbols = [...reels].map(reel => reel.querySelector('.slot-image').src);

  if (symbols.every(symbol => symbol === symbols[0])) {
    if (symbols[0] === images[6] || symbols[0] === images[7]) {
      score += 2;
    } else if (symbols[0] === images[8] || symbols[0] === images[9]) {
      score += 5;
    } else {
      score += 1;
    }
  }

  scoreDisplay.textContent = `Score: ${score}`;
}

spinButton.addEventListener('click', () => {
  spinReels();
});

