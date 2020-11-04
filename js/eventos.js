for (var i = diaDoMes; i < progs.length; i++) {

    progs[i].map((item) => {
        var post = `
        <div class="modal-prog">
        <h2 class="mb-3" style="color: ${item.bg}"><i class="far fa-calendar-alt mr-3"></i>${item.evt}</h2>
            <span class="fHel1">${Object.keys(progs)[i] == dMesComp ? '<strong>Hoje</strong>' : 
            arrDiasDaSemana[diaDaSemana(Object.keys(progs)[i])]} [ ${Object.keys(progs)[i]}/${mes} ], às ${item.hr}:${item.min}hs
            </span>
            <span class="fHel1">${item.loc}</span>
        </div>
    `
        $('.itens-prog').append(post)
    })
}