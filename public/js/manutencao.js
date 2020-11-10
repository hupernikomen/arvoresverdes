
$('.msg').append(`
<div class="msg-text px-4 py-3">
<i class="fas fa-tools"></i>
<h3>Olá, que legal ver você por aqui</h3>
<p>
Nosso site ainda está em construção, mas você pode ficar a vontade.

É só não se incomodar com a bagunça, que logo logo vamos organizar tudo, 
combinado?
</p>
<button class="my-3" onclick=fechar()>Fechar Janela</button>
</div>
`)  

if(!sessionStorage.getItem('semalert')){
    setTimeout(() => {
        $('.msg').animate({left: 0}, 700)
    }, 3000);
}
    
function fechar() {
    $('.msg').css('display', 'none')
    sessionStorage.setItem('semalert','true')
}