
var topofDiv = $('.wrapper.style1.first').offset().top; //gets offset of header
var height = $('.wrapper.style1.first').outerHeight(); //gets height of header

$(window).scroll(function(){
    if($(window).scrollTop() > (topofDiv + height)){
       $(".logo").addClass('active');
    }
    else{
       $(".logo").removeClass('active');
    }
});
