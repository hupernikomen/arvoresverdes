for (var i = dMes; i < prog.length; i++) {

    prog[i].map((item) => {
        var post = `
        
        <div class="mb-4">
            <h6 class="tag-evt my-2">
                <span class="tag-dia mr-3" style="background: ${item.bg}">${index[i]} / ${mes}</span>
                ${item.evt}
            </h6>
            <span class="tag-loc">${item.loc}</span>
            <span class="tag-diaD">${index[i] == dMesComp ? 'Hoje' : semana[dSem(index[i])]}</span> - 
            <span class="tag-hora">${item.hr}</span>
        </div>
    `
        $('.itens-prog').append(post)
    })
}