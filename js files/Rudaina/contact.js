// Initialize EmailJS with your user ID
emailjs.init("BN3zlAEaOw-W_DVIi");  // تأكد من وضع الـ user ID الصحيح

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh

    // Get form data
    let name = document.getElementById("name").value;
   
   let lastName = document.getElementById("lastName").value;
 let email = document.getElementById("email").value;
   let message = document.getElementById("message").value;

    // Send data to EmailJS
    emailjs.send("service_ln6zfj8", "template_o8iuciu", {
        firstName: name,
        lastName: lastName,
        email: email,
        message: message
    })
    .then(function (response) {
        
        console.log("Message sent successfully:", response);
        alert("Message sent successfully!");
        document.getElementById("name").value = "";
document.getElementById("lastName").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";
        
       
        
    }, function (error) {
        console.error("Message failed to send:", error);
        alert("Failed to send message. Please try again.");
    });
});