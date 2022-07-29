//"use strict";
function init() {
    let seconds = 00; 
    let tens = 00;

    let getSeconds = document.getElementById("seconds");
    let getTens = document.getElementById("tens");
    let startBtn = document.getElementById("start");
    let stopBtn = document.getElementById("stop");
    let resetBtn = document.getElementById("reset");

    let interval;

    startBtn.addEventListener("click", () =>{
        //clearInterval(interval);
        interval = setInterval(startTimer, 10);
    })

    stopBtn.addEventListener("click", () => {
        clearInterval(interval);
    })

    resetBtn.addEventListener("click", () => {
         tens = "00";
         seconds = "00";
        getSeconds.innerHTML = seconds;
        getTens.innerHTML = tens;
    })

    function startTimer(){
        tens++;

        if(tens <= 9){
            getTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            getTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            getSeconds.innerHTML = "0" + seconds;
            tens = 0;
            getTens.innerHTML = "0" + 0;
        }
        if(getSeconds > 9){
            getSeconds.innerHTML = seconds;
        }
    }

}
window.onload = init;