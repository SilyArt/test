jQuery(document).ready(function($) {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) { 
            $('.logo').addClass('shrink');
        }
        else{
            $('.logo').removeClass('shrink');
        }
    });
});


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementByClass("navbar").style.padding = "30px 10px";
    document.getElementByClass("logo").style.fontSize = "25px";
    document.getElementByCLass("")
  } else {
    document.getElementByClass("navbar").style.padding = "80px 10px";
    document.getElementByClass("logo").style.fontSize = "35px";
  }
}