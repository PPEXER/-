let cart = []; // Store items in the cart

// Function to add items to the cart
function addToCart(productName, price) {
  // Add product to cart array
  cart.push({ productName, price });

  // Update the cart count
  document.getElementById('cart-count').innerText = cart.length;

  alert(`${productName} has been added to your cart.`);
}

// Function to open the cart modal
function openCart() {
  const cartModal = document.getElementById('cart-modal');
  const cartList = document.getElementById('cart-list');

  // Clear the cart list
  cartList.innerHTML = '';

  // Generate cart items
  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cartlist-items');

    itemDiv.innerHTML = `
      <div class="cartlist-left">
        <img src="product-placeholder.jpg" alt="${item.productName}">
        <div>
          <h3>${item.productName}</h3>
          <p>$${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div class="cartlist-right">
        <button class="btnc" onclick="removeFromCart(${index})">X</button>
      </div>
    `;

    cartList.appendChild(itemDiv);
  });

  // Show the modal
  cartModal.style.display = 'flex';
}

// Function to remove items from the cart
function removeFromCart(index) {
  cart.splice(index, 1); // Remove the item at the given index
  document.getElementById('cart-count').innerText = cart.length; // Update cart count
  openCart(); // Refresh cart list
}

// Function to close the cart modal
function closeCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.style.display = 'none';
}

// Attach the cart modal to the cart icon
document.querySelector('.fa-cart-shopping').addEventListener('click', openCart);
