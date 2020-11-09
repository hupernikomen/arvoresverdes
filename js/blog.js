var noticia = [
    evangelismo = {
        'id': 'evangelismo',
        'img': '<img class="d-block w-100" src="imagens/mobile-slide-1.jpg">',
        'titulo': 'Evangelismo',
        'texto': `
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `
    },
    cultoinfantil = {
        'id': 'cultoinfantil',
        'img':'',
        'titulo': 'Como é o culto infantil?',
        'texto': `
        Texto sobre Culto infantil
        `
    }
]

function blog(id) {
    var item = noticia.find(i => i.id == id)
    post = `
    <div class="blog-item ">
    <div class="topo-blog p-3">
    <h2>${item.titulo}</h2>
    <i class="fas fa-times" onclick="fechar()"></i>
    </div>
        ${item.img}
        <p class="px-3 mt-4">${item.texto}</p>
        </div>
    `
    $('.blog').html("")
    $('.blog').toggle('fast')
    $('.blog').append(post)

}



function fechar() {
    $('.blog').toggle('fast')
}
