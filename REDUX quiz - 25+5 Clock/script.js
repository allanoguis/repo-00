let breakLength = 5;
let sessionLength = 25;
let timeLeft = sessionLength * 60;
let isRunning = false;
let isSession = true;
let timer;

const breakLabel = document.getElementById("break-length");
const sessionLabel = document.getElementById("session-length");
const timeLabel = document.getElementById("time-left");
const timerLabel = document.getElementById("timer-label");
const audio = document.getElementById("beep");

const updateDisplay = () => {
  breakLabel.innerText = breakLength;
  sessionLabel.innerText = sessionLength;
  timeLabel.innerText = formatTime(timeLeft);
  timerLabel.innerText = isSession ? "Session" : "Break";
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const startTimer = () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft <= 0) {
        audio.play();
        isSession = !isSession;
        timeLeft = isSession ? sessionLength * 60 : breakLength * 60;
      } else {
        timeLeft--;
      }
      updateDisplay();
    }, 1000);
  }
};

const stopTimer = () => {
  clearInterval(timer);
  isRunning = false;
};

const resetTimer = () => {
  stopTimer();
  breakLength = 5;
  sessionLength = 25;
  timeLeft = sessionLength * 60;
  updateDisplay();
  audio.pause();
  audio.currentTime = 0;
};

document.getElementById("break-decrement").addEventListener("click", () => {
  if (breakLength > 1) {
    breakLength--;
    updateDisplay();
  }
});

document.getElementById("break-increment").addEventListener("click", () => {
  if (breakLength < 60) {
    breakLength++;
    updateDisplay();
  }
});

document.getElementById("session-decrement").addEventListener("click", () => {
  if (sessionLength > 1) {
    sessionLength--;
    timeLeft = sessionLength * 60; // Update time left if session length changes
    updateDisplay();
  }
});

document.getElementById("session-increment").addEventListener("click", () => {
  if (sessionLength < 60) {
    sessionLength++;
    timeLeft = sessionLength * 60; // Update time left if session length changes
    updateDisplay();
  }
});

document.getElementById("start_stop").addEventListener("click", () => {
  if (isRunning) {
    stopTimer();
    document.getElementById("start_stop").innerText = "Start";
  } else {
    startTimer();
    document.getElementById("start_stop").innerText = "Pause";
  }
});

document.getElementById("reset").addEventListener("click", resetTimer);

// Initialize display
updateDisplay();
