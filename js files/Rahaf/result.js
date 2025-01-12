
localStorage.setItem("score", 9);
const score = localStorage.getItem("score");

sessionStorage.setItem("examType", "English");

const examType = sessionStorage.getItem("examType");

function getFile(){
    let jsonFile;
  if (examType == "Technical") {
    jsonFile = "../../json/technical.json";
  } else if (examType == "English") {
    jsonFile = "../../json/english.json";
  } else {
    jsonFile = "../../json/iq.json";
  }
  window.location.href = `../../pages/Rahaf/review.html?examType=${encodeURIComponent(jsonFile)}`;
}

// const reveiwAnswers = document.getElementById('reveiwAnswers');
// reveiwAnswers.addEventListener("click", function () {
//   console.log("hello")
//   let jsonFile;
//   if (examType == "Technical") {
//     jsonFile = "../../json/technical.json";
//   } else if (examType == "English") {
//     jsonFile = "../../json/english.json";
//   } else {
//     jsonFile = "../../json/iq.json";
//   }
//   window.location.href = `../../pages/Rahaf/review.html?examType=${encodeURIComponent(jsonFile)}`;
// });

const successStyle = document.createElement("style");
const failStyle = document.createElement("style");
failStyle.innerHTML = `body::before {
    content: ''; 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/Rahaf/bg.png');
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
    background-image: url('/images/Rahaf/cong.gif');
    background-size: contain;
    background-position: center;
}`;

function showResult(score) {
  if (score >= 5) {
    scoreResult.innerHTML = `<h2 class="pass">${score} /10 </h2>`;
    resultMessage.innerHTML = `<h3 class="pass">Congratulations! You've successfully passed the ${examType} Quiz!</h3>`;
    document.head.appendChild(successStyle);
    document.getElementById(
      "buttonsContainer"
    ).innerHTML += `<a href="#"><button id="downloadResult" onclick="downloadResult()">Download Result</button></a>`;
  } else {
    scoreResult.innerHTML = `<h2 class="fail">${score} /10 </h2>`;
    resultMessage.innerHTML = `<h3 class="fail">Unfortunately, you did not fulfill our requirements, Good Luck!</h3>`;
    document.head.appendChild(failStyle);
  }
}

showResult(score);

///////////

function downloadResult() {
  const companylogo = "../../images/Rahaf/logo.png";
  const userName = "Rahaf Alsmairat";
  const pdfContent = `
      <div class="pdfResult">
        <img src="${companylogo}">
        <h1>${examType} Test Results</h1>
        <p>This is to certify that</p>
        <h3>${userName}</h3>
        <p>Has successfully completed the assessment and demonstrated excellent skills and knowledge in the areas tested.</p>
      </div>
    `;

  const elementToPrint = document.createElement("div");
  elementToPrint.innerHTML = pdfContent;

  const options = {
    margin: 0,
    filename: `${examType}-Test-Result.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "cm", format: "a4", orientation: "landscape" },
  };

  html2pdf().set(options).from(elementToPrint).save();
}

document.getElementById("backToQuizzes").addEventListener("click", function () {
  sessionStorage.setItem("examType", "");
});
