// <!-- Q&A 접었다가 펼치기 -->

$(document).ready(function () {
    $(".a_box1").slideUp();
    $(".a_box2").slideUp();

    $(".q_a1").click(function () {
        $(".a_box1").slideToggle();
        $(".a_box2").slideUp();
    });

    // if($(".a_box1").attr("style","display:none;")){
    //     $('#bgp').height('1100');
    //     $('#section4').height('500');
    // } else{
    //     $('#bgp').height('1500');
    //     $('#section4').height('900');
    // }

    $(".q_a2").click(function () {
        $(".a_box2").slideToggle();
        $(".a_box1").slideUp();
    });

    // if($(".a_box2").attr("style","display:none;")){
    //     $('#bgp').height('1100');
    //     $('#section4').height('500');
    // } else{
    //     $('#bgp').height('1500');
    //     $('#section4').height('900');
    // }

});
