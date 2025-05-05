let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow img");

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });

  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 3000); // Change slide every 3 seconds
showSlides(); // Initial call

document.querySelector(".logo").addEventListener("click", function () {
  window.location.href = "index.html";
})

document.getElementById("collections-link").addEventListener("click", function() {
    window.location.href = "collection.html"; // Update with your actual collections page URL
});
document.getElementById("index-link").addEventListener("click", function() {
    window.location.href = "index.html"; // Update with your actual collections page URL
});
document.getElementById("about-link").addEventListener("click", function() {
    window.location.href = "about.html"; // Update with your actual collections page URL
});
document.getElementById("contact-link").addEventListener("click", function() {
    window.location.href = "contact.html"; // Update with your actual collections page URL
});
