// < !--클릭 시 버튼 색상 바꾸기-- >

$(document).ready(function () {
    $('#btn3').click(function () {
        if ($(this).hasClass("btn3_pink")) {
            $(this).removeClass("btn3_pink");
        } else {
            $(this).addClass("btn3_pink");
        }

    });
});
