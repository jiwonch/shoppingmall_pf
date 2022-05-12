// <!-- 수량 당 총 합계 표시 -->

$(document).ready(function () {
    $('#total_n').change(function () {
        var tot_n = $('#total_n').val();
        var all = tot_n * 14925 + "원";
        $('#total').text(all.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

        );
    });
});
