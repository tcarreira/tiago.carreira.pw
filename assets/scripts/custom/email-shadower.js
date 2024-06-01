// trying to avoid spam
document.addEventListener('DOMContentLoaded', function() {
    maildivs = document.getElementsByClassName("shadowed-mail")
    for (let maildiv of maildivs) {
        direction = maildiv.getAttribute("direction")
        domain = maildiv.getAttribute("domain")
        subject = maildiv.getAttribute("subject")
        toreplace = maildiv.getAttribute("toreplace")
        fullm = direction+"@"+domain

        maildiv.href = "mailto:"+fullm+"?subject="+subject
        maildiv.innerHTML = maildiv.innerHTML.replaceAll(toreplace, fullm)
    };
});
