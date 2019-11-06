$("#getting-started")
    .countdown("2020/01/01", function (event) {
        $('#day').text(
            event.strftime('%D')
        );
        $('#hours').text(
            event.strftime('%H')
        );
        $('#minutes').text(
            event.strftime('%M')
        );
        $('#seconds').text(
            event.strftime('%S')
        );
    });
$(document).ready(function () {
    $('.autoplay').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: null,/*destroy arrows*/
        nextArrow: null,/*destroy arrows*/
        responsive: [
            {
                breakpoint: 470,
                settings: {
                    slidesToShow: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    infinite: true
                }
            },
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 5,
                    infinite: true
                }
            }
        ]
    });
});




