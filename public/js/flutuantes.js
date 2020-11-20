$('footer').append('<div class="social"></div>')
$('.social').append('<a href="mailto:ibavthe@gmail.com"><img src="icones/email.png"></a>')

$(window).scroll(function () {
    var height = $(window).scrollTop();
    height > 150 ? $('.social img').fadeIn() : $('.social img').fadeOut();
});
// $(document).ready(function () {
//     $(".social img").click((event) => {
//         event.preventDefault();
//         $("html, body").animate({ scrollTop: 0 }, "slow");
//         return false;
//     });
// });

