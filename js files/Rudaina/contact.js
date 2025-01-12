emailjs.init("BN3zlAEaOw-W_DVIi");  


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); 

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