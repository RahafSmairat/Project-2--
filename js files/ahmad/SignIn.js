
 function showAlert(message) {
    const alertBox = document.getElementById("custom-alert");
    const alertText = document.getElementById("alert-text");
  
  
    alertText.textContent = message;
  
    
    alertBox.classList.remove("hidden");
    alertBox.classList.add("show");
  }
  
  function closeAlert() {
    const alertBox = document.getElementById("custom-alert");
  
    alertBox.classList.remove("show");
    alertBox.classList.add("hidden");
  }

 // Name validation
 document.getElementById('Fname').addEventListener('input', function () {
    const Fname = this.value;
    const error = document.getElementById('FnameError');
    if (/[^a-zA-Z\s]/.test(Fname)) {
        error.textContent = "Only letters and spaces are allowed";
    } else {
        error.textContent = "";
    }
});

document.getElementById('Lname').addEventListener('input', function () {
    const Lname = this.value;
    const error = document.getElementById('LnameError');
    if (/[^a-zA-Z\s]/.test(Lname)) {
        error.textContent = "Only letters and spaces are allowed";
    } else {
        error.textContent = "";
    }
});

// Email validation
document.getElementById('email').addEventListener('input', function () {
    const email = this.value;
    const error = document.getElementById('emailError');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.textContent = "The email is not valid";
    } else {
        error.textContent = "";
    }
});

// Phone validation
document.getElementById('phone').addEventListener('input', function () {
    const phone = this.value;
    const error = document.getElementById('phoneError');
    if (!/^\d{10}$/.test(phone)) {
        error.textContent = "Phone number must be 10 digits";
    } else {
        error.textContent = "";
    }
});

// Password validation
document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const error = document.getElementById('passwordError');
    if (password.length < 8) {
        error.textContent = "Password must be at least 8 characters long";
    } else if (!/[A-Z]/.test(password)) {
        error.textContent = "Password must include at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
        error.textContent = "Password must include at least one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
        error.textContent = "Password must include at least one digit";
    } else if (!/[!@#$%^&*]/.test(password)) {
        error.textContent = "Password must include at least one special character";
    } else {
        error.textContent = "";
    }
});

// Confirm Password validation
document.getElementById('confirmPassword').addEventListener('input', function () {
    const confirmPassword = this.value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('confirmPasswordError');
    if (confirmPassword !== password) {
        error.textContent = "Passwords do not match";
    } else {
        error.textContent = "";
    }
});

// Form submission
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const Fname = document.getElementById('Fname').value;
    const Lname = document.getElementById('Lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Validate fields again before submission
    if (document.querySelectorAll('span:empty').length !== 6) {
       
        return;
    }

    // Retrieve existing users from Local Storage or initialize an empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists based on email
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
       // alert('An account with this email already exists. Redirecting to login page.');
        const mess="An account with this email already exists. Redirecting to login page.";
        showAlert(mess)
        //window.location.href = 'login.html'; // Redirect to login page
        return;
    }

    // Create a unique ID for the new user
    const userId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    // Create a JSON object for the user
    const userData = {
        id: userId,
        Fname: Fname,
        Lname:Lname,
        email: email,
        phone: phone,
        password: password, // Note: Passwords should ideally be hashed before storage
        img:"",
        hasTakenExam: false // Default value indicating the user has not taken the exam
    };


    // Add the new user to the array
    users.push(userData);

    // Save the updated array back to Local Storage
    localStorage.setItem('users', JSON.stringify(users));
    //alert('Registration successful! Data has been saved in Local Storage.');
    const mess="Registration successful!";
    showAlert(mess)

    // Optionally clear the form
    document.getElementById('registrationForm').reset();
});