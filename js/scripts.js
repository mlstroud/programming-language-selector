
$(document).ready(function() {

  $("#start-form").submit(function(event) {

    $("#start-quiz").fadeOut('slow', function() {
      $("#question-1").fadeIn('slow');
    });

    event.preventDefault();
  });

  $("#form-question-1").submit(function(event) {
    $("#question-1").fadeOut('slow', function() {
      $("#question-2").fadeIn('slow');
    });

    event.preventDefault();
  });

  $("#form-question-2").submit(function(event) {
    $("#question-2").fadeOut('slow', function() {
      $("#question-3").fadeIn('slow');
    });

    event.preventDefault();
  });

  $("#form-question-3").submit(function(event) {
    $("#question-3").fadeOut('slow', function() {
      $("#question-4").fadeIn('slow');
    });

    event.preventDefault();
  });

  $("#form-question-4").submit(function(event) {
    $("#question-4").fadeOut('slow', function() {
      $("#question-5").fadeIn('slow');
    });

    event.preventDefault();
  });
});