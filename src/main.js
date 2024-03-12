import confetti from "canvas-confetti";
import "./style/style.css";
import "./foot";
import "https://kit.fontawesome.com/4c536a6bd5.js";
import "./style/index.css";

const btn = document.querySelector(".button");
btn.addEventListener("click", () => {
  window.location.href = "./menu.html";
});
confetti();
