
$(window).on('load', function () {
   var $preloader = $('#p_prldr'),
      $svg_anm = $preloader.find('.svg_anm');
   $svg_anm.delay(300).fadeOut('slow');
   $preloader.delay(700).fadeOut('slow');
});

$(function () {

   $('.people__slider').slick({
      prevArrow: '<button class="people__arrows prev__arrow"><svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.23007 9.9238L9.65891 0.226828C9.97106 -0.0832103 10.4685 -0.0743087 10.7699 0.246714C11.064 0.559877 11.064 1.05633 10.7699 1.36944L1.8966 10.4951L10.7699 19.6208C11.0767 19.9363 11.0767 20.4479 10.7699 20.7634C10.4631 21.0789 9.96572 21.0789 9.65891 20.7634L0.23007 11.0664C-0.0766899 10.7508 -0.0766899 10.2393 0.23007 9.9238Z"/></svg></button>',
      nextArrow: '<button class="people__arrows next__arrow"><svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7699 9.9238L1.34109 0.226828C1.02894 -0.0832103 0.531535 -0.0743087 0.23007 0.246714C-0.0640291 0.559877 -0.0640291 1.05633 0.23007 1.36944L9.1034 10.4951L0.23007 19.6208C-0.0766899 19.9363 -0.0766899 20.4479 0.23007 20.7634C0.536921 21.0789 1.03428 21.0789 1.34109 20.7634L10.7699 11.0664C11.0767 10.7508 11.0767 10.2393 10.7699 9.9238Z"/></svg></button>'
   });

   $('.gallery__slider').slick({
      slidesToShow: 4,
      centerMode: true,
      initialSlide: 0,
      respondTo: 'slider',
      focusOnSelect: true,
      variableWidth: true,
      prevArrow: '<button class="gallery__arrows prevgallery__arrow"><svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7699 9.9238L1.34109 0.226828C1.02894 -0.0832103 0.531535 -0.0743087 0.23007 0.246714C-0.0640291 0.559877 -0.0640291 1.05633 0.23007 1.36944L9.1034 10.4951L0.23007 19.6208C-0.0766899 19.9363 -0.0766899 20.4479 0.23007 20.7634C0.536921 21.0789 1.03428 21.0789 1.34109 20.7634L10.7699 11.0664C11.0767 10.7508 11.0767 10.2393 10.7699 9.9238Z"/></svg></button>',
      nextArrow: '<button class="gallery__arrows nextgallery__arrow"><svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7699 9.9238L1.34109 0.226828C1.02894 -0.0832103 0.531535 -0.0743087 0.23007 0.246714C-0.0640291 0.559877 -0.0640291 1.05633 0.23007 1.36944L9.1034 10.4951L0.23007 19.6208C-0.0766899 19.9363 -0.0766899 20.4479 0.23007 20.7634C0.536921 21.0789 1.03428 21.0789 1.34109 20.7634L10.7699 11.0664C11.0767 10.7508 11.0767 10.2393 10.7699 9.9238Z"/></svg></button>',
      dots: true

   });

   $('.slick-dots button').text('');

   $('.menu__mobile').on('click', function(){
      $('.mobile-menu').toggleClass('active');
      $(this).toggleClass('active');
      $('body').toggleClass('lock');
   });
   $('.scroll-link').on('click', function(){
      $('.mobile-menu').removeClass('active');
      $('.menu__mobile').removeClass('active');
      $('body').removeClass('lock');
   });

   $(window).on("scroll", function() {
      $('.header').toggleClass("scrolled", $(this).scrollTop() > $(window).height());
    });



})