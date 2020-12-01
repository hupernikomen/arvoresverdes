$('footer').append('<div class="icEmail"></div>')
$('.icEmail').append('<a href="mailto:ibavthe@gmail.com"><img src="icones/email.png"></a>')

$(window).scroll(function () {
    var height = $(window).scrollTop();
    height > 250 ? $('.icEmail img').fadeIn() : $('.icEmail img').fadeOut();
});
