var i, y, c

if (screen.width < 1199) {
    i = 0;
    y = 'carouselmobile'
    c = 'slide-mobile'
} else {
    i = 1
    y = 'carouseldesktop'
    c = 'slide-desktop'
}

for (var classe = 0; classe < plataformas[i].imgs.length; classe++) {
    var slide = `
        <div class="carousel-item ${classe == 0 ? 'active' : ''}">
            ${plataformas[i].imgs[classe].img}
            <div class="text-slide">
                <h3 class="texto-slide">${plataformas[i].imgs[classe].h3}</h3>
                <p>${plataformas[i].imgs[classe].p}</p>
                <a href="${plataformas[i].imgs[classe].link}">
                ${plataformas[i].imgs[classe].button}</a>
            </div>
        </div>
        `
    $('.carousel-inner').append(slide)
}

$('#mudarid').attr('id', y)
$('.carousel').addClass(c)
$('.carousel a.control').attr('href', '#' + y)

