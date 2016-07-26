function divOrder() {
  console.log('width' + $(window).width())
  if ($(window).width() <= 736) {
    console.log('satisfied width condition')
    console.log($('.description-left').before('<div class="4u 12u(mobile) fugpic-mobile"><article class="box style2"><a href="http://fugacio.us/" class="image featured"><img src="images/fugacious.png" alt="" id="fugacious" /></a></article></div>'));
  }
};

$(window).load(divOrder());
