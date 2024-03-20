$(document).ready(function() {
    const questions = [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Saturn", "Neptune"],
        answer: "Mars"
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci"
      }
    ];
  
    let currentQuestion = 0;
    let score =0;
  
    function displayQuestion() {
      $('#question').text(questions[currentQuestion].question);
      $('#options-container').empty();
      questions[currentQuestion].options.forEach(option => {
        $('#options-container').append(`<button class="option">${option}</button>`);
      });
    }
  
    displayQuestion();
  
    $('#options-container').on('click', '.option', function() {
      const selectedAnswer = $(this).text();
      if (selectedAnswer === questions[currentQuestion].answer) {
        $('#result').text(' excellent,  Correct!');
        score++;
      } else {
        $('#result').text('oops, Incorrect!');
      }
      $('#score').text('your score:  ' + score);
      $('#result-container').show();
    });
  
    $('#next-button').click(function() {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion();
        $('#result-container').hide();
      } else {
        alert('Quiz completed! your score is:' + score);
      }
    });
  });
