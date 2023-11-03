const navli = document.querySelectorAll(".navbar ul li")
const textli = document.querySelectorAll(".textBox ul li")
const textBox = document.querySelector(".textbox")

let t = 0
for (let i = 0; i < navli.length; i++) {
    navli[i].addEventListener("click",function () {
        if (t !== undefined) {
            textli[t].classList.remove("see")       
        }
        textli[i].classList.add("see")
        t = i
    })
}