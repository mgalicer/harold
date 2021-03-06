(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({
      scrollOffset: 100
    });
    $('.slider').slider({
      height: $(window).height(),
      indicators: false,
      interval: 4000
    });

    $('select').material_select();

        //contact form actions
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    $(form).submit(function(event) {
      // Stop the browser from submitting the form.
      event.preventDefault();

      var formData = $(form).serialize();

      $.ajax({
          type: 'POST',
          url: $(form).attr('action'),
          data: formData
      }).done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
      }).fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
    });


    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
