fetch('js/items.json')
    .then(response => response.json())
    .then(data => {
        all_products_json=data;
        const swiper_items_sale = document.getElementById("swiper_items_sale");

        const other_product_swiper = document.getElementById("other_product_swiper");
        const other_product_swiper2 = document.getElementById("other_product_swiper2");

        data.forEach(product => { 
            if(product.old_price){
                swiper_items_sale.innerHTML += `
                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i onclick="addToWishlist(${product.id}, this)"  class="fa-solid fa-heart"></i></span>
                        <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-shopping"></i></span>
                    </div>
                    <span class="sale_persent">
                        ${Math.round(100*((product.old_price - product.price)/product.old_price))}%
                    </span>
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="name_product"><a href="#">${product.name}</a></h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        <p class="old_price">$${product.old_price}</p>
                    </div>
                </div>
                `;
            }
        });
        data.forEach(product => { 
            
                other_product_swiper.innerHTML += `
                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i  class="fa-solid fa-heart"></i></span>
                        <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-shopping"></i></span>
                    </div>
                    
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
                    <h3 class="name_product"><a href="#">${product.name}</a></h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        
                    </div>
                </div>
                `;
            
        });
        data.forEach(product => { 
            
            other_product_swiper2.innerHTML += `
            <div class="product swiper-slide">
                <div class="icons">
                    <span><i  class="fa-solid fa-heart"></i></span>
                    <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-shopping"></i></span>
                </div>
                
                <div class="img_product">
                    <img src="${product.img}" alt="">
                    <img class="img_hover" src="${product.img_hover}" alt="">
                </div>
                <h3 class="name_product"><a href="#">${product.name}</a></h3>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <p><span>$${product.price}</span></p>
                    
                </div>
            </div>
            `;
        
    });
    });

