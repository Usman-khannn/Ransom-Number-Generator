const btn = document.getElementById("btn")
const mylabel = document.getElementById("mylabel")
const max= 6;
const min= 1;
let randomnum;

btn.onclick = function(){
 let randomnum = Math.floor (Math.random() * max) + min;
 mylabel.textContent = randomnum;
}