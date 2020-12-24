$(document).ready(function () {
    const hamburger = $('.hamburger'),
          menu = $('.menu');


    $(document).on('click', '.hamburger, .menu__item-link', function () {
        if (!$('.menu').hasClass('active')) {
            openMenu();
        } else {
            hideMenu();
        }
    });


    function hideMenu() {
        menu.removeClass('active');
        hamburger.removeClass('is-active');
        $('html').removeClass("no-scroll");
    }

    function openMenu() {
        hamburger.addClass("is-active");
        $('html').addClass("no-scroll");
        menu.addClass('active');
    }
});