// <!-- 상품 후기 접었다가 펼치기 -->

$(document).ready(function () {
    $(".s3_box2 tr:nth-of-type(even)").slideUp();

    $(".toggle1").click(function () {
        $(".s3_box2 tr:nth-of-type(2)").slideToggle();
        $(".s3_box2 tr:nth-of-type(4)").slideUp();
        $(".s3_box2 tr:nth-of-type(6)").slideUp();
        $(".s3_box2 tr:nth-of-type(8)").slideUp();
        $(".s3_box2 tr:nth-of-type(10)").slideUp();
    });

    $(".toggle2").click(function () {
        $(".s3_box2 tr:nth-of-type(4)").slideToggle();
        $(".s3_box2 tr:nth-of-type(2)").slideUp();
        $(".s3_box2 tr:nth-of-type(6)").slideUp();
        $(".s3_box2 tr:nth-of-type(8)").slideUp();
        $(".s3_box2 tr:nth-of-type(10)").slideUp();
    });

    $(".toggle3").click(function () {
        $(".s3_box2 tr:nth-of-type(6)").slideToggle();
        $(".s3_box2 tr:nth-of-type(2)").slideUp();
        $(".s3_box2 tr:nth-of-type(4)").slideUp();
        $(".s3_box2 tr:nth-of-type(8)").slideUp();
        $(".s3_box2 tr:nth-of-type(10)").slideUp();
    });

    $(".toggle4").click(function () {
        $(".s3_box2 tr:nth-of-type(8)").slideToggle();
        $(".s3_box2 tr:nth-of-type(2)").slideUp();
        $(".s3_box2 tr:nth-of-type(4)").slideUp();
        $(".s3_box2 tr:nth-of-type(6)").slideUp();
        $(".s3_box2 tr:nth-of-type(10)").slideUp();
    });

    $(".toggle5").click(function () {
        $(".s3_box2 tr:nth-of-type(10)").slideToggle();
        $(".s3_box2 tr:nth-of-type(2)").slideUp();
        $(".s3_box2 tr:nth-of-type(4)").slideUp();
        $(".s3_box2 tr:nth-of-type(6)").slideUp();
        $(".s3_box2 tr:nth-of-type(8)").slideUp();
    });
});
