'use strict'

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

setInterval(() => {
    var d = new Date();
    let hrs = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    let hr_rotation = hrs*360/12 + ((min * 360/60)/12) ;
    let min_rotation = (min * 360/60) + (sec* 360/60)/60;
    let sec_rotation = sec * 360/60;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);