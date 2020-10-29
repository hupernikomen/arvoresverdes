for (var i = dMes; i < prog.length; i++) {

    prog[i].map((item) => {
        var post = `
    <div class="item-prog">
        <div class="tag-dia">${item.dia}</div>
        <div>
            <h6 class="tag-evt">${item.evento}</h6>
            <span class="tag-loc">${item.local}</span><br>
            <span class="tag-diaD">${item.dia == dMesComp ? 'Hoje' : semana[dSem(item.dia)]}</span> - 
            <span class="tag-hora">${item.hora}</span>
        </div>
    </div>
    `
        $('.itens-prog').append(post)
    })
}