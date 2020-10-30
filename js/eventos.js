for (var i = dMes; i < prog.length; i++) {

    prog[i].map((item) => {
        var post = `
    <div class="item-prog my-4">
        <div class="tag-dia">${item.dia}</div>
        <div class="ml-2">
            <h6 class="tag-evt">${item.evt}</h6>
            <span class="tag-loc">${item.loc}</span>
            <span class="tag-diaD">${item.dia == dMesComp ? 'Hoje' : semana[dSem(item.dia)]}</span> - 
            <span class="tag-hora">${item.hr}</span>
        </div>
    </div>
    `
        $('.itens-prog').append(post)
    })
}