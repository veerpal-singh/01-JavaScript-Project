const btn = document.querySelectorAll("button")
const display = document.querySelector(".display")
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")


btn.forEach(function (btns) {
    btns.addEventListener("click", function (e) {

        if (btns.textContent === "=" || btns.textContent === "C") return

        display.value += btns.textContent

    })
})

equal.addEventListener("click", function () {
    
    display.value = eval(display.value)
})

clear.addEventListener("click", function () {
    
    display.value = ""
})