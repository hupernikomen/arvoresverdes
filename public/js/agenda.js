var week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
var cultoDominical = {
    'cor': '#659EA3',
    'evt': 'Culto de Louvor e Pregação',
    'hr': '18',
    'min': '00',
    'loc': 'no Templo'
}
var ebd = {
    'cor': '#8caf0c',
    'evt': 'EBD',
    'hr': '17',
    'min': '00',
    'loc': 'no Templo'
}
var oracao = {
    'cor': '#b6723a',
    'evt': 'Culto de Oração e Doutrina',
    'hr': '19',
    'min': '30',
    'loc': 'no Templo'
}
var pizza = {
    'cor': '#B32929',
    'evt': 'Festival de Pizza',
    'hr': '19',
    'min': '00',
    'loc': 'no Templo'
}
var reuniaoH = {
    'cor': '#3F95E0',
    'evt': 'Reunião dos Homens',
    'hr': '18',
    'min': '30',
    'loc': 'na Casa do Irmão ...'
}
var reuniaoM = {
    'cor': '#F3A0B4',
    'evt': 'Reunião das Mulheres',
    'hr': '18',
    'min': '30',
    'loc': 'na Casa da Irmã ...'
}

agendOfMonth = 12
progs = [[], //00
[], //01
[], //02
[], //03
[oracao], //04
[], //05
[ebd, cultoDominical], //06
[], //07
[], //08
[], //09
[], //10
[oracao], //11
[pizza], //12
[ebd, cultoDominical], //13
[], //14
[], //15
[], //16
[], //17
[oracao], //18
[], //19
[ebd, cultoDominical], //20
[], //21
[], //22
[], //23
[], //24
[oracao], //25
[], //26
[ebd, cultoDominical], //27
[], //28
[], //29
[], //30
[] //31
]

var data = new Date()
var year = data.getFullYear()
var month = data.getMonth()
var day = data.getDate()
var diaComp = data.getDate()

$('.mes').html(months[month])

while (progs[day] == '') {
    day++
    if(progs[day] == null) day = 0
}

// Pega o ultimo evento do dia 
var dateFirstEvent = new Date(year, month, day, progs[day][progs[day].length - 1].hr, progs[day][progs[day].length - 1].min)
if (data > dateFirstEvent) day++

if (window.location.pathname == '/agenda') {
    for (day; day < progs.length; day++) {
        createEvent(progs[day], Object.keys(progs)[day], '.itens-prog')
    }
} else if (window.location.pathname == '/') {
    createEvent(progs[day], Object.keys(progs)[day], '.item-prog')
}

function createEvent(prog, index, seletor) {
    if (agendOfMonth == month + 1) {

        prog.map((item) => {
            var e = `
            <p style="border-left: 5px solid ${item.cor}">${index == diaComp ? '<span>Hoje</span>' : week[dayOfWeek(index)]} (${index}) ${item.evt} às ${item.hr}:${item.min}hs ${item.loc}.</p>
            `
            $(seletor).append(e)
        })
    } else {
        $('.item-prog').append('<p><img class="mr-2" src="icones/atencao.png">Em breve atualizaremos nossa agenda...</p>')
    }
}

function dayOfWeek(day) {
    return new Date(year, month, day).getDay()
}
