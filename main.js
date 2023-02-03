// random background image
const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg"
];

const image = Math.floor(Math.random() * images.length);

const imgTag = document.createElement("img");
imgTag.src = `./img/${images[image]}`;
document.body.append(imgTag);


// clock
const date = document.querySelector(".date");
const clock = document.querySelector(".clock");
console.dir(clock);
console.dir(date);

const currentDate = new Date();