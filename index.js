var bulb = document.querySelector(".bulb")
var btn = document.querySelector("button")

var a = 0

btn.addEventListener("click", function () {
    if (a == 0) {
        bulb.style.backgroundColor = "yellow"
        a = 1
    }
    else {
        bulb.style.backgroundColor = "white"
        a = 0

    }
   
})