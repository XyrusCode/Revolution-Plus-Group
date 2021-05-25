jQuery(document).ready(function ($) {
    Swiper.prototype.plugins.debugger = function (swiper, params) {
      if (!params) return;
      return {
        onTransitionEnd: function (swiper) {
          var show = $('.swiper-container.two .swiper-slide-active .slider-image').attr('to-show');
          $('.slider-all:not(.slider-hide)').addClass('slider-hide');
          $(show).removeClass('slider-hide');
        }
      };
    };
    var swiper = new Swiper('.swiper-container.two', {
      effect: 'coverflow',
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      debugger: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
      }
    });
  
    $('.swiper-button-next').click(function () {
      swiper.slideNext();
    });
  
    $('.swiper-button-prev').click(function () {
      swiper.slidePrev();
    })
  
    $('.swiper-container.two .swiper-slide a').click(function() {
      var elem = $(this).parent().attr('to-show');
      var scrollTop = $(elem).offset().top - $(window).height() / 2 +  $(elem).outerHeight() / 2;
      $('html, body').stop().animate({scrollTop: scrollTop}, '400');
    })
  });