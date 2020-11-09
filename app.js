const express = require('express')
const app = express()

// app.use((req, res, next) => { 
//     if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) 
//         res.redirect(`https://${req.headers.host}${req.url}`);
//     else  
//         next(); 
// });
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