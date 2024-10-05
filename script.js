const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");
let runner = 0;
let clear = null;
const setRunner = () => {
  clear = setInterval(() => {
    runner++;
    let minutes = Math.floor(runner / 60)
      .toString()
      .padStart(2, "0");
    let seconds = (runner % 60).toString().padStart(2, "0");
    timer.textContent = `${minutes}:${seconds}`;
  }, 1000);
};

start.addEventListener("click", () => {
  if (!clear) {
    clear = setInterval(setRunner, 1000);
  }
});

stop.addEventListener("click", () => {
  clearInterval(clear);
  clear = null;
});

reset.addEventListener("click", () => {
  clearInterval(clear);
  clear = null;
  runner = 0;
  timer.textContent = "00:00";
});
