const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');

let questions = [];
let currentQuestion = 0;
let score = 0;

// Decode HTML entities (for symbols like &amp;, &quot;)
function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Fetch questions from Open Trivia DB API
fetch("https://opentdb.com/api.php?amount=5&type=multiple")
  .then(res => res.json())
  .then(data => {
    questions = data.results.map(q => {
      let options = [...q.incorrect_answers, q.correct_answer];
      options.sort(() => Math.random() - 0.5); // Shuffle
      return {
        question: decodeHTML(q.question),
        options: options.map(decodeHTML),
        answer: decodeHTML(q.correct_answer)
      };
    });
    loadQuestion();
  });

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}: ${q.question}`;
  optionsEl.innerHTML = '';
  feedbackEl.textContent = '';
  nextBtn.style.display = "none";

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, q.answer, btn);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected, correct, btn) {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach(b => b.disabled = true);

  if (selected === correct) {
    feedbackEl.textContent = "✅ Correct!";
    score++;
    btn.style.background = "#c8e6c9";
  } else {
    feedbackEl.textContent = `❌ Wrong! Correct: ${correct}`;
    btn.style.background = "#f8d7da";
    buttons.forEach(b => {
      if (b.textContent === correct) {
        b.style.background = "#c8e6c9";
      }
    });
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    finishQuiz();
  }
};

function finishQuiz() {
  document.getElementById("quiz").style.display = "none";
  scoreContainer.style.display = "block";
  scoreContainer.innerHTML = `
    🎉 Congragulations <br>
    You scored ${score} out of ${questions.length}.<br/>
  `;
}
