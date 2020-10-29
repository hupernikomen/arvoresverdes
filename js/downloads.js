var downloads =
    [
        {
            'item': 'O que é Fé - R. C. Sproul',
            'link': 'https://drive.google.com/file/d/1b8Dy-8u-JMbNJhmOfu6AE8Np-aA-P98u/view?usp=sharing'
        },
        {
            'item': 'Como ser Salvo - J. C. Ryle',
            'link': 'https://drive.google.com/file/d/1T3l-hWlgq6Z2HiU43a8oZL0y9_8oCwQi/view?usp=sharing'
        },
        {
            'item': 'O que significa ser nascido de novo - J. C. Ryle',
            'link': 'https://drive.google.com/file/d/1BjHjTGfL2J7YnnTUOGbLiFK50XpDocrW/view?usp=sharing'
        }
    ]

for (var i = 0; i < downloads.length; i++) {

    var download = `
    <div class="container-download">
        <span>${downloads[i].item}</span>
        <a class="link-download" href="${downloads[i].link}"><i class="fas fa-download"></i></a>
    </div>
    <hr>
    `
    $('main').append(download)
}
