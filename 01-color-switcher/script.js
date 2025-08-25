let box = document.querySelectorAll(".box")

box.forEach(function(boxes){
    boxes.addEventListener("click",function(e){
        if(e.target.id === "box1"){
            document.body.style.backgroundColor = "red"
        }

        if(e.target.id === "box2"){
            document.body.style.backgroundColor = "blue"
        }

        if(e.target.id === "box3"){
            document.body.style.backgroundColor = "green"
        }

        if(e.target.id === "box4"){
            document.body.style.backgroundColor = "orange"
        }

        if(e.target.id === "box5"){
            document.body.style.backgroundColor = "purple"
        }
        
    })
    
})
