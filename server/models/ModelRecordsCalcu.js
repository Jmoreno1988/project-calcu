ModelRecordsCalcu.prototype.constructor = ModelRecordsCalcu;

function ModelRecordsCalcu(nameTable, sq, Sequelize, autoGenerate) {
    this.model = sq.define(nameTable, {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUser: {
            type: Sequelize.INTEGER
        },
        nick: { 
            type: Sequelize.STRING 
        },
        record: {
            type: Sequelize.INTEGER
        }
    }, {
            freezeTableName: true // Model tableName will be the same as the model name
        });

    if(autoGenerate)
        this.autoInserts(autoGenerate);
}

ModelRecordsCalcu.prototype.insert = function (idUser, nick, record) {
    return this.model.create({
        idUser: idUser,
        nick: nick,
        record: record
    });
}

ModelRecordsCalcu.prototype.autoInserts = function (num) {
    for(var i = 0; i < num; i++)
        this.insert(i + 1, "bot " + (i + 1), Math.floor(Math.random()*10000) );
}

/** Getters & Setters **/
ModelRecordsCalcu.prototype.getModel = function () {
    return this.model;
}