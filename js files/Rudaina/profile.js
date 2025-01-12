const users = JSON.parse(localStorage.getItem('users')) || [];
const user = JSON.parse(sessionStorage.getItem('loggedInUser'));

if (user) {
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let email = document.getElementById("email");
    let current_password = document.getElementById("current-password");
    let profileImg = document.getElementById("profile-img");

    for (const key in user) {
        if (user.hasOwnProperty(key)) {
            if (key === 'firstName') firstName.value = user[key];
            else if (key === 'lastName') lastName.value = user[key];
            else if (key === 'email') email.value = user[key];
            else if (key === 'password') current_password.value = user[key];
            else if (key === 'profileImage' && user[key]) profileImg.src = user[key];
        }
    }
}

function enableEdit(field) {
    document.getElementById(field).disabled = false;
}

function saveChanges() {
    const currentPassword = document.getElementById("current-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const email = document.getElementById("email").value;

    // Check if any required field is empty
    if (!email || !currentPassword || !newPassword || !confirmPassword) {
        displayMessage('All fields are required. Please fill in all fields.', 'danger');
        return;
    }

    // Validate email format
    if (!validateEmail(email)) {
        displayMessage('Invalid email format. Please enter a valid email.', 'danger');
        return;
    }

    // Validate password: at least 8 characters, and contains at least one uppercase letter
    if (!validatePassword(newPassword)) {
        displayMessage('Password must be at least 8 characters long and contain at least one uppercase letter.', 'danger');
        return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
        displayMessage('Passwords do not match!', 'danger');
        return;
    }

    // Check if the current password is correct
    if (user.password !== currentPassword) {
        displayMessage('Current password is incorrect.', 'danger');
        return;
    }

    // Update user data
    const updatedUser = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        email: email,
        password: newPassword, 
        profileImage: document.getElementById("profile-img").src
    };

    // Save updated user to sessionStorage
    sessionStorage.setItem('loggedInUser', JSON.stringify(updatedUser));

    // Save updated user to localStorage
    const userIndex = users.findIndex(u => u.email === updatedUser.email);
    if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
    }

    displayMessage('Changes saved successfully!', 'success');
    
}
// Logout function
function logOut() {
  
    sessionStorage.removeItem('loggedInUser');
    
 
    displayMessage('Logged out successfully!', 'success');
    
  
    window.location.href = '../../pages/habeeb/home.html'; 
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logout-button').addEventListener('click', logOut);
});

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('profile-img');  
        output.src = reader.result;  

        // Save the updated profile image in sessionStorage
        user.profileImage = reader.result;
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));  

        // Save the updated image in localStorage
        const userIndex = users.findIndex(u => u.email === user.email);  
        if (userIndex !== -1) {
            users[userIndex].profileImage = reader.result;  
            localStorage.setItem('users', JSON.stringify(users)); 
        }
    };
    reader.readAsDataURL(event.target.files[0]);  
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    const passwordPattern = /^(?=.*[A-Z]).{8,}$/;
    return passwordPattern.test(password);
}

function displayMessage(message, type) {
    const messageContainer = document.getElementById("message-container");
    messageContainer.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}