// Carrossel 3D
const carousel = document.getElementById('carousel');
const items = carousel.getElementsByClassName('carousel__item');
let angle = 0;
const theta = 360 / items.length;

Array.from(items).forEach((item, i) => {
    const itemAngle = theta * i;
    item.style.transform = `rotateY(${itemAngle}deg) translateZ(500px)`;
});

document.getElementById('next').onclick = () => {
    angle -= theta;
    carousel.style.transform = `rotateY(${angle}deg)`;
};

document.getElementById('prev').onclick = () => {
    angle += theta;
    carousel.style.transform = `rotateY(${angle}deg)`;
};

// Formulário
const form = document.getElementById('joinForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`🕸️ Bem-vindo ao Spider-Verse, ${name}!`);
    form.reset();
});
