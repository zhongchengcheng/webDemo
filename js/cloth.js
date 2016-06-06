window.onload = function () {

    //衣服图片切换
    $(".one").click(function () {
        $(".bos1").css("display","block");
        $(".bos2").css("display","none");
        $(".bos3").css("display","none");
    })
    $(".two").click(function () {
        $(".bos1").css("display","none");
        $(".bos2").css("display","none");
        $(".bos3").css("display","block");
    })
    $(".three").click(function () {
        $(".bos1").css("display","none");
        $(".bos2").css("display","block");
        $(".bos3").css("display","none");
    })
    $(".green").click(function(){
        $("#pbox3").css("display","block");
        $("#pbox1").css("display","none");
        $("#pbox2").css("display","none");
    })
    $(".yellow").click(function(){
        $("#pbox2").css("display","block");
        $("#pbox1").css("display","none");
        $("#pbox3").css("display","none");
    })
    $(".blue").click(function(){
        $("#pbox1").css("display","block");
        $("#pbox2").css("display","none");
        $("#pbox3").css("display","none");
    })

    //尺寸切换
    $(".sizee p").click(function () {
        $(".size").text("尺寸：" + $(this).text());
    })

    //价格随数量变化
    $(".numb").change(function () {
        console.log($(".numb option:selected").val());
        $(".total").text("总计：" + $(".numb option:selected").val() * 200 + "元");
    })


    //选项卡
    $("#table ul li").click(function () {
        for(i = 0; i < $(".box div").length; i++){
            $("#table ul li").css("background","#cccccc");
            $(".box div").css("display","none");
        }
        var num = this.id - 1;
        //console.log($(".box div:eq("+num+")").text())
        console.log(this.id)
        $(this).css("background","#5D95ED");
        $(".box div:eq("+num+")").css("display","block");
    })

    //评分星级
    $(".star li").click(function () {
        //$(".star").css("backgroun-position","0px -index*16px")
        var indd = this.attr("index");
        console.log(indd);
    })
}
