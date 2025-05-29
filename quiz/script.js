const quiz = [
  {
    question: "What is your name?",
    options: ["New", "New", "New", "New"],
    correctAnswer: "New"
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is 5 + 7?",
    options: ["10", "11", "12", "13"],
    correctAnswer: "12"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correctAnswer: "JavaScript"
  }
];

let currentIndex = 0;
const selectedAnswers = [];

const questionEl = document.querySelector('.question-name');
const optionsEl = document.querySelector('.options');
const submitBtn = document.querySelector('.submit');
const resultEl = document.getElementById('ans');
const resultBox = document.querySelector('.answers');

function loadQuestion(index) {
  const q = quiz[index];
  questionEl.innerHTML = `<span>${index + 1}.</span> ${q.question}`;
  optionsEl.innerHTML = '';

  q.options.forEach(option => {
    const div = document.createElement('div');
    div.classList.add('option');
    div.innerText = option;
    div.onclick = () => selectOption(div, option);
    optionsEl.appendChild(div);
  });

  if (index === quiz.length - 1) {
    submitBtn.classList.add('show');
  }
}

function selectOption(element, answer) {
  // Prevent multiple selections
  const options = document.querySelectorAll('.option');
  options.forEach(opt => opt.classList.remove('selected'));

  element.classList.add('selected');

  selectedAnswers[currentIndex] = answer;
}

function next() {
  if (selectedAnswers[currentIndex] === undefined) {
    alert('Please select an option');
    return;
  }

  if (currentIndex < quiz.length - 1) {
    currentIndex++;
    loadQuestion(currentIndex);
  } else {
    alert('No more questions!');
  }
}

function submit() {
  if (selectedAnswers.length < quiz.length) {
    alert('Answer all questions before submitting');
    return;
  }

  const result = quiz.map((q, i) => selectedAnswers[i] === q.correctAnswer);
  const passed = result.every(r => r === true);

  resultEl.innerText = passed ? 'You Passed' : 'You Failed';
  resultBox.classList.add('show');
}

window.onload = () => {
  loadQuestion(currentIndex);
};
