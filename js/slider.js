var plataformas = [
    mobile = {
        'id': 'carouselmobile',
        'class': 'slide-mobile',
        'imgs': [
            {
                'img':'<img class="d-block w-100" src="imagens/mobile-slide-1.jpg" alt="First slide">',
                'h3': 'EVANGELISMO',
                'p':'Dia 25/01 no Morro do Papagaio',
                'button':'PARTICIPE',
                'link':'blog.html'
            },
            {
                'img':'<img class="d-block w-100" src="imagens/mobile-slide-2.jpg" alt="Second slide">',
                'h3': 'CULTO INFANTIL',
                'p':'"Deixai vir a mim as criancinhas - Mt 19:14". Traga seu filho ao culto infantil',
                'button':'SAIBA MAIS',
                'link':''
            }
        ]
    },
    desktop = {
        'id': 'carouseldesktop',
        'class': 'slide-desktop',
        'imgs': [
            {
                'img':'<img class="d-block w-100" src="imagens/ban1.jpg" alt="First slide">',
                'h3': 'UM',
                'p':'Dia 25/01 no Morro do Papagaio',
                'button':'PARTICIPE',
                'link':''
            },
            {
                'img':'<img class="d-block w-100" src="imagens/ban2.jpg" alt="Second slide">',
                'h3': 'DOIS',
                'p':'Traga seus filhos e filhas para a Escola Bíblica Dominical',
                'button':'SAIBA MAIS',
                'link':''
            }
        ]
    }
]

var i = 0
var y = 'carouselmobile'
var c = 'slide-mobile'

if (screen.width > 1199) {
    i = 1
    y = 'carouseldesktop'
    c = 'slide-desktop'
}

for (var classe = 0; classe < plataformas[i].imgs.length; classe++) {
    var item = plataformas[i].imgs[classe]
    var slide = `
        <div class="carousel-item ${classe == 0 ? 'active' : ''}">
            ${item.img}
            <div class="conteudo-slide">
                <h3>${item.h3}</h3>
                <p>${item.p}</p>
                <a href="${item.link}">
                ${item.button}</a>
            </div>
        </div>
        `
    $('.carousel-inner').append(slide)
}

$('#mudarid').attr('id', y)
$('.carousel').addClass(c)
$('.carousel a.control').attr('href', '#' + y)

