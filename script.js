
const images = [
    "images/banner01.png",
    "images/banner02.png",
    "images/banner03.png"
];
let current = 0;
const imgEl = document.getElementById("carousel-img");
setInterval(() => {
    current = (current + 1) % images.length;
    imgEl.src = images[current];
}, 3000);
