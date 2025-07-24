const openBar = document.getElementById("openBar");
const closeBar = document.getElementById("closeBar");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");


openBar.addEventListener('click', ()=>{
    mobileMenu.classList.toggle("show")
    overlay.classList.toggle("show")
})
closeBar.addEventListener('click', ()=>{
    mobileMenu.classList.toggle("show")
    overlay.classList.toggle("show")
})