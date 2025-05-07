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

document.getElementById("collection-link").addEventListener("click", function() {
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
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  document.querySelectorAll(".buy-now").forEach(button => {
    button.addEventListener("click", function() {
      const product = {
        name: this.dataset.name,
        price: parseFloat(this.dataset.price) || 0,
        image: this.dataset.image
      };

      cart.push(product);
      sessionStorage.setItem("cart", JSON.stringify(cart));

      alert(`${product.name} added to cart!`);
      window.location.href = "cart.html"; // Redirect to cart page
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const cartContainer = document.querySelector("#cart-items");
  const totalPriceElement = document.getElementById("total-price");

  function renderCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
      total += product.price;

      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="80">
        <p>${product.name} - $${product.price}</p>
        <button class="remove-item" data-index="${index}">Remove</button>
      `;
      cartContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = `$${total}`;
  }

  renderCart();

  // Remove Items from Cart
  document.querySelectorAll(".remove-item").forEach(button => {
    button.addEventListener("click", function() {
      const index = this.dataset.index;
      cart.splice(index, 1); // Remove selected item
      sessionStorage.setItem("cart", JSON.stringify(cart));
      renderCart(); // Refresh cart
    });
  });
});
