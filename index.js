var menuIcon = document.getElementById("menu-icon");
var navLinks = document.getElementById("nav");

function showMenu() {
    navLinks.style.top = "0";
}

function hideMenu() {
    navLinks.style.top = "-50vh";
}

window.onscroll = function () {
    const btn = document.getElementById("pointer");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
