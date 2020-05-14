$(document).ready(function () {
  /*---Animations home sections---*/
  var tour = $('#tour');
  var categorias = $('#categorias');
 // var pesca = $('#pesca');
  var exp = $('#experiencia');
  if (tour.length && exp.length) {

    tour.css('opacity', 0);
    categorias.css('opacity', 0);
   // pesca.css('opacity', 0);
    exp.css('opacity', 0);

    new Waypoint({
      element: document.getElementById('tour'),
      handler: function () {
        tour.addClass('animated bounceInUp');
        tour.css('opacity', 1);
      },
      offset: '50%'
    });
    new Waypoint({
      element: document.getElementById('categorias'),
      handler: function () {
        categorias.addClass('animated fadeInLeft');
        categorias.css('opacity', 1);
      },
      offset: '50%'
    });
    /*new Waypoint({
      element: document.getElementById('pesca'),
      handler: function () {
        pesca.addClass('animated fadeInDown');
        pesca.css('opacity', 1);
      },
      offset: '50%'
    });*/
    new Waypoint({
      element: document.getElementById('experiencia'),
      handler: function () {
        exp.addClass('animated fadeInUp');
        exp.css('opacity', 1);
      },
      offset: '50%'
    });
  }
  /*---Home slider section---*/
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
  $('.scroll').click(function () {
    $('html, body').animate({
      scrollTop: $("header").offset().top
    }, 1000);
  });

  /*---Timeline behavior---*/
  var timelineBlocks = $('.cd-timeline-block'),
      offset = 0.8;

  //hide timeline blocks which are outside the viewport
  hideBlocks(timelineBlocks, offset);

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function () {
    (!window.requestAnimationFrame)
        ? setTimeout(function () {
          showBlocks(timelineBlocks, offset);
        }, 100)
        : window.requestAnimationFrame(function () {
          showBlocks(timelineBlocks, offset);
        });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function () {
      ( $(this).offset().top > $(window).scrollTop() + $(window).height() * offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function () {
      ( $(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    });
  }
  /*---Search section---*/
  /*$('.content-search').hide();
  $(document).on('click', '.icon-search', function () {
    $('.content-search').slideDown();
  });*/
  $(document).on('click', '.close__search', function () {
    $('.content-search').slideUp();
  });
});
