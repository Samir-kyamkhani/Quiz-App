const questions = [
  {
    question: "Which of the following can read and render HTML web pages",
    answers: [
      {
        text: "server",
        correct: false,
      },
      {
        text: "head Tak",
        correct: false,
      },
      {
        text: "web browser",
        correct: true,
      },
      {
        text: "empty",
        correct: false,
      },
    ],
  },
  {
    question: "Identify the range of byte data types in JavaScript.",
    answers: [
      {
        text: "-10 to 9",
        correct: false,
      },
      {
        text: "-128 to 127",
        correct: true,
      },
      {
        text: "-32768 to 32767",
        correct: false,
      },
      {
        text: "-214783648 to 2147483647",
        correct: false,
      },
    ],
  },
  {
    question:
      "Among the following operators identify the one which is used to allocate memory to array variables in JavaScript.",
    answers: [
      {
        text: "new",
        correct: true,
      },
      {
        text: "new malloc",
        correct: false,
      },
      {
        text: "alloc",
        correct: true,
      },
      {
        text: "malloc",
        correct: false,
      },
    ],
  },
  {
    question: "The latest HTML standard is",
    answers: [
      {
        text: "HTML 4.0",
        correct: false,
      },
      {
        text: "HTML 5.0",
        correct: true,
      },
      {
        text: "XML",
        correct: false,
      },
      {
        text: "SGML",
        correct: false,
      },
    ],
  },
  {
    question: "Why were cookies designed?",
    answers: [
      {
        text: "for server-side programming.",
        correct: true,
      },
      {
        text: "for client-side programming.",
        correct: false,
      },
      {
        text: "both a and b",
        correct: false,
      },
      {
        text: "none",
        correct: false,
      },
    ],
  },
];

const questionElement = document.querySelector(".question");
const answerElement = document.querySelector(".Answer");
const nextBtn = document.querySelector(".next-btn");

let currentQuestionIndex = 0;
let scroe = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  scroe = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex++;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.map((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerElement.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    answerElement.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerElement.firstChild) {
    answerElement.removeChild(answerElement.firstChild);
  }
}

function selectAnswer(e) {
  let selectBtn = e.target;
  let isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    scroe++;
  } else {
    selectBtn.classList.add("incorrect");
  }

  Array.from(answerElement.children).map((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You'r Correct Answer ${scroe} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play again";
    nextBtn.style.display = "block";
}

function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});


startQuiz();
