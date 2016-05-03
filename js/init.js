(function($){
	$(function(){
	  
    // Parallax Scripts
    function updateParallax() {
      $(".grid-container").each(function () {

        var height = $(this).height();
        var bottom = $(this).offset().top + height;
        var top = $(this).offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop() + windowHeight;
        var fromTop = $(window).scrollTop() - top; 

        if ((bottom > $(window).scrollTop()) && (top < scrollTop)) {             
          var percent = ((scrollTop - top) / (height + windowHeight));
          var startingRotate = -80; // Starting angle of shadow
          var endingRotate = -15; // Ending angle of shadow
          var shadowRotate =  (startingRotate - endingRotate) * (1 - percent) + endingRotate;
          if (shadowRotate < startingRotate) {
            shadowRotate = startingRotate
          }
          else if (shadowRotate > 0) {
            shadowRotate = 0;
          }
          $(this).find('.shadow-box .shadow').css({'-webkit-transform': 'rotate(' + shadowRotate + 'deg)' });
          $(this).find('.shadow-box .shadow').css({'-moz-transform': 'rotate(' + shadowRotate + 'deg)' });
          $(this).find('.shadow-box .shadow').css({'-ms-transform': 'rotate(' + shadowRotate + 'deg)' });
          $(this).find('.shadow-box .shadow').css({'-o-transform': 'rotate(' + shadowRotate + 'deg)' });
          $(this).find('.shadow-box .shadow').css({'transform': 'rotate(' + shadowRotate + 'deg)' });
        }

      });
    }
    updateParallax();
    
    $(window).scroll(function() {
      updateParallax();
    });

	}); // end of document ready
})(jQuery); // end of jQuery name space