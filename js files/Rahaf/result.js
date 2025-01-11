localStorage.setItem('score', 4);

const score = localStorage.getItem('score');
const successStyle = document.createElement('style');
const failStyle = document.createElement('style');
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
  }`
successStyle.innerHTML = `body::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 1;
    opacity: 1;
    background-image: url('/images/Rahaf/congragulations.gif');
    background-size: contain;
    background-position: center;
}`

function showResult(score){
    if (score>=5){
        scoreResult.innerHTML = `<h2 class="pass">${score} /10 </h2>`
        resultMessage.innerHTML = `<h3 class="pass">Congratulations! You've successfully passed the Quiz!</h3>`
        document.head.appendChild(successStyle);
    }
    else{
        scoreResult.innerHTML = `<h2 class="fail">${score} /10 </h2>`
        resultMessage.innerHTML = `<h3 class="fail">Unfortunately, you did not fulfill our requirements, Good Luck!</h3>`
        document.head.appendChild(failStyle);
    }
}

showResult(score)