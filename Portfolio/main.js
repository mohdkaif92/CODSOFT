document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", function(){
  menu.classList.toggle("show");
});

document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message Sent Successfully");
});

