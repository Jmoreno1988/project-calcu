ModelRecordsCalcu.prototype.constructor = ModelRecordsCalcu;

function ModelRecordsCalcu(nameTable, sq, Sequelize) {
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
}

/** Getters & Setters **/
ModelRecordsCalcu.prototype.getModel = function () {
    return this.model;
}