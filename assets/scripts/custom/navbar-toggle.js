document.addEventListener('DOMContentLoaded', function() {
    // auto-toggle navbar on items click
    // alternative: https://stackoverflow.com/questions/14248194/close-responsive-navbar-automatically/75808063#75808063
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)')
    const menuToggle = document.getElementById('navbar-toggler')
    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            menuToggle.checkVisibility() && menuToggle.click()
        })
    })

    //prevent changing theme to scroll back home
    const navThemeLinks = document.querySelectorAll('#themeMenu > .nav-link')
    navThemeLinks.forEach((l) => {
        l.setAttribute("href", "javascript:;")
    })

});

