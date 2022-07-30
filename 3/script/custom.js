//세로 메뉴
$(".nav > ul > li").hover(
    function(){
        $(this).find(".submenu").stop().slideDown(300);
    },function(){
        $(this).find(".submenu").stop().slideUp(300);
});

//slideList > div(slideImg) (1)
//slideList > div(slideImg) (2)
//slideList > div(slideImg) (3)

//이미지 슬라이드 (페이드 효과)
$(".slideList").children("div:gt(0)").hide();  //child는 모든 자식을 찾음, children은 바로 아래의 하나의 자식만 찾음

var currentIndex = 0;

setInterval(function(){
    var next = (currentIndex + 1) % 3 //++는 계속 한개씩 더하는 것, + 1은 딱 한번만

    $(".slideList").find("div").eq(currentIndex).fadeOut();
    $(".slideList").find("div").eq(next).fadeIn();

    console.log("currentIndex="+ currentIndex);
    console.log("next="+ next);
    //currentIndex = 0
    //next = 1
    currentIndex = next;

},3000);

//탭메뉴
var tabBtn = $(".tab_btn > ul > li");
var tabCont = $(".tab_cont > ul");

tabCont.hide().eq(0).show();

tabBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display", "none");
    tabCont.eq(index).css("display","block");
});