let cart = [];

const cartCountElement = document.getElementById('cart-count');
const totalPriceElement = document.getElementById('total-price');
const cartItemsElement = document.getElementById('cart-items');
const cartModal = document.getElementById('cart-modal');
const closeCartButton = document.getElementById('close-cart');
const viewCartButton = document.getElementById('viewCart');
const checkoutButton = document.getElementById('checkout');

// Барааг картанд нэмэх
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = parseInt(productElement.querySelector('p').textContent.replace('Үнэ: ', '').replace('₮', ''));

        // Карзанд бараа нэмэх
        cart.push({ id: productId, name: productName, price: productPrice });
        updateCart();
    });
});

// Карзны тоо ба нийт үнийн дүнг шинэчлэх
function updateCart() {
    const cartCount = cart.length;
    cartCountElement.textContent = cartCount;

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = totalPrice + '₮';

    updateCartItems();
}

// Карзны бүтээгдэхүүнүүдийг харуулах
function updateCartItems() {
    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}₮`;
        cartItemsElement.appendChild(li);
    });
}

// Карзыг харах
viewCartButton.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

// Карзыг хаах
closeCartButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Төлбөр хийх
checkoutButton.addEventListener('click', () => {
    alert('Төлбөрийн системийг хожим нэмж болно!');
});
