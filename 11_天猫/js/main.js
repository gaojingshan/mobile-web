$(document).ready(function () {
  // header部分
  // 获取header中框的净位置
  var kuang_offset_top = $('#header .kuang').offset().top;

  var scroll_top = 0;

  // 鼠标还没有卷动的时候就要判断
  scroll_top = $(window).scrollTop();
  // console.log(scroll_top);
  if (scroll_top >= kuang_offset_top) {
    $('#header').addClass('active');
    $('#pad').css('display', 'block');
  } else {
    $('#header').removeClass('active');
    $('#pad').css('display', 'none');
  }

  // console.log(kuang_offset_top);

  // 获取卷动值
  $(window).scroll(function () {
    scroll_top = $(window).scrollTop();
    // console.log(scroll_top);
    if (scroll_top >= kuang_offset_top) {
      $('#header').addClass('active');
      $('#pad').css('display', 'block');
    } else {
      $('#header').removeClass('active');
      $('#pad').css('display', 'none');
    }
  });

  // banner部分

  var mySwiper = new Swiper('#swiper1', {
    loop: true, // 循环模式选项
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  });
});

// 获取北京时间的小时，分钟，秒
function time() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var s = date.getSeconds();
  // 隐式类型转换
  // 当时间是个位数字时前面加0补成两位数
  if (hour < '10') {
    hour = '0' + hour;
  }
  if (min < '10') {
    min = '0' + min;
  }
  if (s < '10') {
    s = '0' + s;
  }
  // console.log(hour, min, s);
  $('#gouwu .time i.i1').html(hour);
  $('#gouwu .time i.i2').html(min);
  $('#gouwu .time i.i3').html(s);
}
time();
// 每秒钟 获取北京时间的小时，分钟，秒
setInterval(function () {
  time();
}, 1000);

// 返回顶部按钮
// 获取header的净位置
var offset_top = $('#header').offset().top;
var shang_scroll_top = 0;
var scroll_top = 0;
$(window).scroll(function () {
  shang_scroll_top = scroll_top;
  scroll_top = $(window).scrollTop();
  // console.log(scroll_top, shang_scroll_top);
  // 如果后一个卷动值比前一个大就显示返回顶部
  if (shang_scroll_top > scroll_top) {
    $('#top_return').css('opacity', 1);
  }
  if (scroll_top == 0) {
    $('#top_return').css('opacity', 0);
  }

  // console.log(scroll_top);
});
$('#top_return').click(function () {
  $('html, body').animate(
    {
      scrollTop: offset_top,
    },
    800
  );
});

// 页面一加载就返回顶部
window.onload = function () {
  $('#top_return').trigger('click');
};
