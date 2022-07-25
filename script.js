const bigBox = document.querySelector('#box-container');

const dot1 = document.querySelector('#dot-1');
const dot2 = document.querySelector('#dot-2');
const dot3 = document.querySelector('#dot-3');
const dot4 = document.querySelector('#dot-4');
const dot5 = document.querySelector('#dot-5');

const allDots = [bigBox, dot1, dot2, dot3, dot4, dot5];

// Returns a number between 0 and 255
function generateRandomNumber() {
  return Math.floor(Math.random() * 256);
}

// Returns random RGB value
function createRandomColor() {
  let newColor = [];
  for (let index = 0; index < 3; index++) {
    newColor.push(generateRandomNumber());
  }
  return newColor.join(',');
}

function init() {
  const changeBoxBtn = document.querySelector('#box-button');
  const changeAllBtn = document.querySelector('#random-all-button');

  const changeBox = changeBoxBtn.addEventListener('click', () => {
    let newRGBvalue = createRandomColor();
    bigBox.style.backgroundColor = `rgb(${newRGBvalue})`;
  });

  changeAllBtn.addEventListener('click', () => {
    allDots.forEach(element => {
      console.log(element);
      let newRGBvalue = createRandomColor();
      element.style.backgroundColor = `rgb(${newRGBvalue})`;
    });
  });
}
init();
