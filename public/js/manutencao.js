
$('.msg').append(`
<div class="msg-text px-4 py-3">
<h3>Olá, que bom ver você por aqui</h3>
<p>
Nosso site ainda está em construção, mas você pode ficar a vontade.

Só não se incomode com a bagunça, que logo logo vamos organizar tudo, 
combinado?
</p>
<button class="my-3" onclick=fechar()>Fechar Janela</button>
</div>
`)  

if(!sessionStorage.getItem('salt')){
    setTimeout(() => {
        $('.msg').animate({left: 0}, "fast")
    }, 5000);
}
    
function fechar() {
    $('.msg').css('display', 'none')
    sessionStorage.setItem('salt','true')
}