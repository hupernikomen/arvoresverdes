const express = require('express')
const app = express()

app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele 
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP 
        res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS 
    else //Se a requisição já é HTTPS 
        next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado 
});
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
})
app.get('/eventos', (req, res) => {
    res.sendFile(__dirname + '/html/eventos.html')
})
app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + '/html/sobre.html')
})
app.get('/biblioteca', (req, res) => {
    res.sendFile(__dirname + '/html/biblioteca.html')
})
app.get('/contato', (req, res) => {
    res.sendFile(__dirname + '/html/contato.html')
})
app.get('/sitemap', (req, res) => {
    res.sendFile(__dirname + '/sitemap.xml')
})

app.listen(3000, ()=> console.log('Rodando 3000'))