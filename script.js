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
    }
];

// Step 2: Get the HTML elements by ID


// Step 3: Initialize a variable for the current question index


// In computer programming, .forEach loop (or for-each loop) is a control flow statement for traversing items in a collection.

// Step 4: Function to display the current question and options

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option) => {

        // Within this forEach loop, use document.createElement("button") to create a new button element.
        // Use .textContent to set the text content of the button to the current option from the quiz data array.
        // Use .addEventListener("click", () => checkAnswer(option)) to add a click event listener to the button. When the button is clicked, it should call the checkAnswer function with the current option as an argument.
        // Use .appendChild(optionElement) to append the newly created button (optionElement) to the optionsElement in the HTML document, so it is displayed as one of the answer options for the current question.

      

    });
}

// Step 5: Function to check the selected answer
function checkAnswer(answer) {
    const currentQuestion = quizData[currentQuestionIndex];

  // Below write if else statements that check if the asnwer is equal to the current question's correct answer, and alert 'Correct!', or if the answer is incorrect, alert 'Incorrect' and provide the correct answer within the alert.

  

    currentQuestionIndex++;
    if (currentQuestionIndex === quizData.length) {
        currentQuestionIndex = 0; // Restart from the first question
    }
    displayQuestion();
}

// Step 6: Display the first question when the page loads
displayQuestion();
