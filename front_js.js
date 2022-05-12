
window.addEventListener("scroll", function () {
  if (this.scrollY > 100) {
    this.document.querySelector(".navbar").classList.add("active-nav");
    if (localStorage.getItem("theme") == "light") {
      r.style.setProperty("--nav-link-color", "var(--soft-black)");
    }
  } else if (this.window.innerWidth > 600) {
    this.document.querySelector(".navbar").classList.remove("active-nav");
    r.style.setProperty("--nav-link-color", "var(--soft-white)");
  }
});

document.querySelectorAll(".column").forEach((element) => {
  element.addEventListener("mouseover", function () {
    this.querySelector("ul").style.top = "0";
  });
});

document.querySelectorAll(".column").forEach((element) => {
  element.addEventListener("mouseout", function () {
    this.querySelector("ul").style.top = "1000px";
  });
});


function themeToggleFunctionFront(){
    if (localStorage.getItem("theme") !== "light") {
    r.style.setProperty("--theme-background", "var(--soft-white)");
    r.style.setProperty("--theme-color", "var(--soft-black)");
    r.style.setProperty("--theme-border", "var(--grey)");
    localStorage.setItem("theme", "light");
    if (scrollY > 200 || window.innerWidth < 600) {
      r.style.setProperty("--nav-link-color", "var(--soft-black)");
    }
  } else {
    r.style.setProperty("--theme-background", "var(--soft-black)");
    r.style.setProperty("--theme-color", "var(--soft-white)");
    r.style.setProperty("--theme-border", "var(--border)");
    r.style.setProperty("--nav-link-color", "var(--soft-white)");
    localStorage.setItem("theme", "dark");
  }
}

themeToggle.addEventListener("click", themeToggleFunctionFront);
themeToggle.removeEventListener("click", themeToggleFunctionIndex)