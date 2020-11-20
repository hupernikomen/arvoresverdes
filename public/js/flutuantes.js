$('footer').append('<div class="social"></div>')
$('.social').append('<a href="mailto:ibavthe@gmail.com"><img src="icones/email.png"></a>')

$(window).scroll(function () {
    var height = $(window).scrollTop();
    height > 250 ? $('.social img').fadeIn() : $('.social img').fadeOut();
});
