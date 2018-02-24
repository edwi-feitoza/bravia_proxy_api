var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/braviaRoutes');
routes(app);
app.listen(port);
console.log('Servidor iniciado com sucesso na porta: ' + port);