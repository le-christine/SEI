const redButton = document.querySelector('#redButton');
const whiteButton = document.querySelector('#whiteButton');
const blueButton = document.querySelector('#blueButton');
const yellowButton = document.querySelector('#yellowButton');


redButton.addEventListener('click', turnRed);
whiteButton.addEventListener('click', turnWhite);
blueButton.addEventListener('click', turnBlue);
yellowButton.addEventListener('click', turnYellow);


function turnRed () {
  document.querySelector('body').className = 'red-theme';
}
function turnWhite () {
  document.querySelector('body').className = 'white-theme';
}
function turnBlue () {
  document.querySelector('body').className = 'blue-theme';
}
function turnYellow () {
  document.querySelector('body').className = 'yellow-theme';
}
