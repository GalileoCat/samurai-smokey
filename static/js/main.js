// static/js/main.js
console.log("Samurai Smokey Script Loaded!"); // This confirms the file is connected

document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("dynamic-home-link");
    const refreshBtn = document.getElementById("refresh-btn");
    const currentPath = window.location.pathname;

    console.log("Current Path is: " + currentPath);

    // 1. SAVE THE THEME
    // We check if the URL contains our theme names
    if (currentPath.includes("sonic") || currentPath.includes("flower")) {
        localStorage.setItem("activeSamuraiTheme", currentPath);
        console.log("Theme Saved: " + currentPath);
    }

    // 2. APPLY THE THEME TO THE HOME BUTTON
    const savedTheme = localStorage.getItem("activeSamuraiTheme");
    if (savedTheme && homeLink) {
        homeLink.href = savedTheme;
        console.log("Home Button updated to: " + savedTheme);
    }

    // 3. REFRESH LOGIC
    if (refreshBtn) {
        refreshBtn.addEventListener("click", function(e) {
            e.preventDefault();
            window.location.reload();
        });
    }
});