// 头部滑动下拉列表
$('.goods').on({
    mouseenter: function() {
        $(this).find('img').attr('src', '../img/goods2.webp')
        $(this).css({ 'background-color': '#F4F0EA', 'box-shadow': '2px 2px 2px #dddddd' })
    },
    mouseleave: function() {
        $(this).find('img').attr('src', '../img/goods1.webp')
        $(this).css({ 'background-color': '#ffffff', 'box-shadow': 'none' })
    }
})

// 新品首发
$(function() {
    // 获取商品列表数据
    $.ajax({
        url: '../data/goods.json',
        type: 'get',
        dataType: 'json',
        success: function(json) {
            var goodsStr = ''
            $.each(json, function(index, item) {
                goodsStr += `<div class="goods">
                <img src="${item.imgurl1}" alt="" srcset="" class="img1">
                <img src="${item.imgurl2}" alt="" srcset="" class="img2">
                <div class="text">
                    <div class="tag">
                        <span>新品限时抢购</span>
                    </div>
                    <h4><span>${item.title}</span></h4>
                    <p class="price">${item.price}</p>
                </div>
            </div>`
            })
            $('.swiper-slide').html(goodsStr)

            // 新品首发滑动效果
            $('.goods').on({
                mouseenter: function() {
                    $(this).find('.img2').css('opacity', '1')
                    $(this).css({ 'background-color': '#F4F0EA', 'box-shadow': '2px 2px 2px #dddddd' })
                },
                mouseleave: function() {
                    $(this).find('.img2').css('opacity', '0')
                    $(this).css({ 'background-color': '#ffffff', 'box-shadow': 'none' })
                }
            })
        }
    })
})