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
function smoothScrollTo(element, duration = 1000) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        // Ease-out function
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
const celebrate=document.querySelector('.celebrate');
document.getElementById('celebrateBtn').addEventListener('click', () => {
  celebrate.style.display="block";
  smoothScrollTo(celebrate,500)
  celebrationSound.play();
});

const gift_open = document.querySelector(".gift_open"); 
const gift_pack = document.querySelector(".gift_pack"); 
const gift_btn = document.querySelector("#gift_btn");
const gift_text = document.querySelector(".gift_text");
var i = 0;
var name = ""; 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAeklfKOLl_3zIZ1sA81aqtWM3xikIbKas",
    authDomain: "mgkvp-website.firebaseapp.com",
    projectId: "mgkvp-website",
    storageBucket: "mgkvp-website.appspot.com",
    messagingSenderId: "306111041649",
    appId: "1:306111041649:web:1c51ba0f01dfa5d1000bd0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

function insertData() {
    if (name) {
        set(ref(db, "New Year Project/" + name), {
            Name: name
        })
        .then(() => {
            console.log("Data inserted successfully");
        })
        .catch((error) => {
            console.error("Error inserting data:", error);
        });
    } else {
        console.error("Enroll number or name is missing");
    }
          }
  
gift_btn.addEventListener('click', () => {
    if (i === 0) {
        name = prompt("Enter your name");
        console.log(name);
        if (name && name.trim() !== "") {
            gift_text.innerHTML="🎉happy new year🎉<br>"+"🎉"+ name +"🎉";
            insertData()
            gift_open.style.display = "block";
            gift_text.style.display = "block"
            i++
        } else {
            alert("Please enter a valid name.");
        }
    }
});
