//'use strict';
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu_hidden')
//const body = document.body
hamburger.addEventListener('click', function() {
    menu.classList.toggle('hidden');
});
 /* if (menu.classList.contains('hidden')) {
    body.addEventListener('click', function() {
        menu.classList.remove('hidden')
    })
} */