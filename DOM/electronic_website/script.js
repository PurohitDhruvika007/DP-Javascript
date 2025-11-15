// Product data
const products = [
  {
    id: 101,
    title: "WD 2TB Portable Drive",
    price: 64,
    description: "USB 3.0 and USB 2.0 compatibility, fast data transfers and high capacity.",
    image: "https://m.media-amazon.com/images/I/510+J06fz0L._UF1000,1000_QL80_.jpg",
    qty: 1
  },
  {
    id: 102,
    title: "SanDisk 1TB SSD",
    price: 109,
    description: "Boosts performance with read/write speeds up to 535MB/s and 450MB/s.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtaiLd6NUdibfGxCmp53gaDoheRM3ixel8kg&s",
    qty: 1
  },
  {
    id: 103,
    title: "Silicon Power SSD 256GB",
    price: 109,
    description: "Slim 7mm design with SLC cache, ideal for ultrabooks and notebooks.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1FWVBhdaa-LjFK-SC5xuTnaLqtuDYU9rug&s",
    qty: 1
  },

  {
    id: 107,
    title: "Logitech MX Master 3",
    price: 99.99,
    description: "Advanced ergonomic mouse with ultra-fast scrolling and USB-C.",
    image: "https://m.media-amazon.com/images/I/51ilqnM5UKL._UF1000,1000_QL80_.jpg",
    qty: 1
  },
  {
    id: 108,
    title: "Apple AirPods Pro 2",
    price: 249,
    description: "Active Noise Cancellation and Transparency Mode with MagSafe case.",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
    qty: 1
  },
  {
    id: 109,
    title: "Google Nest Hub 2",
    price: 89.99,
    description: "Smart home display with Google Assistant and motion sensor.",
    image: "https://m.media-amazon.com/images/I/61p+HaIkPCL._UF1000,1000_QL80_.jpg",
    qty: 1
  },
  {
    id: 110,
    title: "TP-Link AX50 Router",
    price: 129.99,
    description: "Dual-band router with 3 Gbps speed and OFDMA technology.",
    image: "https://fgtechstore.com/wp-content/uploads/2024/12/1-43.jpg",
    qty: 1
  },
  {
    id: 111,
    title: "Echo Dot 5th Gen",
    price: 49.99,
    description: "Smart speaker with Alexa and improved sound quality.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuyxuEMWfETRKSvUzA-mqpiNOTSSgdFB4Dw&s",
    qty: 1
  },
  {
    id: 112,
    title: "HP Keyboard & Mouse",
    price: 39.99,
    description: "Full-size wireless keyboard with silent-click mouse.",
    image: "https://m.media-amazon.com/images/I/61C0WEaEYsL.jpg",
    qty: 1
  },
  {
    id: 113,
    title: "Canon PIXMA Printer",
    price: 79.99,
    description: "All-in-one inkjet printer with wireless and mobile printing.",
    image: "https://m.media-amazon.com/images/I/51TgRks3kIL._UF1000,1000_QL80_.jpg",
    qty: 1
  },

  {
    id: 116,
    title: "Roku Stick 4K",
    price: 49.99,
    description: "4K HDR streaming with voice remote and TV controls.",
    image: "https://m.media-amazon.com/images/I/61NcquKe00L.jpg",
    qty: 1
  },
  {
    id: 117,
    title: "Dell 24\" LED Monitor",
    price: 149.99,
    description: "1920x1080 resolution with HDMI and VGA ports.",
    image: "https://i.dell.com/is/image/DellContent//content/dam/images/products/electronics-and-accessories/dell/monitors/s-series/s2421hn/s2421hn-cfp-00025rf095-gy.psd?fmt=pjpg&pscan=auto&scl=1&wid=3264&hei=2974&qlt=100,1&resMode=sharp2&size=3264,2974&chrss=full&imwidth=5000",
    qty: 1
  },
  {
    id: 118,
    title: "JBL Flip 6 Speaker",
    price: 129.95,
    description: "Portable speaker with deep bass and 12-hour battery.",
    image: "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw593abf39/2_JBL_FLIP6_3_4_RIGHT_BLACK_30195_x1.png?sw=535&sh=535",
    qty: 1
  },
  {
    id: 119,
    title: "Lenovo IdeaPad Slim 3",
    price: 599.99,
    description: "15.6\" FHD, 8GB RAM, 512GB SSD, Windows 11 Home.",
    image: "https://p1-ofp.static.pub/fes/cms/2022/12/05/27rpp8quw7zh1sc2d8401p9timcww1411167.png",
    qty: 1
  },
  {
    id: 120,
    title: "ASUS B550-F Motherboard",
    price: 189.99,
    description: "Supports AMD Ryzen, PCIe 4.0, Aura Sync RGB lighting.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_dGEjHJE5tsu9jMd8bc2Wcl60b8j2-vbHA&s",
    qty: 1
  }
];

const product_list = document.querySelector("#product");
const carts = document.querySelector("#cart");
const emptyCartMessage = document.querySelector("#empty-cart-message");
const cartCount = document.querySelector("#cart-count");
let cart_list = JSON.parse(localStorage.getItem("local")) ?? [];
const subTotal = document.querySelector("#subTotal");
const total = document.querySelector("#total");
const tax = document.querySelector("#tax");
const checkout = document.querySelector("#Checkout");

// Initialize the application
function init() {
  product_function();
  cart_function();
  updateCartCount();
}

// Render products
// Render products
function product_function() {
  products.map((product) => {
    let productBox = document.createElement('div');
    productBox.className = "product-box";

    let img = document.createElement('img');
    img.className = "product-image";
    img.src = product.image;
    img.alt = product.title;

    let productContent = document.createElement('div');
    productContent.className = "product-content";

    let title = document.createElement('h4');
    title.className = "product-title";
    title.textContent = product.title;

    let price = document.createElement('div');
    price.className = "product-price";
    price.textContent = "$" + product.price;

    let description = document.createElement('p');
    description.className = "product-description";
    description.textContent = product.description;

    let button = document.createElement('button');
    button.className = "btn btn-add-cart";
    button.innerHTML = '<i class="fas fa-cart-plus me-2"></i>Add to Cart';

    button.onclick = () => {
      addToCart(product);
      showAddToCartAnimation(button);
    };

    productContent.appendChild(title);
    productContent.appendChild(price);
    productContent.appendChild(description);
    productContent.appendChild(button);

    productBox.appendChild(img);
    productBox.appendChild(productContent);

    product_list.appendChild(productBox);
  });
}

// Render cart
function cart_function() {
  let Total = 0;
  carts.innerHTML = "";

  if (cart_list.length === 0) {
    emptyCartMessage.style.display = "block";
  } else {
    emptyCartMessage.style.display = "none";

    cart_list.map((cart, index) => {
      let cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      let img = document.createElement("img");
      img.className = "cart-item-image";
      img.src = cart.image;
      img.alt = cart.title;

      let details = document.createElement("div");
      details.className = "cart-item-details";

      let title = document.createElement("div");
      title.className = "cart-item-title";
      title.textContent = cart.title;

      let price = document.createElement("div");
      price.className = "cart-item-price";
      price.textContent = "$" + (cart.price * cart.qty).toFixed(2);

      details.appendChild(title);
      details.appendChild(price);

      let actions = document.createElement("div");
      actions.className = "cart-item-actions";

      let decreaseBtn = document.createElement("span");
      decreaseBtn.className = "qty-btn";
      decreaseBtn.innerHTML = '<i class="fas fa-minus"></i>';
      decreaseBtn.onclick = () => {
        decreaseQuantity(index);
      };

      let qtyValue = document.createElement("span");
      qtyValue.className = "qty-value";
      qtyValue.textContent = cart.qty;

      let increaseBtn = document.createElement("span");
      increaseBtn.className = "qty-btn";
      increaseBtn.innerHTML = '<i class="fas fa-plus"></i>';
      increaseBtn.onclick = () => {
        increaseQuantity(index);
      };

      let removeBtn = document.createElement("button");
      removeBtn.className = "btn-remove";
      removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
      removeBtn.onclick = () => {
        removeFromCart(index);
      };

      actions.appendChild(decreaseBtn);
      actions.appendChild(qtyValue);
      actions.appendChild(increaseBtn);
      actions.appendChild(removeBtn);

      cartItem.appendChild(img);
      cartItem.appendChild(details);
      cartItem.appendChild(actions);

      carts.appendChild(cartItem);

      Total += (cart.price * cart.qty);
    });
  }

  subTotal.textContent = "$" + Total.toFixed(2);
  let taxValue = Total * (18 / 100);
  tax.textContent = "$" + taxValue.toFixed(2);
  total.textContent = "$" + (Total + taxValue).toFixed(2);

  updateCartCount();
  localStorage.setItem("local", JSON.stringify(cart_list));
}

// Add to cart function
function addToCart(product) {
  let isExist = false;
  cart_list.map((cart) => {
    if (cart.id == product.id) {
      cart.qty++;
      isExist = true;
    }
  });

  if (!isExist) {
    cart_list.push({ ...product });
  }

  cart_function();
}

// Remove from cart function
function removeFromCart(index) {
  cart_list.splice(index, 1);
  cart_function();
}

// Decrease quantity
function decreaseQuantity(index) {
  if (cart_list[index].qty > 1) {
    cart_list[index].qty--;
  } else {
    cart_list.splice(index, 1);
  }
  cart_function();
}

// Increase quantity
function increaseQuantity(index) {
  cart_list[index].qty++;
  cart_function();
}

// Update cart count in navbar
function updateCartCount() {
  let count = 0;
  cart_list.forEach(item => {
    count += item.qty;
  });
  cartCount.textContent = count;
}

// Add to cart animation
function showAddToCartAnimation(button) {
  button.innerHTML = '<i class="fas fa-check me-2"></i>Added!';
  button.classList.add('btn-success');

  setTimeout(() => {
    button.innerHTML = '<i class="fas fa-cart-plus me-2"></i>Add to Cart';
    button.classList.remove('btn-success');
  }, 1500);
}

// Checkout function
checkout.addEventListener("click", () => {
  if (cart_list.length == 0) {
    showNotification("Your cart is empty. Add some products first!", "warning");
  } else {
    showNotification("Checkout successful! Thank you for your purchase.", "success");
    cart_list = [];
    localStorage.removeItem("local");
    cart_function();
  }
});

// Show notification
function showNotification(message, type) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.zIndex = '9999';
  notification.style.minWidth = '300px';
  notification.innerHTML = `
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;

  document.body.appendChild(notification);

  // Auto remove after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}

// Initialize the app
init();
