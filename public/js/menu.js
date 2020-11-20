var menu =
    [
        { 'id': 'Home', 'ic': '<img src="icones/home.png">', 'link': '/' },
        { 'id': 'Nossa Agenda', 'ic': '<img src="icones/agenda.png">', 'link': '/agenda' },
        { 'id': 'Fale Conosco', 'ic': '<img src="icones/o-email.png">', 'link': '/fale-conosco' },
        // { 'id': 'Contribua com o Evangelho', 'ic': '', 'link': '' },
        { 'id': 'Downloads', 'ic': '<img src="icones/download.png">', 'link': '/downloads' }
    ]
var plat = window.screen.width < 1024
for (var i = 0; i < menu.length; i++) {
    var compmenu = `<li class="nav-item mx-2"><a class="nav-link" href="${menu[i].link}">${plat ? menu[i].ic : ""} ${menu[i].id}</a></li>`
    $('.navbar-nav').append(compmenu)
}
