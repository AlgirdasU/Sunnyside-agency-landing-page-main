"use strict";
const arrowDown = document.querySelector(".hero__arrow-down-box");
const section2 = document.querySelector("#section-2");
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero")

arrowDown.addEventListener("click", function (e) {
  e.preventDefault();
  section2.scrollIntoView({ behavior: "smooth" });
});

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  hero.classList.toggle("nav-open");
});
