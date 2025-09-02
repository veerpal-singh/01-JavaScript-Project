let form = document.querySelector("#bmiForm")

bmiForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let weight = parseInt(document.querySelector("#weight").value);

    let height = parseInt(document.querySelector("#height").value)/100

    let result = document.querySelector("#result")

    let message = ""
    let bmi = (weight / (height * height)).toFixed(2);

    if (bmi < 18.5) {
        message = `You are Underweight 😕 bmi = ${bmi}`;
        result.textContent = message
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = `You are Normal 😊 bmi = ${bmi}`;
        result.textContent = message
    } else if (bmi >= 25 && bmi <= 29.9) {
        message = `You are Overweight 😟 bmi = ${bmi}`;
        result.textContent = message
    } else {
        message = `You are Obese 😢 bmi = ${bmi}`;
        result.textContent = message
    }     
    
    form.reset()    

})