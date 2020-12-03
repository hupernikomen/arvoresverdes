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


agendOfMonth = 12
const prog = new Array();
// O indice representa o dia do evento ou culto

prog[4] = [oracao]
prog[6] = [ebd, cultoDominical]
prog[11] = [oracao]
prog[12] = [pizza]
prog[13] = [ebd, cultoDominical]
prog[18] = [oracao]
prog[20] = [ebd, cultoDominical]
prog[25] = [oracao]
prog[27] = [ebd, cultoDominical]

for (var i = 0; i < prog.length; i++) {
    if (prog[i] == undefined) prog[i] = []
}


const ultimoDia = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();
if (prog[ultimoDia] == undefined) prog[ultimoDia] = []


$('.mes').html(months[month])

while (prog[day] == '') {
    day++
    if (prog[day] == null) day = 0
}

// Pega o ultimo evento do dia 
const dateFirstEvent = new Date(year, month, day, prog[day][prog[day].length - 1].hr, prog[day][prog[day].length - 1].min)
if (data > dateFirstEvent) day++

if (window.location.pathname == '/agenda') {
    for (day; day < prog.length; day++) {
        createEvent(prog[day], Object.keys(prog)[day], '.itens-prog')
    }
} else if (window.location.pathname == '/') {
    createEvent(prog[day], Object.keys(prog)[day], '.item-prog')
}

function createEvent(el, index, seletor) {
    if (agendOfMonth == month + 1) {

        el.map(i => {
            var e = `
            <p style="border-left: 5px solid ${i.cor}">${index == diaComp ? '<span>Hoje</span>' : week[dayOfWeek(index)]} (${index}) ${i.evt} às ${i.hr}:${i.min}hs ${i.loc}</p>
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
