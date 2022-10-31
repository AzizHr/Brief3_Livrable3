const nav_menu = document.getElementById('nav_menu');
const nav_menu_icon = document.getElementById('nav_menu_icon');
const nav = document.getElementById('nav');

nav_menu_icon.addEventListener('click' , function(){
    nav_menu.classList.toggle("show")
});