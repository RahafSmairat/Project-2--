let quizResults = JSON.parse(localStorage.getItem(`${sessionStorage.getItem('currentQuiz')}QuizResults`));
const urlParams = new URLSearchParams(window.location.search);
const examType = urlParams.get("examType");


function review(quizFile) {
  let i = 0;
  fetch(quizFile)
    .then((response) => response.json())
    .then((questions) => {
      for (const key in questions) {



        const questionDiv = document.createElement("div");
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
  window.location.href = `/pages/CardsTest.html`;
}

function updateLoginStatus() {
  const loggedInUser = sessionStorage.getItem('loggedIn-status'); 
  const loginLogoutLink = document.getElementById('login-logout');
  const user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
  const profileImageElement = document.getElementById('profile-image');

  if (loggedInUser) {
      
      const profile_icon = document.getElementById("profile-icon");
      if (profile_icon) {
          profile_icon.style.visibility = "visible"; 
      }
      let sign_up_link=document.getElementById("sign-up-link");
      sign_up_link.style.visibility="hidden";

      let loginLogoutLink=document.getElementById("loginLogoutLink");

      loginLogoutLink.textContent = 'Logout';
      
      const user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};

  const profileImageElement = document.getElementById('profile-image');

  
  if (user.profileImage) {
      profileImageElement.src = user.profileImage; 
  } else {
     
      profileImageElement.src = '/images/avatar.jpg';
  }
  // 

      loginLogoutLink.onclick = function () {
          sessionStorage.removeItem('loggedIn-status'); 
          updateLoginStatus(); 
         
      };
  } else {
      
      const profile_icon = document.getElementById("profile-icon");
      if (profile_icon) {
          profile_icon.style.visibility = "hidden"; 
      }
let loginLogoutLink=document.getElementById("loginLogoutLink");
      loginLogoutLink.textContent = 'Login';
      loginLogoutLink.onclick = function () {
          window.location.href = 'login.html'; 
      };
  }
}


window.onload = updateLoginStatus;