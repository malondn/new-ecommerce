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

/* quantity */
document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  const cartContainer = document.querySelector("#cart-items");
  const totalPriceElement = document.getElementById("total-price");

  function renderCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((product, index) => {
      if (!product.quantity) product.quantity = 1; // Default to 1

      total += product.price * product.quantity;

      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="80">
        <p>${product.name} - $${product.price}</p>
        <div class="quantity-controls">
          <button class="decrease" data-index="${index}">-</button>
          <span class="quantity">${product.quantity}</span>
          <button class="increase" data-index="${index}">+</button>
        </div>
        <button class="remove-item" data-index="${index}">Remove</button>
      `;
      cartContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = `$${total}`;
  }

  // Quantity Update Logic
  cartContainer.addEventListener("click", function (event) {
    const index = event.target.dataset.index;
    if (event.target.classList.contains("increase")) {
      cart[index].quantity++;
    } else if (event.target.classList.contains("decrease")) {
      if (cart[index].quantity > 1) cart[index].quantity--;
    } else if (event.target.classList.contains("remove-item")) {
      cart.splice(index, 1);
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    renderCart(); // Refresh UI
  });

  renderCart(); // Initial render
});

/* scrolling effect */
document.addEventListener("scroll", function() {
  let fadeSections = document.querySelectorAll(".fade-section");

  fadeSections.forEach(section => {
    let sectionTop = section.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.9) {
      section.classList.add("fade-in");
    }
  });
});
