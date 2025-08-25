let clock = document.querySelector(".clock")

function time(){
    let date = new Date()
    clock.textContent = date.toLocaleTimeString()
}

setInterval(time,1000);