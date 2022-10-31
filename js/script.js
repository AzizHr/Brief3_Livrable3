const nav_menu = document.getElementById('nav_menu');
const nav_menu_icon = document.getElementById('nav_menu_icon');
const nav = document.getElementById('nav');

nav_menu_icon.addEventListener('click' , function(){
    if(nav_menu.style.display == 'none'){
        nav_menu.style.display = 'block';
    }
    else{
        nav_menu.style.display = 'none';
    }
});