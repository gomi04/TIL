
/* 네비게이션 */
$(".nav > ul > li").mouseover(function(){
    $(".nav > ul > li").find(".submenu").stop().slideDown(200);
});
$(".nav > ul > li").mouseout(function(){
    $(".nav > ul > li").find(".submenu").stop().slideUp(200);
});

/* 한 탭식 보이게 하는 경우 
$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(200);
});
$(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
});
*/ 

/* 이미지 슬라이드(상하) */ 
/*
var currentIndex = 0; //첫번째 이미지

setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    }
    else{
        currentIndex = 0;
    }
    var slidePosition = currentIndex * (-389)+"px";

    $(".slideList").animate({top: slidePosition},400);
},3000);
*/


/* 이미지 슬라이드(좌우) */ 
var currentIndex = 0;

setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    }
    else{
        currentIndex = 0;
    }
    var slidePosition = currentIndex * (-1000)+"px";
    
    $(".slideList").animate({left: slidePosition},400);
},3000);

//탭메뉴
var tabBtn = $(".tab_btn > ul > li");
var tabCont = $(".tab_cont > div");

tabCont.hide().eq(0).show(); //탭 컨텐츠는 다 숨기고(hide) 첫번째 탭 컨텐츠만(eq(0)) 보여줘라(show)

tabBtn.click(function(e){
    e.preventDefault();//a의 #기능을 막을 수 있음(위로 올라가는것)
    var target = $(this);
    var index = target.index();
    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display","none");
    tabCont.eq(index).css("display","block");
});

//레이어 팝업
$("#content1 .right").click(function(){
    //$(".layer").css("display","block"); or
    $(".layer").show(300);
    $(".layer_bg ").show();
});

$(".layer .close").click(function(){
    //$(".layer").css("display","none"); or
    $(".layer").hide(300);
    $(".layer_bg ").hide();
});











