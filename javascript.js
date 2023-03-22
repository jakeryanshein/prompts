$(document).ready(function() {
    // Define an array of questions
    var questions = [
      "What is the craziest thing you've ever done on a dare?",
      "What is the most embarrassing moment of your life that you now find funny?",
      "What is the most interesting encounter you've ever had with a celebrity or public figure?",
      "What is the funniest prank you have ever played on someone or had played on you?",
      "What is the most interesting or unusual thing you've ever eaten?",
      "What is the most hilarious joke or pun you've ever heard?",
      "What is the most memorable adventure or misadventure you've had while traveling?",
      "What is the most ridiculous fashion trend you've ever followed?",
      "What is the most creative or unexpected way you've ever solved a problem?",
      "What is the most outrageous or bizarre request you've ever received from a boss or colleague?",
      "What is the most awkward or hilarious moment you've ever had on a date?",
      "What is the most interesting job you've ever had?",
      "What is the most unforgettable moment you've had at a concert or music festival?",
      "What is the most amusing or ridiculous mistake you've ever made?",
      "What is the most memorable prank call you've ever received or made?",

    ];
  
    // Get a reference to the question div and the generate question button
    var $question = $('#question');
    var $generateButton = $('#generate-question');
  
    // Add a click event listener to the generate question button
    $generateButton.on('click', function() {
      // Generate a random question from the questions array
      var randomIndex = Math.floor(Math.random() * questions.length);
      var randomQuestion = questions[randomIndex];
  
      // Display the random question in the question div
      $question.text(randomQuestion);
    });
  });
  