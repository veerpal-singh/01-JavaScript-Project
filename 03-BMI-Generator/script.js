const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = document.querySelector("#height").value    
    
    const weight = document.querySelector("#weight").value    
    
    const result = document.querySelector(".result")

    if (height === "" || height <= 0 || isNaN(height)) {
        result.textContent = "Please give a valid height"
    } else if (weight === "" || weight <= 0 || isNaN(weight)) {
        result.textContent = "Please give a valid weight"
    } else {
        const bmi = (weight / ((height * height) / 100)).toFixed(2)
        result.textContent = `Result is = ${bmi}`
    }

})