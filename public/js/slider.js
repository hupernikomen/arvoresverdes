var slide = [
    {
        'img': '<img class="d-block w-100" src="imagens/mobile-slide-1.webp">',
        'title': 'Evangelismo',
        'notice': 'Dia 25/01 no Morro do Papagaio'
    },
    {
        'img': '<img class="d-block w-100" src="imagens/mobile-slide-2.webp">',
        'title': 'Culto Infantil',
        'notice': 'Jesus disse: "Deixai vir a mim as criancinhas" - Mt 19:14. Traga seu filho ao culto infantil',
        'button': 'Saiba +',
    }
]

for (var i = 0; i < slide.length; i++) {
    var slideItem = `
        <div class="carousel-item ${i == 0 ? 'active' : ''}">
            ${slide[i].img}
            <div class="conteudo-slide">
                <h3 class=" mx-4">${slide[i].title}</h3>
                <p class=" mx-4">${slide[i].notice}</p>
                ${slide[i].button != undefined ? `<a class="btn-slide mx-4" href="/info/${i}">${slide[i].button}</a>`: ''}
                
            </div>
        </div>
        `
    $('.carousel-inner').append(slideItem)
}

