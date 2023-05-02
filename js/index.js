const doodle = document.getElementsByClassName("doodles")[0]
const astral = document.getElementById("astral")
const foundation = document.getElementById("foundation")

let currentDoodle
let rotateInterval
let rotation = 0

astral.onmouseover = function() {changeDoodleImage("astral","images/astral-doodle.gif",1)}
foundation.onmouseover = function() {changeDoodleImage("foundation", "images/drawing-doodle.gif",0)}

function changeDoodleImage(p1, p2, p3){
    if(currentDoodle != p1){
        doodle.style.opacity = 0
        setTimeout(() => {
            currentDoodle = p1
            doodle.src = p2
            doodle.style.opacity = 1
        }, 500);

        if(p3 == 1){
            startRotate()
        }else{
            stopRotate()
            console.log(p1,p2,p3)
        }
    }
}

function startRotate(){
    rotateInterval = setInterval(function(){
        rotate()
    }, 50);
    console.log("started")
}

function stopRotate(){
    clearInterval(rotateInterval);
    console.log("stopped")
    doodle.style.transform = "rotate(0deg)"
    rotation = 0
}

function rotate(){
    rotation += 0.25
    console.log(rotation)
    doodle.style.transform = "rotate(" + rotation + "deg)"
}