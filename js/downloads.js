for(var i = 0;i< downloads.length; i++) {
    var download = `
    <div class="container-download">
        <span>${downloads[i].item}</span>
        <a class="link-download" href="${downloads[i].link}"><i class="fas fa-download"></i></a>
    </div>
    <hr>
    `
    $('main').append(download)
}