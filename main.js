const countdownElement = document.getElementById('countdown');
const celebrationSound = document.getElementById('celebrationSound');

const newYearDate = new Date(January 1, 2025 00:00:00').getTime();

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
document.getElementById('celebrateBtn').addEventListener('click', () => {
  window.location="C:\Users\babur\OneDrive\Documents\AFTAB ALAM\PROJECT-4\celebrate.html";
  celebrationSound.play();
});
const live=document.querySelector('#live');
const dead=document.querySelector('#dead');
live.addEventListener('click',()=>{
  dead.style.display='block';
  live.style.display='none'
})
