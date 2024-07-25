var MenuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

MenuIcon.onclick = function() {
    sidebar.classList.toggle("show-sidebar");
    container.classList.toggle("show-container");
}