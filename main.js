const countdownElement = document.getElementById('countdown');
const celebrationSound = document.getElementById('celebrationSound');

const newYearDate = new Date('January 1, 2025 00:00:00').getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = newYearDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "Happy New Year!";
    celebrationSound.play();
  }
}, 1000);
const countdownElement = document.getElementById('countdown');
const celebrationSound = document.getElementById('celebrationSound');

const newYearDate = new Date('January 1, 2025 00:00:00').getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = newYearDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}  d  ${hours} h ${minutes} m ${seconds} s`;

  if (distance < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "Happy New Year!";
    celebrationSound.play();
  }
}, 1000);
const celebrate=document.querySelector('.celebrate');
document.getElementById('celebrateBtn').addEventListener('click', () => {
  celebrate.style.display="block";
  celebrationSound.play();
});
const live=document.querySelector('#live');
const dead=document.querySelector('#dead');
live.addEventListener('click',()=>{
  dead.style.display='block';
  live.style.display='none'
});
const gift_open =document.querySelector(".gift_open"); 
const gift_pack =document.querySelector(".gift_pack"); 
const gift_btn =document.querySelector("#gift_btn");
var i=0;
  gift_btn.addEventListener('click', () => {
    if(i===0){
    name=prompt("enter your name")
    gift_open.style.display="block";
    i++
    }
})

