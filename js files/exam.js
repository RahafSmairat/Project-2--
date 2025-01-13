const questionArea = document.querySelector(".question-area");
const answersArea = document.querySelector(".answers-area");
const nextButton = document.querySelector(".next-button");
const popupModal = document.getElementById("popup-modal");
const closePopupButton = document.getElementById("close-popup");

const urlParams = new URLSearchParams(window.location.search);
const fileType = urlParams.get('examType');

// Variables
let currentIndex = 0;
let questions = [];
let results = [];

async function fetchQuestions() {
    try {
      console.log(`Fetching questions from /json/${fileType}.json`);
      const response = await fetch(`/json/${fileType}.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
       questions = await response.json();
      console.log("Fetched questions:", questions);
      loadQuestion(questions[0]); // Example: Load the first question
    } catch (error) {
      console.error("Error fetching questions:", error);
      document.querySelector(".question-area").innerHTML = "<p>Error loading questions. Please try again later.</p>";
    }
  }
  

// Load a Question and Its Answers
function loadQuestion(question) {
  questionArea.innerHTML = ""; // Clear previous question
  answersArea.innerHTML = ""; // Clear previous answers

  // Add fade-in animation
  questionArea.style.animation = "fadeIn 0.5s ease-in-out";
  answersArea.style.animation = "fadeIn 0.5s ease-in-out";

  // Display question
  const questionTitle = document.createElement("h2");
  questionTitle.innerHTML = question.title;
  questionTitle.style = "font-size: 20px; font-weight: bold; color: #222; margin-bottom: 20px;";
  questionArea.appendChild(questionTitle);

  // Display answers
  for (let i = 1; i <= 4; i++) {
    const answerDiv = document.createElement("div");
    answerDiv.className = "answer";

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "question";
    radioInput.id = `answer_${i}`;
    radioInput.dataset.answer = question[`answer_${i}`];

    const label = document.createElement("label");
    label.htmlFor = `answer_${i}`;
    label.innerHTML = question[`answer_${i}`];

    // Add click listener to toggle "selected" class
    answerDiv.addEventListener("click", () => {
      // Remove "selected" class from all answers
      document.querySelectorAll(".answer").forEach((el) => el.classList.remove("selected"));

      // Add "selected" class to the clicked answer
      answerDiv.classList.add("selected");

      // Select the corresponding radio button
      radioInput.checked = true;
    });

    answerDiv.appendChild(radioInput);
    answerDiv.appendChild(label);
    answersArea.appendChild(answerDiv);
  }
}

// Handle Next Button Click
nextButton.addEventListener("click", () => {
  const selectedAnswer = getSelectedAnswer();

  if (!selectedAnswer) {
    // Show the custom popup modal
    showPopup();
    return;
  }

  // const correctAnswer = questions[currentIndex].right_answer;

  // Save result for this question
  
  results.push({
    question: questions[currentIndex].title,
    selectedAnswer: selectedAnswer,
    // correctAnswer: correctAnswer,
    // fileType: sessionStorage.getItem("selectedFileType"), // Get file type from Session Storage
  });
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion(questions[currentIndex]); // Load next question
  } else {
    // document.getElementById("next-button").innerHTML = `<p>Finish</p>`;
    saveResultsToLocalStorage(); // Save results to localStorage
    // showResults();
    window.location.href = `/pages/result.html?fileType=${encodeURIComponent(fileType)}`;
  }

  if (currentIndex < questions.length) {
    loadQuestion(questions[currentIndex]); // Load next question
  }
  
  if (currentIndex === questions.length) {
    nextButton.textContent = "Finish"; // Change button text to "Finish"
    nextButton.removeEventListener("click", this); // Remove current click listener
    nextButton.addEventListener("click", showResults); // Attach `showResults` for the final click
  }
});

// Get the Selected Answer
function getSelectedAnswer() {
  const options = document.getElementsByName("question");
  for (const option of options) {
    if (option.checked) {
      return option.dataset.answer;
    }
  }
  return null; // Return null if no option is selected
}

// Save Results to Local Storage
function saveResultsToLocalStorage() {
  localStorage.setItem(`${sessionStorage.getItem('currentQuiz')}QuizResults`, JSON.stringify(results));
}

// Show Results
function showResults() {
  questionArea.innerHTML = "<h2>Quiz Completed!</h2>";
  answersArea.innerHTML = `<p>You have answered all ${questions.length+1} questions. Your results have been saved.</p>`;
  nextButton.style.display = "none"; // Hide the Next button
}

// Show Popup Modal
function showPopup() {
  popupModal.style.display = "flex"; // Display the popup modal
}

// Close Popup Modal
closePopupButton.addEventListener("click", () => {
  popupModal.style.display = "none"; // Hide the popup modal
});

// Trigger Fetch Based on User Card Selection
function onCardSelection(fileType) {
  sessionStorage.setItem("selectedFileType", fileType); // Save the selected file type
  fetchQuestions(fileType); // Fetch questions based on selected file type
}


// document.getElementById("start-english-quiz").addEventListener("click", () => {
//     fetchQuestions("en");
//   });
  
//   document.getElementById("start-iq-quiz").addEventListener("click", () => {
//     fetchQuestions("iq");
//   });
  
//   document.getElementById("start-tech-quiz").addEventListener("click", () => {
//     fetchQuestions("tech");
//   });

// onCardSelection("en"); // Replace "en" with "iq" or "tech" for other file types
// fetchQuestions("en");
