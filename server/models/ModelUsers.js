ModelUsers.prototype.constructor = ModelUsers;

function ModelUsers(nameTable, sq, Sequelize) {
    this.model = sq.define(nameTable, {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nick: { type: Sequelize.STRING }
    }, {
            freezeTableName: true // Model tableName will be the same as the model name
        });
}

ModelUsers.prototype.insert = function (nick) {
    return this.model.create({
        nick: nick
    });
}

ModelUsers.prototype.updateNick = function (id, newNick) {
    this.model.findOne({ where: { id: id } }).then(function (user) {
        user.updateAttributes({
            nick: newNick
        });
    }.bind(this));


}

/** Getters & Setters **/
ModelUsers.prototype.getModel = function () {
    return this.model;
}