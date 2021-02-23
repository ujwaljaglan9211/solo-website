(function ($) {
  'use strict';
  $(document).ready(function(){
    // counter
    $('.statistic-counter').each(function () {
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
    // testimonials slider
    $('.testimonials-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      infinite:true,
      dots: false,
      arrows: true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    // aos library initialize
    AOS.init({
      duration: 500,
      easing: "ease-in-out"
    });
    // cross icon for mobile menu
    $('.navbar-toggler').click(function() {
      $('.navbar-toggler-icon').toggleClass('close');
    });
  });
})(jQuery);