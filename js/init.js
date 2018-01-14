(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({
      scrollOffset: 50
    });
    $('.slider').slider({
      height: 500,
      indicators: false,
      interval: 4000
    });

    $('select').material_select();

  }); // end of document ready
})(jQuery); // end of jQuery name space