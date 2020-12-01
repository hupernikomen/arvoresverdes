const express = require('express')
const app = express()

app.use((req, res, next) => { 
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) 
        res.redirect(`https://${req.headers.host}${req.url}`);
    else  
        next(); 
});
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
})
app.get('/agenda', (req, res) => {
    res.sendFile(__dirname + '/html/agenda.html')
})
app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + '/html/sobre.html')
})
app.get('/downloads', (req, res) => {
    res.sendFile(__dirname + '/html/downloads.html')
})
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/html/blog.html')
})

app.listen(3000, ()=> console.log('Rodando 3000'))