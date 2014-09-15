$(document).ready(function () {
    $('.ins-col').mouseenter(function () {
        $(this).find('.icon').animate({
            height: '100px',
            width: '100px'
        }, "fast");
        $(this).find('.link').css("font-size", "20px");
    });
    $('.ins-col').mouseleave(function () {
        $(this).find('.icon').animate({
            height: '75px',
            width: '75px'
        }, "fast");
        $(this).find('.link').css("font-size", "16px");
    });
});
