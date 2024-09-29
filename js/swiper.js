let windowWidth = window.innerWidth;
let numberOfSlides;

if (windowWidth >= 1200) {
    numberOfSlides = 4; 
} else if (windowWidth >= 768) {
    numberOfSlides = 3; 
} else {
    numberOfSlides = 1;
}
/* swiper slide side-bar */
var swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    autoplay:{
          delay: 2500,
          disableOnInteraction: false,
    }
  });


  




  /* swiper slide sale-slide */
var swiper = new Swiper(".sale_section", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    slidesPerView:numberOfSlides,
    spaceBetween: 30,
    autoplay:{
          delay: 5000,
          disableOnInteraction: false,
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    breakpoints:{
      1300:{
        slidesPerView:5
      },
      900:{
        slidesPerView:4
      },
      700:{
        slidesPerView:3
      },
      500:{
        slidesPerView:2
      },
      
      300:{
        slidesPerView:1
    }
  }
  });


/* swiper for computers&laptops */
  var swiper = new Swiper(".product_swip", {
    
    slidesPerView:numberOfSlides,
    spaceBetween: 30,
    autoplay:{
          delay: 5000,
          disableOnInteraction: false,
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    breakpoints:{
      
      1100:{
        slidesPerView:4
      },
      870:{
        slidesPerView:3
      },
      500:{
        slidesPerView:2
      },
      
      200:{
        slidesPerView:1
    }
  }
    
  });
  