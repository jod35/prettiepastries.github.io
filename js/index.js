const nav_bar = document.querySelector("nav");
const nav_links = document.querySelectorAll(".link");
const logo = document.querySelector(".logo");

window.onscroll = function () {
  shrinkNavOnscroll();
};

function shrinkNavOnscroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    nav_bar.style.backgroundImage = "linear-gradient(24deg, coral, brown)";
    nav_bar.style.padding = "15px";
    nav_bar.style.zIndex = "2";
    logo.style.color = "white";

    for (let i = 0; i < nav_links.length; i++) {
      nav_links[i].style.color = "white";
    }
  } else {
    nav_bar.style.background = "rgba(0, 0, 0, 0.466)";
    nav_bar.style.padding = "30px";
  }
}

for (let x = 0; x < nav_links.length; x++) {
  nav_links[x].addEventListener("click", function () {
    let current = document.querySelectorAll(".active");

    current[0].className = current[0].className.replace("active", "");
    this.classList.add("active");
  });
}
