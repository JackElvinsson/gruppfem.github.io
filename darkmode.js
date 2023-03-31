const darkModeToggle = document.querySelector("#dark-mode-toggle");


let darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";


if (darkModeEnabled) {
    document.body.classList.add("dark-mode");
    darkModeToggle.src = "images/DarkModeActivated.png";
} else {
    darkModeToggle.src = "images/DarkModeNotActivated.png";
}

function toggleDarkMode() {
    darkModeEnabled = !darkModeEnabled;

    
    localStorage.setItem("darkModeEnabled", darkModeEnabled);

    document.body.classList.toggle("dark-mode");

    if (darkModeEnabled) {
        darkModeToggle.src = "images/DarkModeActivated.png";
    } else {
        darkModeToggle.src = "images/DarkModeNotActivated.png";
    }
}

if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode);
}
