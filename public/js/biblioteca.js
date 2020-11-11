var biblioteca =
    [
        {
            'categoria': 'livros',
            'capa': '<img src="../imagens/livros/o_que_e_fe.webp">',
            'titulo': 'O que é Fé?',
            'autor': 'R. C. Sproul',
            'link': 'https://drive.google.com/file/d/1b8Dy-8u-JMbNJhmOfu6AE8Np-aA-P98u/view?usp=sharing'
        },
        {
            'categoria':'ebd',
            'capa': '<img src="../imagens/livros/o_que_significa_ser_nascido_de_novo.webp">',
            'titulo': 'O que significa ser nascido de novo?',
            'autor': 'R. C. Sproul',
            'link': 'https://drive.google.com/file/d/1BjHjTGfL2J7YnnTUOGbLiFK50XpDocrW/view?usp=sharing'
        }
    ]

    for (var i = 0; i < biblioteca.length; i++) {

        var livro = `
        
        <a href="${biblioteca[i].link}" class="livro">
            ${biblioteca[i].capa}
            <div>
                <h2>${biblioteca[i].titulo}</h2>
                <span>Autor: ${biblioteca[i].autor}</span>
                <span>Categoria: ${biblioteca[i].categoria}</span>
            </div>
        </a>
    
        `
        $('.arquivos').append(livro)
    }