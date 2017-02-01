GameCal.prototype.constructor = GameCal;

function GameCal(level, controller) {
    this.level = level;
    this.ctrl = controller;
    this.score = 0;
    this.typeOperation = Math.floor(Math.random() * 3);
    this.operation = "";
    this.num1 = Math.floor(Math.random() * 18) + 2;
    this.num2 = Math.floor(Math.random() * 18) + 2;
    this.result = null;
    this.options = [];
    this.unknown = null;
}

GameCal.prototype.init = function () {
    this.generateMove();
    this.pullInfo();
}

GameCal.prototype.newRound = function () {
    this.operation = "";
    this.result = null;
    this.options = [];
}

GameCal.prototype.generateEasy = function () {
    var operations = ["+", "-", "*"];
    var min = 2;
    var max = 18;
    var sign = operations[Math.floor(Math.random() * operations.length)];
    var num1 = Math.floor(Math.random() * max) + min;
    var num2 = Math.floor(Math.random() * max) + min;

    this.result = eval(num1 + " " + sign + " " + num2);
    this.options = [this.result, Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * 50) + 1];
    this.operation = num1 + " " + sign + " " + num2 + " = ?";
}

GameCal.prototype.generateNormal = function () {
    var operations = ["+", "-"];
    var min = 2;
    var max = 18;
    var sign1 = operations[Math.floor(Math.random() * operations.length)];
    var sign2 = operations[Math.floor(Math.random() * operations.length)];
    var num1 = Math.floor(Math.random() * max) + min;
    var num2 = Math.floor(Math.random() * max) + min;
    var num3 = Math.floor(Math.random() * max) + min;

    this.result = eval(num1 + " " + sign1 + " " + num2 + " " + sign2 + " " + num3);
    this.options = [this.result, Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * 50) + 1];
    this.operation = num1 + " " + sign1 + " " + num2 + " " + sign2 + " " + num3 + " = ?";
}

GameCal.prototype.generateHard = function () {
    var operations = ["+", "-", "*"];
    var min = 2;
    var max = 18;
    var sign1 = operations[Math.floor(Math.random() * operations.length)];
    var sign2 = operations[Math.floor(Math.random() * operations.length)];
    var num1 = Math.floor(Math.random() * max) + min;
    var num2 = Math.floor(Math.random() * max) + min;
    var num3 = Math.floor(Math.random() * max) + min;

    this.result = eval(num1 + " " + sign1 + " " + num2 + " " + sign2 + " " + num3);
    this.options = [this.result, Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * 50) + 1];
    this.operation = num1 + " " + sign1 + " " + num2 + " " + sign2 + " " + num3 + " = ?";
}

GameCal.prototype.generateMaster = function () {
    var operations = ["+", "-", "*"];
    var min = 2;
    var max = 18;
    var sign1 = operations[Math.floor(Math.random() * operations.length)];
    var sign2 = operations[Math.floor(Math.random() * operations.length)];
    var num1 = Math.floor(Math.random() * max) + min;
    var num2 = Math.floor(Math.random() * max) + min;
    var num3 = Math.floor(Math.random() * max) + min;
    var auxNumbers = [num1, num2, num3];
    var i = Math.floor(Math.random() * auxNumbers.length);
    
    this.unknown = auxNumbers[i];
    this.result = eval(num1 + " " + sign1 + " " + num2 + " " + sign2 + " " + num3);
    this.options = [auxNumbers[i], Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * 50) + 1];
    
    auxNumbers[i] = "?";
    this.operation = auxNumbers[0] + " " + sign1 + " " + auxNumbers[1] + " " + sign2 + " " + auxNumbers[2] + " = " + this.result;
}

GameCal.prototype.generateSurvive = function () {

}

GameCal.prototype.generateKids = function () {
    var operations = ["+"];
    var min = 2;
    var max = 10;
    var sign = operations[Math.floor(Math.random() * operations.length)];

    this.num1 = Math.floor(Math.random() * max) + min;
    this.num2 = Math.floor(Math.random() * max) + min;
    this.result = eval(this.num1 + " " + sign + " " + this.num2);
    this.options = [this.result, Math.floor(Math.random() * max) + 1, Math.floor(Math.random() * max) + 1, Math.floor(Math.random() * max) + 1];
    this.operation = this.num1 + " " + sign + " " + this.num2 + " = ?";
}

GameCal.prototype.generateMove = function () {
    switch (this.level) {
        case "easy":
            this.generateEasy();
            break;

        case "normal":
            this.generateNormal();
            break;

        case "hard":
            this.generateHard();
            break;

        case "master":
            this.generateMaster();
            break;

        case "kids":
            this.generateKids();
            break;
    }

    this.shuffle(this.options);
    this.pullInfo();
}

GameCal.prototype.checkResult = function (option) {
    if (this.level == "master") {
        if (this.options[option - 1] === this.unknown) {
            this.score += 1;
            this.newRound();
            this.generateMove();
            this.pullInfo();
        } else {
            this.newRound();
            this.generateMove();
            this.pullInfo();
        }
    }

    if (this.options[option - 1] === this.result) {
        //countdown.add(5000);
        this.score += 1;
        this.newRound();
        this.generateMove();
        this.pullInfo();
    } else {
        //countdown.add(-3000);
        this.newRound();
        this.generateMove();
        this.pullInfo();
    }
}

GameCal.prototype.reset = function () {
    this.score = 0;
    this.newRound();
    this.generateMove();
    this.pullInfo();
}

GameCal.prototype.shuffle = function (array) {
    var j, x, i;

    for (i = array.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
}

GameCal.prototype.pullInfo = function () {
    this.ctrl.score = this.score;
    this.ctrl.operation = this.operation;
    this.ctrl.option1 = this.options[0];
    this.ctrl.option2 = this.options[1];
    this.ctrl.option3 = this.options[2];
    this.ctrl.option4 = this.options[3];
}

GameCal.prototype.setScore = function (newValue) {
    this.score = newValue;
}

GameCal.prototype.getScore = function (newValue) {
    return this.score;
}

GameCal.prototype.getNum1 = function () {
    return this.num1;
}

GameCal.prototype.getNum2 = function () {
    return this.num2;
}

GameCal.prototype.getOperation = function () {
    return this.operation;
}

GameCal.prototype.getOptions = function () {
    return this.options;
}

GameCal.prototype.getResult = function () {
    return this.result;
}