$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__body-menu').toggleClass('active');
      $('body').toggleClass('lock')
   })
});
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
   let a = window.scrollY;

   if (a > 0) {
      header.classList.add('scrolled');
   }
   else {
      header.classList.remove('scrolled')
   }
});

const titles = document.querySelectorAll('.faq__body-item-title');

titles.forEach(function (item) {
   item.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('opened');
      item.classList.toggle('active');
   })
});

