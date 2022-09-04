$(function(){
    $('.slider').slick({
        arrows: false,
      dots: true
    });
});

$(function(){
  $('.section__inner-slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
});