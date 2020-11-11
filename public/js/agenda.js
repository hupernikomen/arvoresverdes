var diaDeFeira = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var cultoDominical = {
    'ic': '<i class="fas fa-bible"></i>',
    'cor': '#659EA3',
    'evt': 'Culto de Louvor e Pregação',
    'hr': '18',
    'min': '00',
    'loc': 'no Templo'
}
var ebd = {
    'ic': '<i class="fas fa-graduation-cap"></i>',
    'cor': '#8caf0c',
    'evt': 'EBD',
    'hr': '17',
    'min': '00',
    'loc': 'no Templo'
}
var oracao = {
    'ic': '<i class="fas fa-praying-hands"></i>',
    'cor': '#b6723a',
    'evt': 'Culto de Oração e Doutrina',
    'hr': '19',
    'min': '30',
    'loc': 'no Templo'
}
var pizza = {
    'ic': '<i class="fas fa-pizza-slice"></i>',
    'cor': '#B32929',
    'evt': 'Festival de Pizza',
    'hr': '18',
    'min': '00',
    'loc': 'no Templo'
}
var reuniaoH = {
    'ic': '<i class="fas fa-male"></i>',
    'cor': '#3F95E0',
    'evt': 'Reunião dos Homens',
    'hr': '18',
    'min': '30',
    'loc': 'na Casa do Irmão ...'
}
var reuniaoM = {
    'ic': '<i class="fas fa-female"></i>',
    'cor': '#F3A0B4',
    'evt': 'Reunião das Mulheres',
    'hr': '18',
    'min': '30',
    'loc': 'na Casa da Irmã ...'
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
var mes = data.getMonth() 
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


if (window.location.pathname == '/agenda') {
    for (dia; dia < progs.length; dia++) {
        programacao('.itens-prog')
    }
} else if (window.location.pathname == '/') {
    programacao('.item-prog')
}

function evento(prog, index, qtdItens) {
    return `
    <div class="c-programacao w-100 p-4">
      <h3>Você é nosso convidado</h3> 
      <p style="border-left: 2px solid ${prog[0].cor}">${index == diaComp ? '<span>Hoje</span>' :
            diaDeFeira[diaDaSemana(index)]} (${index}) 
      
      teremos ${prog[0].evt} às ${prog[0].hr}:${prog[0].min}h 
      ${prog[0].loc}.</p>
      
      ${qtdItens > 1 ? `<p style="border-left: 2px solid ${prog[1].cor}">E ainda ${index == diaComp ? '<span>Hoje</span>' :
            diaDeFeira[diaDaSemana(index)]} (${index}) às ${prog[1].hr}:${prog[1].min}h também teremos ${prog[1].evt} ${prog[1].loc}</p>` : ""}
      
    </div>
    `
}


function programacao(local) {
    var index = Object.keys(progs)[dia]

    if(local == '.item-prog') {
        $(local).append(evento(progs[dia], index, progs[dia].length))

    } else {
        progs[dia].map((prog) => {
            
            var eventos = `
            <div class="modal-prog" style="border-left: 5px solid ${prog.cor}">
            <h2 class="mb-2" style="color: ${prog.cor}">${prog.evt}</h2>
            <span class="fHel1">${index == diaComp ? '<span>Hoje</span>' :
            diaDeFeira[diaDaSemana(index)]} (${index}) às ${prog.hr}:${prog.min}hs</span>
            <span class="fHel1">${prog.loc}</span>
            </div>
            `
            $(local).append(eventos)
        })
    }
}
function diaDaSemana(dia) {
    return new Date(ano, mes, dia).getDay()
}

function fimMes() {
    for (var i = dia; i < progs.length - diaComp; i++) {
        progs[i].length == 0 ? fimStatus.push('false') : fimStatus.push('true')
    }
    return fimStatus.find(i => i == 'true') ? mes : mes++
}


