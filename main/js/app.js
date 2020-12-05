const btnToggle = document.querySelector(".themes-btn")
const body = document.querySelector(".body")
const navPanel = document.querySelector(".nav-panel")
const imgBtn = document.querySelector(".img-btn")
const modal = document.querySelector(".modal")
const imgClose = document.querySelector(".img-close")
const bodyImg1 = document.querySelector(".img-card-1")
const bodyImg2 = document.querySelector(".img-card-2")
const bodyImg4 = document.querySelector(".img-card-4")
const bodyImg5 = document.querySelector(".img-card-5")
const bodyImg6 = document.querySelector(".img-card-6")
const bodyImg7 = document.querySelector(".img-card-7")
const imgTheme = document.querySelector(".open-theme")
const themeCont = document.querySelector(".themes-cont")

btnToggle.addEventListener("click", function(){

btnToggle.classList.toggle("themes-btn-dark")
body.classList.toggle("dark-body")
navPanel.classList.toggle("nav-panel-dark")


});

imgBtn.addEventListener("click", function(){
modal.classList.toggle("modal-open")

});



imgClose.addEventListener("click", function(){
modal.classList.remove("modal-open")
});


bodyImg1.addEventListener("click", function(){
body.classList.toggle("body-card-1")

});

bodyImg2.addEventListener("click", function(){
    body.classList.toggle("body-card-2")
    
});



bodyImg4.addEventListener("click", function(){
    body.classList.toggle("body-card-4")
    
});

bodyImg5.addEventListener("click", function(){
    body.classList.toggle("body-card-5")
    
});

bodyImg6.addEventListener("click", function(){
    body.classList.toggle("body-card-6")
    
});

bodyImg7.addEventListener("click", function(){
    body.classList.toggle("body-card-7")
    
});

imgTheme.addEventListener("click", function(){
imgTheme.classList.toggle("open-theme-open")
themeCont.classList.toggle("themes-cont-open")

});