const buttons=document.querySelectorAll(".btn")
const tabs=document.querySelectorAll(".city")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",function () {
        tabs[i].style.display="block"
        tabs[i-1].style.display="none"
        tabs[i+1].style.display="none"
    })
}