var menu =
    [
        { 'id': 'Home', 'link': '/' },
        { 'id': 'Nossa Agenda', 'link': '/agenda' },
        { 'id': 'Entre em Contato', 'link': '/contato' },
        { 'id': 'Contribua com o Evangelho', 'link': '' },
        { 'id': 'Biblioteca', 'link': '/biblioteca' }
    ]

for (var i = 0; i < menu.length; i++) {
    var compmenu = `
    
    <li class="nav-item">
        <a class="nav-link fHel1" href="${menu[i].link}">${menu[i].id}</a>
    </li>

    `
    $('.navbar-nav').append(compmenu)
}

if (window.location.pathname != '/') {
    var btnvoltar = '<i class="fas fa-arrow-left voltar" onclick="window.history.go(-1); return false"></i>' 
    $('.navbar-brand').prepend(btnvoltar)
}