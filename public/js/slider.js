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
            <div class="conteudo-slide">
                <h3 class=" mx-5">${slide[i].title}</h3>
                <p class=" mx-5">${slide[i].notice}</p>
                <a class=" mx-5" href="/info/${i}">${slide[i].button}</a>
            </div>
        </div>
        `
    $('.carousel-inner').append(slideItem)
}

