window.onload = function () {
    $("#one").click(function () {
        $(".bos1").css("display","block");
        $(".bos2").css("display","none");
        $(".bos3").css("display","none");
    })
    $("#two").click(function () {
        $(".bos1").css("display","none");
        $(".bos2").css("display","none");
        $(".bos3").css("display","block");
    })
    $("#three").click(function () {
        $(".bos1").css("display","none");
        $(".bos2").css("display","block");
        $(".bos3").css("display","none");
    })

    $(".sizee p").click(function () {
        $(".size").text("尺寸：" + $(this).text());
    })

    $(".numb").change(function () {
        console.log($(".numb option:selected").val());
        $(".total").text("总计：" + $(".numb option:selected").val() * 200 + "元");
    })
}
