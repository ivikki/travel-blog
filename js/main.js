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

let hasValidate = false;
let sub = document.getElementById("sub");
let formSub = document.getElementById("form-sub");
let formOk = document.getElementById("form-ok");
let formInp = document.getElementById("js-email");

function formValidation() {
  if (!hasValidate) {
    return;
  }

  let errEmail = document.getElementById("form-error");

  let isValid = formSub.checkValidity();
  if (isValid) {
    if (errEmail) {
      errEmail.remove();
    }
  } else {
    if (!errEmail) {
      errEmail = document.createElement("p");
      errEmail.id = "form-error";
      errEmail.classList.add("red-error");
      errEmail.innerText = "Пожалуйста, укажите действительный email";

      formSub.appendChild(errEmail);
    }
  }
}

formInp.addEventListener("keyup", formValidation);

sub.addEventListener("click", e => {
  e.preventDefault();

  hasValidate = true;
  formValidation();

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
