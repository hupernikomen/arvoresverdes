var back_up = `<a class="back2Top"><i class="fas fa-angle-up"></i></a>`
$('footer').append(back_up)

$(window).scroll(function () {
    var height = $(window).scrollTop();
    height > 150 ? $('.back2Top').fadeIn() : $('.back2Top').fadeOut();
});
$(document).ready(function () {
    $(".back2Top").click((event) => {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});


