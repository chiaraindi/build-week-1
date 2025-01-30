const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

//! function for the questions
let time = 30;
let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = "";
  const question = questions[currentQuestion].question;
  questionContainer.innerText = question;


  const questionCounter = document.getElementById("question-counter");
  questionCounter.innerHTML = `QUESTION ${currentQuestion + 1} <span>/${questions.length}</span>`;
}
showQuestion();

// answers shuffle
function shuffle(answers) {
  return answers.sort(() => Math.random() - 0.5)
}


//! function for the answers

function showAnswers() {
  const answers = questions[currentQuestion].incorrect_answers
  answers.push(questions[currentQuestion].correct_answer);
  const shuffleArray = shuffle(answers)
  shuffleArray.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.setAttribute("class", "btn");
    const containerButton = document.querySelector("#container-btns");
    containerButton.appendChild(button);
    button.addEventListener("click", (event) => {
      const selectedAnswer = event.target.innerText;
      const correctAnswer = questions[currentQuestion].correct_answer;
      containerButton.innerHTML = ""
      if (selectedAnswer === correctAnswer) {
        score++
      }
      currentQuestion++
      if (currentQuestion < questions.length) {
        showQuestion()
        showAnswers()
        resetTimer()
      } else {
        endQuiz()
      }
    })
  });
}
showAnswers();

console.log(showAnswers)

//! function for the timer

let interval
function startTimer() {
  interval = setInterval(function () {
    document.getElementById("timer").innerHTML = time + " " + "seconds";
    time--;

    if (time < 0) {
      clearInterval(interval);
    }
  }, 1000);
}
function resetTimer() {
  clearInterval(interval)
  time = 30
  startTimer()
}

//! counter questions

let counterQuestions = 1 / 10;
let interactions = 0;

function currentInteractiones(counterQuestions, interactions) {
  for (let x = 0; x < interactions; x++) {
    counterQuestions += 1;
  }
  return counterQuestions++;
}
let finalResult = currentInteractiones(counterQuestions, interactions);
console.log(finalResult);

function endQuiz() {
  document.getElementById("question-container").innerText = `Hai ottenuto un punteggio di ${score} su ${questions.length}`
  document.querySelector(".container-timer").remove()
}

window.onload = startTimer