/* Theme Name: Told - Onepage Multipurpose Template
   Author: Zoyothemes
   Version: 1.0.0
   Created: December 2017
   File Description: Main JS file of the template
*/

(function($) {

    'use strict';
    /*
    function initSmoothLink() {
        $('.navigation-menu a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }
    */


    function initNavbarToggler() {
        var scroll = $(window).scrollTop();

        /* Add onclick to the mobile Primary Menu (hamburger) */
        $('.navbar-toggle').on('click', function(event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);

            /* Make sure to close the Tools mobile menu */
            $('.tools-tab-trigger').removeClass('dropped');

            /* Also close the 'My Account' dropdown if it exists (logged in users) */
            if ($('.nav-account-dropdown').length) {
                $('.nav-account-dropdown').removeClass('dropped');
            }

            /* Close the 'Resources' dropdown */
            $('.main-navigation .menu-resources').removeClass("dropped");
        });

        /* Add onclick to the mobile Tools dropdown trigger */
        $('#nav-tools-mobile').on('click', function(event) {
            /* Close Primary Menu (hamburger) on mobile */
            $('.navbar-toggle').removeClass('open');
            $('#navigation').css({display: "none"});
            if ($('.nav-account-dropdown').length) {
                $('.nav-account-dropdown').removeClass('dropped');
            }
        });

        $('.navigation-menu>li').slice(-2).addClass('last-elements');

        /* Add onclick to resource dropdwown trigger */
        $('.main-navigation li').on('click', function(event) {
            $(this).toggleClass('dropped');
        })

        /* Activate closing of the mobile main menu on click outside */
        $(window).on("click", function(event) {
            if(!event.target.closest('#navigation') && !event.target.closest('.navbar-toggle')) {
                /* Close the mobile main menu */
                $('#navigation').css({display: "none"});

                /* Close the navbar toggle icon */
                $('.navbar-toggle').removeClass('open');

                /* Close the 'Resources' dropdown */
                $('.main-navigation .menu-resources').removeClass("dropped");

                /* Close the 'My Account' dropdown if it exists (logged in users) */
                if ($('.nav-account-dropdown').length) {
                    $('.nav-account-dropdown').removeClass('dropped');
                }
            }
        });
    }

    function initTestimonialSlider() {
        /* Check if the item exists on page */
        if (!$('#owl-demo').length) {
            return;
        }

        $("#owl-demo").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    }

    function initPreloader(){
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
        'overflow': 'visible'
        });
    }

    /*
    function initCounter(){
        var a = 0;
        $(window).scroll(function() {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function() {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                            countNum: countTo
                        },

                        {
                            duration: 1000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                });
                a = 1;
            }
        });
    }
    */

    /*
    function otherBindings(){
        // Animate caret on click
        $('.input-group-btn').click(function(e){
            $($(e.target).find('.caret').toggleClass('open-caret'));
            e.preventDefault();
            e.stopPropagation();
            $(document).click(function(){
                $('.caret').removeClass('open-caret');
            });
        });
    }
    */

    function init() {
        //initSmoothLink();
        initNavbarToggler();
        initTestimonialSlider();
        initPreloader();
        // initCounter();
        //otherBindings();
    }
    init();

})(jQuery);
