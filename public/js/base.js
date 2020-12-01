var nav =
  `<nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="back"></div>
      <a class="navbar-brand" href="/">
      <img class="logo" src="imagens/logo_ibav.webp"
      alt="Logo Igreja Batista em Arvores Verdes">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav"></ul>
        <span class="navbar-text"></span>
      </div>

    </nav>`

$('header').append(nav)

if (window.location.pathname != '/' ) {
  $('.back').html('<img src="icones/voltar.png" onclick="window.history.go(-1); return false">')
} else {
  $('.back').html('')
}


// ________

var footer = `
<div class="container">
<div class="row text-center d-flex justify-content-center pt-5 mb-3">

  <div class="col-md-2 mb-3">
    <h6 class="text-uppercase font-weight-bold">
      <a href="/sobre">Sobre Nós</a>
    </h6>
  </div>

  <div class="col-md-2 mb-3">
    <h6 class="text-uppercase font-weight-bold">
      <a href="/">Contribua</a>
    </h6>
  </div>


</div>
<hr class="rgba-white-light" style="margin: 0 15%">

<div class="row d-flex text-center justify-content-center mb-md-0 mb-3">

  <div class="col-md-8 col-12 mt-3">
    <h3 style="line-height: 1.7rem">A <b>IBAV</b> é uma Igreja Batista localizada na região de Árvores Verdes a 20km de Teresina-PI.
      Uma igreja bíblica que se empenha na divulgação do evangelho de Jesus Cristo, buscando e ensinando sempre a Verdade das escrituras.
    </h3>
  </div>

</div>
<div class="row pb-3">
  <div class="col-md-12">
    <div class="mb-3 flex-center">

      <!--Instagram-->
      <a href="https://www.instagram.com/ibavthe" class="ins-ic">
        <img src="icones/instagram.png">
      </a>

    </div>
  </div>
</div>
</div>

<!-- Copyright -->
<div class="footer-copyright text-center py-3 fHel2">
© 2020 Copyright:
<a href="/">IBAV | Md</a>
</div>
`

$('footer').append(footer)

// ___________
