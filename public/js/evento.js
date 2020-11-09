var diaDeFeira = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var cultoDominical = {
    'ic': '<i class="fas fa-bible"></i>',
    'cor': '#659EA3',
    'evt': 'Louvor e Pregação',
    'hr': '18',
    'min': '00',
    'loc': 'Templo Batista Arvores Verdes'
}
var ebd = {
    'ic': '<i class="fas fa-graduation-cap"></i>',
    'cor': '#8caf0c',
    'evt': 'EBD',
    'hr': '17',
    'min': '00',
    'loc': 'Templo Batista Arvores Verdes'
}
var oracao = {
    'ic': '<i class="fas fa-praying-hands"></i>',
    'cor': '#b6723a',
    'evt': 'Oração e Doutrina',
    'hr': '19',
    'min': '30',
    'loc': 'Templo Batista Arvores Verdes'
}
var pizza = {
    'ic': '<i class="fas fa-pizza-slice"></i>',
    'cor': '#B32929',
    'evt': 'Festival de Pizza',
    'hr': '18',
    'min': '00',
    'loc': 'Templo Batista Arvores Verdes'
}
var reuniaoH = {
    'ic': '<i class="fas fa-male"></i>',
    'cor': '#3F95E0',
    'evt': 'Reunião dos Homens',
    'hr': '18',
    'min': '30',
    'loc': 'Casa do Irmão ...'
}
var reuniaoM = {
    'ic': '<i class="fas fa-female"></i>',
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

var data = new Date()
var ano = data.getFullYear()
var mes = data.getMonth() + 1
var dia = data.getDate()
var diaComp = data.getDate()

fimStatus = []

while (progs[dia] == '') {
    dia++
    if (progs[dia] == null) {
        dia = 0
    }
}


var dataEvento = new Date(ano, mes, dia, progs[dia][progs[dia].length - 1].hr, progs[dia][progs[dia].length - 1].min)
if (data > dataEvento) {
    dia++
}


if (window.location.pathname == '/eventos') {
    for (dia; dia < progs.length; dia++) {
        programacao('.itens-prog')
    }
} else if (window.location.pathname == '/') {
    programacao('.item-prog')
}

function programacao(el) {
    var index = Object.keys(progs)[dia]

    progs[dia].map((prog) => {

        var post = `
        <div class="modal-prog" ${el == '.itens-prog' ? `style="border-left: 8px solid ${prog.cor}` : ""}">
            <h2 class="mb-2" style="color: ${prog.cor}"> ${el == '.item-prog' ? prog.ic : ""} ${prog.evt}</h2>
            <span class="fHel1">${index == diaComp ? '<span style="font-weight: 500">Hoje</span>' :
                diaDeFeira[diaDaSemana(index)]} ( ${index}/${mes} ) às ${prog.hr}:${prog.min}hs</span>
            <span class="fHel1">${prog.loc}</span>
        </div>
        `
        $(el).append(post)
    })
}

function diaDaSemana(dia) {
    return new Date(fimMes(), dia).getDay()
}

function fimMes() {
    for (var i = dia; i < progs.length; i++) {
        progs[i].length == 0 ? fimStatus.push('false') : fimStatus.push('true')
    }
    return fimStatus.find(i => i == 'true') ? mes : mes++
}


