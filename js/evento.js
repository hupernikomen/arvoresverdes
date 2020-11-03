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
    'bg': '#d6a277',
    'evt': 'Oração e Doutrina',
    'hr': '15',
    'min': '40',
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

while (progs[diaDoMes] == '' || hoje > dataHoraDoEvento(progs[diaDoMes][progs[diaDoMes].length -1])) {
    diaDoMes++
    if (progs[diaDoMes] == null) {
        diaDoMes = 0
    }
}

progs[diaDoMes].map((prog) => {
    var post = `
        <a href="eventos.html" class="mb-4">
            <h6 class="tag-evt my-2 fHel">
                <span class="tag-dia mr-3" style="background: ${prog.bg}">${Object.keys(progs)[diaDoMes]} / ${mes}</span>
                ${prog.evt}
            </h6>
            <span class="tag-loc fHel2">${prog.loc}</span>
            <span class="tag-diaD fHel2">
                ${Object.keys(progs)[diaDoMes] == dMesComp ? 'Hoje' : 
                arrDiasDaSemana[diaDaSemana(Object.keys(progs)[diaDoMes])]}
            </span> - 
            <span class="tag-hora fHel2">${prog.hr}:${prog.min}</span>
        </a>
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


