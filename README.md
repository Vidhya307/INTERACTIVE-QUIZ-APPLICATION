# INTERACTIVE-QUIZ-APPLICATION

COMPANY: CODTECH IT SOLUTIONS

NAME: VIDHYA DEVI S

INTERN ID: CT04DH2712

DOMAIN: FRONT END DEVELOPMENT

DURATION: 4 WEEKS

MENTOR: NEELA SANTHOSH

In this project the javascript code creates a quiz application that dynamically generates General Knowledge(GK) question using the Open Trivia Database API. From this project the user can answer 5 multiple questions with options and receive feedback and view their scores out of 5.The code's goal is to give users a seamless and interesting quiz experience. BY using fetch() function we can fetches a 5 random GK question with shuffled correct and incorrect answers in an array.The questions often include encoded HTML entities (like &quot; or &#039;), which are decoded using a helper function called decodeHTML() to ensure readability. Each question and its options are rendered onto the screen by the loadQuestion() function, which attaches event listeners and creates buttons dynamically. It makes sure that only one question is displayed at a time, modifies the question content, and erases any prior feedback. The HTML creates and renders a button for each answer choice. The checkanswer() function works when a user selects a answer it will provide a feedback by changing the box colors (green for correct, red for incorrect answers) if the response is right, this function compares the user's option with the right answer, updates the score, and gives instant feedback. It also displays the correct answer if the user chose wrong, helping reinforce learning. All answer buttons are then disabled to prevent multiple selections and there is a next button below this to proceed to next questions. The currentQuestion index is increased to show the subsequent set of questions from the retrieved list when users move through the quiz by selecting the "Next" button. Throughout the test, the score is recorded using a score variable that rises with each right response and a currentQuestion variable to monitor quiz progression. . In order to track which question is displayed, the currentQuestion counter is updated as users move through the questions using the nextBtn functionality. The final score is displayed and the quiz interface is hidden once all five questions have been answered using finishQuiz() function. It also display a  congratulatory message. Event-driven architecture enables responsive user interactions and DOM manipulation for real-time UI updates. Allowing users to select categories or levels of difficulty, showing a progress bar, asking for their name, or even including features like creating downloadable certificates in PDF format could improve the design even more. The script is fully client-side and doesn't need a backend. For the effective interaction and easy learning  the code divides the function. This application is appropriate for developing general knowledge and for educational training.  In order to provide a dynamic and responsive quiz experience in the browser, this code effectively uses conditional logic, event handling, DOM manipulation, and API connectivity. In this project the basic <div> tags and styles are only used for easy understandable. For the background the advanced styles of CSS GIF is used to make it more fun and attractive. It is the perfect project for showcasing an internship, assessing academic performance, or honing skills in contemporary web development.

#output

<img width="1275" height="580" alt="Image" src="https://github.com/user-attachments/assets/948b139c-4c55-4774-8726-8dc2a49f5eeb" />
