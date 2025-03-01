let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name: name, price: price });
  total = total + price;
  showCart();
}

function showCart() {
  let cartList = document.getElementById("cart-items");
  cartList.innerHTML = ""; /* Clear it */
  for (let item of cart) {
    let li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    cartList.appendChild(li);
  }
  document.getElementById("total").textContent = total;
}

function goToPayment() {
  if (cart.length == 0) {
    alert("Your basket is empty! Add something yummy!");
  } else {
    alert("Yay! Pay $" + total + " now! Pretend time!");
  }
}

function chatWithUs() {
  window.open("https://wa.me/07025262985", "_blank");
}