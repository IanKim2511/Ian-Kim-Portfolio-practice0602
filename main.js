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

// handle scrolling when tapping on the navbar menu.about__majors
// const navbarMenu = document.querySelector(".navbar__menu");
// navbarMenu.addEventListener("click", () => {
//   console.log(event.target);

//   // ???
//   const target = event.target;
//   const link = target.dataset.link;
//   if (link == null) {
//     return;
//   }
//   console.log(event.target.dataset.link);
//   navbarMenu.classList.remove("open");

//   const scrollto = document.querySelector(link);
//   scrollTo.scrollIntoView({ behavior: "smooth" });
// });

const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  console.log(event.target);

  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link);

  // (74)
  navbarMenu.classList.remove("open");

  // mdn scrollIntoView
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

// c74 .Navbar toggle button for small screen
// show nav with clicking toggle button for small screen. 

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
navbarMenu.classList.toggle('open');
});

//Handle click on 'contact me' button on home
// click menubutton. move to e.target

const homeContactBtn=document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',()=>{
scrollIntoView('#contact');
});

function scrollIntoView(selector){
  const scrollTo= document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// make home slowly fade as window scrolls down
//  opacity (window.scrollY / homnHeight)

const home = document.querySelector('.home__container');
const homeHeight=home.getBoundingClientRect().height;

document.addEventListener('scroll',() =>{
home.style.opacity=1-window.scrollY/homeHeight;
});