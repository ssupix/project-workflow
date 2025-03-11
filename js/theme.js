// THEME SWITCH

// when the document has finished loading, run the following code
document.addEventListener('DOMContentLoaded', () => {
    // get references to the theme toggle button and its child icons
    const themeToggle = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('light-icon');
    const darkIcon = document.getElementById('dark-icon');
    // get a reference to the body element
    const body = document.body;

    // check if a theme has been saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    // if a theme has been saved, apply it to the body element
    if (savedTheme) {
        body.id = savedTheme;
        // toggle the display of the icons based on the saved theme
        if (savedTheme === 'dark') {
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'block';
        } else {
            darkIcon.style.display = 'none';
            lightIcon.style.display = 'block';
        }
    }

    // an event listener to the theme toggle button
    // when it is clicked, toggle the theme and update the icons
    themeToggle.addEventListener('click', () => {
        // if the current theme is light, switch to dark
        if (body.id === 'light') {
            body.id = 'dark';
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'block';
            // save the new theme in localStorage
            localStorage.setItem('theme', 'dark');
        }
        // if the current theme is dark, switch to light
        else if (body.id === 'dark') {
            body.id = 'light';
            darkIcon.style.display = 'none';
            lightIcon.style.display = 'block';
            // save the new theme 
            localStorage.setItem('theme', 'light');
        }
    });

    // update ionicons 
    ionicons.ionicon();
});

