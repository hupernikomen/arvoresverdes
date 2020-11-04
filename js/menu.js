var menu =
    [
        { 'id': 'Home', 'link': 'https://www.ibavthe.com' },
        { 'id': 'Contato', 'link': '' },
        { 'id': 'Contribua', 'link': '' },
        { 'id': 'Downloads', 'link': 'https://www.ibavthe.com/downloads' }
    ]

for (var i = 0; i < menu.length; i++) {
    var compmenu = `
    
    <li class="nav-item">
        <a class="nav-link fHel1" href="${menu[i].link}">${menu[i].id}</a>
    </li>

    `
    $('.navbar-nav').append(compmenu)
}