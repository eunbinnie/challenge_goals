// clock
const dateElement = document.querySelector(".date");
const clock = document.querySelector(".clock");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function printClock() {
  const currentDate = new Date();

  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  const day = days[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const date = String(currentDate.getDate()).padStart(2, "0");
  const year = currentDate.getFullYear();

  dateElement.innerText = `${day} ${month} ${date} ${year}`;
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

printClock();
setInterval(printClock, 1000);