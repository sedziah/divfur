// script.js

//The hero function slider
document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  //Change slide every 5 seconds
  setInterval(nextSlide, 5000);
});


$(function() {
  $("#header-placeholder").load("header.html");
  $("#footer-placeholder").load("footer.html");
});



