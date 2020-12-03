var data = new Date()
var year = data.getFullYear()
var month = data.getMonth()
var day = data.getDate()
var diaComp = data.getDate()

const week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]

const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

const cultoDominical = {
    'cor': '#659EA3',
    'evt': 'Culto de Louvor e Pregação',
    'hr': '18',
    'min': '00',
    'loc': 'no Templo'
}
const ebd = {
    'cor': '#8caf0c',
    'evt': 'EBD',
    'hr': '17',
    'min': '00',
    'loc': 'no Templo'
}
const oracao = {
    'cor': '#b6723a',
    'evt': 'Culto de Oração e Doutrina',
    'hr': '19',
    'min': '30',
    'loc': 'no Templo'
}
const pizza = {
    'cor': '#B32929',
    'evt': 'Festival de Pizza',
    'hr': '19',
    'min': '00',
    'loc': 'no Templo'
}
const reuniaoH = {
    'cor': '#3F95E0',
    'evt': 'Reunião dos Homens',
    'hr': '18',
    'min': '30',
    'loc': 'na Casa do Irmão ...'
}
const reuniaoM = {
    'cor': '#F3A0B4',
    'evt': 'Reunião das Mulheres',
    'hr': '18',
    'min': '30',
    'loc': 'na Casa da Irmã ...'
}


const progs = new Array();
agendOfMonth = 12

// O indice representa o dia do evento ou culto

progs[4] = [oracao]
progs[6] = [ebd, cultoDominical]
progs[11] = [oracao]
progs[12] = [pizza]
progs[13] = [ebd, cultoDominical]
progs[18] = [oracao]
progs[20] = [ebd, cultoDominical]
progs[25] = [oracao]
progs[27] = [ebd, cultoDominical]

const ultimoDia = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();
if (progs[ultimoDia] == undefined) progs[ultimoDia] = []

for (var i = 0; i < progs.length; i++) {
    if (progs[i] == undefined) progs[i] = []
}

$('.mes').html(months[month])

while (progs[day] == '') {
    day++
    if (progs[day] == null) day = 0
}

// Pega o ultimo evento do dia 
const dateFirstEvent = new Date(year, month, day, progs[day][progs[day].length - 1].hr, progs[day][progs[day].length - 1].min)
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
        $('.item-prog span').css('display', 'block')
    }
}

function dayOfWeek(day) {
    return new Date(year, month, day).getDay()
}
