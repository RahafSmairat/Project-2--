
let score = 0;

const currentQuiz = sessionStorage.getItem("currentQuiz");
const urlParams = new URLSearchParams(window.location.search);
const fileType = urlParams.get("fileType");
const fileUrl = `/json/${fileType}.json`;

let quizResults = JSON.parse(localStorage.getItem(`${sessionStorage.getItem('currentQuiz')}QuizResults`));

console.log(quizResults);

function calculateScore() {
  return fetch(fileUrl)
    .then((response) => response.json())
    .then((questions) => {
      let score = 0; 
      for (const key in questions) {
        if (questions[key].right_answer == quizResults[key].selectedAnswer) {
          score += 1;
        }
      }
      return score; 
    });
}

function getFile() {
  let jsonFile;
  if (currentQuiz == "Technical") {
    jsonFile = "/json/tech.json";
  } else if (currentQuiz == "English") {
    jsonFile = "/json/en.json";
  } else {
    jsonFile = "/json/iq.json";
  }
  window.location.href = `/pages/review.html?examType=${encodeURIComponent(
    jsonFile
  )}`;
}


const successStyle = document.createElement("style");
const failStyle = document.createElement("style");
failStyle.innerHTML = `body::before {
    content: ''; 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/bg.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    opacity: 0.3; 
    z-index: -1; 
  }`;

successStyle.innerHTML = `body::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 1;
    opacity: 1;
    background-image: url('/images/cong.gif');
    background-size: contain;
    background-position: center;
}`;


function showResult() {
  calculateScore().then((score) => {
    if (currentQuiz == "Technical"){
      localStorage.setItem('technicalTestCompleted',"true")
      localStorage.setItem('technicalScore',score)
    }else if(currentQuiz == "English"){
      localStorage.setItem('englishTestCompleted',"true")
      localStorage.setItem('englishScore',score)
    }
    else{
      localStorage.setItem('iqTestCompleted',"true")
      localStorage.setItem('iqScore',score)
    }
    if (score >= 5) {
      scoreResult.innerHTML = `<h2 class="pass">${score} /10 </h2>`;
      resultMessage.innerHTML = `<h3 class="pass">Congratulations! You've successfully passed the ${currentQuiz} Quiz!</h3>`;
      document.head.appendChild(successStyle);
      document.getElementById(
        "buttonsContainer"
      ).innerHTML += `<a href="#"><button id="downloadResult" onclick="downloadResult()">Download Result</button></a>`;
    } else {
      scoreResult.innerHTML = `<h2 class="fail">${score} /10 </h2>`;
      resultMessage.innerHTML = `<h3 class="fail">Unfortunately, you did not fulfill our requirements, Good Luck!</h3>`;
      document.head.appendChild(failStyle);
    }
  });


  const loggedInUser = sessionStorage.getItem('loggedIn-status');
  const loginLogoutLink = document.getElementById('login-logout');
  const user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
  const profileImageElement = document.getElementById('profile-image');

  if (loggedInUser) {

    const profile_icon = document.getElementById("profile-icon");
    if (profile_icon) {
      profile_icon.style.visibility = "visible";
    }


    const user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};

    const profileImageElement = document.getElementById('profile-image');


    if (user.profileImage) {
      console.log("hello")
      profileImageElement.src = user.profileImage;
    } else {

      profileImageElement.src = '/images/avatar.jpg';
    }

  } else {

    const profile_icon = document.getElementById("profile-icon");
    if (profile_icon) {
      profile_icon.style.visibility = "hidden";
    }
    let loginLogoutLink = document.getElementById("loginLogoutLink");
    loginLogoutLink.textContent = 'Login';
    loginLogoutLink.onclick = function () {
      window.location.href = 'login.html';
    };
  }

}


function downloadResult() {
  const companylogo = "/images/logo.png";
  let loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
  const userName = `${loggedInUser.firstName} ${loggedInUser.lastName}`;
  const pdfContent = `
      <div class="pdfResult">
        <img src="${companylogo}">
        <h1>${currentQuiz} Test Results</h1>
        <p>This is to certify that</p>
        <h3>${userName}</h3>
        <p>Has successfully completed the assessment and demonstrated excellent skills and knowledge in the areas tested.</p>
      </div>
    `;

  const elementToPrint = document.createElement("div");
  elementToPrint.innerHTML = pdfContent;

  const options = {
    margin: 0,
    filename: `${currentQuiz}-Test-Result.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "cm", format: "a4", orientation: "landscape" },
  };

  html2pdf().set(options).from(elementToPrint).save();
}

document.getElementById("backToQuizzes").addEventListener("click", function () {
  sessionStorage.setItem("currentQuiz", "");
});

function showReview(){
  window.location.href = `/pages/review.html?examType=${encodeURIComponent(jsonFile)}`;
}

function backToQuizzes(){
  window.location.href = `/pages/CardsTest.html`;
}