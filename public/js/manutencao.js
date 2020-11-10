
$('.msg').append(`
<div class="msg-text px-4 py-3">
<p>
<h3>Olá,<br> que legal ver você por aqui</h3>
Nosso site ainda está em construção, mas você pode ficar a vontade.

É só não se incomodar com a bagunça que logo logo vamos organizar tudo, 
combinado?
</p>
<button class="my-3" onclick=fechar()>Fechar Janela</button>
</div>
`)  

if(!sessionStorage.getItem('alert')){

    setTimeout(() => {
        $('.msg').animate({left: 0}, 800)
    }, 3000);
}
    
function fechar() {
    $('.msg').css('display', 'none')
    sessionStorage.setItem('alert','false')
}