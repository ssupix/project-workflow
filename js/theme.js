// THEME

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('light-icon');
    const darkIcon = document.getElementById('dark-icon');
    const body = document.body;

    // Check and apply saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.id = savedTheme;
        if (savedTheme === 'dark') {
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'block';
        } else {
            darkIcon.style.display = 'none';
            lightIcon.style.display = 'block';
        }
    }

    // Toggle theme and update icons
    themeToggle.addEventListener('click', () => {
        if (body.id === 'light') {
            body.id = 'dark';
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'block';
            localStorage.setItem('theme', 'dark');
        } else if (body.id === 'dark') {
            body.id = 'light';
            darkIcon.style.display = 'none';
            lightIcon.style.display = 'block';
            localStorage.setItem('theme', 'light');
        }
    });

    // Update ionicons (this line replaces feather.replace())
    ionicons.ionicon();
});
