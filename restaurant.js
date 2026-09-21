const menu=document.querySelector("#menu");
const nav=document.querySelector("nav");


menu.addEventListener("click", (event)=>{
  nav.classList.toggle("show");
});

const modal=document.querySelector(".modal");
const closeModal=document.querySelector("#closeModal");

window.addEventListener("load", ()=>{
  modal.classList.add("display");
});

closeModal.addEventListener("click", ()=>{
  modal.classList.remove("display");
})
