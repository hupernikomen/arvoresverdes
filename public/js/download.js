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
            'link': 'https://drive.google.com/file/d/1Ww9BrZ1j8AfG50ILqY_qYjnNqu9JVJnH/view?usp=sharing'
        }
    ]

    for (var i = 0; i < biblioteca.length; i++) {

        var livro = `
        
        <a href="${biblioteca[i].link}" class="livro">
            ${biblioteca[i].capa}
            <div>
                <h1>${biblioteca[i].titulo}</h1>
                <span>Autor: ${biblioteca[i].autor}</span>
            </div>
        </a>
    
        `
        $('.arquivos').append(livro)
    }