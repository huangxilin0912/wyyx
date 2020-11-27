//点击小图片对应大图片随之切换
$('.smallimg img').on('click', function() {
    $("img").each(function() {
        $(this).css('border', '2px solid #e8e8e8')
    });

    $(this).css('border', '2px solid #B4A078')
    $('.bigimg img').attr('src', $(this).attr('src'))
    console.log($(this));
    // $('.hidbox img').attr('src', $(this).find('img').attr('src'))
})