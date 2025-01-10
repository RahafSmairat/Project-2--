

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

// حدث تسجيل الدخول
document.getElementById("showw").onclick = (event) => {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // جلب قائمة المستخدمين من localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // البحث عن تطابق بين المدخلات وأحد المستخدمين
    const user = storedUsers.find(
        (u) => (u.email === username || u.phone === username) && u.password === password
    );

    if (user) {
        document.getElementById("show").innerHTML = "Success Login";
        document.getElementById("show").style.color = "green";
    } else {
        document.getElementById("show").innerHTML = "Wrong password or username";
        document.getElementById("show").style.color = "red";
    }

    if (password === "" && username === "") {
        document.getElementById("show").innerHTML = " ";
    }

    // إعادة تعيين الرسالة عند النقر على الحقول
    document.getElementById("username").addEventListener("click", () => {
        document.getElementById("show").innerHTML = "";
    });

    document.getElementById("password").addEventListener("click", () => {
        document.getElementById("show").innerHTML = "";
    });
};

// التحقق من صيغة اسم المستخدم (البريد أو الهاتف)
document.getElementById("username").addEventListener("input", (event) => {
    event.preventDefault();

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^\d{10}$/;
    let username = document.getElementById("username").value.trim();

    if (username === "") {
        document.getElementById("user").innerHTML = "";
    } else if (!emailRegex.test(username) && !phoneRegex.test(username)) {
        document.getElementById("user").innerHTML = "Incorrect Email or Phone format";
    } else {
        document.getElementById("user").innerHTML = "";
    }
});

// التحقق من صيغة كلمة المرور
document.getElementById("password").addEventListener("input", (event) => {
    event.preventDefault();

    let passwordRegex = /^[a-zA-Z0-9._()@]+$/;
    let password = document.getElementById("password").value.trim();

    if (password === "") {
        document.getElementById("passs").innerHTML = "";
    } else if (!passwordRegex.test(password)) {
        document.getElementById("passs").innerHTML = "Incorrect password format";
    } else {
        document.getElementById("passs").innerHTML = "";
    }
});