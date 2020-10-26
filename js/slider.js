var plataformas = [
    mobile = {
        'id': 'carouselmobile',
        'class': 'slide-mobile',
        'imgs': [
            '<img class="d-block w-100" src="imagens/mobile-slide-1.jpg" alt="First slide">',
            '<img class="d-block w-100" src="imagens/mobile-slide-2.jpg" alt="Second slide">'
        ]
    },
    desktop = {
        'id': 'carouseldesktop',
        'class': 'slide-desktop',
        'imgs': [
            '<img class="d-block w-100" src="imagens/ban1.jpg" alt="First slide">',
            '<img class="d-block w-100" src="imagens/ban2.jpg" alt="Second slide">'
        ]
    }
]

var item, aidi, clas;

if (screen.width < 1199) {
    item = 0;
    aidi = 'carouselmobile'
    clas = 'slide-mobile'
} else {
    item = 1
    aidi = 'carouseldesktop'
    clas = 'slide-desktop'
}

for (var f = 0; f < plataformas[item].imgs.length; f++) {
    var slide = `
        <div class="carousel-item ${f == 0 ? 'active' : ''}">
            ${plataformas[item].imgs[f]}
        </div>
        `
    $('.carousel-inner').append(slide)
}

$('#mudarid').attr('id', aidi)
$('.carousel').addClass(clas)
$('.carousel a').attr('href', '#' + aidi)

