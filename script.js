// script.js
// document.addEventListener("DOMContentLoaded", function () {
//   const navbarToggle = document.createElement("button");
//   navbarToggle.innerText = "☰";
//   navbarToggle.classList.add("navbar-toggle");
//   const navbar = document.querySelector(".navbar");
//   navbar.insertBefore(navbarToggle, navbar.children[1]);

//   navbarToggle.addEventListener("click", function () {
//     const navbarLinks = document.querySelector(".navbar-links");
//     if (navbarLinks.style.display === "block") {
//       navbarLinks.style.display = "none";
//     } else {
//       navbarLinks.style.display = "block";
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let slides = document.querySelectorAll(".slide");
//   let index = 0;

//   function nextSlide() {
//     slides[index].classList.remove("active");
//     index = (index + 1) % slides.length;
//     slides[index].classList.add("active");
//   }

//   setInterval(nextSlide, 5000); // Change slide every 8 seconds
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var navbarToggle = document.getElementById("navbar-toggle");
//   var navbarLinks = document.getElementById("navbar-links");

//   navbarToggle.addEventListener("click", function () {
//     // This will toggle the display of the .navbar-links div
//     if (navbarLinks.style.display === "block") {
//       navbarLinks.style.display = "none";
//     } else {
//       navbarLinks.style.display = "block";
//     }
//   });
// });

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



