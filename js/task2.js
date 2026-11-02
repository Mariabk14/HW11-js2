const refs = {
  timer: document.getElementById("timer"),
  message: document.getElementById("message"),
  startBtn: document.getElementById("startBtn"),
  restartBtn: document.getElementById("restartBtn")
};

const { timer, message, startBtn, restartBtn } = refs;

let time = 30000;
let interval;

function startTimer() {
  clearInterval(interval);
  time = 30000;

  startBtn.disabled = true;
  restartBtn.disabled = true;
  message.textContent = "";
  timer.classList.remove("warning");

  interval = setInterval(() => {
    time -= 10;

    const seconds = Math.floor(time / 1000);
    const milliseconds = time % 1000;

    timer.textContent = `00:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;

    if (time <= 10000 && time > 0) {
      timer.classList.add("warning");
      message.textContent = "Залишилося 10 секунд!";
    }

    if (time <= 0) {
      clearInterval(interval);
      timer.textContent = "00:00.000";
      timer.classList.remove("warning");
      message.textContent = "Час вичерпано!";
      restartBtn.disabled = false;
    }
  }, 10);
}

startBtn.addEventListener("click", startTimer);
restartBtn.addEventListener("click", startTimer);