console.log('oh hi');

(function ($) {

  $.getJSON('raw.json').done(function (raw) {
    console.log(raw);
  }).fail(function () {
    console.log('error');
  });
})(jQuery); // Fully reference jQuery after this point.