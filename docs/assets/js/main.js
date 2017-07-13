(function($) {

  var speed = 350;

  $(document).ready( function() {

    console.log('hi');


    $('.sidebar__item').on('click', function(event) {
      event.preventDefault();

      var $this = $(this);

      if ( $this.hasClass('sidebar__item-toggle') ) {
        $this.toggleClass('open').next('.sidebar__item-submenu').slideToggle(speed);
        return;
      }

      var target = $this.attr('href');
      var offset = ( $(target).offset().top - 120 );

      history.replaceState(undefined, undefined, target);

      $('html, body').animate({
        scrollTop: offset
      }, 500);



    });

  });
})(jQuery); // Fully reference jQuery after this point.