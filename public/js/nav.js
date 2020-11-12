var logo = `<img class="logo" src="imagens/logo-igreja-batista-arvores-verdes.webp"
alt="Logo Igreja Batista em Arvores Verdes">`

var nav =
    `<nav class="navbar navbar-light bg-white">

      <a class="navbar-brand" href="/">
        ${window.location.pathname == '/' ? logo: ""}

        <div class="sub-logo">
          <span>IBAV</span><br>
          <h1>Igreja Batista em Arvores Verdes</h1>
        </div>

      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mb-3"></ul>
        <span class="navbar-text"></span>
      </div>

    </nav>`

$('header').append(nav)  