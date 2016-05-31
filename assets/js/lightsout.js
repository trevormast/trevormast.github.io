
var overlay = $('div.overlay');


var previousScroll = 0;
fadingIn = false;
fadingOut = false;

$(document).ready(function(){

  $(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    var fadeDuration = 500

    // if scrolling within first div
    if ($(window).scrollTop() < (topofDiv + height)){
      // downscroll
      if (currentScroll > previousScroll){
        if ($(window).scrollTop() > (topofDiv + (height/2))){
          if (!fadingIn){
            overlay.fadeTo(fadeDuration, 0.125, function(){
              fadingIn = false;
            });
            fadingIn = true;
          }
        }
      }
      // upscroll
      else {
        if(!fadingOut){
          overlay.fadeTo(fadeDuration, 1, function(){
            fadingOut = false;
          });
          fadingOut = true;
        }
      }
    }
    previousScroll = currentScroll;
  });
});



