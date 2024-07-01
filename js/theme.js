const header=document.querySelector(".header")
const footer=document.querySelector(".footer")
const navItem=document.querySelectorAll(".nav__item")
console.log(navItem)
let color="" 
let textcolor="null"
if(localStorage.getItem("bg-color") !=null) {
color=localStorage.getItem("bg-color") 
header.style.background=color
footer.style.background=color 
textcolor=localStorage.getItem("text-color")
navItem.forEach((el)=>{
    el.style.color=textcolor
    el.style.transition="1.5s ease"
})

}

function choiceDark(){
    console.log("блек тема")
    header.style.background="rgb(75,75,75)"
    footer.style.background="rgb(75,75,75)"

    header.style.transition="1.5s ease" 
    footer.style.transition="1.5s ease"

    localStorage.setItem("bg-color","rgb(75,75,75)") 
    navItem.forEach((el)=>{
    el.style.color="rgb(255,255,255)"
    el.style.transition="1.5s ease"
    })
    localStorage.setItem("text-color","rgb(255,255,255)")
    
}
function choiceWhite(){
    console.log("White")
    header.style.background="rgb(180,180,180)"
    footer.style.background="rgb(180,180,180)"
    header.style.transition="1.5s ease" 
    footer.style.transition="1.5s ease"
    localStorage.setItem("bg-color","rgb(180,180,180)") 
    navItem.forEach((el)=>{
        el.style.color="rgb(33,33,33)"  
        el.style.transition="1.5s ease"
    })
    localStorage.setItem("text-color","rgb(33,33,33)")
}
