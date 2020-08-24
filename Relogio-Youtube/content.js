var obj = document.createElement("input")
obj.setAttribute("readonly",true)
obj.style.position = "absolute"
obj.style.left = "0px"
obj.style.top = "0px"

var obstaculos = document.getElementById("buttons")
obj.getAttribute("class","objeto")
var local = document.getElementById("container")
local.appendChild(obj)

function iniciar() {
    var data = new Date()
    var hrs = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()

    // estilo do relogio
    obj.style.backgroundColor = "black"
    obj.style.fontFamily = "Arial, sans-serif"
    obj.style.fontSize = "15pt"
    obj.style.color = "green"
    obj.style.padding = "5px"
    obj.style.fontWeight = "bold"
    obj.style.left = "1200px"
    obj.style.top = "8px"
    obj.style.borderRadius = "5px"
    obj.style.textAlign = "center"
    obj.style.textShadow = "1p 1px 0px white"
    obj.style.width = "100px"
    obj.style.marginRight = "20px"
    obj.style.marginRight = "-350px"
    //-----------------------------------------//

    if(hrs < 10){
        hrs = `0${hrs}`
    }
    if(min < 10){
        min = `0${min}`
    }
    if(seg < 10){
        seg = `0${seg}`
    }

    var appendHrs = `${hrs}:${min}:${seg}`
    obj.value = appendHrs
}
function tmp(){
    setInterval(iniciar,1000)
}
window.addEventListener("load",tmp)

