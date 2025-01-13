const tabs = document.querySelectorAll(".tab");
const tabbtns = document.querySelectorAll(".tab-btn");

const tab_nav = function (tabbtnclick) {
    tabbtns.forEach((tabbtn) => {
        tabbtn.classList.remove("active");
    });

    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });
    tabbtns[tabbtnclick].classList.add("active");
    tabs[tabbtnclick].classList.add("active");
};

tabbtns.forEach((tabbtn, i) => {
    tabbtn.addEventListener("click", () => {
        tab_nav(i);
    });
});

let menu = document.getElementById("img123");
let query = document.getElementById("ulfor");

var toggle = () => {
    var windows = window.innerWidth;
    console.log(windows);

    if (windows <= 430) {
        query.style.display = "none"; 
        menu.style.display = "flex"; 
    } else {
        query.style.display = "flex"; 
        menu.style.display = "none";
    }
};
toggle();
let d = document.getElementById("bt1")
let s = document.getElementById("bt2")
let g = document.getElementById("h")
window.addEventListener("resize", toggle);
menu.addEventListener("click", () => {
    if (window.innerWidth <= 430) {
        if (query.style.display === "none" || query.style.display === "") {
                query.style.display = "flex"; 
                query.style.flexDirection = "flex";
                d.style.display="none"
                s.style.display="none"
                g.style.display="block"
                // menu.style.display ="none"
        } else {
            query.style.display = "none"; // Hide the ul
                d.style.display="block"
                s.style.display="block"
                g.style.display="none"
        }
    }
});
// Retrieve the 'success' value from sessionStorage
let success = sessionStorage.getItem("loggedIn-status");

// Select the existing nav element
let navv = document.querySelector("nav");


// function updateNavbar() {
//     if (success) {  
//         const navbar = document.createElement("ul");
//         navbar.innerHTML = `
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Dashboard</a></li>
//             <li><a href="#">Profile</a></li>
//             <li><a href="#">Settings</a></li>
//             <li id="logout-btn">Sign-out</li> <!-- Fixed typo here -->
//         `;
//         // Append the new navbar to the nav element
//         navv.appendChild(navbar);
//     } 
// }

// updateNavbar();
const typingText = document.querySelector('.typing-text');

        // Array of texts to display
        const texts = [
            "Building the Future",
            "Where Technology Meets Creativity.",
            "Tech That Moves the World.",
            "Tomorrow Starts Here."
        ];
        let index = 0;

        // Function to handle typing and deleting
        function animateText() {
            const text = texts[index];
            const typingDuration = 3; // Time to type (in seconds)
            const deletingDuration = 4; // Time to delete (in seconds)
            const pauseDuration = 1000; // Pause between typing and deleting (in milliseconds)

            // Type the text
            typingText.textContent = text;
            typingText.style.animation = `typing ${typingDuration}s steps(${text.length}, end), blink-caret 0.75s step-end infinite`;

            setTimeout(() => {
                typingText.style.animation = `deleting ${deletingDuration}s steps(${text.length}, end), blink-caret 0.75s step-end infinite`;
                setTimeout(() => {
                    index = (index + 1) % texts.length; 
                    animateText();
                }, deletingDuration * 900);
            }, typingDuration * 1000 + pauseDuration); 
        }

        // Start the animation
        animateText();

        // const alinks = document.querySelectorAll("#alink");

        // alinks.forEach((alink) => {
        //     alink.addEventListener("click", (event) => {
        //         event.preventDefault();
        //         const success = sessionStorage.getItem("suceess");
        //         if (success) {
        //             window.location.href = "/pages/CardsTest.html";
        //         } else {
        //             window.location.href = "/pages/login.html";
        //         }
        //     });
        // });

        function check(event){
            event.preventDefault();
                const success = sessionStorage.getItem("loggedIn-status");
                if (success) {
                    window.location.href = "/pages/CardsTest.html";
                } else {
                    window.location.href = "/pages/login.html";
                }
        }
        check(event)

        