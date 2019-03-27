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

const scrollToTop = () => {
  const scrollFromTopPos =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollFromTopPos > 0) {
    scrollTo(0, scrollFromTopPos - scrollFromTopPos / 25);
    requestAnimationFrame(scrollToTop);
  }
};

document.getElementById("js-top-page").addEventListener("click", () => {
  scrollToTop();
});

let sub = document.getElementById("sub");
let formSub = document.getElementById("form-sub");
let formOk = document.getElementById("form-ok");

sub.addEventListener("click", () => {
  formSub.style.display = "none";
  formOk.style.display = "block";
});
