let cam = document.querySelector('.cam');
let hand = document.querySelector('.hand');
let house = document.querySelector('.house');
let poo = document.querySelector('.poo');
let rocket = document.querySelector('.rocket');
let sparkles = document.querySelector('.sparkles');

let img = document.querySelector('.show');
console.log(img)
cam.addEventListener('click',()=>{img.innerHTML = "<i class='display-block fa-duotone fa-camera-retro' style='color: rgb(28, 126, 214);'></i>";})
hand.addEventListener('click',()=>{img.innerHTML = "<i class='display-block fa-duotone fa-hand-wave' style='color: rgb(28, 126, 214);'></i>";})
house.addEventListener('click',()=>{img.innerHTML = ' <i class="fa-duotone fa-house-chimney" style="color: #1c7ed6;"></i> ';})
poo.addEventListener('click',()=>{img.innerHTML = ' <i class="fa-duotone fa-poo-storm" style="color: #1c7ed6;"></i> ';})
rocket.addEventListener('click',()=>{img.innerHTML = ' <i class="fa-duotone fa-rocket-launch" style="color: #1c7ed6;"></i> ';})
sparkles.addEventListener('click',()=>{img.innerHTML = ' <i class="fa-duotone fa-sparkles" style="color: #1c7ed6;"></i> ';})