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

/* cart.html */
document.addEventListener("DOMContentLoaded", function() {
  const quantityInputs = document.querySelectorAll(".quantity");
  const removeButtons = document.querySelectorAll(".remove");
  const totalPriceElement = document.getElementById("total-price");

  function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach(item => {
      const price = parseFloat(item.querySelector("p").textContent.replace("Price: $", ""));
      const quantity = item.querySelector(".quantity").value;
      total += price * quantity;
    });
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
  }

  quantityInputs.forEach(input => {
    input.addEventListener("change", updateTotalPrice);
  });

  removeButtons.forEach(button => {
    button.addEventListener("click", function() {
      this.closest(".cart-item").remove();
      updateTotalPrice();
    });
  });

  updateTotalPrice();
});
