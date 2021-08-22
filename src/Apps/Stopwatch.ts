export let stopWatchIsRunning: boolean = false;
export let timer: number = 0;
export const startTimerBtn = document.querySelector("#start-timer") as HTMLInputElement;
export const lapTimerBtn = document.querySelector("#lap-timer") as HTMLInputElement;
export const resetTimerBtn = document.querySelector("#reset-timer") as HTMLInputElement;
const lapInfo = document.querySelector("#lap-info") as HTMLDivElement;
const timerElement = document.querySelector("#timer") as HTMLHeadingElement;

export const startOrPause = () => {
    if(!stopWatchIsRunning){
        stopWatchIsRunning = !stopWatchIsRunning;
        stopWatchIncrement();
        startTimerBtn.value = "PAUSE";
        startTimerBtn.className = "btn btn-danger";
    }else{
        stopWatchIsRunning = !stopWatchIsRunning;
        startTimerBtn.value = "RESUME";
        startTimerBtn.className = "btn btn-info";
    }
}

export const resetTimer = () => {
    stopWatchIsRunning = false;
    timer = 0;
    startTimerBtn.value = "START";
    startTimerBtn.className = "btn btn-success";
    timerElement.innerText = "00:00";
    lapInfo.innerText = "";
}

export const stopWatchIncrement = () => {
    if(stopWatchIsRunning){
        setTimeout(() => {
            timer++;
            let minutes: (string | number) = Math.floor(timer/600);
            let seconds: (string | number) = Math.floor(timer/10);

            if(minutes < 10) minutes = "0" + minutes;
            if(seconds < 10) seconds = "0" + seconds;

            timerElement.innerText = `${minutes}:${seconds}`;
            stopWatchIncrement();
        }, 100);
    }
}

export const lapTimer = () => {
    const p = document.createElement('p');
    p.innerText = timerElement.innerText;
    p.style.fontSize = "20pt";
    lapInfo.appendChild(p);
}