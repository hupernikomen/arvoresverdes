var plataformas = [
    mobile = {
        'imgs': [
            {
                'id': 'evangelismo',
                'img': '<img class="d-block w-100" src="imagens/mobile-slide-1.jpg">',
                'h3': 'EVANGELISMO',
                'p': 'Dia 25/01 no Morro do Papagaio',
                'button': 'PARTICIPE',
                'link': '',
            },
            {
                'id': 'cultoinfantil',
                'img': '<img class="d-block w-100" src="imagens/mobile-slide-2.jpg">',
                'h3': 'CULTO INFANTIL',
                'p': '"Deixai vir a mim as criancinhas" - Mt 19:14. Traga seu filho ao culto infantil',
                'button': 'SAIBA MAIS',
                'link': '',
            }
        ]
    },
    desktop = {
        'imgs': [
            {
                'img': '<img class="d-block w-100" src="imagens/ban1.jpg">',
                'h3': '',
                'p': '',
                'button': '',
                'link': '',
            },
            {
                'img': '<img class="d-block w-100" src="imagens/ban2.jpg">',
                'h3': '',
                'p': '',
                'button': '',
                'link': '',
            }
        ]
    }
]

var tela = screen.width > 1199

for (var i = 0; i < plataformas[tela ? 1 : 0].imgs.length; i++) {
    var item = plataformas[tela ? 1 : 0].imgs[i]
    var slide = `
        <div class="carousel-item ${i == 0 ? 'active' : ''}">
            ${item.img}
            <div class="black"></div>
            <div class="conteudo-slide mx-4">
                <h3>${item.h3}</h3>
                <p>${item.p}</p>
                <a class="ut" id="${item.id}" href="${item.link}">
                ${item.button}
                </a>
            </div>
        </div>
        `
    $('.carousel-inner').append(slide)
    console.log(slide)
}

// var res = []
// $('.ut').on('click', (e) => {
//     e.preventDefault()
//     res.pop()
//     res.push(e.target.id)
// })



$('#mudarid').attr('id', tela ? 'carouseldesktop' : 'carouselmobile')
$('.carousel').addClass(tela ? 'slide-desktop' : 'slide-mobile')
$('.carousel a.control').attr('href', '#' + (tela ? 'carouseldesktop' : 'carouselmobile'))
