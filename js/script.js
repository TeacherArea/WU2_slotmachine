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
  '../img/smiley10.jpg'
];

function getRandomImage() {
  const probabilities = [
    { image: '../img/smiley1.jpg', probability: 0.35 },
    { image: '../img/smiley2.jpg', probability: 0.35 },
    { image: '../img/smiley3.jpg', probability: 0.35 },
    { image: '../img/smiley4.jpg', probability: 0.35 },
    { image: '../img/smiley5.jpg', probability: 0.35 },
    { image: '../img/smiley6.jpg', probability: 0.35 },
    { image: '../img/smiley7.jpg', probability: 0.2 },
    { image: '../img/smiley8.jpg', probability: 0.2 },
    { image: '../img/smiley9.jpg', probability: 0.1 },
    { image: '../img/smiley10.jpg', probability: 0.1 }
  ];

  const random = Math.random();
  let cumulativeProbability = 0;

  for (const { image, probability } of probabilities) {
    cumulativeProbability += probability;
    if (random < cumulativeProbability) {
      return image;
    }
  }

  return probabilities[0].image;
}

function spinReels() {
  //nollställer ronden, så att inte tidigare ronds bilder ska påverka
  reels.forEach(reel => {
    reel.innerHTML = '';
  });

  reels.forEach((reel, index) => {
    setTimeout(() => {
      const randomImage = getRandomImage();
      reel.innerHTML = `<img class="slot-image" src="${randomImage}" alt="Image of a smiley">`;
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
