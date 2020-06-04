"use strict";
//  c58
//Make navbar trasnparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});


//c74 navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarMenu= document.querySelector('.navbar__menu');
navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
});