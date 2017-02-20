ModelUsers.prototype.constructor = ModelUsers;

function ModelUsers(nameTable, sq, Sequelize) {
	this.model = sq.define(nameTable, {
            id: { type: Sequelize.INTEGER,
                  primaryKey: true,
                  autoIncrement: true  },
            nick: { type: Sequelize.STRING }
        }, {
            freezeTableName: true // Model tableName will be the same as the model name
    });
}

/** Getters & Setters **/
ModelUsers.prototype.getModel = function () {
	return this.model;
}