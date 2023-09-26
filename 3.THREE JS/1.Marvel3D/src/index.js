import "./main.css"
// Humburger menu
const navList = document.querySelector(".nav-list");
const navButton = document.querySelector(".nav-button");

navButton.addEventListener("click", () => {
  const currentState = navList.getAttribute("data-visible");
  if (currentState === "false") {
    navList.setAttribute("data-visible", true);
    navButton.setAttribute("aria-expanded", true);
  } else {
    navList.setAttribute("data-visible", false);
    navButton.setAttribute("aria-expanded", false);
  }
});
// Humburger menu ends

// Auto slider

let slide = 2;

setInterval(() => {
  if (slide == 6) {
    document.getElementById("auto-5").style.backgroundColor = "transparent";
    slide = 1;
  }

  document.getElementById("rad-" + slide).checked = true;
  document.getElementById("auto-" + slide).style.backgroundColor =
    "hsl(120 100% 50%)";

  if (slide == 2) {
    document.getElementById("auto-1").style.backgroundColor = "transparent";
  } else if (slide == 3) {
    document.getElementById("auto-2").style.backgroundColor = "transparent";
  } else if (slide == 4) {
    document.getElementById("auto-3").style.backgroundColor = "transparent";
  } else if (slide == 5) {
    document.getElementById("auto-4").style.backgroundColor = "transparent";
  }

  slide++;
}, 5000);


