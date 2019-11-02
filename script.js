$(document).ready(function(){

//To change navigation bar style
  $(window).scroll(function(){
    if ($(document).scrollTop() > document.documentElement.clientHeight) {
      $('.navbar').addClass('bg-dark');
      $('.navbar').removeClass('text-white');

    } else if ($(document).scrollTop() < document.documentElement.clientHeight) {
      $('.navbar').removeClass('bg-dark');
      $('.navbar').addClass('text-white');
    }
  });

});

//Smooth scrolling effect
var scroll = new SmoothScroll('a[href*="#"]');

//lax.js
window.onload = function () {
  lax.setup() // init

  const updateLax = () => {
    lax.update(window.scrollY)
    window.requestAnimationFrame(updateLax)
  }

  window.requestAnimationFrame(updateLax)
}


 //jQuery DrawSVG
var $doc = $(document),
    $win = $(window),
    $svg = $('#my-svg').drawsvg(),
    max = $doc.height() - $win.height();

$win.on('scroll', function() {
  var p = $win.scrollTop() / max;
  $svg.drawsvg('progress', p);
});


$('body').flowtype();


$('body').flowtype({
  // minimum: 0,
  // maximum: 500,
  minFont: 16,
  maxFont: 18,
  fontRatio: 30
});