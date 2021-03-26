// trying to avoid spam
document.addEventListener('DOMContentLoaded', function() {
    maildiv = document.getElementById("shadowed-mail")
    if (maildiv !== null) {
        direction = maildiv.getAttribute("direction")
        domain = maildiv.getAttribute("domain")
        subject = maildiv.getAttribute("subject")
        fullm = direction+"@"+domain
        maildiv.href = "mailto:"+fullm+"?subject="+subject
    }
});
