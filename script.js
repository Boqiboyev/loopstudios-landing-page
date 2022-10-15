const buttonOpen = document.querySelectorAll(".toggle");
const navBar = document.querySelector('.navbar-container');

buttonOpen.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    if(!navBar.classList.contains("show-links")){
      navBar.classList.add('show-links')
    } else {      
      navBar.classList.remove('show-links')
    }
  })
})