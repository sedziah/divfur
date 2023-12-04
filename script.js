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

document.addEventListener("DOMContentLoaded", () => {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarLinks = document.getElementById("navbar-links");

  navbarToggle.addEventListener("click", () => {
    navbarLinks.style.right = "0"; // Open the drawer
  });

  // You can use the same toggle button to close or a separate close button as needed
  navbarToggle.addEventListener("click", () => {
    if (navbarLinks.style.right === "0px") {
      navbarLinks.style.right = "-100%"; // Close the drawer
    } else {
      navbarLinks.style.right = "0"; // Open the drawer
    }
  });
});



