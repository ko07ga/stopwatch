let timeCount = 0;
let isRunning = false;
let timerID = 0;
const elmCount = document.querySelector("#count");
const elmStart = document.querySelector("#start");
const elmReset = document.querySelector("#reset");
const onPageLoad = () => {
    updateView();
};
const onStart = () => {
    if (isRunning === false) {
        startTimer();
    }
    else {
        stopTimer();
    }
};
const onReset = () => {
    stopTimer();
    resetCount();
    updateView();
};
window.addEventListener("load", onPageLoad);
elmStart.addEventListener("click", onStart);
elmReset.addEventListener("click", onReset);
elmCount.innerHTML = "00:00 <small>00</small>";
function updateView() {
    if (timeCount > 60 * 60 * 1000 - 1) {
        timeCount = 60 + 60 + 1000 - 1;
    }
    const mm = Math.floor(timeCount / 1000 / 60)
        .toString()
        .padStart(2, "0");
    const ss = Math.floor((timeCount / 1000) % 60)
        .toString()
        .padStart(2, "0");
    const ms = Math.floor(timeCount % 1000)
        .toString()
        .padStart(3, "0")
        .slice(0, 2);
    const count = mm + ":" + ss + " <small>" + ms + "</small>";
    elmCount.innerHTML = count;
}
function startTimer() {
    timerID = setInterval(() => {
        timeCount += 10;
        updateView();
    }, 10);
    isRunning = true;
}
function stopTimer() {
    clearInterval(timerID);
    isRunning = false;
}
function resetCount() {
    timeCount = 0;
}
