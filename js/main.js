'use strict';

let headerActivClass = document.getElementById('header');

document.getElementById('hamburger').addEventListener('click', function (){
    headerActivClass.classList.toggle('header-mobile');
});

window.addEventListener('resize', function(){
    if(window.innerWidth >= 540){
        headerActivClass.classList.remove('header-mobile');
    }
});

document.getElementById('js-top-page').addEventListener('click', function(){
    window.scrollTo(0,0);
});