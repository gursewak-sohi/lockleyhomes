(function() {

  // JS Loaded
  let body = document.body;
  body.classList.add('js-loaded');

  // LightBox Init
  const lightbox = GLightbox();  
 
  // AOS Init
  AOS.init({
    duration: 800, 
    once: true,   
    offset: 100,
  });

  // Hero Swiper
  document.querySelectorAll(".hero-swiper").forEach((container) => {
      const swiperEl = container.querySelector(".swiper");
  
      new Swiper(swiperEl, {
          slidesPerView: 1,
          speed: 800,
          autoplay: {
            delay: 5000,
          },
          effect: "fade",
          spaceBetween: 0,
          grabCursor: true,
          loop: true
      });
  });


  // Properties Details Swiper
  document.querySelectorAll(".property-details-swiper").forEach((container) => {
    const swiperEl = container.querySelector(".swiper"),
          nextEl = container.querySelector(".swiper-button-next"),
          prevEl = container.querySelector(".swiper-button-prev");


      new Swiper(swiperEl, {
          slidesPerView: 1,
          speed: 800,
          autoplay: {
            delay: 5000,
          },
          spaceBetween: 0,
          grabCursor: true,
          loop: true,
          navigation: {
            nextEl: nextEl,
            prevEl: prevEl,
          },
      });
  });

  // More Properties Swiper
  document.querySelectorAll(".more-property-swiper").forEach((container) => {
    const swiperEl = container.querySelector(".swiper"),
          paginationEl = container.querySelector(".swiper-pagination");

      new Swiper(swiperEl, {
          slidesPerView: 1,
          spaceBetween: 12,
          autoplay: {
            delay: 5000,
          },
          pagination: {
            el: paginationEl
          },
          grabCursor: true,
          loop: true,
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          },
      });
  });
  


})();
 