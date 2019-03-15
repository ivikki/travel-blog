"use strict";

let headerActiveClass = document.getElementById("header");

document.getElementById("hamburger").addEventListener("click", function() {
  headerActiveClass.classList.toggle("header-mobile");
});

window.addEventListener("resize", function() {
  if (window.innerWidth >= 540) {
    headerActiveClass.classList.remove("header-mobile");
  }
});

document
  .getElementsByClassName("nav-menu-link")
  .addEventListener("click", function() {
    document.getElementsByClassName("nav-menu-link").classList.toggle("active");
  });

document.getElementById("js-top-page").addEventListener("click", function() {
  window.scrollTo(0, 0);
});
