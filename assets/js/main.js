(function ($) {
  'use strict';
  $(document).ready(function(){
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
      dots: false,
      arrows: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  });
})(jQuery);