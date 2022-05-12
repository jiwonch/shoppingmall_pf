// <!-- 상품 상세 메뉴 클릭했을 시 앵커에서 색상유지 -->

$(document).ready(function () {
    $('.detail').click(function () {
        $("#sub_menu ul li a").removeClass("nav_active");
        $(this).addClass("nav_active");
    });

    $('.review').click(function () {
        $("#sub_menu a").removeClass("nav_active");
        $(this).addClass("nav_active");
    });

    $('.q_a').click(function () {
        $("#sub_menu ul li a").removeClass("nav_active");
        $(this).addClass("nav_active");
    });

    $('.exchange').click(function () {
        $("#sub_menu ul li a").removeClass("nav_active");
        $(this).addClass("nav_active");
    });

    $('.best').click(function () {
        $("#sub_menu ul li a").removeClass("nav_active");
        $(this).addClass("nav_active");
    });
});
