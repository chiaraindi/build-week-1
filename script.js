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

let currentQuestion = 0, score = 0, time = 30, interval, isTabVisible = true, answeredAfterTabChange = false;

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

// Mostra la domanda e aggiorna il contatore
const showQuestion = () => {
  const question = questions[currentQuestion];
  document.getElementById("question-container").innerText = question.question;
  document.getElementById("question-counter").innerHTML = `QUESTION ${currentQuestion + 1} / ${questions.length}`;
};

// Mostra le risposte
const showAnswers = () => {
  const containerButton = document.querySelector("#container-btns");
  containerButton.innerHTML = "";
  shuffle([...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer])
    .forEach((answer) => {
      const button = document.createElement("button");
      button.classList.add("btn");
      button.innerText = answer;
      button.onclick = () => {
        // Controlla se il tab è visibile prima di incrementare il punteggio
        if (answer === questions[currentQuestion].correct_answer && !answeredAfterTabChange) score++;
        answeredAfterTabChange = false; // Reset flag dopo la risposta
        nextQuestion();
      };
      containerButton.appendChild(button);
    });
};

// Timer
const startTimer = () => {
  interval = setInterval(() => {
    document.getElementById("timer").innerText = `${time} seconds`;
    if (--time < 0) nextQuestion();
  }, 1000);
};

// Passa alla domanda successiva
const nextQuestion = () => {
  if (++currentQuestion < questions.length) {
    showQuestion();
    showAnswers();
    resetTimer();
  } else {
    endQuiz();
  }
};

// Reset del timer
const resetTimer = () => {
  clearInterval(interval);
  time = 30;
  startTimer();
};

// Fine del quiz
const endQuiz = () => {
  document.getElementById("question-container").innerText = `Hai ottenuto un punteggio di ${score} su ${questions.length}`;
  document.querySelector(".container-timer").remove();
  document.querySelector("#container-btns").innerHTML = "";
};

// Gestione della visibilità della pagina
document.addEventListener("visibilitychange", () => {
  isTabVisible = !document.hidden;
  if (!isTabVisible) {
    alert("Attenzione! Hai cambiato tab. La risposta non verrà conteggiata.");
    answeredAfterTabChange = true; // 
  }
});

window.onload = () => {
  showQuestion();
  showAnswers();
  startTimer();
};