$(document).ready(function(){

//To change navigation bar style

  $(window).scroll(function(){
    if ($(document).scrollTop() > 50) {
      $('.navbar').addClass('bg-dark');
      $('.navbar').removeClass('text-white');

    } else if ($(document).scrollTop() < 50) {
      $('.navbar').removeClass('bg-dark');
      $('.navbar').addClass('text-white');
    }
  });

//To set active section

//   $(".nav-item").on("click", function(){
//     $(".navbar-nav").find(".active").removeClass("active");
//     $(this).addClass("active");
//   });
//
// });

$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
  $(".navbar-nav").find(".active").removeClass("active");
      $(this).addClass("active");
})


//Smooth scrolling effect

var scroll = new SmoothScroll('a[href*="#"]');
