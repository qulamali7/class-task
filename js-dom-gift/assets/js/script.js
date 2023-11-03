const btn = document.querySelectorAll(".btn")
const img = document.querySelectorAll(".content")
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click",function () {
        img[i].style.filter="none"
        btn[i].style.opacity="0"
    })
}

