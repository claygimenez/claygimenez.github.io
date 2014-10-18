$(document).ready(function() {

  $('.trigger').click(function() {
    scrollVal = $('#featured-projects').offset().top - 136;

    $('html, body').animate({scrollTop: scrollVal}, 'fast');
  });

});
