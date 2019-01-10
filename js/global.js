$(function () {
    $( document ).ready(function() {
      $('.menu-button').on('click', function() {
        if($('.menu-wrapper').hasClass('hide')){
          $('.menu-wrapper').removeClass('hide');
        }
      });
      $('.menu-close').on('click',function(){
        if(!$('.menu-wrapper').hasClass('hide')){
          $('.menu-wrapper').addClass('hide');
        }
      });

      $('.form-button, .work-form').on('click',function(){
        if($('.form-hero').hasClass('hide')){
          $('.form-hero').removeClass('hide');
        }
      });
      $('.form-close').on('click',function(){
          $('.form-hero').addClass('hide');
        
      });

      $(".smooth-scroll").on("click", function (event) {
        $('.menu-wrapper').addClass('hide');
        var menu = $(this).attr('href');
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 50;
        $('body,html').animate({scrollTop: top}, 80000);
	});
	






        $('.slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            autoplay: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: false,
                  arrows: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });
    });


})
