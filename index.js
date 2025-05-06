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

/* cart.html */
document.addEventListener("DOMContentLoaded", function() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  // Handle "Buy Now" Click for All Products
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

  // Render Cart Items in `cart.html`
  const cartContainer = document.querySelector("#cart-items");
  const totalPriceElement = document.getElementById("total-price");

  if (cartContainer) {
    function renderCart() {
      cartContainer.innerHTML = "";
      let total = 0;

      cart.forEach((product, index) => {
        const price = product.price ? parseFloat(product.price) : 0;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="item-details">
                        <h2>${product.name}</h2>
                        <p>Price: $${price.toFixed(2)}</p>
                        <button class="remove" data-index="${index}">Remove</button>
                    </div>
                `;
        cartContainer.appendChild(cartItem);
        total += price;
      });

      totalPriceElement.textContent = `$${total.toFixed(2)}`;
      addRemoveFunctionality();
    }

    function addRemoveFunctionality() {
      document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", function() {
          const index = this.dataset.index;
          cart.splice(index, 1);
          sessionStorage.setItem("cart", JSON.stringify(cart));
          renderCart();
        });
      });
    }

    renderCart();
  }
});

/* generate random product */
const products = [
  { name: "Elite Platinum Calithe", price: 200, image: "https://backoffice.chronohunter.com/photos/shares/10%20Of%20The%20Best%20Luxury%20Watch%20Brands%20That%20Hold%20Value%20Over%20Time%20(14).jpeg", link: "elite-platinum-calitha.html" },
  { name: "Classic Gold Timepiece", price: 1299, image: "classic-gold.jpg", link: "classic-gold.html" },
  { name: "Titan Chrono Master", price: 899, image: "titan-chrono.jpg", link: "titan-chrono.html" },
  { name: "Luxury Carbon X", price: 599, image: "luxury-carbon-x.jpg", link: "luxury-carbon-x.html" }
];
document.addEventListener("DOMContentLoaded", function() {
  const relatedContainer = document.querySelector("#related-products-container");

  if (relatedContainer) {
    // Shuffle products and select 1 random ones
    const shuffledProducts = products.sort(() => Math.random() - 0.5);
    const selectedProducts = shuffledProducts.slice(3);

    selectedProducts.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <a href="${product.link}"><button>View Details</button></a>
            `;
      relatedContainer.appendChild(productElement);
    });
  }
});
