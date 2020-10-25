while (agenda[diaDoMes] == '') {
    diaDoMes++
    if (agenda[diaDoMes] == null) {
        diaDoMes = 0
    }
}

for (var i = 0; i < agenda[diaDoMes].length; i++) {
    var post = `
    <div class="item-programacao">
        <div class="bemvindo-dia">${agenda[diaDoMes][i].dia}</div>
        <h6 class="bemvindo-titulo">${agenda[diaDoMes][i].evento}</h6>
        <i class="fas fa-map-marker-alt"></i><span>${agenda[diaDoMes][i].local}</span><br>
        <i class="far fa-calendar-alt"></i><span>${agenda[diaDoMes][i].dia == diaDoMesComp ? 'Hoje' : agenda[diaDoMes][i].semana}</span> - <span>${agenda[diaDoMes][i].hora}</span>
    </div>
    `
    $('.programacao').append(post)
}