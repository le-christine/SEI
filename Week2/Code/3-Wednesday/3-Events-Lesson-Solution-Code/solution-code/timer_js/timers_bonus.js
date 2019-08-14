const timer = {
  reset: document.querySelector('#reset'),
  start: document.querySelector('#start'),
  pause: document.querySelector('#pause'),
  seconds: 0,
  timerId: '',

  resetHandler: function() {
    clearInterval(this.timerId);
    document.querySelector('#timer').innerHTML = 'Stopwatch';
    this.seconds = 0;
  },

  startHandler: function() {
    document.querySelector('#timer').innerHTML = this.seconds;
    this.timerId = setInterval(this.updateTime.bind(this), 1000);
  },

  pauseHandler: function() {
    clearInterval(this.timerId);
  },

  updateTime: function() {
    this.seconds++;
    document.querySelector('#timer').innerHTML = this.seconds;
  },

  setup: function() {
    this.reset.addEventListener('click', this.resetHandler.bind(this));
    this.start.addEventListener('click', this.startHandler.bind(this));
    this.pause.addEventListener('click', this.pauseHandler.bind(this));
  }
}

timer.setup();
