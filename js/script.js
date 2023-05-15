/* ===================================
            PreLoader
====================================== */

$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');


});



/*=====================================
         Animation
=======================================*/
//animation on scrool   
$(function () {
    new WOW().init();
});

//home animation on page lode
$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInDown");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#home-down i").addClass("animated fadeInDown infinite");
    $("#team-member").addClass("animated fadeInDown zoomOut");
});


/* ===================================
                Team
====================================== */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint form 0 up
            0: {
                items: 1
            },
            //breakpoint form 480 up
            480: {
                items: 2
            }

        }
    });

});

/* ===================================
            Progress Bars
====================================== */
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
/* ===================================
                Responsive Tabs
====================================== */

$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});

/* =================================================
                portfolio
====================================================*/
$(window).on('load', function () {
    //initialize Isotope
    $("#isotope-Container").isotope({});

    //filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        //get filter value
        var filtervalue = $(this).attr('data-filter');

        //filter portfolio
        $("#isotope-container").isotope({
            filter: filtervalue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');

    });
});

/*=============================================================================
                            Testimonials
==============================================================================*/
$(function () {
    $("#Testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });
}); 

/*==============================================================================
                                stats
==============================================================================*/

$(function () {

    $(".counter").counterUp({
        delay:10,
        time: 2000
    });
});

/*==================================================================================
                                clients
===================================================================================*/
$(function() {
    $("#Clients-list").owlCarousel({
        items:6,
        autoplay:false,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"</i>'],
        responsive:{
            // breakpoint from 0 up
            0:{
                items:2
            },
            // breakepoint from 480 up
            480: {
                items:3
            },
            // breakepoint from 768 up
        
            768: {
                items:6
            }
                   
        }

    });
});

/*===========================================================================================
                                    Navigation
============================================================================================*/

// show &Hide white Navigation
$(function () {
    // show/hide nav on page load 
    showHidenav();
    
    $(window).scroll(function (){
        // show/hide nav on window's scroll
        showHidenav();
    });

    function showHidenav() {
        if($(window).scrollTop() > 50) {

            // Show White nav
            $("nav").addClass("white-nav-top");

            // show darklogo
            $(".navbar-brand img").attr("src","img/logo/logo/-dark.png");

            // show back to top button
            $("#back-to-top").fadeIn();

        }else{
            // Hide logo
            $(".navbar-brand img").attr("src","img/logo/logo.png");

            // Hide back to top button
            $9("#back-to-top").fadeOut();
        }
    }
});

// Smooth scrolling
$(function (){

    $("a.smooth-scroll").click(function(event){

        event.preventDefault();

        // get section id like #abuot,#services,#work,#team and etc.
        var section_id = $(this).attr("href");
        
        $("html,body").animate({
            scrollTop: $(section_id).offset().top -64

        }, 1250,"easeInOutExpo");

    });
});

/*=========================================================================
                                Mobile Menu
==========================================================================*/

$(function(){
    // Show mobile nav
    $("#mobile-nav-open-btn").click(function(){
        $("#mobile-nav").css("height","100%");
    })

    // Hide mobile nav
    $("#mobile-nav-close-btn,#mobile-nav a").click(function(){
        $("#mibile-nav").css("height","0%");
    })
})