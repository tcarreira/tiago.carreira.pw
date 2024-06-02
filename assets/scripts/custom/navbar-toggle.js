document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)')
    const menuToggle = document.getElementById('navbar-toggler')
    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            menuToggle.checkVisibility() && menuToggle.click()
        })
    })
});
