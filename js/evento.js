var hoje = new Date()
var dMesComp = hoje.getDate()
var diaDoMes = hoje.getDate()
var mes = hoje.getMonth()
var fimStatus = []

var arrDiasDaSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var cultoDominical = {
    'ic': '<i class="fas fa-hands mr-3"></i>',
    'cor': '#659EA3',
    'evt': 'Culto | Louvor e Pregação',
    'hr': '18',
    'min': '00',
    'loc': 'Templo Batista Arvores Verdes'
}
var ebd = {
    'ic': '<i class="fas fa-bible mr-3"></i>',
    'cor': '#8caf0c',
    'evt': 'EBD',
    'hr': '17',
    'min': '00',
    'loc': 'Templo Batista Arvores Verdes'
}
var oracao = {
    'ic': '<i class="fas fa-praying-hands mr-3"></i>',
    'cor': '#b6723a',
    'evt': 'Culto | Oração e Doutrina',
    'hr': '19',
    'min': '30',
    'loc': 'Templo Batista Arvores Verdes'
}
var pizza = {
    'ic': '<i class="fas fa-pizza-slice mr-3"></i>',
    'cor': '#B32929',
    'evt': 'Festival de Pizza',
    'hr': '18',
    'min': '00',
    'loc': 'Templo Batista Arvores Verdes'
}
var reuniaoH = {
    'ic': '<i class="fas fa-male mr-3"></i>',
    'cor': '#3F95E0',
    'evt': 'Reunião dos Homens',
    'hr': '18',
    'min': '30',
    'loc': 'Casa do Irmão ...'
}
var reuniaoM = {
    'ic': '<i class="fas fa-female mr-3"></i>',
    'cor': '#F3A0B4',
    'evt': 'Reunião das Mulheres',
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

var page = window.location.pathname

if (page == '/eventos.html') {
    for (diaDoMes; diaDoMes < progs.length; diaDoMes++) {
        programacao('.itens-prog')
    }
} else if (page == '/index.html' || page == '/'){
    programacao('.item-prog')
}

function programacao(el) {
    progs[diaDoMes].map((prog) => {
        var post = `
        <div class="modal-prog">
        <h2 class="mb-3" style="color: ${prog.cor}">${prog.ic}${prog.evt}</h2>
        <span class="fHel1">${Object.keys(progs)[diaDoMes] == dMesComp ? '<span style="font-weight: 500">Hoje</span>' :
                arrDiasDaSemana[diaDaSemana(Object.keys(progs)[diaDoMes])]} [ ${Object.keys(progs)[diaDoMes]}/${mes} ], às ${prog.hr}:${prog.min}hs</span>
        <span class="fHel1">${prog.loc}</span>
        </div>
        `
        $(el).append(post)
    })
}

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

