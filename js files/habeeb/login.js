document.getElementById("showw").onclick=(event)=>{

    event.preventDefault()
    let pass = document.getElementById("password").value

    let us = document.getElementById("username").value
    var name = localStorage.getItem("email")
    if(pass == user && us == name){
        document.getElementById("show").innerHTML="success Login"
    }else{
        document.getElementById("show").innerHTML="Wrong password or username "
    }

    if(pass === "" && us===""){
        document.getElementById("show").innerHTML=" "
    }

    document.getElementById("username").addEventListener('click',()=>{
        document.getElementById("show").innerHTML=""
    })

    document.getElementById("password").addEventListener('click',()=>{
        document.getElementById("show").innerHTML=""
    })
}
document.getElementById("username").addEventListener('input', (event) => {
    event.preventDefault();

    let validusername =!/^[^\s@]+@[^\s@]+.[^\s@]+$/;

    let phone = /^\d{10}$/
    let us = document.getElementById("username").value.trim(); 

    if (us === "") {
        document.getElementById("user").innerHTML = ""; 
    } else if (!validusername.test(us) ||phone.test(us) ) {
        document.getElementById("user").innerHTML = "Incorrect Email Or Phone format"; 
    } else {
        document.getElementById("user").innerHTML = "";
    }
});

document.getElementById("password").addEventListener('input', (event) => {
    event.preventDefault();

    let validusername = /^[a-zA-Z0-9._()@]+$/;

    let us = document.getElementById("password").value.trim(); 

    if (us === "") {
        document.getElementById("passs").innerHTML = ""; 
    } else if (!validusername.test(us)) {
        document.getElementById("passs").innerHTML = "Incorrect password format"; 
    } else {
        document.getElementById("passs").innerHTML = "";
    }
});
