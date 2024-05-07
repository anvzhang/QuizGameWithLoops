// Step 1: Define the quiz data, and add 3 more questions, options and answers to the object in the quizData array

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is 29 + 78?",
        options: ["99", "104", "115"],
        answer: "104"
    },
    {
        question: "Who wrote Romeo and Juliet?",
        options: ["Shakespeare", "Dickens", "Austen"],
        answer: "Shakespeare"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondria", "Nucleus", "Ribosome"],
        answer: "Mitochondria"
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7"],
        answer: "7"
    },
];

// Step 2: Get the HTML elements by ID
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");


// Step 3: Initialize a variable for the current question index
let currentQuestionIndex = 0;

// Step 4: Function to display the current question and options

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option) => {
        let optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionElement);
    });
}

// Step 5: Function to check the selected answer
function checkAnswer(answer) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
        window.alert("Correct!");
    } else {
        window.alert("Incorrect!");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex === quizData.length) {
        currentQuestionIndex = 0; // Restart from the first question
    }
    displayQuestion();
}

// Step 6: Display the first question when the page loads
displayQuestion();
