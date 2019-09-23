const express = require('express'); 
const server = express();
var path = require('path');

//server.use(express.static('./'));
server.use(express.static(path.normalize(__dirname + '/')));
/*server.all('./', function(req, res) {
    console.log('teste');
    res.sendFile(path.resolve('./'));
});*/

server.listen(3000, () => {

    console.log('Servidor escutando na porta: 3000');

});

