const startBtn = document.getElementById('startTestBtn');
const overlay = document.getElementById('testOverlay');
const container = document.getElementById('questionContainer');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const starsDiv = document.getElementById('resultStars');


let current = 0;
let score = 0;
let answered = false;

startBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
  current = 0;
  score = 0;
  showQuestion();
});

function closeQuiz() {
  overlay.style.display = 'none';
}

function showQuestion() {
  answered = false;
  feedback.textContent = '';
  nextBtn.style.display = 'none';

  const q = questions[current];
  container.innerHTML = `
    <p><strong>Вопрос ${current + 1} из ${questions.length}:</strong> ${q.text}</p>
    ${q.options.map((opt, i) => `
      <label class="option">
        <input type="radio" name="answer" value="${i}">
        ${opt}
      </label><br>
    `).join('')}
  `;

  container.querySelectorAll('input[name="answer"]').forEach(input => {
    input.addEventListener('change', checkAnswer);
  });
}

function checkAnswer(e) {
  if (answered) return;
  answered = true;
  const userAnswer = parseInt(e.target.value);
  const correct = questions[current].correct;

  if (userAnswer === correct) {
    feedback.textContent = '✅ Правильно!';
    feedback.className = 'feedback correct';
    score++;
  } else {
    feedback.textContent = `❌ Неправильно. Правильный ответ: ${questions[current].options[correct]}`;
    feedback.className = 'feedback wrong';
  }

  nextBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', () => {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  let stars = '';
  if (score == 5) stars = '⭐️⭐️⭐️⭐️⭐️';
  else if (score == 4) stars = '⭐️⭐️⭐️⭐️';
  else if (score == 3) stars = '⭐️⭐️⭐️';
  else if (score == 2) stars = '⭐️⭐️';
  else if (score == 1) stars = '⭐️';
  else stars = '😔';

  container.innerHTML = `<h3>Вы ответили правильно на ${score} из ${questions.length}</h3>`;
  feedback.textContent = '';
  nextBtn.style.display = 'none';
  starsDiv.textContent = `Ваш результат: ${stars} (${score}/5)`;
}
