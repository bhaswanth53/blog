var url = $("base").attr('href');
var overlay = document.getElementById("overlay");
window.addEventListener('load', function() {
    overlay.style.display = "none";
});

var totop = $("#toTop");

$(document).ready(function() {
    if($(window).width() >= 1023) {
        sideScroll();
    }

    $('.comment-editor').summernote({
        height: 300,
    });
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
            totop.fadeIn()
    } else {
            totop.fadeOut()
    }
});

var loadSize = 3;
$(".post-list").slice(0, loadSize).show();
if($(".post-list").length <= loadSize) {
    $("#load-more").hide()
}
$("#load-more").on('click', function (e) {
    e.preventDefault();
    $(".post-list:hidden").css('margin-top', '40px').slice(0, loadSize).slideDown();
    if ($(".post-list:hidden").length == 0) {
        $("#load-more").fadeOut('slow');
    }
});

totop.on("click", function() {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
})

function socialscroll()
{
    var top = $("section.post-body").offset().top;
    var social = $(".post-side");
    var stop = $(".sticky-stopper").offset().top;
    var height = $("section.post-body").height();
    $(window).scroll(function() {
        var windowTop = $(window).scrollTop();
        if(windowTop >= top && windowTop <= stop - 200) {
            // social.css('top', windowTop + 50);
            social.addClass('social-fixed');
        }
        else {
            social.removeClass('social-fixed');
        }
    });
}

function sideScroll()
{
    var body = $("section.post-body").offset().top;
    var side = $(".post-side");
    var stop = $(".sticky-stopper").offset().top;
    var height = $(".post-start").height();
    var offsettop = stop - 300;
    $(window).scroll(function() {
        var windowTop = $(window).scrollTop();
        if(windowTop >= body && windowTop <= offsettop)
        {
            side.addClass('post-side-fixed');
        }
        else {
            side.removeClass('post-side-fixed');
        }
    });
}