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

document.addEventListener("DOMContentLoaded", function () {
  var closeBtn = document.getElementById("close-btn");
  var mobileDrawer = document.getElementById("mobile-drawer");

  closeBtn.addEventListener("click", function () {
    mobileDrawer.style.display = "none"; // Hide the mobile drawer
  });

  // Include other JavaScript for toggling the drawer if necessary
});
