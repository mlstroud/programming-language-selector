// Business Logic

// [0]C# [1]C++ [2]P [3]JS [4]RUB [5]SWIFT
var languageList = [0, 0, 0, 0, 0, 0];

function getQuestion(questionNumber) {
  if (questionNumber === 1) {
    return "What are you wanting to do?";
  }
  else if (questionNumber === 2) {
    return "Which part of the code will you be working on?";
  }
  else if (questionNumber === 3) {
    return "";
  }
  else if (questionNumber === 4) {
    return "Test Question 4";
  }
  else if (questionNumber === 5) {
    return "Choose your difficulty: ";
  }
  else {
    return "Error: Invalid Question";
  }
};

function getQuestionAnswers(questionNumber) {
  if (questionNumber === 1){
    var answers = ["Make a game.", "Make a website.", "Make an app.", "Learn programming."];
  }
  else if (questionNumber === 2) {
    var answers = ["Front-end.", "Back-end.", "Both.", "I'm not sure."];
  }
  else if (questionNumber === 3) {
    var answers = ["3One", "3Two", "3Three", "3Four"];
  }
  else if (questionNumber === 4) {
    var answers = ["4One", "4Two", "4Three", "4Four"];
  }
  else if (questionNumber === 5) {
    var answers = ["Easy", "Normal", "Hard", "Brutal"];
  }
  else {
    var answers = null;
  }

  return answers;
};

function getRadioValues(questionNumber) {
  if (questionNumber === 1) {
    var values = ["csharp", "jscript", "swift", "cplusplus", "python"];
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
    var values = ["python", "web", "csharp", "cplusplus"];
  }
  else {
    var values = null;
  }

  return values;
};

function updateLanguages(languageType) {

  // [0]C# [1]C++ [2]P [3]JS [4]RUB [5]SWIFT
  if(languageType === "python") {
    languageList[2]++;
  }
  else if (languageType === "csharp") {
    languageList[0]++;
  }
  else if (languageType === "cplusplus") {
    languageList[1]++;
  }
  else if (languageType === "swift") {
    languageList[5]++;
  }
  else if (languageType === "ruby") {
    languageList[4]++;
  }
  else if (languageType === "jscript") {
    languageList[3]++;
  }
  else if (languageType === "web") {
    languageList[3]++;
    languageList[4]++;
  }
}

function notSelected(questionNumber) {
    var selection = $("input[name='question-" + questionNumber + "']:checked").val();

    if (!selection) {
      return true;
    }
    else {
      return false;
    }
};

function getResult() {
  var i;
  var max = 0;
  var result = ["", ""];

  for(i = 0; i < languageList.length; i++) {
    if (languageList[i] > max) {
      max = i;
    }
  }

  // [0]C# [1]C++ [2]P [3]JS [4]RUB [5]SWIFT
  if(max === 0){
    result[0] = "C#";
    result[1] = "Based on your answers, a good language to consider could be C#.";
  }
  else if (1) {
    result[0] = "C++";
    result[1] = "Based on your answers, a good language to consider could be C++.";
  }
  else if (2) {
    result[0] = "Python";
    result[1] = "Based on your answers, a good language to consider could be Python.";
  }
  else if (3) {
    result[0] = "JavaScript";
    result[1] = "Based on your answers, a good language to consider could be JavaScript.";
  }
  else if (4) {
    result[0] = "Ruby";
    result[1] = "Based on your answers, a good language to consider could be Ruby.";
  }
  else if (5) {
    result[0] = "Swift";
    result[1] = "Based on your answers, a good language to consider could be Swift.";
  }
}

// User Interface Logic
$(document).ready(function() {

  // User Starts Quiz
  $("#start-form").submit(function(event) {

    var question = getQuestion(1);
    var answers = getQuestionAnswers(1);
    var values = getRadioValues(1);
    var i;

    $("#question-1-title").text(question);

    for (i = 0; i < answers.length; i++) {
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

    if (notSelected(1)) {
      alert("Please choose an option before confirming.");
    } 
    else {
      var question = getQuestion(2);
      var answers = getQuestionAnswers(2);
      var values = getRadioValues(2);
      var previousAnswer = $();
      var i;
  
      $("#question-2-title").text(question);
  
      for (i = 0; i < answers.length; i++) {
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

    if (notSelected(2)) {
      alert("Please choose an option before confirming.");
    }
    else {
      var question = getQuestion(3);
      var answers = getQuestionAnswers(3);
      var values = getRadioValues(3);
      var i;
  
      $("#question-3-title").text(question);
  
      for (i = 0; i < answers.length; i++) {
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
    }

    event.preventDefault();
  });

  // User Answers Third Question
  $("#form-question-3").submit(function(event) {

    if (notSelected(3)) {
      alert("Please choose an option before confirming.");
    }
    else {
      var question = getQuestion(4);
      var answers = getQuestionAnswers(4);
      var values = getRadioValues(4);
      var i;
  
      $("#question-4-title").text(question);
  
      for (i = 0; i < answers.length; i++) {
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
    }

    event.preventDefault();
  });

  // User Answers Foruth Question
  $("#form-question-4").submit(function(event) {

    if (notSelected(4)) {
      alert("Please choose an option before confirming.");
    }
    else {
      var question = getQuestion(5);
      var answers = getQuestionAnswers(5);
      var values = getRadioValues(5);
      var i;
  
      $("#question-5-title").text(question);
  
      for (i = 0; i < answers.length; i++) {
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
    }

    event.preventDefault();
  });

  // User Answers Fifth Question, Display Results
  $("#form-question-5").submit(function(event) {

    if (notSelected(5)) {
      alert("Please choose an option before confirming.");
    }
    else {
      $("#result-language").text("Python");

      $("#question-5").fadeOut('slow', function() {
        $("#result").fadeIn('slow');
      });
    }

    event.preventDefault();
  });

  // Restart the quiz
  $("#form-restart").submit(function(event) {

    // $("#form-question-1").reset();
    // $("#form-question-2").reset();
    // $("#form-question-3").reset();
    // $("#form-question-4").reset();
    // $("#form-question-5").reset();

    $("#result").fadeOut('slow', function() {
      $("#question-1").fadeIn('slow');
    });

    event.preventDefault();
  });
});