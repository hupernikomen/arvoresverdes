var week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
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
[], //01
[], //02
[], //03
[], //04
[], //05
[], //06
[], //07
[ebd, cultoDominical], //08
[], //09
[], //10
[], //11
[], //12
[], //13
[], //14
[], //15
[], //16
[], //17
[], //18
[], //19
[], //20
[], //21
[], //22
[ebd], //23
[], //24
[pizza], //25
[], //26
[], //27
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
todayHas = []
endMonth(day)

while (progs[day] == '') {
    day++
    if (progs[day] == null) {
        day = 0
    }
}

// Pega o primeiro item do day 
var dateFirstEvent = new Date(year, month, day, progs[day][progs[day].length - 1].hr, progs[day][progs[day].length - 1].min)
if (data > dateFirstEvent) {
    day++
}

if (window.location.pathname == '/agenda') {
    for (day; day < progs.length; day++) {
        programacao('.itens-prog')
    }
} else if (window.location.pathname == '/') {
    programacao('.item-prog')
}

function event(prog, index, qItems) {
    return `
    <p class="pl-3" style="border-left: 5px solid ${prog[0].cor}">${index == diaComp ? '<span>Hoje</span>' : week[dayOfWeek(index)]} (${index}) 
      
    teremos ${prog[0].evt} às ${prog[0].hr}:${prog[0].min}hs
        ${prog[0].loc}.</p>

        ${qItems > 1 ? `<p class="pl-3" style="border-left: 5px solid ${prog[1].cor}">E ainda ${index == diaComp ? '<span>Hoje</span>' : week[dayOfWeek(index)]} (${index}) às ${prog[1].hr}:${prog[1].min}hs também teremos ${prog[1].evt} ${prog[1].loc}</p>` : ""}
    `
}

function programacao(selector) {
    var index = Object.keys(progs)[day]

    if (selector == '.item-prog') {
        $(selector).append(event(progs[day], index, progs[day].length))
    } else {
        progs[day].map((prog) => {
            var event = `
            <div class="modal-prog" style="border-left: 5px solid ${prog.cor}">
            <h2 class="mb-2" style="color: ${prog.cor}">${prog.evt}</h2>
            <span>${index == diaComp ? '<span>Hoje</span>' : week[dayOfWeek(index)]} (${index}) às ${prog.hr}:${prog.min}hs</span>
            <span>${prog.loc}</span>
            </div>
            `
            $(selector).append(event)
        })
    }
}
function dayOfWeek(day) {
    return new Date(year, month, day).getDay()
}

function endMonth(day) {
    while (day < progs.length - 1) {
        progs[day].length == 0 ? todayHas.push('noEvent') : todayHas.push('yesEvent')
        day++
    }
    return todayHas.find(i => i == 'yesEvent') ? month : month++
}


