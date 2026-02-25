// Cart array
let cart = [];

// Rest Operator
function addToCart(...items) {
    cart.push(...items);
}

// Add products
addToCart(
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 }
);

// Spread Operator (clone cart)
const clonedCart = [...cart];

// Array Destructuring
const [firstProduct, ...remainingProducts] = clonedCart;

// Display
const outputDiv = document.getElementById("output");

outputDiv.innerHTML = `
    <div class="card">
        <h3>Total Items: ${clonedCart.length}</h3>
        <p><strong>First Product:</strong> ${firstProduct.name} - $${firstProduct.price}</p>
        <p><strong>Remaining Products:</strong></p>
        <ul>
            ${remainingProducts.map(item => `<li>${item.name} - $${item.price}</li>`).join("")}
        </ul>
    </div>
`;