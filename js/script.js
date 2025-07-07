
const countdown = document.getElementById("countdown");
const targetDate = new Date("October 5, 2025 09:00:00").getTime();
const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance < 0) { clearInterval(interval); countdown.innerHTML = "Event Started"; return; }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdown.innerHTML = `<div>${days}<span>Days</span></div><div>${hours}<span>Hours</span></div><div>${minutes}<span>Minutes</span></div><div>${seconds}<span>Seconds</span></div>`;
}, 1000);
