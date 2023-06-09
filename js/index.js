const doodle = document.getElementsByClassName("doodles")[0]
const astral = document.getElementById("astral")
const foundation = document.getElementById("foundation")
const gong = document.getElementById("gong")
const emailButton = document.getElementById("emailButton")

let currentDoodle
let rotateInterval
let rotation = 0
let isRotating = false

astral.onmouseover = function() {changeDoodleImage("astral","images/astral-doodle.gif",1, "a drawing of me floating about wearing a spacesuit")}
foundation.onmouseover = function() {changeDoodleImage("foundation", "images/foundation-doodle.gif",0, "a drawing of me watering a tiny sapling")}
gong.onmouseover = function() {changeDoodleImage("gong", "images/drawing-doodle.gif",0)}

function changeDoodleImage(p1, p2, p3, p4){
    if(currentDoodle != p1){
        if(p3 == 1){
            startRotate()
        }else{
            stopRotate()
            //console.log(p1,p2,p3)
        }
        doodle.style.opacity = 0
        setTimeout(() => {
            currentDoodle = p1
            doodle.src = p2
            doodle.alt = p4
            doodle.style.opacity = 1
        }, 400);
    }
}

function startRotate(){
    isRotating = true
    rotateInterval = setInterval(function(){
        rotate()
    }, 50);
    console.log("started")
}

function stopRotate(){
    clearInterval(rotateInterval);
    isRotating = false
    console.log("stopped")
    doodle.style.transform = "rotate(0deg)"
    rotation = 0
}

function rotate(){
    if(isRotating==true){
        rotation += 0.25
        doodle.style.transform = "rotate(" + rotation + "deg)"
    }
}

function copyEmail() {
    var copyText = "alfiewright219@gmail.com";
    navigator.clipboard.writeText(copyText);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }