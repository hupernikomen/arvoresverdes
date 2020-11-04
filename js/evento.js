var hoje = new Date()
var dMesComp = hoje.getDate()
var diaDoMes = hoje.getDate()
var mes = hoje.getMonth()
var fimStatus = []

var arrDiasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var cultoDominical = {
    'bg': '#659EA3',
    'evt': 'Culto - Louvor e Pregação',
    'hr': '18',
    'min': '00',
    'loc': 'Templo Batista Arvores Verdes'
}
var ebd = {
    'bg': '#ABD904',
    'evt': 'EBD',
    'hr': '17',
    'min': '00',
    'loc': 'Templo Batista Arvores Verdes'
}
var oracao = {
    'bg': '#b6723a',
    'evt': 'Oração e Doutrina',
    'hr': '19',
    'min': '30',
    'loc': 'Templo Batista Arvores Verdes'
}
var pizza = {
    'bg': '#B32929',
    'evt': 'Festival de Pizza',
    'hr': '18',
    'min': '00',
    'loc': 'Templo Batista Arvores Verdes'
}
var reuniaoH = {
    'bg': '#3F95E0',
    'evt': 'Reuniao dos Homens',
    'hr': '18',
    'min': '30',
    'loc': 'Casa do Irmão ...'
}
var reuniaoM = {
    'bg': '#F3A0B4',
    'evt': 'Reuniao das Mulheres',
    'hr': '18',
    'min': '30',
    'loc': 'Casa da Irmã ...'
}
progs = [[], //00
[ebd, cultoDominical],
[], //02
[], //03
[], //04
[], //05
[oracao], //06
[], //07
[ebd, cultoDominical], //08
[], //09
[], //10
[reuniaoH, reuniaoM], //11
[], //12
[oracao], //13
[],//14
[ebd, cultoDominical], //15
[], //16
[], //17
[], //18
[], //19
[oracao], //20
[pizza], //21
[ebd, cultoDominical], //22
[], //23
[], //24
[], //25
[], //26
[oracao],//27
[], //28
[ebd, cultoDominical], //29
[], //30
[] //31
]

while (progs[diaDoMes] == '' || hoje > dataHoraDoEvento(progs[diaDoMes][progs[diaDoMes].length - 1])) {
    diaDoMes++
    if (progs[diaDoMes] == null) {
        diaDoMes = 0
    }
}

progs[diaDoMes].map((prog) => {
    var post = `
    <a href="eventos.html">
    <div class="modal-prog">
    <h2 class="mb-3" style="color: ${prog.bg}"><i class="far fa-calendar-alt mr-3"></i>${prog.evt}</h2>
      <span class="fHel1">${Object.keys(progs)[diaDoMes] == dMesComp ? '<strong>Hoje</strong>' : 
      arrDiasDaSemana[diaDaSemana(Object.keys(progs)[diaDoMes])]} [ ${Object.keys(progs)[diaDoMes]}/${mes} ], às ${prog.hr}:${prog.min}hs</span>
      <span class="fHel1">${prog.loc}</span>
    </div></a>
        `
    $('.item-prog').append(post)

})

function diaDaSemana(dia) {
    return new Date(hoje.getFullYear(), fimMes(), dia).getDay()
}

function fimMes() {
    for (var i = diaDoMes; i < progs.length; i++) {
        progs[i].length == 0 ? fimStatus.push('false') : fimStatus.push('true')
    }
    return fimStatus.find(i => i == 'true') ? mes : mes++
}

function dataHoraDoEvento(evento) {
    return new Date(hoje.getFullYear(), fimMes(), diaDaSemana(Object.keys(progs)[diaDoMes]) + 1, evento.hr, evento.min)
}

