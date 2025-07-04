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
    id: 104,
    title: "WD 4TB PS4 Drive",
    price: 114,
    description: "High-capacity external drive optimized for PS4 gaming.",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    qty: 1
  },
  {
    id: 105,
    title: "Acer 21\" HD Monitor",
    price: 599,
    description: "Ultra-thin design with 75Hz refresh rate and Radeon FreeSync.",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    qty: 1
  },
  {
    id: 106,
    title: "Samsung 49\" QLED Monitor",
    price: 999.99,
    description: "Super ultrawide QLED display with HDR and 1ms response time.",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
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
    id: 114,
    title: "Sony XM5 Headphones",
    price: 399.99,
    description: "Industry-leading noise cancelation with 30 hours battery life.",
    image: "https://www.sony.co.in/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    qty: 1
  },
  {
    id: 115,
    title: "Anker 10000mAh PowerBank",
    price: 25.99,
    description: "Ultra-compact portable power bank with high-speed charging.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9BW58pv5WxVbREOLMf8wq7WofVtWsy9Eg0Q&s",
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


const product_list= document.querySelector("#product");
const carts=document.querySelector("#cart");
let cart_list= JSON.parse(localStorage.getItem("local")) ?? [];
const subTotal=document.querySelector("#subTotal");
const total=document.querySelector("#total");
const tax=document.querySelector("#tax");
const checkout=document.querySelector("#Checkout");

function product_function()
{
  products.map((product)=>{
    let productBox=document.createElement('div');
productBox.className="product-box";
let img=document.createElement('img');
img.className="img-fluid";
img.src=product.image;
let title=document.createElement('h4');
title.textContent=product.title;
title.className="mt-3";
let price=document.createElement('h3')
price.textContent="$" +product.price;
let description=document.createElement('p');
description.textContent=product.description;
let button=document.createElement('button');
button.textContent="Add to cart";
button.className="btn btn-primary";

button.onclick=()=>{
  addToCart(product);
}

productBox.appendChild(img);
productBox.appendChild(title);
productBox.appendChild(price);
productBox.appendChild(description);
productBox.appendChild(button);

product_list.appendChild(productBox);

});
}
function cart_function()
{
  let Total=0;
  carts.innerHTML="";
  
  cart_list.map((cart,index)=>{
   let mainBox=document.createElement("div");
    mainBox.className="main-box ";
    let cartBox=document.createElement("div");
    cartBox.className="cart-box ";
    let main=document.createElement("div");
    main.className="d-md-flex justify-content-around";
    let img=document.createElement("img");
    img.className="cart-img "
    img.src=cart.image;
    let content=document.createElement("div");
    content.className="ps-3 d-md-flex flex-column justify-content-start";
    let title=document.createElement("h6");
    title.textContent=cart.title;
    let quantity=document.createElement("h6");
    quantity.textContent="Qty:"+cart.qty;
    let price=document.createElement("h4");
    price.textContent="$"+cart.price;
    let deleteBtn=document.createElement("button");
    deleteBtn.className="col-8 btn btn-danger";
    deleteBtn.textContent="delete";

    deleteBtn.onclick=()=>{
      removeFromCart(index);
      localStorage.setItem("local",JSON.stringify(cart_list));
    }

    content.appendChild(title);
    content.appendChild(quantity);
    content.appendChild(price);
    content.appendChild(deleteBtn);

    main.appendChild(img);
    main.appendChild(content);

    cartBox.appendChild(main);
    
    mainBox.appendChild(cartBox);
    carts.appendChild(mainBox);
    Total+=(cart.price*cart.qty);



  })


      subTotal.textContent="$"+Total.toFixed(2);
      taxValue=Total*(18/100)
      tax.textContent="$"+taxValue.toFixed(2);
      total.textContent="$"+(Total+taxValue).toFixed(2);
}
function addToCart(product)
{
  isExist=false
  cart_list.map((cart)=>{
    if(cart.id==product.id)
    {
      cart.qty++;
      isExist=true;
    }
  })
  if(isExist==false)
  {
  cart_list.push(product)
  }
  cart_function();
        localStorage.setItem("local",JSON.stringify(cart_list));
  
}
function removeFromCart(index)
{
 
    if(cart_list[index].qty==1)
    {
      cart_list.splice(index,1);
    }
    else
    {
      cart_list[index].qty--;
    }
  cart_function();
      localStorage.setItem("local",JSON.stringify(cart_list));
}
product_function();
cart_function();
checkout.addEventListener("click",()=>{
  if(cart_list.length==0)
  {
    alert("Cart list is empty");
  }
  else
  {
    alert("Checkout successfully ! thank you for purchase");
    cart_list=[];
    localStorage.removeItem("local");
    cart_function();
  }
});


 