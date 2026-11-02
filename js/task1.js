const refs = {
    timer: document.getElementById("timer"),
    message: document.getElementById("message")
};

function startTimer(minutes, seconds) {
    let timeInSeconds = minutes * 60 + seconds;
    const halfTime = Math.floor(timeInSeconds / 2);

    refs.message.textContent = "";

    function formatTime(timeInSeconds) {
        const min = Math.floor(timeInSeconds / 60);
        const sec = timeInSeconds % 60;

        const formattedMin = String(min).padStart(2, "0");
        const formattedSec = String(sec).padStart(2, "0");

        return `${formattedMin}:${formattedSec}`;
    }

    function upDateTimer() {
        if (timeInSeconds > 0) {
            timeInSeconds--;

            refs.timer.textContent = formatTime(timeInSeconds);

            if (timeInSeconds === halfTime) {
                refs.message.textContent =
                    "Увага! Залишилася половина часу!";
            }
        } else {
            clearInterval(timerInterval);
            refs.message.textContent = "Час вичерпано!";
        }
    }

    refs.timer.textContent = formatTime(timeInSeconds);

    const timerInterval = setInterval(upDateTimer, 1000);
}

startTimer(1, 0);