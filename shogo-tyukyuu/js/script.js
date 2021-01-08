var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView:5,
  centeredSlides:true,
  slidesPerView:3.75,
  spaceBetween:57,
  initialslide:5,
  loop: true,
});

$(function(){
  $(".btn2").click(function(){
    var target = $($(this).attr("onclick")).offset().top;
    var speed = 600;
    $('html,body').animate({scrollTop: target}, speed,);
    return false;
  });
  $('.main3__q').click(function(){
          $(this).next('.main3__a').slideToggle();
          $(this).toggleClass("open");
        });
  $('.a1').css({
    'display':'block'
  });
});
