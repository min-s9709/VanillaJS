/*
const h2 = document.querySelector("h2");
const body = document.querySelector("body");

h2.style.color = "white";
body.style.backgroundColor = "green";
function windowResize() {
  if (window.innerWidth <= 500) {
    body.style.backgroundColor = "skyblue";
  } else if (window.innerWidth > 500 && window.innerWidth <= 700) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "yellow";
  }
}

window.addEventListener("resize", windowResize);
*/

const body = document.querySelector("body");

function windowResize(){
  if (window.innerWidth <600){
    body.classList.add("small");
    body.classList.remove("middle", "big");
  }else if(window.innerWidth >= 600 && window.innerWidth < 900){
    body.classList.add("middle");
    body.classList.remove("small", "big");
  }else{
    body.classList.add("big");
    body.classList.remove("small","middle");
  }

}

window.addEventListener("resize",windowResize);