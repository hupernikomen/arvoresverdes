for(var i = 0; i < menu.length; i++){
    var compmenu = `
    <li class="nav-item">
        <a class="nav-link" href="${menu[i].link}">${menu[i].id}</a>
    </li>
    `
    $('.navbar-nav').append(compmenu)
}