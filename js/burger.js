const nav = document.querySelector(".nav__list")
console.log(`${nav}`)
const burger = document.querySelector(".burger")
const navItems = document.querySelectorAll(".nav__item")
function burgerClick() {
    nav.classList.toggle("nav__list_active")
    burger.classList.toggle("active")
    navItems.forEach((el,index) =>{
    if(el.style.animation){
    el.style.animation=""
       
    }else{
        el.style.animation=`navLinkAnim 1.5s ease forwards ${index/7+0.3}s`
    }
    })

}

