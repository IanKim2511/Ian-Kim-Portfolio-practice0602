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


// arrow-up. button when scrolling down
// 1/2 of homeheight. adding visible class 

const arrowUp= document.querySelector('.arrow-up');
document.addEventListener('scroll'   ,()=>{
  if(window.scrollY > homeHeight/2){
    arrowUp.classList.add('visible');

  }else{
    arrowUp.classList.remove('visible');

  }

});













// c72. remove selection from the previous item and select the next selection 

const active = document.querySelector('.category__btn.selected');
if(active !=null){
  active.classList.remove('selected');

}
// e.target.classList.add('selected');

// c70. project animation. 
const projectContainer = document.querySelector('.work__projects');
projectContainer.classList.add('anim-out');

setTimeout(()=>{
  projectContainer.classList.remove('anim-out');
},300);

// c68. forEach
// const filter = e.target.dataset.filter

// const projects = document.querySelectorAll('.project');
// projects.forEach((project)=>{
//   console.log(project.dataset.type);
//   if(filter==='*'||)filter ===project.dataset.type{
// project.classList.remove('invisible');
//   }else{
//     project.classList.add('invisible');

//   }
  



// });