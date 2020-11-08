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

var noticia = [
    evangelismo = {
        'id': 'evangelismo',
        'titulo': 'Evangelismo',
        'texto': `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `
    },
    cultoinfantil = {
        'id': 'cultoinfantil',
        'titulo': 'Como é o culto infantil?',
        'texto': `
        Texto sobre Culto infantil
        `
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
                <a onclick="blog('${item.imgs[i].id}')">
                ${item.imgs[i].button}
                </a>
            </div>
        </div>
        `
    $('.carousel-inner').append(slide)
    console.log(slide)
}

function blog(id) {
    var item = noticia.find(i => i.id == id)
    post = `
    <div class="blog-item px-4">
        <i class="fas fa-times" onclick="fechar()"></i>
        <h2>${item.titulo}</h2>
        <p>${item.texto}</p>
        </div>
    `
    $('.blog').html("")
    $('.blog').css('display', 'block')
    $('.blog').append(post)

}

function fechar() {
    $('.blog').css('display', 'none')
}


$('#mudarid').attr('id', tela ? 'carouseldesktop' : 'carouselmobile')
$('.carousel').addClass(tela ? 'slide-desktop' : 'slide-mobile')
$('.carousel a.control').attr('href', '#' + (tela ? 'carouseldesktop' : 'carouselmobile'))
