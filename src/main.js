import confetti from "canvas-confetti";
import "./style/style.css";
import "./foot";
import "https://kit.fontawesome.com/4c536a6bd5.js";
import "./style/index.css";

// var sidenav = document.getElementById("mySidenav");
// var openBtn = document.getElementById("openBtn");
// var closeBtn = document.getElementById("closeBtn");

// openBtn.onclick = openNav;
// closeBtn.onclick = closeNav;

// /* Set the width of the side navigation to 250px */
// function openNav() {
//   sidenav.classList.add("active");
// }

// /* Set the width of the side navigation to 0 */
// function closeNav() {
//   sidenav.classList.remove("active");
// }

const btn = document.querySelector(".button");
btn.addEventListener("click", () => {
  window.location.href = "./menu.html";
});
// import './page/anis.svg'
confetti();
