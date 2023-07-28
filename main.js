const slider = document.querySelector("#slider");
const box = document.querySelector("#box");
const buttons = box.querySelectorAll("button");
const p = document.querySelector("p");

let x = 1;
let sliderCount = 9;

let timer = setTimeout(change, 0, 0);



function change(duration){
    clearTimeout(timer);
    x += duration;
    if (x < 1) x = sliderCount
    else if (x > sliderCount) x = 1
    slider.style.background = `url('img/${x}.jpg') center/cover`
    // slider.style.transition = "4s"
     timer = setTimeout(change, 3000, 1)
     p.innerHTML = sliderCount + " / " + x ;
   

}

            