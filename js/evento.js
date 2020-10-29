var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

prog = [[],
[{ 'dia': 1,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 2,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 3,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 4,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 5,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 6,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 7,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 8,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 9,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 10,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 11,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 12,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 13,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 14,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 15,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 16,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 17,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 18,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 19,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 20,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 21,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[],
[],
[{ 'dia': 24,'evento': 'Culto - Exemplo', 'hora': '12:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 25,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 26,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[],
[],
[],
[{ 'dia': 30,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }],
[{ 'dia': 31,'evento': 'Culto - Exemplo', 'hora': '19:20h', 'local': 'Templo Batista em Arvores Verdes' }]
]

var data = new Date()
var dMesComp, dMes = data.getDate() 

while (prog[dMes] == '') {
    dMes++
    if(prog[dMes] == null) {dMes = 0}
}

for (var i = 0; i < prog[dMes].length; i++) {
    var item = prog[dMes][i]
    var post = `
    <div class="item-prog">
        <span class="tag-dia">${item.dia}</span>
        <div>
            <h6 class="tag-evt">${item.evento}</h6>
            <span class="tag-loc">${item.local}</span><br>
            <span class="tag-diaD">${item.dia == dMesComp ? 'Hoje' : semana[dSem(item.dia)]}</span> - 
            <span class="tag-hora">${item.hora}</span>
        </div>
    </div>
    `
    $('.prog').append(post)
    console.log(item.dia)
    
}
var btnMore = `
<a href="eventos.html" class="more"><i class="fas fa-angle-down"></i></a>`

$('.prog').append(btnMore)

function dSem(dia) {
    var d = new Date(data.getFullYear(),data.getMonth(),dia)
    return d.getDay()
}