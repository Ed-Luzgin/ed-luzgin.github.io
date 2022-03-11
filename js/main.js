const body = document.body;
const menuBtn = document.querySelector('.mobile-sandwich');

menuBtn.addEventListener('click', () => {
    body.classList.toggle('mobile-menu_open');
});