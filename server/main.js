var vm = require('vm');
var fs = require("fs");
var http = require('http');
var url = require('url');
var Sequelize = require('sequelize');
var port = 3000;

// Carga de dependecias
vm.runInThisContext(fs.readFileSync(__dirname + '/cfg.js'));
cfg.localDependencies.forEach(function(a) { vm.runInThisContext(fs.readFileSync(__dirname + a)) });
// Fin Carga de dependecias

var sq = new Sequelize(cfg.chainConnection.developmentWork);
var modelUsers = new ModelUsers('Users', sq, Sequelize);
var modelRecordsNormal = new ModelRecordsCalcu('records_calcu', sq, Sequelize);

// Servidor
http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;

    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*' // implementation of CORS
    });

    switch (path) {
        case '/getscore':
            modelRecordsNormal.getModel().findAll({  }).then(function (records) {
                response.end(JSON.stringify(records));
            }.bind(this));
            break;
        
        case '/insertNewUSer':
            // modelUsers.insert("test");
            break;

        case '/updateUser':
            // modelUsers.updateNick(3, "Vegetto Rulessss");
            break;
    }

}).listen(port);
console.log(":: INFO :: Server listening on *: " + port);