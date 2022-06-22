let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let inpSpeed = document.getElementById('inpSpeed')
let stopButton=document.getElementById('stopButton')
let spinButton=document.getElementById('spinButton')
let value=document.getElementsByClassName('value')
let values1 = [
    '😃', '😇', '😋', '😂', '😎', '😭', '😡'
]
let values2 = [
    '😃', '😇', '😋', '😂', '😎', '😭', '😡'
]
let values3 = [
    '😃', '😇', '😋', '😂', '😎', '😭', '😡'
]

function getRandomValue1() {
    return values1[Math.floor(Math.random() * 7)]
}
function getRandomValue2() {
    return values2[Math.floor(Math.random() * 7)]
}
function getRandomValue3() {
    return values3[Math.floor(Math.random() * 7)]
}

let animationId;

function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {

        value1.innerText = getRandomValue1()
        value2.innerText = getRandomValue2()
        value3.innerText = getRandomValue3()

    }, 1000 / newSpeed)
}

$(document).ready(function(){
    $("#stopButton").click(function(){
      clearInterval(animationId)
          $(".value").css("animation-play-state", "paused");
    });
    $("#spinButton").click(function(){
        $(".value").css("animation-play-state", "running");
    });
});

inpSpeed.onchange = function (ev) {
    // document.documentElement => this is ":root" of css
    //it tells us how to use css variable in js

    document.documentElement.style.setProperty('--speed', ev.target.value)

    updateAnimation(ev.target.value)
}