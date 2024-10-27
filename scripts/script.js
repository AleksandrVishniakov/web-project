const burgerBtn = document.querySelector("#burger-button")
const menu = document.querySelector("nav.menu")
burgerBtn.addEventListener("click", ()=>{
    burgerBtn.classList.toggle("open")
    menu.classList.toggle("open")
})