$(document).ready(function(){
    // hide our element on page load
    $('#tour').css('opacity', 0);
    $('#categorias').css('opacity', 0);
   // $('#pesca').css('opacity', 0);
    $('#experiencia').css('opacity', 0);

    var tour = new Waypoint({
        element: document.getElementById('tour'),
        handler: function() {
            $('#tour').addClass('animated bounceInUp');
            $('#tour').css('opacity', 1);
        },
        offset: '50%'
    });
    var categorias = new Waypoint({
        element: document.getElementById('categorias'),
        handler: function() {
            $('#categorias').addClass('animated fadeInLeft');
            $('#categorias').css('opacity', 1);
        },
        offset: '50%'
    });
    /*var pesca = new Waypoint({
        element: document.getElementById('pesca'),
        handler: function() {
            $('#pesca').addClass('animated fadeInDown');
            $('#pesca').css('opacity', 1);
        },
        offset: '50%'
    });*/
    var exp = new Waypoint({
        element: document.getElementById('experiencia'),
        handler: function() {
            $('#experiencia').addClass('animated fadeInUp');
            $('#experiencia').css('opacity', 1);
        },
        offset: '50%'
    });

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


});