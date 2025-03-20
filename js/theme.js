document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('light-icon');
    const darkIcon = document.getElementById('dark-icon');
    const body = document.body;

    // Initially hide both icons
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'none';

    // Check if a theme has been saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // If a theme has been saved, apply it to the body element
    if (savedTheme) {
        body.id = savedTheme;
        
        // Show the correct icon based on the saved theme
        if (savedTheme === 'dark') {
            darkIcon.style.display = 'block';
        } else {
            lightIcon.style.display = 'block';
        }
    } else {
        // If no saved theme, set to light by default
        body.id = 'light';
        lightIcon.style.display = 'block';
    }

    // Event listener for the theme toggle button
    themeToggle.addEventListener('click', () => {
        if (body.id === 'light') {
            body.id = 'dark';
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'block';
            localStorage.setItem('theme', 'dark');
        } else {
            body.id = 'light';
            darkIcon.style.display = 'none';
            lightIcon.style.display = 'block';
            localStorage.setItem('theme', 'light');
        }
    });

    // Update ionicons
    ionicons.ionicon();
});