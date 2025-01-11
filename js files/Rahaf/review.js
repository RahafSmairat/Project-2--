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

function review(quizFile) {
    let i = 0;
    fetch(quizFile)
        .then((response) => response.json())
        .then((questions) => {
            questions.forEach((questionsElement) => {
                const questionDiv = document.createElement("div");
                questionDiv.innerHTML = `<p class="question">Question${questionsElement.questionID}: ${questionsElement.question}</p>`;
                reviewContainer.appendChild(questionDiv);
                const ul = document.createElement("ol");
                for (const key in questionsElement) {
                    if (key == "correct") continue;
                    if (key == "questionID" || key == "question") continue;

                    if (questionsElement[key] == questionsElement["correct"])
                        ul.innerHTML += `<li class="correctAnswer option">${questionsElement[key]}</li>`;
                    else if (
                        key == answers[i].answer &&
                        questionsElement[key] != questionsElement["correct"]
                    )
                        ul.innerHTML += `<li class="wrongAnswer option">${questionsElement[key]}</li>`;
                    else ul.innerHTML += `<li class="option">${questionsElement[key]}</li>`;

                    questionDiv.appendChild(ul);
                }
                i++;
            });
        });
}

review("../../json/test.json");
