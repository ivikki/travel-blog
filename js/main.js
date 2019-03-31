"use strict";

//mobile version header menu

let headerActiveClass = document.getElementById("header");

document.getElementById("hamburger").addEventListener("click", function() {
  headerActiveClass.classList.toggle("header-mobile");
});

window.addEventListener("resize", function() {
  if (window.innerWidth >= 540) {
    headerActiveClass.classList.remove("header-mobile");
  }
});

//scroll to top page

const scrollToTop = () => {
  const scrollFromTopPos =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollFromTopPos > 0) {
    window.scrollTo(0, scrollFromTopPos - scrollFromTopPos / 30);
    window.requestAnimationFrame(scrollToTop);
  }
};

document.getElementById("js-top-page").addEventListener("click", () => {
  scrollToTop();
});

//click subs form - change block

let sub = document.getElementById("sub");
let formSub = document.getElementById("form-sub");
let formOk = document.getElementById("form-ok");
let formInp = document.getElementById("js-input");
let errEmail = document.createElement("p");
errEmail.classList.add("red-error");
errEmail.innerText = "Пожалуйста, укажите действительный email";

formInp.addEventListener("keyup", () => {
  let isValid = formSub.checkValidity();
  if (isValid) {
    formSub.removeChild(errEmail);
  } else {
    formSub.appendChild(errEmail);
  }
});

sub.addEventListener("click", e => {
  e.preventDefault();

  let isValid = formSub.checkValidity();
  if (isValid) {
    formSub.style.display = "none";
    formOk.style.display = "block";
  }
});

//slider in footer

$(".slider").slick({
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  arrows: false
});
