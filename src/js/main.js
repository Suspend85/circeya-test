$(document).ready(function () {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active')
            .siblings()
            .removeClass('catalog__tab_active')
            .closest('div.container-a')
            .find('div.catalog__content')
            .removeClass('catalog__content_active')
            .eq($(this).index())
            .addClass('catalog__content_active');
    });

    const owl = $('.owl-carousel');
    $(owl).owlCarousel({
        autoWidth: true,
        autoHeight:false,
        center: true,
        items: 1,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        touchDrag: true,
        mouseDrag: true,
        responsive: {
            300: {items: 1},
            400: {items: 1},
            500: {items: 1},
            768: {items: 1},
            1024: {items: 3},
        }
    });

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 100,
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            tCounter: '',
            enabled: true,
            navigateByImgClick: false,
            preload: [0,1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        }
    });

});


