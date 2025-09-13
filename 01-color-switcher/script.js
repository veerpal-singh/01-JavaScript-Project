const boxes = document.querySelectorAll(".color-box");

// First Tarika

boxes.forEach(function (box) {
    box.addEventListener("click", function (e) {
        const color = box.getAttribute("data-color");

        document.querySelector("body").style.backgroundColor = color;
    })
})

// Second Tarika

let array = Array.from(boxes)

array.map(function(box){
    box.addEventListener("click",function(e){
        color = box.getAttribute("data-color");
        document.querySelector("body").style.backgroundColor = color;    
    })
    
})

// Third Tarika

let arr3 = [...boxes]
arr3.map(function(box){
    box.addEventListener("click",function(e){
        color = box.getAttribute("data-color");
        document.querySelector("body").style.backgroundColor = color;    
    })
    
})






