var slide = [
    {
        'imgmob': '<img class="d-block w-100" src="imagens/banners/mobile-slide-1.webp">',
        'imgdesk': '<img class="d-block w-100" src="imagens/banners/evangelismo.jpg">',
        'title': 'Evangelismo',
        'notice': 'Dia 25/01 no Morro do Papagaio'
    },
    {
        'imgmob': '<img class="d-block w-100" src="imagens/banners/culto-infantil.webp">',
        'imgdesk': '<img class="d-block w-100" src="imagens/banners/oracao.jpg">',
        'title': 'Culto Infantil',
        'notice': 'Jesus disse: "Deixai vir a mim as criancinhas" - Mt 19:14. Traga seu filho ao culto infantil'
    }
]

for (var i = 0; i < slide.length; i++) {
    var larg = window.screen.width
    var slideItem = `
        <div class="carousel-item ${i == 0 ? 'active' : ''}">
            ${larg > 1024 ? slide[i].imgdesk : slide[i].imgmob}
            <a href="/" class="conteudo-slide">
                <h3>${slide[i].title}</h3>
                <p>${slide[i].notice}</p>
            </a>
        </div>
        `
    $('.carousel-inner').append(slideItem)
}