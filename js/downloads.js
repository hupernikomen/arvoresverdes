var downloads =
    [
        {
            'capa':'<img src="../imagens/livros/o_que_e_fe.jpg">',
            'titulo': 'O que é Fé?',
            'autor':'R. C. Sproul',
            'link': 'https://drive.google.com/file/d/1b8Dy-8u-JMbNJhmOfu6AE8Np-aA-P98u/view?usp=sharing'
        },
        {
            'capa':'',
            'titulo': 'Como ser Salvo?',
            'autor':'J. C. Ryle',
            'link': 'https://drive.google.com/file/d/1T3l-hWlgq6Z2HiU43a8oZL0y9_8oCwQi/view?usp=sharing'
        },
        {
            'capa':'<img src="../imagens/livros/o_que_significa_ser_nascido_de_novo.jpg">',
            'titulo': 'O que significa ser nascido de novo?',
            'autor':'R. C. Sproul',
            'link': 'https://drive.google.com/file/d/1BjHjTGfL2J7YnnTUOGbLiFK50XpDocrW/view?usp=sharing'
        }
    ]

for (var i = 0; i < downloads.length; i++) {

    var download = `
    
    <a href="${downloads[i].link}" class="col p-0">
        ${downloads[i].capa}
        <div class="p-3">
            <h2>${downloads[i].titulo}</h2>
            <span>${downloads[i].autor}</span>
        </div>
    </a>


    `
    $('.container-down').append(download)
}
