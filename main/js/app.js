const btnToggle = document.querySelector(".themes-btn")
const body = document.querySelector(".body")
const navPanel = document.querySelector(".nav-panel")





btnToggle.addEventListener("click", function(){

btnToggle.classList.toggle("themes-btn-dark")
body.classList.toggle("dark-body")
navPanel.classList.toggle("nav-panel-dark")


});








