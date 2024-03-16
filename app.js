const navbtn = document.getElementById("navbtn");
const navbar = document.getElementById("navbar");

navbtn.addEventListener('click',()=>{
  if(navbar.className.includes("hidden")){
      navbar.classList.remove("hidden")
    }else{
        navbar.className += " hidden"
  }
})
