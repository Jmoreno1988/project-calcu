var vm = require('vm');
var fs = require("fs");
var http = require('http');
var url = require('url');
var Sequelize = require('sequelize');
var port = 3000;

// Carga de dependecias
vm.runInThisContext(fs.readFileSync(__dirname + '/cfg.js'));
cfg.localDependencies.forEach(function (a) { vm.runInThisContext(fs.readFileSync(__dirname + a)) });
// Fin Carga de dependecias

var sq = new Sequelize(cfg.chainConnection.developmentWork);
var modelUsers = new ModelUsers('Users', sq, Sequelize);

var totalNewUser = 0;
var modelRecordsEasy = new ModelRecordsCalcu('records_calcu_easy', sq, Sequelize, totalNewUser);
var modelRecordsNormal = new ModelRecordsCalcu('records_calcu_normal', sq, Sequelize, totalNewUser);
var modelRecordsHard = new ModelRecordsCalcu('records_calcu_hard', sq, Sequelize, totalNewUser);
var modelRecordsMaster = new ModelRecordsCalcu('records_calcu_master', sq, Sequelize, totalNewUser);
var modelRecordsSurvive = new ModelRecordsCalcu('records_calcu_survive', sq, Sequelize, totalNewUser);

// Servidor
http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;

    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*' // implementation of CORS
    });

    switch (path) {
        case '/getscoreeasy':
            modelRecordsEasy.getModel().findAll({}).then(function (records) {
                response.end(JSON.stringify(records));
            }.bind(this));
            break;

        case '/getscorenormal':
            modelRecordsNormal.getModel().findAll({}).then(function (records) {
                response.end(JSON.stringify(records));
            }.bind(this));
            break;

        case '/getscorehard':
            modelRecordsHard.getModel().findAll({}).then(function (records) {
                response.end(JSON.stringify(records));
            }.bind(this));
            break;

        case '/getscoremaster':
            modelRecordsMaster.getModel().findAll({}).then(function (records) {
                response.end(JSON.stringify(records));
            }.bind(this));
            break;

        case '/getscoresurvive':
            modelRecordsSurvive.getModel().findAll({}).then(function (records) {
                response.end(JSON.stringify(records));
            }.bind(this));
            break;

        case '/insertnewuser':
            var nickNewUser = getParameterByName("nick", url.parse(request.url).path);

            // comprobar que no exista
            // si no existe inserta y manda 
            // si existe termina
            modelUsers.getModel().findOne({ where: { nick: nickNewUser } }).then(function (user) {
                if (user) {
                    response.end("0");
                    return;
                }

                modelUsers.getModel().create({
                    nick: nickNewUser
                }).then(function(data) {
                    response.end(JSON.stringify(data));        
                }).catch(function(e){
                    response.end("0");
                })
            }.bind(this));
            break;

        case '/updateuser':
            // modelUsers.updateNick(3, "Vegetto Rulessss");
            break;


        default:
            console.log("ERROR :: Metodo no encontrado '" + path + "'");
            response.end("0");
            break;
    }

}).listen(port);
console.log(":: INFO :: Server listening on *: " + port);

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}