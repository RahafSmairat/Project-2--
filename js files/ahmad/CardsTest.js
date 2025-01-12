
  function showAlert(testName="") {
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
  }