var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var cultoDominical = {
    'bg':'#659EA3',
    'evt': 'Culto - Louvor e Pregação',
    'hr': '18:00',
    'loc': 'Templo Batista Arvores Verdes'
}
var ebd = {
    'bg':'#A38976',
    'evt': 'EBD',
    'hr': '17:00',
    'loc': 'Templo Batista Arvores Verdes'
}
var oracao = {
    'bg':'#d6a277',
    'evt': 'Oração e Doutrina',
    'hr': '19:30',
    'loc': 'Templo Batista Arvores Verdes'
}
var pizza = {
    'bg':'#bad677',
    'evt': 'Festival de Pizza',
    'hr': '18:30',
    'loc': 'Templo Batista Arvores Verdes'
}
var reuniaoH = {
    'bg':'#92bcc9',
    'evt': 'Reuniao dos Homens',
    'hr': '18:30',
    'loc': 'Casa do Irmão ...'
}
var reuniaoM = {
    'bg':'#da9b9d',
    'evt': 'Reuniao das Mulheres',
    'hr': '18:30',
    'loc': 'Casa da Irmã ...'
}
prog = [[], //00
[ebd, cultoDominical],
[], //02
[], //03
[], //04
[], //05
[], //06
[oracao], //07
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
var dMesComp = data.getDate()
var dMes = data.getDate()
var mes = data.getMonth()
var fimStatus = []

function fimMes() {
    for (var i = dMes; i < prog.length; i++) {
        prog[i].length == 0 ? fimStatus.push('false') : fimStatus.push('true')
    }
    var res = fimStatus.find(i=> i == 'true') ? mes : mes++
    return res
}

while (prog[dMes] == '') {
    dMes++
    if (prog[dMes] == null) {
        dMes = 0
    }
}
var index = Object.keys(prog)

prog[dMes].map((i) => {
    var post = `
    <a href="eventos.html" class="mb-4">
        <h6 class="tag-evt my-2">
            <span class="tag-dia mr-3" style="background: ${i.bg}">${index[dMes]} / ${mes}</span>
            ${i.evt}
        </h6>
        <span class="tag-loc">${i.loc}</span>
        <span class="tag-diaD">${index[dMes] == dMesComp ? 'Hoje' : semana[dSem(index[dMes])]}</span> - 
        <span class="tag-hora">${i.hr}</span>
    </a>
`
    $('.item-prog').append(post)
})

function dSem(dia) {
    return new Date(data.getFullYear(), fimMes(), dia).getDay()
}
