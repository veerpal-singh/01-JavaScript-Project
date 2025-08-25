let number = document.querySelector(".number")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let reset = document.querySelector(".reset")
let input = document.querySelector("input")


plus.addEventListener("click", function (e) {
    const numberValue = parseInt(number.textContent)
    const inputValue = parseInt(input.value)
    number.textContent = numberValue + inputValue

})

minus.addEventListener("click", function (e) {
    const numberValue = parseInt(number.textContent)
    const inputValue = parseInt(input.value)
    if (numberValue <= 0) {
        number.textContent = 0
    } else {
        let minusValue = parseInt(number.textContent)
        number.textContent = minusValue - inputValue
    }

})

reset.addEventListener("click", function (e) {
    number.textContent = 0
    input.value = ""

})