const reset = document.querySelector('#reset');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');

reset.addEventListener('click', resetHandler);
start.addEventListener('click', startHandler);
pause.addEventListener('click', pauseHandler);

function resetHandler() {
  clearInterval(timerId);
  document.querySelector('#timer').innerHTML = 'Stopwatch';
  this.seconds = 0;
}

function startHandler() {
  document.querySelector('#timer').innerHTML = seconds;
  timerId = setInterval(updateTime, 1000);
}

function pauseHandler() {
  clearInterval(timerId);
}

function updateTime() {
  seconds++;
  document.querySelector('#timer').innerHTML = seconds;
}

let seconds = 0;
let timerId = '';
