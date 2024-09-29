/* Configure close/open cart */
let cart = document.querySelector(".cart");
let overlay = document.querySelector(".overlay");

function open_cart() {
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
    cart.classList.add("open");
}

function close_cart() {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    cart.classList.remove("open");
}
wish = document.getElementById("wishlist");
function open_wish() {
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
    wish.classList.add("open");
}

function close_wish() {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    wish.classList.remove("open");
}

let menu = document.getElementById("menu");
function open_menu(){
    menu.classList.add('open');
    console.log('open');
}
function close_menu(){
    console.log('close');
    menu.classList.remove('open');
}

let count_item = document.querySelector('.count_cart');
let count_item_inner = document.querySelector('.count_inside_cart');
let price_cart = document.querySelector('.price_cart_total');
let price_head = document.querySelector('.price_cart_head');

var all_products_json;
var items_in_cart = document.querySelector('.items_in_cart');
let product_cart = [];

function addToCart(id, btn) {
    product_cart.push(all_products_json[id]);
    btn.classList.add('active');
    getCartItems();
}

function getCartItems() {
    let total_price = 0;
    let items_c = "";

    for (let i = 0; i < product_cart.length; i++) { 
        items_c += `
        <div class="item_cart">
            <img class="pic" src="${product_cart[i].img}" alt="">
            <div class="content">
                <h4>${product_cart[i].name}</h4>
                <p class="price_cart">${product_cart[i].price}$</p>
            </div>
            <button class="delete_item"><i onclick="remove_from_cart(${i})" class="fa-solid fa-trash"></i></button>
        </div>`;
        
        total_price += product_cart[i].price;
    }

    items_in_cart.innerHTML = items_c;

    // Update the total price and count after the loop
    price_head.innerHTML = total_price + "$";
    price_cart.innerHTML = total_price + "$";
    count_item.innerHTML = product_cart.length;
    count_item_inner.innerHTML = ` ${product_cart.length} Item(s) in Cart`;

    // Reset total and count if cart is empty
    if (product_cart.length === 0) {
        price_head.innerHTML = "0$";
        price_cart.innerHTML = "0$";
        count_item.innerHTML = "0";
        count_item_inner.innerHTML = "( 0 Items in Cart )";
    }
}

function remove_from_cart(index) {
    product_cart.splice(index, 1);
    getCartItems();
    
    let addToCartButton = document.querySelectorAll('.fa-cart-shopping');
    for (let i = 0; i < addToCartButton.length; i++) {
        addToCartButton[i].classList.remove('active');
        product_cart.forEach(product => {
            if (product.id === all_products_json[i].id) { 
                addToCartButton[i].classList.add('active');
            }
        });
    }
}

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start', 
        inline: 'nearest'
    });
}

// back_to_top func
let back_to_top = document.querySelector('.back_to_top');
back_to_top.addEventListener('click', () => {
    scrollToSection('header');
});



//wish list

// Wishlist Variables
let count_item_wish = document.querySelector('.count_inside_wish');
let items_in_wish = document.querySelector('.items_in_wish');
let product_wish = [];


function addToWishlist(id, btn) {
    
    if (!product_wish.some(item => item.id === all_products_json[id].id)) {
        product_wish.push(all_products_json[id]);
        
    }
    getWishlistItems();
}


function getWishlistItems() {
    let items_w = "";

    for (let i = 0; i < product_wish.length; i++) {
        items_w += `
        <div class="item_wish">
            <img class="pic" src="${product_wish[i].img}" alt="">
            <div class="content">
                <h4>${product_wish[i].name}</h4>
                <p class="price_cart">${product_wish[i].price}$</p>
            </div>
            <button class="delete_item"><i onclick="remove_from_wishlist(${i})" class="fa-solid fa-trash fa-trash-wish"></i></button>
        </div>`;
    }

    items_in_wish.innerHTML = items_w;
    count_item_wish.innerHTML = `${product_wish.length} Item(s) in Wishlist`;
}


function remove_from_wishlist(index) {
    const removedProduct = product_wish[index];
    product_wish.splice(index, 1); 
    
    getWishlistItems(); 


    let addToWishButtons = document.querySelectorAll('.fa-trash-wish'); 
    addToWishButtons.forEach((btn, i) => {
        
        if (all_products_json[i] && all_products_json[i].id === removedProduct.id) {
            btn.classList.remove('active');
        }
    });
}
