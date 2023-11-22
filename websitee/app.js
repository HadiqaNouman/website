// **************cart page*************
function addToCart(productId) {
    // You can add more logic here to handle adding products to the cart
    // For simplicity, this example just adds a new item to the cart list

    const productName = `Product ${productId}`;
    const productPrice = 10.99; // Replace with the actual price

    const cartList = document.getElementById('cart-list');
    const totalElement = document.getElementById('total-price');

    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <span>${productName}</span>
        <span>$${productPrice.toFixed(2)}</span>
    `;

    cartList.appendChild(cartItem);

    // Update total price
    const totalPrice = calculateTotalPrice();
    totalElement.textContent = `$${totalPrice.toFixed(2)}`;
}

function calculateTotalPrice() {
    // You can implement logic to calculate the total price based on the items in the cart
    // For simplicity, this example assumes a fixed product price

    const productPrice = 10.99; // Replace with the actual price
    const cartItems = document.querySelectorAll('.cart-item');

    let totalPrice = 0;

    cartItems.forEach(item => {
        totalPrice += productPrice;
    });

    return totalPrice;
}
