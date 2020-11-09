const express = require('express')
const app = express()

app.static('/public', __dirname + '/css')
// app.use(express.static(__dirname + '/public'));

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

app.listen(3000, ()=> 'Rodando 3000')