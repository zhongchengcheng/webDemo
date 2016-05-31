//主体右上焦点轮播图
window.onload = function(){
    var righttop = document.getElementById("righttop");
    var pic = document.getElementById("pic");
    var buttons = document.getElementById("buttons").getElementsByTagName("span");
    var timer1;

    function play(){
        timer1 =setInterval(function (){
            pic.style.top = parseInt(pic.style.top) -150 + "px";
            if(pic.style.top < -750){
                pic.style.top = 0 + "px";
            }
        },3000);
    }
    function stop(){
        clearInterval(timer1);
    }
    righttop.onmouseover = stop;
    righttop.onmouseout = play;
    play();
}