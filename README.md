Welcome to your Bonus Project: Quiz Game With Loops!

Step 1: Define the quiz data, and add 3 more questions, options and answers to the object in the quizData array.

Step 2: Get the HTML elements by ID.

Step 3: Initialize a variable for the current question index
  
        // In computer programming, .forEach loop (or for-each loop) is a control flow statement for traversing items in a collection.

Step 4: Function to display the current question and options (use .forEach).

        // Within this forEach loop, use document.createElement("button") to create a new button element.
        // Use .textContent to set the text content of the button to the current option from the quiz data array.
        // Use .addEventListener("click", () => checkAnswer(option)) to add a click event listener to the button. When the button is clicked, it should call the checkAnswer function with the current option as an argument.
        // Use .appendChild(optionElement) to append the newly created button (optionElement) to the optionsElement in the HTML document, so it is displayed as one of the answer options for the current question.

Step 5: Function to check the selected answer.

        // Write if else statements that check if the asnwer is equal to the current question's correct answer, and alert 'Correct!', or if the answer is incorrect, alert 'Incorrect' and provide the correct answer within the alert.

       // Restart from the first question

Step 6: Display the first question when the page loads.
