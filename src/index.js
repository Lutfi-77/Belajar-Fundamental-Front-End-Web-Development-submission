import movieService from "./scripts/api";
import AppBar from "./component/app-bar";
import "./styles/style.css";

const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-link");
const bar = document.querySelectorAll(".bar");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("nav-link-open");
  bar.forEach((element) => {
    element.classList.toggle("active");
  });
});

movieService();
