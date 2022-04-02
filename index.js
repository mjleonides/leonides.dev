const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const nav = document.getElementById("nav");

menuToggle.addEventListener('click', function() {
    nav.classList.toggle("active-nav");
    menu.classList.toggle("active-menu");
});

