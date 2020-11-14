var slide = [
    {
        'img': '<img class="d-block w-100" src="imagens/mobile-slide-1.webp">',
        'title': 'EVANGELISMO',
        'notice': 'Dia 25/01 no Morro do Papagaio',
        'button': 'PARTICIPE',
    },
    {
        'img': '<img class="d-block w-100" src="imagens/mobile-slide-2.webp">',
        'title': 'CULTO INFANTIL',
        'notice': 'Jesus disse: "Deixai vir a mim as criancinhas" - Mt 19:14. Traga seu filho ao culto infantil',
        'button': 'SAIBA MAIS',
    }
]

for (var i = 0; i < slide.length; i++) {
    var slideItem = `
        <div class="carousel-item ${i == 0 ? 'active' : ''}">
            ${slide[i].img}
            <div class="black"></div>
            <div class="conteudo-slide mx-4">
                <h3>${slide[i].title}</h3>
                <p>${slide[i].notice}</p>
                <a href="/info/${i}">${slide[i].button}</a>
            </div>
        </div>
        `
    $('.carousel-inner').append(slideItem)
}

$('.carousel a.control').attr('href', '#' + (screen.width > 1199 ? 'carouseldesktop' : 'carouselmobile'))
