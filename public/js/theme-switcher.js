// theme-switcher.js

document.addEventListener("DOMContentLoaded", function() {
    // 1. Check if a theme was previously saved
    const savedTheme = localStorage.getItem("selectedTheme");
    const homeLink = document.getElementById("dynamic-home-link");

    // 2. If a theme is saved, make the Home button point there
    if (savedTheme && homeLink) {
        // This ensures clicking 'Home' takes them to /sonic/ or /flower/ 
        // instead of the raw root /
        homeLink.href = savedTheme;
    }

    // 3. Logic to save the theme when they pick one
    // Find all your theme selection links (the ones in your /themes/ page)
    const themeLinks = document.querySelectorAll(".theme-selector-link"); 
    
    themeLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Save the path (e.g., "/sonic/") to localStorage
            localStorage.setItem("selectedTheme", this.getAttribute("href"));
        });
    });
});