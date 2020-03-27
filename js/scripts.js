// Business Logic
var csharp = 0;
var jscript = 0;
var swift = 0;
var python = 0;

function getQuestion(questionNumber, questionBranch) {
  if (questionNumber === 1) {
    return "What are you wanting to do?";
  }
  else if (questionNumber ===2) {
    return "Test Question 2";
  }
  else if (questionNumber === 3) {
    return "Test Question 3";
  }
  else if (questionNumber === 4) {
    return "Test Question 4";
  }
  else if (questionNumber === 5) {
    return "Test Question 5";
  }
  else {
    return "Error: Invalid Question";
  }
};

function getQuestionAnswers(questionNumber) {
  if (questionNumber === 1){
    var answers = ["Make a game", "Create a website", "Make an app", "Make a server", "Learn programming"];
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
  else {
    var answers = null;
  }

  return answers;
};

function getRadioValues(questionNumber) {
  if (questionNumber === 1) {
    var values = ["C#", "JavaScript", "Ruby", "Python", "Python"];
  }
  else if (questionNumber === 2) {
    var values = ["C#", "JavaScript", "Ruby", "Python", "Python"];
  }
  else if (questionNumber === 3) {
    var values = ["C#", "JavaScript", "Ruby", "Python", "Python"];
  }
  else if (questionNumber === 4) {
    var values = ["C#", "JavaScript", "Ruby", "Python", "Python"];
  }
  else if (questionNumber === 5) {
    var values = ["C#", "JavaScript", "Ruby", "Python", "Python"];
  }
  else {
    var values = null;
  }

  return values;
};

function notSelected(questionNumber) {
    var selection = $("input[name='question-" + questionNumber + "']:checked").val();

    if (!selection) {
      return true;
    }
    else {
      return false;
    }
};

// User Interface Logic
$(document).ready(function() {

  // User Starts Quiz
  $("#start-form").submit(function(event) {

    var question = getQuestion(1, 0);
    var answers = getQuestionAnswers(1);
    var values = getRadioValues(1);
    var i;

    $("#question-1-title").text(question);

    for(i = 0; i < answers.length; i++) {
      $("#question-1-list").append(
        "<div class=\"radio\"" +
          "<label>" +
            "<li>" +
              "<input type=\"radio\" name=\"question-1\" value=\"" + values[i] + "\">" +
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
    
    if(notSelected(1)) {
      alert("Please choose an option before confirming.");
    }
    else {
      var question = getQuestion(2,0);
      var answers = getQuestionAnswers(2);
      var values = getRadioValues(2);
      var previousAnswer = $()
      var i;
  
      $("#question-2-title").text(question);
  
      for(i = 0; i < answers.length; i++) {
        $("#question-2-list").append(
          "<div class=\"radio\"" +
            "<label>" +
              "<li>" +
                "<input type=\"radio\" name=\"question-2\" value=\"" + values[i] + "\">" +
                answers[i] + 
              "</li>" +
            "</label>" +
          "</div>");
      }

      $("#question-1").fadeOut('slow', function() {
        $("#question-2").fadeIn('slow');
      });
    }

    event.preventDefault();
  });

// User Answers Second Question
  $("#form-question-2").submit(function(event) {

    var question = getQuestion(3, 0);
    var answers = getQuestionAnswers(3);
    var values = getRadioValues(3);
    var i;

    $("#question-3-title").text(question);

    for(i = 0; i < answers.length; i++) {
      $("#question-3-list").append(
        "<div class=\"radio\"" +
          "<label>" +
            "<li>" +
              "<input type=\"radio\" name=\"question-3\" value=\"" + values[i] + "\">" +
              answers[i] + 
            "</li>" +
          "</label>" +
        "</div>");
    }
    $("#question-2").fadeOut('slow', function() {
      $("#question-3").fadeIn('slow');
    });

    event.preventDefault();
  });

  // User Answers Third Question
  $("#form-question-3").submit(function(event) {

    var question = getQuestion(4, 0);
    var answers = getQuestionAnswers(4);
    var values = getRadioValues(4);
    var i;

    $("#question-4-title").text(question);

    for(i = 0; i < answers.length; i++) {
      $("#question-4-list").append(
        "<div class=\"radio\"" +
          "<label>" +
            "<li>" +
              "<input type=\"radio\" name=\"question-4\" value=\"" + values[i] + "\">" +
              answers[i] + 
            "</li>" +
          "</label>" +
        "</div>");
    }
    $("#question-3").fadeOut('slow', function() {
      $("#question-4").fadeIn('slow');
    });

    event.preventDefault();
  });

  // User Answers Foruth Question
  $("#form-question-4").submit(function(event) {

    var question = getQuestion(5, 0);
    var answers = getQuestionAnswers(5);
    var values = getRadioValues(5);
    var i;

    $("#question-5-title").text(question);

    for(i = 0; i < answers.length; i++) {
      $("#question-5-list").append(
        "<div class=\"radio\"" +
          "<label>" +
            "<li>" +
              "<input type=\"radio\" name=\"question-5\" value=\"" + values[i] + "\">" +
              answers[i] + 
            "</li>" +
          "</label>" +
        "</div>");
    }
    $("#question-4").fadeOut('slow', function() {
      $("#question-5").fadeIn('slow');
    });

    event.preventDefault();
  });

  // User Answers Fifth Question, Display Results
  $("#form-question-5").submit(function(event) {

    $("#result-language").text("Python");

    $("#question-5").fadeOut('slow', function() {
      $("#result").fadeIn('slow');
    });

    event.preventDefault();
  });

  // Restart the quiz
  $("#form-restart").submit(function(event) {

    $("#result").fadeOut('slow', function() {
      $("#question-1").fadeIn('slow');
    });

    event.preventDefault();
  });
});