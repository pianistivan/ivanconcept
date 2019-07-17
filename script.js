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

});


//Music Sine Wave Animation
(function() {


  var run = Pts.quickStart("#pt", "#000000"); //background color: white

  run( (time, ftime) => {

    // create a line and get 200 interpolated points
    let offset = space.size.$multiply(1).y;
    let line = new Group( new Pt( 0, offset ), new Pt( space.size.x, space.size.y-offset ) );
    let pts = Line.subpoints( line, 150 );

    // get perpendicular unit vectors from each points on the line
    let pps = pts.map( (p) => Geom.perpendicular( p.$subtract( line[0] ).unit() ).add(p) );

    let angle = space.pointer.x/space.size.x * Const.two_pi * 2;

    // draw each perpendicular like a sine-wave
    pps.forEach( (pp, i) => {
      let t = i/200 * Const.two_pi + angle + Num.cycle(time%10000/10000);

      if (i%2===0) {
        pp[0].to( Geom.interpolate( pts[i], pp[0], Math.sin( t )*offset*2 ) );
        pp[1].to( pts[i] );
        form.stroke("#234CA6", 2).line(pp);
      } else {
        pp[0].to( pts[i] );
        pp[1].to( Geom.interpolate( pts[i], pp[1], Math.cos( t )*offset*2 ) );
        form.stroke("#F9D695", 2).line(pp);
      }

    });

  });

})();


//Smooth scrolling effect
var scroll = new SmoothScroll('a[href*="#"]');


//Typewriter effect
const instance = new TypeIt('#element', {
  strings: ['This is my string!'],
  waitUntilVisible: true
}).go();

new TypeIt('#type-effect', {
  strings: 'Debugging with passion.',
  waitUntilVisible: true
}).go();
