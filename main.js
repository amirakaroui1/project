$(document).ready(function() {
  const questions = [
    {
      question: "Which of the following languages has the longest alphabet?",
      options: ["Greek ", "Russian", "Arabic", "allmagne"],
      answer: "Russian"
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", " Mount Everest", "Mount Kilimanjaro", " Denali"],
      answer: " Mount Everest"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    }
  ];

  let currentQuestion = 0;
  let score =0;
  let answered = false;


  function displayQuestion() {
    $('#question').text(questions[currentQuestion].question);
    $('#options-container').empty();
    questions[currentQuestion].options.forEach(option => {
      $('#options-container').append(`<button class="option">${option}</button>`);
    });
  }

  displayQuestion();

  $('#options-container').on('click', '.option', function() {
    if (!answered) { 
      const selectedAnswer = $(this).text();
      if (selectedAnswer === questions[currentQuestion].answer) {
        $('#result').text('Correct!');
        score++;
      } else {
        $('#result').text('Incorrect!');
      }
      $('#score').text('your score:  ' + score);
      $('#result-container').show();
      answered = true; 
    }
  });

  $('#next-button').click(function() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
      $('#result-container').hide();
      answered = false; 
    } else {
      alert('Quiz completed! your score is:' + score);
    }
  });
});

