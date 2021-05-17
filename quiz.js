//question for quiz
const quizData = [
  {
    question: "Who is the inventor of javascript?",
    a: "Chris Horres",
    b: "Brendan Eich",
    c: "Ryan Bhal",
    d: "Antonia Shik",
    correct: "b",
  },
  {
    question: "Which is the nearest star?",
    a: "Sun",
    b: "Mars",
    c: "Moon",
    d: "Jupiter",
    correct: "a",
  },
  {
    question: "What is the most used programming language in 2019?",
    a: "Python",
    b: "C",
    c: "Java",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "What does HTML stands for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Model Language",
    c: "Hypertext Market Language",
    d: "Hypertext Mapping Language ",
    correct: "a",
  },
  {
    question: "What year javacript launched?",
    a: "2001",
    b: "2004",
    c: "1999",
    d: "none of the above",
    correct: "d",
  },
];


const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();
//for quiz loading
function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

//option which is selected
function getSelected() {
  let answer = undefined;

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

//options which are not selected
function deselectAnswers() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// when button is pressed it will increment questions and if our option is correct it will increment score.
submitBtn.addEventListener("click", () => {
  //check too see the answer
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // todo show results and for reload
      quiz.innerHTML = `
      <h2>You answered correctly at ${score}/${quizData.length}questions.
      
      
      </h2> <button onclick="location.reload()">Reload</button>`;
    }
  }
});
