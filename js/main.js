$(function () {

  new WOW().init();

  $('.menu__list a, .logo, .header__link').on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.blog__slider').slick({
    arrows: false,
    dots: true

  });

  $('.menu__btn, .menu__link').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  var mixer = mixitup('.gallery__photo');

});

const tabs = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabs.forEach(function (item) {

  item.addEventListener('click', function () {

    let curentBtn = item;

    tabs.forEach(function (item) {
      item.classList.remove('tab-active');
    });

    curentBtn.classList.add('tab-active');


    contentBoxes.forEach(function (e) {
      e.classList.add('hidden');
    });

    const contentBox = document.querySelector('#' + this.dataset.tab);
    contentBox.classList.remove('hidden');

  });
});

const accordeon = document.querySelectorAll('[data-name="accordeon-title"]');

accordeon.forEach(function (item) {

  item.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('hidden');
    this.classList.toggle('accordeon-active');
  });
});