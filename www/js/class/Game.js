Game.prototype.constructor = Game;

function Game(level) {
    this.level = level;
    this.score = 0;
    this.typeOperation = Math.floor(Math.random() * 3);
    this.operation = "";
    this.num1 = Math.floor(Math.random() * 18) + 2;
    this.num2 = Math.floor(Math.random() * 18) + 2;
    this.result = null;
    this.options = [];
}


Game.prototype.newRound = function() {
    this.typeOperation = Math.floor(Math.random() * 3);
    this.operation = "";
    this.num1 = Math.floor(Math.random() * 18) + 2;
    this.num2 = Math.floor(Math.random() * 18) + 2;
    this.result = null;
    this.options = [];
}

Game.prototype.generateMove = function () {
    switch (this.typeOperation) {
        case 0:
            this.operation = "+";
            this.result = this.num1 + this.num2;
            this.options = [this.result, Math.floor(Math.random() * 99) + 1, Math.floor(Math.random() * 99) + 1, Math.floor(Math.random() * 99) + 1];
            break;

        case 1:
            this.operation = "-";
            this.result = this.num1 - this.num2;
            this.options = [this.result, Math.floor(Math.random() * 99) + 1, Math.floor(Math.random() * 99) + 1, Math.floor(Math.random() * 99) + 1];
            break;

        case 2:
            this.operation = "x";
            this.result = this.num1 * this.num2;
            this.options = [this.result, Math.floor(Math.random() * 99) + 1, Math.floor(Math.random() * 99) + 1, Math.floor(Math.random() * 99) + 1];
            break;

        default:
            this.operation = "+";
            this.result = this.num1 + this.num2;
            this.options = [this.result, Math.floor(Math.random() * 99) + 1, Math.floor(Math.random() * 99) + 1, Math.floor(Math.random() * 99) + 1];
            break;
    }
    
    this.shuffle(this.options);
}

Game.prototype.shuffle = function (array) {
    var j, x, i;

    for (i = array.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
}

Game.prototype.setScore = function(newValue) {
    this.score = newValue;
}

Game.prototype.getScore = function(newValue) {
    return this.score;
}

Game.prototype.getNum1 = function() {
    return this.num1;
}

Game.prototype.getNum2 = function() {
    return this.num2;
}

Game.prototype.getOperation = function() {
    return this.operation;
}

Game.prototype.getOptions = function() {
    return this.options;
}

Game.prototype.getResult = function() {
    return this.result;
}