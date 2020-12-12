const btnToggle = document.querySelector(".themes-btn")
const body = document.querySelector(".body")
const navPanel = document.querySelector(".nav-panel")
const imgBtn = document.querySelector(".img-btn")
const btnOpen = document.querySelector(".open-theme")
const themesContent = document.querySelector(".themes-cont")
const btnZen = document.querySelector(".btn-zen")
const contentZen = document.querySelector(".content")



btnOpen.addEventListener("click", function(){
btnOpen.classList.toggle("open-theme-open")
themesContent.classList.toggle("themes-cont-open")
});

btnToggle.addEventListener("click", function(){

btnToggle.classList.toggle("themes-btn-dark")
body.classList.toggle("dark-body")
navPanel.classList.toggle("nav-panel-dark")
btnZen.classList.toggle("themes-btn-dark")

});


btnZen.addEventListener("click", function(){
contentZen.classList.toggle("content-zen")
navPanel.classList.toggle("nav-panel-zen")
});