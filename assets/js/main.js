(function ($) {
  'use strict';
  $(document).ready(function(){
    // $('.statistic-counter').counterUp({
    // delay: 10,
    // time: 2000
    // });
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
  });
})(jQuery);