let mobileMenuBtn = document.querySelector('#mobile-menu-btn');
let mobileMenu = document.querySelector('#mobile-menu');

mobileMenuBtn.addEventListener('click',()=>{
    mobileMenu.classList.toggle('hidden');
});