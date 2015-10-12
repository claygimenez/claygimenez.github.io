$(document).ready(function() {

  $('.trigger').click(function() {
    scrollVal = $('#featured-projects').offset().top - 136;

    $('html, body').animate({scrollTop: scrollVal}, 'fast');
  });


  var s = Snap("#landing-svg");
  Snap.load("img/landing.svg", function (f) {
    g = f.select("g");
    s.append(g);
    s.attr({
      viewBox : "0 0 1024 768",
      preserveAspectRatio : "xMidYMid slice"
    });
  });
});
