
var topofDiv = $('.wrapper.style1.first').offset().top; //gets offset of header
var height = $('.wrapper.style1.first').outerHeight(); //gets height of header

$(window).scroll(function(){
    if($(window).scrollTop() > (topofDiv + height)){
       $(".logo").addClass('active');
       addActiveNav();
    }
    else{
       $(".logo").removeClass('active');
       removeActiveNav();
    }
});

function addActiveNav() {
  if(screen.width <= 736) {
    $('#menu-bar').addClass('active')
  }
}

function removeActiveNav() {
  if(screen.width <= 736) {
    $('#menu-bar').removeClass('active')
  }
}
