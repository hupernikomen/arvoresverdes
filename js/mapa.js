var mapa = `
<div class="c-mapa">
    <div class="mapa">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d254397.4623272989!2d-42.768220487304696!3d-4.946245833874236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x39d296de34589996!2zQ29uZ3JlZ2HDp8OjbyBCYXRpc3RhIE1hbsOh!5e0!3m2!1spt-BR!2sbr!4v1603221834937!5m2!1spt-BR!2sbr"
        width="300" height="400" frameborder="0" style="border:10;" allowfullscreen="" aria-hidden="false" tabindex="0">
        </iframe>
    </div>
</div>
`
var height = window.screen.height
var width = window.screen.width

$('body').append(mapa)

$('.c-mapa').css('height', `${height}`)
$('.c-mapa').css('width', `${width}`)