const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./api/routes/braviaRoutes')(app)
app.listen(port)

// seria legal trabalhar com nodeenvs pra definir exibicao de logs
console.log('Servidor iniciado com sucesso na porta: ' + port)