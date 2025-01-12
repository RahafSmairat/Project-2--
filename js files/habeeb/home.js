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
        query.style.display = "none"; // Hide the ul on small screens
        menu.style.display = "flex"; // Show the menu button on small screens
    } else {
        query.style.display = "flex"; // Show the ul on larger screens
        menu.style.display = "none"; // Hide the menu button on larger screens
    }
};
toggle();
window.addEventListener("resize", toggle);
menu.addEventListener("click", () => {
    if (window.innerWidth <= 430) {
        if (query.style.display === "none" || query.style.display === "") {
            query.style.display = "flex"; // Show the ul
            query.style.flexDirection = "flex"; 
        } else {
            query.style.display = "none"; // Hide the ul
        }
    }
});