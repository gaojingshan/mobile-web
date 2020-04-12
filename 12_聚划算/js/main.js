var mySwiper = new Swiper('#swiper1', {
  freeMode: true, // 抵抗反弹
  freeModeMomentumRatio: 0,
});

$('#swiper1 span').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
  
})

$('#jiao').click(function () {
  if ($('#modal').css('opacity') == 1) {
    $('#jiao svg').css('transform', 'rotate(180deg)');
    $('#modal').css('opacity', '0');
    $('#modal').css('transform', 'translateY(-2.5rem)');
  } else {
    $('#jiao svg').css('transform', 'rotate(360deg)');
    $('#modal').css('opacity', '1');
    $('#modal').css('transform', 'translateY(0rem)');
  }
});


