// OFF SCREEN MENU

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeMenu = document.querySelector('.close-menu');
    const breakpoint = 768;

    function toggleMobileNav() {
        mobileNav.classList.toggle('open');
    }

    function checkWindowSize() {
        if (window.innerWidth <= breakpoint) {
            document.body.classList.add('mobile');
        } else {
            document.body.classList.remove('mobile');
            mobileNav.classList.remove('open');
        }
    }

    hamburger.addEventListener('click', toggleMobileNav);
    closeMenu.addEventListener('click', toggleMobileNav);
    window.addEventListener('resize', checkWindowSize);
    checkWindowSize();
    feather.replace();
});