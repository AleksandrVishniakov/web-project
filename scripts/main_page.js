let openedTag = document.querySelector("li.tag.open")
document.querySelectorAll("li.tag").forEach((element)=> {
    element.addEventListener('click', ()=>{
        openedTag.classList.toggle("open")
        element.classList.toggle("open")
        openedTag = element
    })
})