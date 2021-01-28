$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 30){
            $('.navBar').addClass("sticky");
        }
        else{
            $('.navBar').removeClass("sticky");
        }
    });
    // menu icon
    $('.menu_btn').click(function(){
        $('.navBar .menu').toggleClass("active");
    });
});