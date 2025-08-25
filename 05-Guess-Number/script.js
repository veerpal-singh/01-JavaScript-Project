let randomNumber = parseInt(Math.random() * 101)
let form = document.querySelector("form")
let userInput = document.querySelector(".userInput")
let result = document.querySelector(".result")
let submit = document.querySelector(".submit")
let start = document.querySelector(".start")
let attempt = document.querySelector(".attempt")


let attemptArray = []
form.addEventListener("submit", function (e) {
    e.preventDefault()
    let userInutValue = userInput.value

    if (userInutValue < randomNumber) {
        result.textContent = "Kam hai bhai 🙄"
    } else if (userInutValue > randomNumber) {
        result.textContent = "Jada hai bhai 😏"
    } else {
        result.textContent = "Jeet gya bhai Congratulations 🦾"
        submit.disabled = true
        start.disabled = false
    }
    attemptArray.push(userInutValue)
    attempt.textContent = `Your Guesses: ${attemptArray.join()}`
    form.reset()
})

start.addEventListener("click", function () {
    result.textContent = ""
    attempt.textContent = ""
    start.disabled = true
    submit.disabled = false
    randomNumber = parseInt(Math.random() * 101)
})


