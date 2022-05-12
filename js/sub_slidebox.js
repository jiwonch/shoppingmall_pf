// <!-- 상단 이미지 변경하기 -->
$('.prev').click(function () {
    $('.sec1_slide li:last').prependTo('.sec1_slide');
    $('.sec1_slide').css('margin-left', -500);
    $('.sec1_slide').stop().animate({ marginLeft: 0 }, 800)
});

$('.next').click(function () {
    $('.sec1_slide').stop().animate({ marginLeft: -500 }, 800, function () {
        $('.sec1_slide li:first').appendTo('.sec1_slide');
        $('.sec1_slide').css({ marginLeft: 0 })
    });
});