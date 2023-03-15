// Arreglo para almacenar los productos en el carrito
var cartItems = [];

function addToCart(button) {
  // Obtener el nombre del producto y su precio
  var productName = button.getAttribute("data-producto");
  var productPrice = getPrice(productName);
  
  // Obtener la cantidad del producto y validar que sea un número entero
  var quantityInput = document.getElementById("cantidad-" + productName);
  var quantity = parseInt(quantityInput.value);
  if (isNaN(quantity) || quantity < 1 || quantity > 10) {
    alert("La cantidad debe ser un número entero entre 1 y 10.");
    return;
  }
  
  // Calcular el subtotal del producto y actualizar la etiqueta correspondiente
  var subtotal = quantity * productPrice;
  var subtotalElement = button.parentElement.getElementsByClassName("subtotal")[0];
  subtotalElement.innerHTML = "$" + subtotal.toFixed(2);
  
  // Agregar el producto al carrito
  var item = {
    name: productName,
    price: productPrice,
    quantity: quantity,
    subtotal: subtotal
  };
  cartItems.push(item);
  
  // Actualizar el total del carrito
  updateCartTotal();
}

// Función para actualizar el total del carrito
function updateCartTotal() {
  // Iterar sobre los productos en el carrito para calcular la cantidad de productos y el total a pagar
  var cartCount = 0;
  var cartTotal = 0;
  for (var i = 0; i < cartItems.length; i++) {
    cartCount += cartItems[i].quantity;
    cartTotal += cartItems[i].subtotal;
  }
  
  // Actualizar las etiquetas correspondientes con la cantidad de productos y el total a pagar
  document.getElementById("product-count").innerText = cartCount;
  document.getElementById("total-price").innerText = "$" + cartTotal.toFixed(2);
}

// Función para obtener el precio de un producto
function getPrice(productName) {
  switch (productName) {
    case "t-Bone":
      return 220;
    case "rib eye":
      return 210;
    case "back ribs":
      return 230;
    case "falda":
      return 180;
    case "pansa de res":
      return 205;
    case "tripa de res":
      return 165;
    case "pata de res":
      return 150;
    case "pechuga":
      return 300;
    case "alitas":
      return 90;
    default:
      return 0;
  }
}
