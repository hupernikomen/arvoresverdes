var logo = `<img class="logo" src="imagens/logo-igreja-batista-arvores-verdes.webp"
alt="Logo Igreja Batista em Arvores Verdes">`

var nav =
    `<nav class="navbar navbar-light bg-white py-2 mx-2">

      <a class="navbar-brand" href="/">
        ${window.location.pathname == '/' ? logo: ""}

        <h1 class="sub-logo fHel2">
          <span>IBAV</span><br>
          <strong>Igreja Batista em Arvores Verdes</strong>
        </h1>

      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mb-3"></ul>
        <span class="navbar-text">
          teto
        </span>
      </div>

    </nav>`

$('header').append(nav)  