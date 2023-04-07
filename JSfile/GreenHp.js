let myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mainSlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

//메뉴 화면 
const fixbox =document.getElementById("fixbox");
const page1 = document.getElementById('introlist');
const page2 = document.getElementById('activelist');
const page3 = document.getElementById('bookinglist');
const page4 = document.getElementById('surfShoplist');

page1.onclick = function() {
    fixbox.src="../Reproject/intro.html";
    window.scrollTo({top: 400, behavior: 'smooth'});
}
page2.onclick = function() {
    fixbox.src="../Reproject/active.html";
    window.scrollTo({top: 400, behavior: 'smooth'});
}
page3.onclick = function() {
    fixbox.src="../Reproject/lesson.html";
    window.scrollTo({top: 400, behavior: 'smooth'});
}
page4.onclick = function() {
    fixbox.src="../Reproject/surfShop.html";
    window.scrollTo({top: 400, behavior: 'smooth'});
}

//사업자정보 아코디언
$(".que").click(function () {
    $(this).next(".anw").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
});

//풋터
document.write(new Date().getFullYear());