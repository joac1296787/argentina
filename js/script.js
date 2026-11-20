const thumbnails=document.querySelectorAll(".tumbnails img");
const fullimageCointerner =document.querySelector(".full-image-container");
const fullImage= document.getElementById("full-image"); 
const closeBtn = document.querySelector(".close-btn");
thumbnails.fortEach(thumbnail => {
    thumbnail.addEventListener("click",()=>{
        fullImage.src = thumbnail.src;
        fullImageCointainer.style.display="flex";
    });
});
closeBtn.addEventListener ("click",()=>{
    fullImageContainer.styledisplay="none";
});