var menu =
    [
        { 'id': 'Home', 'link': '/' },
        { 'id': 'Nossa Agenda', 'link': '/agenda' },
        { 'id': 'Fale Conosco', 'link': '/fale-conosco' },
        // { 'id': 'Contribua com o Evangelho', 'link': '' },
        { 'id': 'Downloads', 'link': '/downloads' }
    ]
for (var i = 0; i < menu.length; i++) {
    var compmenu = `<li class="nav-item mx-2"><a class="nav-link" href="${menu[i].link}"> ${menu[i].id}</a></li>`
    $('.navbar-nav').append(compmenu)
}
