const fullDarkMode = document.querySelector("#fullDarkMode");
const containerDarkMode = document.querySelector("#containerDarkMode")
const container = document.querySelector(".container")

fullDarkMode.addEventListener("change", function () {
    if (fullDarkMode.checked) {
        document.body.classList.add("dark")
    } else {
        document.body.classList.remove("dark")
    }

    containerDarkMode.checked = fullDarkMode.checked

    containerMode()

})

containerDarkMode.addEventListener("change", function () {
    containerMode()
})

function containerMode() {
    if (containerDarkMode.checked) {
        container.classList.add("dark")
    } else {
        container.classList.remove("dark")
    }
}