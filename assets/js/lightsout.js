var previousScroll = 0

$(window).scroll(function() {
  var currentScroll = $(this).scrollTop();
  var opacityAmount = 0.0125

  // if scrolling within first div
  if ($(window).scrollTop() < (topofDiv + height)){
    // downscroll
    if (currentScroll > previousScroll){
      if ($('.overlay').css('opacity') <= 0.75){
        $('.overlay').css({ opacity : "+=" + opacityAmount + 'px'});
      }
    }
    // upscroll
    else {
      if ($(window).scrollTop() <= topofDiv){
        $('.overlay').css({opacity: 0})
        }

      if ($('.overlay').css('opacity') > 0 ){
        $('.overlay').css({ opacity : "-=" + opacityAmount + 'px'});
      }
    }
  previousScroll = currentScroll
  }
});
