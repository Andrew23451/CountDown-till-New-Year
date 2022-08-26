const DaysEl = document.getElementById("days");
const HoursEl = document.getElementById("hours");
const MinutesEl = document.getElementById("minutes");
const SecondsEl = document.getElementById("seconds");
const NewYears = "1 Jan 2023";

function CountDown() {
 const newYearsDate = new Date(NewYears);
 const currentDate = new Date();

 const totalSeconds = (newYearsDate - currentDate) / 1000;
 const days = Math.floor(totalSeconds / 3600 / 24);
 const hours = Math.floor(totalSeconds / 3600) % 24;
 const minutes = Math.floor(totalSeconds / 60) % 60;
 const seconds = Math.floor(totalSeconds) % 60;

 
 DaysEl.innerText = formatTime(days);
 HoursEl.innerText = formatTime(hours);
 MinutesEl.innerText = formatTime(minutes);
 SecondsEl.innerText  = formatTime(seconds);

 setTimeout(()=>{
  CountDown()
  },1000)
}

function formatTime(time){
  return time < 10 ? (`0${time}`) : time;
}

CountDown();

