var slide = [
    {
        'img': '<img class="d-block w-100" src="imagens/mobile-slide-1.webp">',
        'title': 'Evangelismo',
        'notice': 'Dia 25/01 no Morro do Papagaio'
    },
    {
        'img': '<img class="d-block w-100" src="imagens/mobile-slide-2.webp">',
        'title': 'Culto Infantil',
        'notice': 'Jesus disse: "Deixai vir a mim as criancinhas" - Mt 19:14. Traga seu filho ao culto infantil'
    }
]

for (var i = 0; i < slide.length; i++) {
    var slideItem = `
        <div class="carousel-item ${i == 0 ? 'active' : ''}">
            ${slide[i].img}
            <a href="/${i}" class="conteudo-slide">
                <h3 class=" mx-4">${slide[i].title}</h3>
                <p class=" mx-4">${slide[i].notice}</p>
            </a>
        </div>
        `
    $('.carousel-inner').append(slideItem)
}

