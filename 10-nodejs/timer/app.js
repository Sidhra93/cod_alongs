var timer = {
  seconds: 0,
  timerId: null,
  elems: {
    startButton: document.querySelector('#start'),
    stopButton: document.querySelector('#stop'),
    resetButton: document.querySelector('#reset'),
    displayH1: document.querySelector('#display')
  },
  init: function(){
    this.elems.startButton.addEventListener('click', startHandler)
    this.elems.stopButton.addEventListener('click', stopHandler)
    this.elems.resetButton.addEventListener('click', resetHandler)
  },
  startHandler: () => {
    this.timerId = setInterval(() => {
      this.seconds++
      this.elems.displayH1.textContent = this.seconds

    }, 1000)
  },
  stopHandler: () => {
    clearInterval(this.timerId)
  },
  resetHandler: () => {
    this.seconds = 0
    this.timerId = null
    this.elems.displayH1.textContent = this.seconds
  }
}

timer.init();
