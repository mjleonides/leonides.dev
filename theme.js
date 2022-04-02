const theme = window.localStorage.getItem("theme");
const themeStyle = document.getElementById("theme_style");

if (theme === "dark") {
  themeStyle.setAttribute("href", "darkmode.css");
}

function toggleTheme() {
  if (themeStyle.getAttribute("href") == "#") {
    themeStyle.setAttribute("href", "darkmode.css");
    window.localStorage.setItem("theme", "dark");
    return;
  } else themeStyle.setAttribute("href", "#");
  window.localStorage.setItem("theme", "none");
  return;
}
