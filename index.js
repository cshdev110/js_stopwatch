/**
 * Stopwatch
 * Plain stopwatch that is able to perform normal
 * features such as start, pause, and restart.
 */

/*testing purpose*/
const dateNowl = document.querySelector("#dateNowl");
const dateNowInter = setInterval(date_now, 1000);
function date_now(){
    dateNowl.innerHTML = Date.now();
    // clearInterval(dateNowInter);
}
/**/


const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        //Date.now() gives us the current time and date in miliseconds.
        startTime = Date.now() - elapsedTime;
        //The unit time of setInterval is miliseconds, os 1000ms is 1 second
        intervalId = setInterval(updateTime, 1000);
    }
});
pauseBtn.addEventListener("click", () => {});
resetBtn.addEventListener("click", () => {});

function updateTime(){
}