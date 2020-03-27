// Business Logic
function getQuestion(questionNumber, questionBranch) {
  if(questionNumber === 1) {
    return "What are you wanting to create?";
  }
  else if(questionNumber ===2) {
    return "Test Question 2";
  }
};

function getQuestionAnswers(questionNumber) {
  if (questionNumber === 1){
    var answers = ["1One", "1Two", "1Three", "1Four"];
  }
  else if (questionNumber === 2) {
    var answers = ["2One", "2Two", "2Three", "2Four"];
  }
  else if (questionNumber === 3) {
    var answers = ["3One", "3Two", "3Three", "3Four"];
  }
  else if (questionNumber === 4) {
    var answers = ["4One", "4Two", "4Three", "4Four"];
  }
  else if (questionNumber === 5) {
    var answers = ["5One", "5Two", "5Three", "5Four"];
  }

  return answers;
};

// User Interface Logic
$(document).ready(function() {

  // User Starts Quiz
  $("#start-form").submit(function(event) {

    var question = getQuestion(1, 0);
    var answers = getQuestionAnswers(1);
    var i;

    $("#question-1-title").text(question);

    for(i = 0; i < answers.length; i++) {
      $("#question-1-list").append(
        "<div class=\"radio\"" +
          "<label>" +
            "<li>" +
              "<input type=\"radio\" name=\"question-1\" value=\"test\">" +
              answers[i] + 
            "</li>" +
          "</label>" +
        "</div>");
    }

    $("#start-quiz").fadeOut('slow', function() {
      $("#question-1").fadeIn('slow');
    });

    event.preventDefault();
  });

  // User Answers First Question
  $("#form-question-1").submit(function(event) {

    var question = getQuestion(2,0);
    var answers = getQuestionAnswers(2);
    var i;

    $("#question-2-title").text(question);

    for(i = 0; i < answers.length; i++) {
      $("#question-2-list").append(
        "<div class=\"radio\"" +
          "<label>" +
            "<li>" +
              "<input type=\"radio\" name=\"question-2\" value=\"test\">" +
              answers[i] + 
            "</li>" +
          "</label>" +
        "</div>");
    }

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