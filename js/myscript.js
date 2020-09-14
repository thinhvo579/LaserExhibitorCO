$(document).ready(function() {
    slickHeader();
    ourwork();
    //slick_menu();

    slidetoggle_header();
    fancybox();
    headerTop();
    //countDown();
});

function countDown() {
    var target_date = new Date("Jan, 15, 2021").getTime();
    var days, hours, minutes, seconds;
    var second = 1000;
    var countday1 = document.getElementById("day1");
    var countday2 = document.getElementById("day2");
    var countday3 = document.getElementById("day3");
    var counth1 = document.getElementById("h1");
    var counth2 = document.getElementById("h2");

    var countmin1 = document.getElementById("min1");
    var countmin2 = document.getElementById("min2");

    var countsec1 = document.getElementById("sec1");
    var countsec2 = document.getElementById("sec2");

    setInterval(function() {
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
        min = parseInt(seconds_left / 60);
        sec = parseInt(seconds_left % 60);

        // format countdown string + set tag value

        var s = String(days);
        if (days < 10) {
            s = "00".concat(s);
        } else if (days < 100) {
            s = "0".concat(s);
        }
        var h = String(hours);
        if (hours < 10) {
            h = "0".concat(h);
        }
        var m = String(min);
        if (min < 10) {
            m = "0".concat(m);
        }
        var second = String(sec);
        if (sec < 10) {
            second = "0".concat(second);
        }
        //console.log(s);
        var d1 = s.charAt(0);
        var d2 = s.charAt(1);
        var d3 = s.charAt(2);

        var h1 = h.charAt(0);
        var h2 = h.charAt(1);

        var min1 = m.charAt(0);
        var min2 = m.charAt(1);

        var sec1 = second.charAt(0);
        var sec2 = second.charAt(1);

        countday1.innerHTML = d1;
        countday2.innerHTML = d2;
        countday3.innerHTML = d3;

        counth1.innerHTML = h1;
        counth2.innerHTML = h2;

        countmin1.innerHTML = min1;
        countmin2.innerHTML = min2;

        countsec1.innerHTML = sec1;
        countsec2.innerHTML = sec2;
        // this is just for milliseconds only
        /* countdown.innerHTML = 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  '<span class="ms">'+ms+' ms</span>'; */
    }, second);
}

function slickHeader() {
    // -----------------slick----------

    $(".banner__slide").slick({
        autoplay: false,

        arrows: true,

        dots: false,

        fade: true,

        slidesToShow: 1,

        draggable: false,

        infinite: true,

        pauseOnHover: false,

        swipe: true,

        touchMove: true,

        speed: 1500,

        autoplaySpeed: 3000,

        useTransform: true,

        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",

        adaptiveHeight: true,

        focusOnSelect: true,
        responsive: [{
            breakpoint: 767.5,
            settings: {
                arrows: false,
            },
        }, ],
    });
}

function ourwork() {
    $(".internal__slide").slick({
        autoplay: false,

        arrows: true,

        dots: false,

        slidesToShow: 1,

        draggable: false,

        infinite: true,

        pauseOnHover: false,

        swipe: true,

        touchMove: true,

        speed: 1000,

        autoplaySpeed: 3000,

        useTransform: true,

        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",

        adaptiveHeight: true,

        focusOnSelect: true,
        centerMode: true,
        centerPadding: "27%",
        responsive: [{
                breakpoint: 991.5,
                settings: {
                    centerPadding: "20%",
                },
            },
            {
                breakpoint: 767.5,
                settings: {
                    centerPadding: "10%",
                },
            },
            {
                breakpoint: 413.5,
                settings: {
                    centerPadding: "0",
                },
            },
        ],
    });
    // $("#ser-prev").click(function(event) {
    //     event.preventDefault();

    //     $(".collum-photo").slick("slickPrev");
    // });

    // $("#ser-next").click(function(event) {
    //     event.preventDefault();

    //     $(".collum-photo").slick("slickNext");
    // });
}

function slick_menu() {
    $(".ourmenu__slick")
        .on("afterChange init", function(event, slick, direction) {
            //console.log('afterChange/init', event, slick, slick.$slides);

            // remove all prev/next

            slick.$slides.removeClass("prevdiva");

            // find current slide

            for (var i = 0; i < slick.$slides.length; i++) {
                var $slide = $(slick.$slides[i]);

                if ($slide.hasClass("slick-current")) {
                    // update DOM siblings

                    $(".slick-current").prev().addClass("prevdiva");

                    break;
                }
            }
        })

    .on("beforeChange", function(event, slick) {
            // optional, but cleaner maybe

            // remove all prev/next

            slick.$slides.removeClass("prevdiva");
        })
        .slick({
            autoplay: false,

            arrows: true,

            dots: false,

            slidesToShow: 2,

            slidesToScroll: 2,

            // draggable: false,

            infinite: true,

            //pauseOnHover: false,

            //swipe: true,

            // touchMove: true,

            speed: 1500,

            autoplaySpeed: 3000,

            useTransform: true,

            cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",

            //adaptiveHeight: true,

            //focusOnSelect: true,
            centerMode: true,
            centerPadding: "300px",
            responsive: [{
                    breakpoint: 1199.5,
                    settings: {
                        centerPadding: "100px",
                    },
                },
                {
                    breakpoint: 767.5,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "80px",
                    },
                },
                {
                    breakpoint: 575.5,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "40px",
                    },
                },
                {
                    breakpoint: 375.5,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "0px",
                    },
                },
            ],
        });
}

function slidetoggle_header() {
    // var link_panel = $('.menu-mobile');

    // link_panel.click(function(){

    // 	$(this).parent().find('.main-menu').slideToggle('active');

    // })
    jQuery(".menu-mobile").click(function() {
        jQuery(".header__top-nav").toggleClass("active");
        jQuery("body").toggleClass("show-scroll");
    });
    jQuery(document).mouseup(function(e) {
        if (!jQuery(".menu-mobile, .header__top-nav.active").is(e.target) &&
            jQuery(".menu-mobile, .header__top-nav.active").has(e.target).length === 0
        ) {
            jQuery(".header__top-nav").removeClass("active");
            jQuery("body").removeClass("show-scroll");
        }
    });
}

function fancybox() {
    var gallery_row = jQuery(".p__row");

    gallery_row.each(function() {
        jQuery(this)
            .find(".p__collum-photo a")

        .attr("data-fancybox", "images");

        jQuery('[data-fancybox="images"]').fancybox({
            thumbs: {
                showOnStart: true,
            },
        });
    });

    if ($(window).width() > 767.5) {
        var itemclass = "img-overlay";
        $(".p__collum-photo").append('<div class="' + itemclass + '"></div>');
    }
}

function headerTop() {
    var header = $(".header__scroll");
    if (header.length) {
        var offset = header.offset().top;
        header_height = $(".header__top").height();
        containerwidth = $(window).width();
        $(window).scroll(function() {
            if ($(window).scrollTop() > header_height) {
                header.addClass("active");
                $("#header").addClass("hide-top");
            } else {
                header.removeClass("active");
                $("#header").removeClass("hide-top");
            }
        });
    }
}
// window.addEventListener("load", () => {
//     const results = Splitting({
//         target: ".image",
//         by: "cells",
//         image: true,
//         rows: 8,
//     });

//     function myCallback(el) {
//         var a = new TimelineMax();
//         return a.staggerFromTo(
//             ".cell",
//             0.5, {
//                 x: 400,
//                 opacity: 0,
//             }, {
//                 x: 0,
//                 opacity: 1,
//                 ease: Power2.ease,
//             },
//             0.05
//         );
//     }

//     $(".image").waypoint(
//         function(direction) {
//             if (direction === "down") {
//                 /* add this.destroy() if you want the animation to only play once */
//                 myCallback();
//             }
//         }, {
//             offset: "100%",
//         }
//     );
// });