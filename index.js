var menuToggle = document.querySelector(".menu-toggle");
var menu = document.querySelector(".menu")
var nav = document.getElementById("nav");

menuToggle.addEventListener('click', function() {
    nav.classList.toggle("active-nav");
    menu.classList.toggle("active-menu")
});

function theme() {
    var theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "#") {
      theme.setAttribute("href", "darkmode.css");
    } else {
      theme.setAttribute("href", "#");
    }
  }