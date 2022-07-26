$(document).ready(function () {

    // TABS
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active')
            .siblings()
            .removeClass('catalog__tab_active')
            .closest('div.container')
            .find('div.catalog__content')
            .removeClass('catalog__content_active')
            .eq($(this).index())
            .addClass('catalog__content_active');
    });

    // OWL Carousel
    $('.owl-carousel').owlCarousel({
        stagePadding: 56,
        center: true,
        items:1,
        loop:true,
        margin: 30,
        nav: false,
        dots: false,
        touchDrag: true,
        mouseDrag: true,
        responsive:{
            300:{items:1, stagePadding: 30, margin: 10},
            360:{items:1, stagePadding:48, margin:15},
            375:{item:1, stagePadding: 56, margin:30},
            390:{item:1, stagePadding: 65},
            425:{item:1, stagePadding: 75},
            768:{items:3,stagePadding: 0},
            1024:{items:3, stagePadding: 110},
            1200:{items:4},
            1600:{items:5}
        }
    });

    // magnificPopup GALLERY
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
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            // titleSrc: function(item) {
            //     return item.el.attr('title') + '<small></small>';
            // }
        }
    });

});


