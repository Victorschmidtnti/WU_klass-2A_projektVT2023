const burger = document.getElementById('burger_menu')
const nav = document.getElementById('nav-rubriker')

function toggleMenu() {
    burger.classList.toggle('burger_toggle')
    nav.classList.toggle('nav_active')
}

burger.addEventListener('click', toggleMenu)