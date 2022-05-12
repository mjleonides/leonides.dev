const menuToggle = document.getElementById('menu-toggle');
const themeToggle = document.getElementById('theme-toggle');
const r = document.querySelector(':root');
const setTheme = localStorage.getItem('theme');

if (setTheme === 'light') {
  r.style.setProperty('--theme-background', 'var(--soft-white)');
  r.style.setProperty('--theme-color', 'var(--soft-black)');
} 

menuToggle.addEventListener('click', function() {
  document.querySelector(".menu").classList.toggle('active-menu');
  document.querySelector("#menu-toggle").classList.toggle('active-toggle');
  document.querySelector(".navbar").classList.toggle("active-nav");
});

function themeToggleFunctionIndex(){
  if (localStorage.getItem('theme') !== 'light') {
    r.style.setProperty('--theme-background', 'var(--soft-white)');
    r.style.setProperty('--theme-color', 'var(--soft-black)');
    r.style.setProperty('--theme-border', 'var(--grey)');
    localStorage.setItem('theme', 'light');
  } else {
    r.style.setProperty('--theme-background', 'var(--soft-black)');
    r.style.setProperty('--theme-color', 'var(--soft-white)');
    r.style.setProperty('--theme-border', 'var(--border)');
    r.style.setProperty('--nav-link-color', 'var(--soft-white)');
    localStorage.setItem('theme', 'dark');
  }
}

themeToggle.addEventListener('click', themeToggleFunctionIndex);