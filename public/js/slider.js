const slide = [
    {
        'imgmob': '<img class="d-block w-100" src="imagens/banners/culto-infantil.webp">',
        'imgdesk': '<img class="d-block w-100" src="imagens/banners/oracao.jpg">',
        'title': 'Culto Infantil',
        'page':'culto-infantil',
        'notice': 'Jesus disse: "Deixai vir a mim as criancinhas" - Mt 19:14. Traga seu filho ao culto infantil'
    }
]

for (let i = 0; i < slide.length; i++) {
    let larg = window.screen.width
    let slideItem = `
        <div class="carousel-item ${i == 0 ? 'active' : ''}">
            ${larg > 1024 ? slide[i].imgdesk : slide[i].imgmob}
            <a href="/${slide[i].page}" class="conteudo-slide">
                <h3>${slide[i].title}</h3>
                <p>${slide[i].notice}</p>
            </a>
        </div>
        `
    $('.carousel-inner').append(slideItem)
}