var data = new Date()
var diaDoMesComp = data.getDate()
var diaDoMes = data.getDate()

while (agenda[diaDoMes] == '') {
    diaDoMes++
    if (agenda[diaDoMes] == null) {
        diaDoMes = 0
    }
}

for (var i = 0; i < agenda[diaDoMes].length; i++) {
    var post = `
    <div class="item-programacao">
        <span class="c-programacao-dia">${agenda[diaDoMes][i].dia}</span>
        <div class="item-programacao-detalhes">
            <h6 class="c-programacao-titulo">${agenda[diaDoMes][i].evento}</h6>
            <span>${agenda[diaDoMes][i].local}</span><br>
            <span>${agenda[diaDoMes][i].dia == diaDoMesComp ? 'Hoje' : agenda[diaDoMes][i].semana}</span> - <span>${agenda[diaDoMes][i].hora}</span>
        </div>
    </div>
    `
    $('.programacao').append(post)
}
var botaoVerTudo = `<a class="btn-ver-todos" href="eventos.html">Ver Todos</a>`
$('.programacao').append(botaoVerTudo)