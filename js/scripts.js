// Business Logic

// [0]C# [1]C++ [2]Python [3]JavaScript [4]Ruby [5]Swift
var languageList = [0, 0, 0, 0, 0, 0];

function getQuestion(questionNumber) {
  if (questionNumber === 1) {
    return "What are you wanting to do?";
  }
  else if (questionNumber === 2) {
    return "Which part of the code will you be working on?";
  }
  else if (questionNumber === 3) {
    return "How do you feel about syntax?";
  }
  else if (questionNumber === 4) {
    return "What type of language are you wanting to try?";
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
    var answers = ["I prefer strongly typed and strict syntax.", "Uhh...normal?", "I'd prefer something simple."];
  }
  else if (questionNumber === 4) {
    var answers = ["Whatever gives me the most control.", "Something trendy.", "One that is easy to use.", "No preference."];
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
  // web = JavaScript + Ruby + C#
  // Apps = JavaScript + Ruby + Swift
  if (questionNumber === 1) {
    var values = ["csharp", "jscript", "apps", "all"];
  }
  else if (questionNumber === 2) {
    var values = ["jscript", "backend", "both", "python"];
  }
  else if (questionNumber === 3) {
    var values = ["cplusplus", "normal", "python"];
  }
  else if (questionNumber === 4) {
    var values = ["cplusplus", "trendy", "easy", "all"];
  }
  else if (questionNumber === 5) {
    var values = ["python", "apps", "csharp", "cplusplus"];
  }
  else {
    var values = null;
  }

  return values;
};

function updateLanguages(languageType) {

  // [0]C# [1]C++ [2]Python [3]JavaScript [4]Ruby [5]Swift
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
  else if (languageType === "both") {
    languageList[3]++;
    languageList[4]++;
    languageList[5]++;
  }
  else if (languageType === "trendy") {
    languageList[2]++;
    languageList[5]++;
  }
  else if (languageType === "easy") {
    languageList[2]++;
    languageList[4]++;
  }
  else if (languageType === "backend") {
    languageList[0];
    languageList[2];
    languageList[3];
    languageList[4];
  }
  else if (languageType === "apps") {
    languageList[3]++;
    languageList[4]++;
    languageList[5]++;
  }
  else if (languageType === "all") {
    var i;

    for (i = 0; i < languageList.length; i++) {
      languageList[i]++;
    }
  }
  else if (languageType === "normal") {
    languageList[0]++;
    languageList[3]++;
    languageList[4]++;
    languageList[5]++;
  }
  else {

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
  var maxIndex = 0;
  var result = ["", "", ""];

  for(i = 0; i < languageList.length; i++) {
    if (languageList[i] > max) {
      max = languageList[i];
      maxIndex = i;
    }
    console.log("Max: " + max + " Max Index: " + maxIndex);
  }

  // [0]C# [1]C++ [2]Python [3]JavaScript [4]Ruby [5]Swift
  if(maxIndex === 0){
    result[0] = "C#";
    result[1] = "Based on your answers, a good language to consider could be C#.";
    result[2] = "<img src=\"./img/csharp.png\" alt=\"A picture of a C# icon.\">";
  }
  else if (maxIndex === 1) {
    result[0] = "C++";
    result[1] = "Based on your answers, a good language to consider could be C++.";
    result[2] = "<img src=\"./img/cplusplus.png\" alt=\"A picture of a C++ icon.\">";
  }
  else if (maxIndex === 2) {
    result[0] = "Python";
    result[1] = "Based on your answers, a good language to consider could be Python.";
    result[2] = "<img src=\"./img/python.png\" alt=\"A picture of a Python icon.\">";
  }
  else if (maxIndex === 3) {
    result[0] = "JavaScript";
    result[1] = "Based on your answers, a good language to consider could be JavaScript.";
    result[2] = "<img src=\"./img/javascript.png\" alt=\"A picture of a JavaScript icon.\">";
  }
  else if (maxIndex === 4) {
    result[0] = "Ruby";
    result[1] = "Based on your answers, a good language to consider could be Ruby.";
    result[2] = "<img src=\"./img/ruby.png\" alt=\"A picture of a Ruby icon.\">";
  }
  else if (maxIndex === 5) {
    result[0] = "Swift";
    result[1] = "Based on your answers, a good language to consider could be Swift.";
    result[2] = "<img src=\"./img/swift.png\" alt=\"A picture of a Swift icon.\">";
  }
  else {
    result[0] = "Error";
    result[1] = "There was an error in determining your result.";
    result[2] = "<img src=\"./img/error.png\" alt=\"A large red X icon.\">";
  }

  return result;
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
      var previousAnswer = $("input[name=question-1]:checked").val();
      updateLanguages(previousAnswer);
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
      var previousAnswer = $("input[name=question-2]:checked").val();
      updateLanguages(previousAnswer);
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
      var previousAnswer = $("input[name=question-3]:checked").val();
      updateLanguages(previousAnswer);
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
      var previousAnswer = $("input[name=question-4]:checked").val();
      updateLanguages(previousAnswer);
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
      var previousAnswer = $("input[name=question-5]:checked").val();
      updateLanguages(previousAnswer);
      var result = getResult();

      $("#result-language").text(result[0]);
      $("#result-text").text(result[1]);
      $("#result-img").append(result[2]);

      $("#question-5").fadeOut('slow', function() {
        $("#result").fadeIn('slow');
      });
    }

    event.preventDefault();
  });

  // Restart the quiz
  $("#form-restart").submit(function(event) {

    $("#form-question-1").reset();
    $("#form-question-2").reset();
    $("#form-question-3").reset();
    $("#form-question-4").reset();
    $("#form-question-5").reset();

    $("#result").fadeOut('slow', function() {
      $("#question-1").fadeIn('slow');
    });

    event.preventDefault();
  });
});