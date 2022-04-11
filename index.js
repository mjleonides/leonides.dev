const menuToggle = document.getElementById('menu-toggle');
const themeToggle = document.getElementById('theme-toggle');
const r = document.querySelector(':root');
const setTheme = localStorage.getItem('theme');

if (setTheme === 'dark') {
  r.style.setProperty('--theme-background', 'black');
  r.style.setProperty('--theme-color', 'white');
}

menuToggle.addEventListener('click', function() {
  document.querySelector(".menu").classList.toggle('active-menu');
  document.querySelector("#menu-toggle").classList.toggle('active-toggle');
});

themeToggle.addEventListener('click', function() {
  const themeBackgroundColor = getComputedStyle(r).getPropertyValue('--theme-background');
  const themeColor = getComputedStyle(r).getPropertyValue('--theme-color');
  if (themeBackgroundColor === 'white') {
    r.style.setProperty('--theme-background', 'black');
    r.style.setProperty('--theme-color', 'white');
    localStorage.setItem('theme', 'dark');
  } else {
    r.style.setProperty('--theme-background', 'white');
    r.style.setProperty('--theme-color', 'black');
    localStorage.setItem('theme', 'light');
  }})
