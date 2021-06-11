

const handSeconds = document.querySelector('[data-set-seconds]')
const handMinutes = document.querySelector('[data-set-minutes]')
const handHours = document.querySelector('[data-set-hours]')


function setTime(){

 const currentDate = new Date();
 const secondsRatio = currentDate.getSeconds() / 60 ;
 const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
 const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

 setRotation(handSeconds, secondsRatio);
 setRotation(handMinutes, minutesRatio);
 setRotation(handHours, hoursRatio);
}

function setRotation(element, timeRatio){
    element.style.setProperty('--rotate', timeRatio * 360)
    
}
setTime()
setInterval(setTime, 1000)
