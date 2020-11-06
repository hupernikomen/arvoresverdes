var bibliotecas =
    [
        {
            'categoria': 'livros',
            'capa': '<img src="../imagens/livros/o_que_e_fe.jpg">',
            'titulo': 'O que é Fé?',
            'autor': 'R. C. Sproul',
            'link': 'https://drive.google.com/file/d/1b8Dy-8u-JMbNJhmOfu6AE8Np-aA-P98u/view?usp=sharing'
        },
        {
            'categoria':'livros',
            'capa': '<img>',
            'titulo': 'Como ser Salvo?',
            'autor': 'J. C. Ryle',
            'link': 'https://drive.google.com/file/d/1T3l-hWlgq6Z2HiU43a8oZL0y9_8oCwQi/view?usp=sharing'
        },
        {
            'categoria':'ebd',
            'capa': '<img src="../imagens/livros/o_que_significa_ser_nascido_de_novo.jpg">',
            'titulo': 'O que significa ser nascido de novo?',
            'autor': 'R. C. Sproul',
            'link': 'https://drive.google.com/file/d/1BjHjTGfL2J7YnnTUOGbLiFK50XpDocrW/view?usp=sharing'
        }
    ]

    for (var i = 0; i < bibliotecas.length; i++) {

        var livro = `
        
        <a href="${bibliotecas[i].link}" class="download-item">
            ${bibliotecas[i].capa}
            <div>
                <h2>${bibliotecas[i].titulo}</h2>
                <span>Autor: ${bibliotecas[i].autor}</span>
                <span>Categoria: ${bibliotecas[i].categoria}</span>
            </div>
        </a>
    
        `
        $('.container-down').append(livro)
    }