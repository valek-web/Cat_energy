let gamburger = document.querySelector('.buttonOC')
let bg_menu = document.querySelector('.bg_menu')
let nav = document.querySelector('nav')

gamburger.addEventListener('click', () => {
    nav.classList.toggle('active')
    bg_menu.classList.toggle('bg_menu_active')
    gamburger.classList.toggle('buttonOC_active')
})
