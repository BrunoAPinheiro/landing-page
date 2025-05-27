// script.js

// Inicializa o Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Define ou recupera a data final da oferta (3 dias a partir do primeiro acesso)
function getOfferEndDate() {
    const storageKey = 'offerEndDate';
    let endDate = localStorage.getItem(storageKey);
    if (!endDate) {
        // 3 dias a partir de agora
        const now = new Date();
        now.setDate(now.getDate() + 3);
        endDate = now.getTime();
        localStorage.setItem(storageKey, endDate);
    }
    return parseInt(endDate, 10);
}

const offerEndDate = getOfferEndDate();

// Contador regressivo
const countdown = () => {
    const countDate = offerEndDate;
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = textDay < 10 ? "0" + textDay : textDay;
    document.getElementById("hours").innerText = textHour < 10 ? "0" + textHour : textHour;
    document.getElementById("minutes").innerText = textMinute < 10 ? "0" + textMinute : textMinute;
    document.getElementById("seconds").innerText = textSecond < 10 ? "0" + textSecond : textSecond;
}

setInterval(countdown, 1000);