const hamburgMenu = document.querySelector(".hamburg-button");
const menu = document.querySelector(".navigation-items");
const close = document.querySelector(".close-hamburg-btn")
hamburgMenu.addEventListener("click",()=>{
    console.log('clicked')
    if (menu.style.display === "block") {
        menu.style.display = "none";
      } 
      else {
        menu.style.display = "block";
      }
})

close.addEventListener("click", ()=>{
    console.log("clicked close");
    if (menu.style.display === "block") {
        menu.style.display = "none";
      } 
      else {
        menu.style.display = "block";
      }
})