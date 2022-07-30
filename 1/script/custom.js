//탭메뉴
var tabMenu = $(".notice");

tabMenu.find("ul > li > ul").hide();
tabMenu.find("ul > li.active > ul").show();

function tabList(e){
    e.preventDefault();
    var target = $(this);
    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
};

tabMenu.find("ul > li > a").click(tabList).focus(tabList);


//네비게이션
$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(200);
});
$(".nav > ul >li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
});


/* 팝업 */
$(".ad").click(function(){
    $(".layer_bg").css("display", "block");
});
$(".close").click(function(){
    $(".layer_bg").css("display", "none");
});

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