
window.onload = function(){
    var righttop = document.getElementById("righttop");
    var pic = document.getElementById("pic");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var index = 1;
    var timer;
    var timer1;
    var newstimer;
    var down = document.getElementById("down");
    var up = document.getElementById("up");
    var news = document.getElementById("news");
    var lefttop = document.getElementById("lefttop");
    var left = document.getElementById("left");
    var leftbottom = document.getElementById("leftbottom");
    var clo = document.getElementById("clo").getElementsByTagName("h4");

    //换肤部分
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var s3 = document.getElementById("s3");
    var s4 = document.getElementById("s4");
    var s5 = document.getElementById("s5");
    var s6 = document.getElementById("s6");
    var head = document.getElementById("head");
    var menu = document.getElementById("menu");
    var lhead = document.getElementById("lhead");
    var lhead1 = document.getElementById("lhead1");
    var rthead = document.getElementById("rthead");
    s1.onclick = function () {
        s1.style.background = 'url("../images/theme.gif") no-repeat 0px -15px';
        s2.style.background = 'url("../images/theme.gif") no-repeat -20px 0px';
        head.style.background = "#4c6db4";
        menu.style.background = "#4c6db4";
        lhead.style.background = "#4c6db4";
        lhead1.style.background = "#4c6db4";
        rthead.style.background = "#4c6db4";
    }
    s2.onclick = function () {
        s1.style.background = 'url("../images/theme.gif") no-repeat 0px 0px';
        s2.style.background = 'url("../images/theme.gif") no-repeat -20px -15px';
        head.style.background = "#b1d410";
        menu.style.background = "#b1d410";
        lhead.style.background = "#b1d410";
        lhead1.style.background = "#b1d410";
        rthead.style.background = "#b1d410";
    }


    //最新动态部分
    down.onclick = function () {
        up.style.display = "block";
        down.style.display = "none";
        news.style.display = "none";
        newsstop();
    }
    $("#down").click(function () {
        $("#news").animate({
            height:"0px"
        },1000)
        $("#lefttop").animate({
            height:"30px"
        },1000)
    })
    up.onclick = function () {
        up.style.display = "none";
        down.style.display = "block";
        news.style.display = "block";
        newsplay();
    }
    $("#up").click(function () {
        $("#news").animate({
            height:"85px"
        },1000)
        $("#lefttop").animate({
            height:"110px"
        },1000)
    })

    function newsplay(){
        newstimer = setInterval(function () {
            news.style.top = parseInt(news.style.top) - 20 +"px";
            if(parseInt(news.style.top) < -120){
                news.style.top = 0 +"px";
            }
        },1500)
    }
    function newsstop(){
        clearInterval(newstimer);
    }
    news.onmouseover = newsstop;
    news.onmouseout = newsplay;
    newsplay();


    //产品分类部分
    down1.onclick = function () {
        up1.style.display = "block";
        down1.style.display = "none";
    }
    $("#down1").click(function () {
        $("#clo").animate({
            height:"0px"
        },1000)
        $("#leftbottom").animate({
            height:"30px"
        },1000)
    })
    up1.onclick = function () {
        up1.style.display = "none";
        down1.style.display = "block";
    }
    $("#up1").click(function() {
        $("#leftbottom").animate({
            height:"290px"
        },1000)
        $("#clo").animate({
            height:"265px"
        },1000)
    })
    $("#clo>h4").click(function(){
        $("#clo>h4>ul").animate({
            height:"0px"
        },1000)
    })

    for(i = 0; i < buttons.length;i++){
        buttons[i].onmouseover = function () {
            var myIndex = parseInt(this.getAttribute('index'));
            pic.style.top = -150 * (myIndex - index) + -150 * (index - 1);
            index = myIndex;
            showbuttons();
        }
    }


//焦点轮播图部分
    function play(){
        timer =setInterval(function (){
            pic.style.top = parseInt(pic.style.top) -150 + "px";
            if(parseInt(pic.style.top)< -600){
                pic.style.top = 0 + "px";
            }
        },3000);
        play1();
    }
    function stop(){
        clearInterval(timer);
        clearInterval(timer1);
    }
    righttop.onmouseover = stop;
    righttop.onmouseout = play;
    play();
    function play1(){
        timer1 = setInterval(function () {
            if(index == 5){
                index = 1;
            }else{
                index += 1
            }
            showbuttons();
        },3000)
    }

    function showbuttons(){
        for(var i = 0;i < buttons.length; i++){
            if(buttons[i].className == "on"){
                buttons[i].className = "";
                break;
            }
        }
        buttons[index - 1].className = "on";
    }

//新款上市部分
    var rleft = document.getElementById("rleft");
    var rright = document.getElementById("rright");
    var box = document.getElementById("box");
    //rright.onclick = function () {
    //    box.style.left = parseInt(box.style.left) - 586 + "px";
    //    if(parseInt(box.style.left) < -1172){
    //        box.style.left = 0 + "px";
    //    }
    //}
    rleft.onclick = function () {
        box.style.left = parseInt(box.style.left) + 586 + "px";
        if(parseInt(box.style.left) > 0){
            box.style.left = -1172 + "px";
        }
    }
    var i = 0;
    $("#rright").click(function () {
        $("#box").animate({
            left : "-586px"
        },1000)
    })

}