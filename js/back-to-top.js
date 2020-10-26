var back_up = `<a class="back2Top"><i class="fas fa-angle-up"></i></a>`
$('body').append(back_up)

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 150) {
        $('.back2Top').fadeIn();
    } else {
        $('.back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $(".back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
