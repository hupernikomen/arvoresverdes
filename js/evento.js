var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

prog = [[],
[{ 'dia': 1, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 2, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 3, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 4, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 5, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 6, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 7, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 8, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 9, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 10, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 11, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 12, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 13, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 14, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 15, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 16, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 17, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 18, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 19, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 20, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 21, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[],
[],
[{ 'dia': 24, 'evt': 'Culto - Exemplo', 'hr': '12:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 25, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 26, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[],
[],
[],
[{ 'dia': 30, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 31, 'evt': 'Culto - Exemplo', 'hr': '19:20', 'loc': 'Templo Batista em Arvores Verdes' }]
]

var data = new Date()
var dMesComp, dMes = data.getDate()

while (prog[dMes] == '') {
    dMes++
    if (prog[dMes] == null) { dMes = 0 }
}

for (var i = 0; i < prog[dMes].length; i++) {
    var item = prog[dMes][i]
    var post = `
    <div class="item-prog">
        <span class="tag-dia">${item.dia}</span>
        <div class="ml-3">
            <h6 class="tag-evt">${item.evt}</h6>
            <span class="tag-loc">${item.loc}</span>
            <span class="tag-diaD">${item.dia == dMesComp ? 'Hoje' : semana[dSem(item.dia)]}</span> - 
            <span class="tag-hora">${item.hr}</span>
        </div>
    </div>
    `
    $('.prog').append(post)

}
var btnMore = `
<a href="eventos.html" class="more"><i class="fas fa-angle-down"></i></a>`

$('.prog').append(btnMore)

function dSem(dia) {
    var d = new Date(data.getFullYear(), data.getMonth(), dia)
    return d.getDay()
}