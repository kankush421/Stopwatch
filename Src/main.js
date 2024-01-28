let timingDisplay = document.querySelector('.watch');
let startButton = document.getElementById('startBtn');
let stopButton = document.getElementById('stopBtn');
let resetButton = document.getElementById('resetBtn');
let lapButton = document.getElementById('lapBtn');
let displayLaps = document.querySelector('.LapTimer');

let mm = 0;
let sec = 0;
let msec = 0;

let timerId = null;



startButton.addEventListener('click',()=>{
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,10);
});

stopButton.addEventListener('click',()=>{
    clearInterval(timerId);
})

resetButton.addEventListener('click',()=>{
    clearInterval(timerId);
    timingDisplay.innerHTML=`00:00:00`;
    displayLaps.innerHTML='';
    msec = sec = mm = 0;
})

lapButton.addEventListener('click',()=>{
    if(timerId !== null){

        let laptimeDiv = document.createElement('div');

        laptimeDiv.innerHTML = timingDisplay.textContent;

        displayLaps.appendChild(laptimeDiv); 
        
    }
})

function startTimer(){
    msec++;
    if(msec==1000){
        sec++;
        msec = 0;

        if(sec==60){
            mm++;
            sec = 0;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = sec < 10 ? `0${sec}` : sec;
    let minsString = mm < 10 ? `0${mm}` : mm;
    

    timingDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
   
}