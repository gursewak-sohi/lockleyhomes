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

  


})();
 