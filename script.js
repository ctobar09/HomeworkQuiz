var highScores = document.getElementById('high-scores');
var timer = document.getElementById("time-remaining");
var startButton = document.getElementById("start-btn");


function timerMessage(){
      timer.innerHTML= ''; 
   }

function start(){
    window.setInterval(timerMessage,75000);
}