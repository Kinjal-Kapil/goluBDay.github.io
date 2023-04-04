const door = document.getElementById("door");
const btn = document.getElementById("btn");
const txt = document.getElementById("txt");
const maindiv = document.getElementById("maindiv")
const img = document.getElementById("img")
const data = document.getElementById("date")
var audio = new Audio("audio/a.mp3"); 
var happyAudio = new Audio("audio/a2.mp3");
var loader = document.getElementById("preloader")


const date = new Date().toLocaleDateString()
data.innerHTML = date; 



door.addEventListener("click",function(){
  audio.play();
  door.style.animation = "floating2 6s ease-in";
  
  setInterval(() => {
    door.style.display = "none";
  }, 6000);
})


btn.addEventListener("click", () => {
 
  if(txt.value === "golu kumar" || txt.value === "Golu Kumar" || txt.value === "golu kumar " || txt.value === "Golu Kumar "){
    console.log("golu kumar");
    maindiv.style.display = "block"
    img.style.display = "none"
    happyAudio.play();
  }else{
    console.log("type golu kumar in input area");
    alert("type only Golu Kumar");
    happyAudio.pause();
  }
  txt.value = "";
  
})


window.addEventListener("load", function(){
  loader.style.display = "none";
})
