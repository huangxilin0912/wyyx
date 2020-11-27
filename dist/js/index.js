"use strict";

// 头部滑动下拉列表
$('.goods').on({
  mouseenter: function mouseenter() {
    $(this).find('img').attr('src', '../img/goods2.webp');
    $(this).css({
      'background-color': '#F4F0EA',
      'box-shadow': '2px 2px 2px #dddddd'
    });
  },
  mouseleave: function mouseleave() {
    $(this).find('img').attr('src', '../img/goods1.webp');
    $(this).css({
      'background-color': '#ffffff',
      'box-shadow': 'none'
    });
  }
}); // 新品首发

$(function () {
  // 获取商品列表数据
  $.ajax({
    url: '../data/goods.json',
    type: 'get',
    dataType: 'json',
    success: function success(json) {
      var goodsStr = '';
      $.each(json, function (index, item) {
        goodsStr += "<div class=\"goods\">\n                <img src=\"".concat(item.imgurl1, "\" alt=\"\" srcset=\"\" class=\"img1\">\n                <img src=\"").concat(item.imgurl2, "\" alt=\"\" srcset=\"\" class=\"img2\">\n                <div class=\"text\">\n                    <div class=\"tag\">\n                        <span>\u65B0\u54C1\u9650\u65F6\u62A2\u8D2D</span>\n                    </div>\n                    <h4><span>").concat(item.title, "</span></h4>\n                    <p class=\"price\">").concat(item.price, "</p>\n                </div>\n            </div>");
      });
      $('.swiper-slide').html(goodsStr); // 新品首发滑动效果

      $('.goods').on({
        mouseenter: function mouseenter() {
          $(this).find('.img2').css('opacity', '1');
          $(this).css({
            'background-color': '#F4F0EA',
            'box-shadow': '2px 2px 2px #dddddd'
          });
        },
        mouseleave: function mouseleave() {
          $(this).find('.img2').css('opacity', '0');
          $(this).css({
            'background-color': '#ffffff',
            'box-shadow': 'none'
          });
        }
      });
    }
  });
});