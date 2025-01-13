let quizResults = JSON.parse(localStorage.getItem(`${sessionStorage.getItem('currentQuiz')}QuizResults`));
// console.log(quizResults)
const urlParams = new URLSearchParams(window.location.search);
const examType = urlParams.get("examType");
// console.log(examType)

// function review(quizFile) {
//     let i = 0;
//     fetch(quizFile)
//         .then((response) => response.json())
//         .then((questions) => {
//             questions.forEach((questionsElement) => {
//                 const questionDiv = document.createElement("div");
//                 questionDiv.innerHTML = `<p class="question">Question${questionsElement.id}: ${questionsElement.title}</p>`;
//                 reviewContainer.appendChild(questionDiv);
//                 const ol = document.createElement("ol");
//                 for (const key in questionsElement) {
//                     if (key == "right_answer") continue;
//                     if (key == "id" || key == "question") continue;

//                     if (quizResults[i].selectedAnswer == questionsElement["right_answer"]){
//                                                 ol.innerHTML += `<li class="correctAnswer option">${questionsElement[key]}</li>`;
//                                                 console.log(key)
//                                                 console.log(questionsElement["right_answer"])
//                     }
//                     else if (
//                         key == quizResults[i].selectedAnswer &&
//                         questionsElement[key] != questionsElement["right_answer"]
//                     )
//                         ol.innerHTML += `<li class="wrongAnswer option">${questionsElement[key]}</li>`;
//                     else ol.innerHTML += `<li class="option">${questionsElement[key]}</li>`;

//                     questionDiv.appendChild(ol);
//                 }
//                 i++;
//             });
//         });
// }

function review(quizFile) {
  let i = 0;
  fetch(quizFile)
    .then((response) => response.json())
    .then((questions) => {
      for (const key in questions) {
        // console.log(key+' key')



        const questionDiv = document.createElement("div");
        // Add the `question-block` class for styling
        questionDiv.className = "question-block";
        questionDiv.innerHTML = `<p class="question">Question ${questions[key].id}: ${questions[key].title}</p>`;
        reviewContainer.appendChild(questionDiv);

        const ol = document.createElement("ol");
        for (const elem in questions[key]) {
          if (elem == "id" || elem == "title" || elem == "right_answer") continue;

          if (questions[key][elem] == questions[key].right_answer) {
            ol.innerHTML += `<li class="correctAnswer option">${questions[key][elem]}</li>`;
          } else if (
            quizResults[key].selectedAnswer == questions[key][elem] &&
            questions[key][elem] != questions[key].right_answer
          ) {
            ol.innerHTML += `<li class="wrongAnswer option">${questions[key][elem]}</li>`;
          } else {
            ol.innerHTML += `<li class="option">${questions[key][elem]}</li>`;
          }
        }
        questionDiv.appendChild(ol);
      }
    });
}

review(examType);

document.getElementById("backToQuizzes").addEventListener("click", function () {
  sessionStorage.setItem("examType", "");
});

function backToQuizzes() {
  window.location.href = `../../pages/ahmad/CardsTest.html`;
}
