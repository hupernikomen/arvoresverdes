var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var cultoDominical = {
    'bg':'#5a9dc9',
    'evt': 'Culto - Louvor e Pregação',
    'hr': '18:00',
    'loc': 'Templo Batista Arvores Verdes'
}
var ebd = {
    'bg':'#b0c940',
    'evt': 'EBD',
    'hr': '17:00',
    'loc': 'Templo Batista Arvores Verdes'
}
var oracao = {
    'bg':'#4cc25c',
    'evt': 'Oração e Doutrina',
    'hr': '19:30',
    'loc': 'Templo Batista Arvores Verdes'
}
var pizza = {
    'bg':'#4c58c2',
    'evt': 'Festival de Pizza',
    'hr': '18:30',
    'loc': 'Templo Batista Arvores Verdes'
}
var reuniaoH = {
    'bg':'#4c71c2',
    'evt': 'Reuniao dos Homens',
    'hr': '18:30',
    'loc': 'Casa do Irmão ...'
}
var reuniaoM = {
    'bg':'#8d4cc2',
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
var dMesComp, dMes = data.getDate()
var mes = data.getMonth()
var fimStatus = false

function fimMes() {
    for (var j = dMes; j < prog.length; j++) {
        prog[j].length == 0 && fimStatus === false ? fimStatus = false : fimStatus = true
    }
    fimStatus == false ? mes++ : mes
    console.log('ainda ha eventos esse mes?', fimStatus)
    console.log('mes atual', mes)
}
fimMes()

while (prog[dMes] == '') {
    dMes++
    if (prog[dMes] == null) {
        dMes = 0
    }
}
var index = Object.keys(prog)
prog[dMes].map((i) => {
    var post = `
    <div>
        <h6 class="tag-evt mb-3">
            <span class="tag-dia mr-3" style="background: ${i.bg}">${index[dMes]}</span>
            ${i.evt}
        </h6>
        <span class="tag-loc">${i.loc}</span>
        <span class="tag-diaD">${index[dMes] == dMesComp ? 'Hoje' : semana[dSem(index[dMes])]}</span> - 
        <span class="tag-hora">${i.hr}</span>
    </div>
`
    $('.item-prog').append(post)
})


function dSem(dia) {
    return new Date(data.getFullYear(), mes, dia).getDay()
}
