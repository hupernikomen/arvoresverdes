var menu =
    [
        { 'id': 'Home', 'link': '/' },
        { 'id': 'Nossa Agenda', 'link': '/agenda' },
        { 'id': 'Fale Conosco', 'link': '/fale-conosco' },
        // { 'id': 'Contribua com o Evangelho', 'link': '' },
        { 'id': 'Downloads', 'link': '/downloads' }
    ]

for (var i = 0; i < menu.length; i++) {
    var compmenu = `<li class="nav-item"><a class="nav-link fHel1" href="${menu[i].link}">${menu[i].id}</a></li>`
    $('.navbar-nav').append(compmenu)
}
