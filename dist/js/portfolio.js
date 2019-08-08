/*global $, console*/
(function () {

    'use strict';

    // Start Navbar 

    $('.menuButton').on('click', function () {
        $(this).toggleClass('active-icon');

        if ($(this).hasClass('active-icon')) {
            $('.nav-list').css({
                height: '305px',
                overflow: 'visible'
            });
        } else {
            $('.nav-list').css({
                height: '50px',
                overflow: 'hidden'
            });
        }

        $('.nav nav ul li i').toggleClass('icon');
        $('.nav nav ul li p').toggleClass('link');
    });

    // Start Aside Action
    $('aside ul li a, header ul li a').hover(function () {
        $(this).prev('span').fadeIn(500);
        $(this).children('p').animate({
            width: '100%',
            height: '100%'
        });
    }, function () {
        $(this).prev('span').fadeOut(500);
        $(this).children('p').animate({
            width: '0%',
            height: '0%'
        });
    });

    $(window).on('scroll', function () {
        $('header, section').each(function () {

            if ($(window).scrollTop() >= $(this).offset().top) {
                var sectionId = $(this).attr('id');
                $('aside ul li a').removeClass('active');
                $('aside > ul li a[data-links="' + sectionId + '"]').addClass('active');
            }
        });
    });

    $('aside ul li a, .nav nav ul li:not(:first-of-type),.about .btn-box button').on('click', function (e) {

        e.preventDefault();
        if ($(window).width >= 575.98) {
            $(this).addClass('active');
        }
        $('html, body').animate({

            scrollTop: $('#' + $(this).data('links')).offset().top + 2

        }, 1500);
    });

    var worksItems = $('.latest-work .work-items');

    // Section Latest Works

    worksItems.hover(function () {
        $(this).find('img').css('transform', 'translateY(-20px)');
        $(this).find('.pos-box').animate({ top: 0 }, 500);
    }, function () {
        $(this).find('img').css('transform', 'translateY(0)');
        $(this).find('.pos-box').animate({ top: '-40px' }, 500);
    });

    //Pop Up Trigger
    $('.box-links').on('click', function () {
        $(this).siblings('.pop-project').animate({ top: '0' });
    });

    $('.latest-work .pop-details button:last-of-type').on('click', function () {
        $('.pop-project').animate({ top: '-100%' });
    });

    $('.pop-project').on('click', function () {
        $(this).animate({ top: '-100%' });
    });
    $('.pop-img img, .pop-details').on('click', function (e) {
        e.stopPropagation();
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('.pop-project').animate({ top: '-100%' });
        }
    });

    // Start Fixed Button

    $(window).on('scroll', function () {
        if (window.pageYOffset >= 400) {
            $('.fixed-button').fadeIn(700);
        } else {
            $('.fixed-button').fadeOut(700);
        }
    });

    $('.fixed-button span').on('click', function () {
        $('html, body').animate({
            scrollTop: '0'
        }, 700);
    });

    // Trigger NIcescroll
    $('body').niceScroll({
        cursorborder: 0,
        cursorcolor: '#192a56',
        zindex: 55555
    });

    // Start Loading page
    $(window).on('load', function () {
        $('.box-convas canvas').delay(300).fadeOut(500, function () {
            $('.box-convas').delay(600).fadeOut(2000);
        });
    });
})();