for (var i = diaDoMes; i < progs.length; i++) {

    progs[i].map((item) => {
        var post = `
        
        <div class="mb-4">
            <h6 class="tag-evt my-2">
                <span class="tag-dia mr-3" style="background: ${item.bg}">${Object.keys(progs)[i]} / ${mes}</span>
                ${item.evt}
            </h6>
            <span class="tag-loc">${item.loc}</span>
            <span class="tag-diaD">${Object.keys(progs)[i] == dMesComp ? 'Hoje' : arrDiasDaSemana[diaDaSemana(Object.keys(progs)[i])]}</span> - 
            <span class="tag-hora">${item.hr}</span>
        </div>
    `
        $('.itens-prog').append(post)
    })
}