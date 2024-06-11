document.addEventListener('DOMContentLoaded', function() {
    let menuBurgeur = document.getElementById('menuBurgeur');
    let getMenu = document.getElementById('getMenu');

    menuBurgeur.addEventListener('click', function() {
        if (getMenu.style.display === "block") {
            getMenu.style.display = "none";
        } else {
            getMenu.style.display = "block";
        }
    });
});