// Business Logic
function getQuestion(questionNumber) {
  if(questionNumber === 1){
    return "What are you wanting to create?";
  }
};

function getQuestionOneAnswers() {
  answers = ["One", "Two", "Three", "Four"];
  return answers;
};


// User Interface Logic
$(document).ready(function() {

  $("#start-form").submit(function(event) {

    var question = getQuestion(1);
    var answers = getQuestionOneAnswers();
    var i;

    $("#question-title").text(question);
    for(i = 0; i < answers.length; i++) {
      $("#question-1-list").append(
        "<div class=\"radio\"" +
          "<label>" +
            "<li><input type=\"radio\" name=\"question-1\" value=\"test\">" +
             answers[i] + "</li>" +
          "</label>" +
        "</div>");
    }

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

  $("#form-question-5").submit(function(event) {
    $("#question-5").fadeOut('slow', function() {
      $("#result").fadeIn('slow');
    });

    event.preventDefault();
  });

  $("#form-restart").submit(function(event) {
    $("#result").fadeOut('slow', function() {
      $("#question-1").fadeIn('slow');
    });

    event.preventDefault();
  });
});