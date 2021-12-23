const view=document.querySelector(".view");
const img=document.querySelector(".slide");

img.addEventListener("mouseover",()=>{
    view.classList.remove("hide");
})
img.addEventListener("mouseout",()=>{
    view.classList.add("hide");
});

