var i, a, c

if (screen.width < 1199) {
    i = 0;
    a = 'carouselmobile'
    c = 'slide-mobile'
} else {
    i = 1
    a = 'carouseldesktop'
    c = 'slide-desktop'
}

for (var classe = 0; classe < plataformas[i].imgs.length; classe++) {
    var slide = `
        <div class="carousel-item ${classe == 0 ? 'active' : ''}">
            ${plataformas[i].imgs[classe]}
        </div>
        `
    $('.carousel-inner').append(slide)
}

$('#mudarid').attr('id', a)
$('.carousel').addClass(c)
$('.carousel a').attr('href', '#' + a)

