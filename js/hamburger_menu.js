$(document).ready(()=>{
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");
  hamburger.addEventListener('click', ()=>{
    //Animate Links
      navLinks.classList.toggle("open");
      links.forEach(link => {
          link.classList.toggle("fade");
      });

      //Hamburger Animation
      hamburger.classList.toggle("toggle");
  });

  $('body').click(()=>{
    if($(".hamburger").hasClass('toggle')){
      $(".hamburger").click();
    }
  });
  $(".hamburger").click(function(event) {
      event.stopPropagation();
  });
})