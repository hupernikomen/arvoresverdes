var plataformas = [
    mobile = {
        'imgs': [
            {
                'id': 'evangelismo',
                'img': '<img class="d-block w-100" src="../imagens/mobile-slide-1.webp">',
                'h3': 'EVANGELISMO',
                'p': 'Dia 25/01 no Morro do Papagaio',
                'button': 'PARTICIPE',
                'link': '',
            },
            {
                'id': 'cultoinfantil',
                'img': '<img class="d-block w-100" src="../imagens/mobile-slide-2.webp">',
                'h3': 'CULTO INFANTIL',
                'p': 'Jesus disse: "Deixai vir a mim as criancinhas" - Mt 19:14. Traga seu filho ao culto infantil',
                'button': 'SAIBA MAIS',
                'link': '',
            }
        ]
    },
    desktop = {
        'imgs': [
            {
                'img': '<img class="d-block w-100" src="../imagens/ban1.webp">',
                'h3': '',
                'p': '',
                'button': '',
                'link': '',
            },
            {
                'img': '<img class="d-block w-100" src="../imagens/ban2.webp">',
                'h3': '',
                'p': '',
                'button': '',
                'link': '',
            }
        ]
    }
]


var tela = screen.width > 1199
var item = plataformas[tela ? 1 : 0]

for (var i = 0; i < plataformas[tela ? 1 : 0].imgs.length; i++) {
    var slide = `
        <div class="carousel-item ${i == 0 ? 'active' : ''}">
            ${item.imgs[i].img}
            <div class="black"></div>
            <div class="conteudo-slide mx-4">
                <h3>${item.imgs[i].h3}</h3>
                <p>${item.imgs[i].p}</p>
                <a href="/blog">
                ${item.imgs[i].button}
                </a>
            </div>
        </div>
        `
    $('.carousel-inner').append(slide)
}



$('#mudarid').attr('id', tela ? 'carouseldesktop' : 'carouselmobile')
$('.carousel').addClass(tela ? 'slide-desktop' : 'slide-mobile')
$('.carousel a.control').attr('href', '#' + (tela ? 'carouseldesktop' : 'carouselmobile'))
