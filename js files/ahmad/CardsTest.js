
function resetCurrentQuiz(){
  sessionStorage.setItem('currentQuiz',"")
}

  function showAlert(testName) {

    sessionStorage.setItem('currentQuiz',testName)

    const alertBox = document.getElementById("custom-alert");
    const alertText = document.getElementById("alert-text"); 
    alertText.textContent = testName;
    alertBox.classList.remove("hidden");
    alertBox.classList.add("show");
  }

  function closeAlert() {
    const alertBox = document.getElementById("custom-alert");
    alertBox.classList.remove("show");
    alertBox.classList.add("hidden");
    sessionStorage.setItem('currentQuiz',"")
  }

function getFile(){
  const currentQuiz = sessionStorage.getItem("currentQuiz");
    let fileName;
  if (currentQuiz == "Technical") {
    fileName = "tech";
  } else if (currentQuiz == "English") {
    fileName = "en";
  } else {
    fileName = "iq";
  }
  window.location.href = `../../pages/Phantom/exam.html?examType=${encodeURIComponent(fileName)}`;
}



///////////////////////////////////////////////////

iqTestCompleted = localStorage.getItem('iqTestCompleted');
englishTestCompleted = localStorage.getItem('englishTestCompleted');
technicalTestCompleted = localStorage.getItem('technicalTestCompleted');

function takenTest(){
  let showEnglish = document.getElementById("showEnglish");
let testEnglish = document.getElementById("testEnglish");
// console.log(x);
if(englishTestCompleted == "true" )
{
  showEnglish.classList.remove("hidden");
  testEnglish.classList.add("hidden");
  // localStorage.setItem("hasTakenExamEnglish", true);
}

// let english = localStorage.getItem("hasTakenExamEnglish");
//   // console.log(english);
//   if(english) 
//   {
//     let showEnglish = document.getElementById("showEnglish");
//     let testEnglish = document.getElementById("testEnglish");
//   showEnglish.classList.remove("hidden");
//   testEnglish.classList.add("hidden");
//   }

  let showIQ = document.getElementById("showIQ");
  let testIQ = document.getElementById("testIQ");

  if(iqTestCompleted == "true")
    {
      showIQ.classList.remove("hidden");
      testIQ.classList.add("hidden");
      // localStorage.setItem("hasTakenExamIQ",true);
    }

    // let IQ = localStorage.getItem("hasTakenExamIQ");
    // // console.log(english);
    // if(IQ)
    // {
    //   let showIQ = document.getElementById("showIQ");
    //   let testIQ = document.getElementById("testIQ");
    //   showIQ.classList.remove("hidden");
    //   testIQ.classList.add("hidden");
    // }

    
    let showTechnical = document.getElementById("showTechnical");
    let testTech = document.getElementById("testTech");
    // console.log(x);
    if(technicalTestCompleted == "true")
    {
      showTechnical.classList.remove("hidden");
      testTech.classList.add("hidden");
      // localStorage.setItem("hasTakenExamTech",true);
    }
    // let tech = localStorage.getItem("hasTakenExamTech");
    // if(tech)
    //   {
    //     let showTechnical = document.getElementById("showTechnical");
    //     let testTech = document.getElementById("testTech");
    //     showTechnical.classList.remove("hidden");
    //     testTech.classList.add("hidden");
    //   }
}

document.body.addEventListener('load',takenTest())

// function takenEnglish(){ 

//   // const user = JSON.parse(localStorage.getItem('users')) || [];
// //console.log(x);

// let showEnglish = document.getElementById("showEnglish");
// let testEnglish = document.getElementById("testEnglish");
// // console.log(x);
// if(englishScore!=null)
// {
//   showEnglish.classList.remove("hidden");
//   testEnglish.classList.add("hidden");
//   localStorage.setItem("hasTakenExamEnglish", true);
// }

// }

  
  // let english = localStorage.getItem("hasTakenExamEnglish");
  // // console.log(english);
  // if(english) 
  // {
  //   let showEnglish = document.getElementById("showEnglish");
  //   let testEnglish = document.getElementById("testEnglish");
  // showEnglish.classList.remove("hidden");
  // testEnglish.classList.add("hidden");
  // }

  // function takenIQ(){ 

  //   const user = JSON.parse(localStorage.getItem('users')) || [];
  //   let x  = user[0].hasTakenExam = true;
  // //console.log(x);
  
  // let showIQ = document.getElementById("showIQ");
  // let testIQ = document.getElementById("testIQ");
  // // console.log(x);
  // if(iqScore!=null)
  // {
  //   showIQ.classList.remove("hidden");
  //   testIQ.classList.add("hidden");
  //   localStorage.setItem("hasTakenExamIQ",true);
  // }
  //   }

  //   let IQ = localStorage.getItem("hasTakenExamIQ");
  // // console.log(english);
  // if(IQ)
  // {
  //   let showIQ = document.getElementById("showIQ");
  //   let testIQ = document.getElementById("testIQ");
  //   showIQ.classList.remove("hidden");
  //   testIQ.classList.add("hidden");
  // }




    // function takenTech(){

    //   const user = JSON.parse(localStorage.getItem('users')) || [];
    //   let x  = user[0].hasTakenExam = true;
    // //console.log(x);
    
    // let showTechnical = document.getElementById("showTechnical");
    // let testTech = document.getElementById("testTech");
    // // console.log(x);
    // if(technicalScore!=null)
    // {
    //   showTechnical.classList.remove("hidden");
    //   testTech.classList.add("hidden");
    //   localStorage.setItem("hasTakenExamTech",true);
    // }
    //   }

      // let tech = localStorage.getItem("hasTakenExamTech");
      // if(tech)
      //   {
      //     let showTechnical = document.getElementById("showTechnical");
      //     let testTech = document.getElementById("testTech");
      //     showTechnical.classList.remove("hidden");
      //     testTech.classList.add("hidden");
      //   }

      function h(currentQuiz){
        let fileName;
        if (currentQuiz == "Technical") {
          fileName = "tech";
          sessionStorage.setItem('currentQuiz','Technical')
        } else if (currentQuiz == "English") {
          fileName = "en";
          sessionStorage.setItem('currentQuiz','English')
        } else {
          fileName = "iq";
          sessionStorage.setItem('currentQuiz','IQ')
        }
        window.location.href = `../../pages/Rahaf/result.html?fileType=${encodeURIComponent(fileName)}`;
      }
      
      // document.getElementById('showIQ').addEventListener('click',h('IQ'))
      // document.getElementById('showEnglish').addEventListener('click',showResult('English'))
      // document.getElementById('showTechnical').addEventListener('click',showResult('Technical'))