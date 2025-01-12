
const answers = [
    {
        questionID: 1,
        answer: "a",
    },
    {
        questionID: 2,
        answer: "d",
    },
    {
        questionID: 3,
        answer: "b",
    },
];

const urlParams = new URLSearchParams(window.location.search);
const examType = urlParams.get('examType');

function review(quizFile) {
    let i = 0;
    fetch(quizFile)
        .then((response) => response.json())
        .then((questions) => {
            questions.forEach((questionsElement) => {
                const questionDiv = document.createElement("div");
                questionDiv.innerHTML = `<p class="question">Question${questionsElement.questionID}: ${questionsElement.question}</p>`;
                reviewContainer.appendChild(questionDiv);
                const ol = document.createElement("ol");
                for (const key in questionsElement) {
                    if (key == "correct") continue;
                    if (key == "questionID" || key == "question") continue;

                    if (questionsElement[key] == questionsElement["correct"])
                        ol.innerHTML += `<li class="correctAnswer option">${questionsElement[key]}</li>`;
                    else if (
                        key == answers[i].answer &&
                        questionsElement[key] != questionsElement["correct"]
                    )
                        ol.innerHTML += `<li class="wrongAnswer option">${questionsElement[key]}</li>`;
                    else ol.innerHTML += `<li class="option">${questionsElement[key]}</li>`;

                    questionDiv.appendChild(ol);
                }
                i++;
            });
        });
}

review(examType);

document.getElementById('backToQuizzes').addEventListener('click', function(){
    sessionStorage.setItem('examType',"");
})
