var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,routes = require('../app/routes');

app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


routes(app);

module.exports = app;
