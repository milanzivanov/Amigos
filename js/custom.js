$(function() {
  mobileNav();
  scrollToContent();
});
// mobile navigation
function mobileNav() {
  $('.mobile_nav__toggle').on('click', function(){
    var status = $(this).hasClass('is_open');
    if(status){ $('.mobile_nav__toggle, .nav_mobile').removeClass('is_open'); }
    else { $('.mobile_nav__toggle, .nav_mobile').addClass('is_open'); }
  });
}
// scroll on navigation
function scrollToContent() {
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	  // scroll to arrow down
	  $(".direction_btn").click(function(event) {
	  	$("html, body").animate({
	  		scrollTop: $(".js--contact").offset().top,
	  	}, 1000);
	  });
   $(".direction_btn__up").click(function(event) {
     $("html, body").animate({
         scrollTop: $(".js--top").offset().top,
     }, 500);
   });
	});
};

$(document).ready(function() {
   //iframe
   $(".video-iframe").fancybox({
       'width'             : '50%',
       'height'            : '50%',
       'autoScale'         : false,
       'transitionIn'      : 'none',
       'transitionOut'     : 'none',
       'closeClick'        :  true,
       'type'              : 'iframe'
   });
  // Activate fancyBox
  $(".video-iframe")
      //.attr('src', 'https://www.youtube.com/embed/Mv1ZsSrE03o?autoplay=1')
      .fancybox({
          //padding : 0
      });
  // Launch fancyBox on first element
  //$(".video-iframe").eq(0).trigger('click');
});


$(function () {
    $('.section_one').css({
        'height': ($(window).height()) + 'px'
    });
    $(window).resize(function () {
        $('section_one').css({
            'height': ($(window).height()) + 'px'
        });
    });
});


$(window).load(function () {
    $(".loader").fadeOut();
    $(".loader_wrapper").delay(350).fadeOut("slow");
});

/*jQuery.noConflict();
(function ($) {
    "use strict";
});*/



