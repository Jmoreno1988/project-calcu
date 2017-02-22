GameCal.prototype.constructor = GameCal;

function GameCal(difficulty, controller, $state, $interval, sessionService, $cordovaVibration) {
    this.vibration = $cordovaVibration;
    this.difficulty = difficulty;
    this.sessionService = sessionService;
    this.level = 1;
    this.levelMax = 10;
    this.ctrl = controller;
    this.$state = $state;
    this.totalScore = 0;
    this.listScores = [];
    this.score = 1000;
    this.result = null;
    this.options = [];
    this.unknown = null;
    this.timeVibration = 250;
    this.timer = new Timer(controller, $interval);
}

GameCal.prototype.init = function () {
    this.generateMove();
    this.timer.fCallback = this.finish.bind(this);
    this.timer.sCallback = this.step.bind(this);
    this.timer.init();
    this.pullInfo();
}

GameCal.prototype.step = function () {
    if (this.score > 20) {
        this.score -= 10;
        this.pullInfo();
    }
}

GameCal.prototype.finish = function () {
    this.sessionService.set("listScore", this.listScores);
    this.sessionService.set("timeCal", this.timer.getTime());
    this.sessionService.set("levelCal", this.level);
    this.sessionService.set("levelCalWin", this.levelMax);
    this.$state.go("result", {});
}

GameCal.prototype.newRound = function () {
    this.operation = "";
    this.result = null;
    this.options = [];
}

GameCal.prototype.generateMove = function () {
    switch (this.difficulty) {
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

    //this.shuffle(this.options);
    this.pullInfo();
}

GameCal.prototype.checkResult = function (option) {
    if (this.difficulty == "master") {
        if (this.options[option - 1] === this.unknown) {
            this.listScores.push(this.score);
            this.totalScore += this.score;
            this.score = 1000;
            this.level++;
            if (this.level >= this.levelMax) {
                this.finish();
            } else {
                this.newRound();
                this.generateMove();
                this.pullInfo();
            }
        } else {
            navigator.vibrate(this.timeVibration)
            this.score = 1000;
            this.newRound();
            this.generateMove();
            this.pullInfo();
        }
    }

    if (this.options[option - 1] === this.result) {
        this.listScores.push(this.score);
        this.totalScore += this.score;
        this.score = 1000;
        this.level++;
        if (this.level >= this.levelMax) {
            this.finish();
        } else {
            this.newRound();
            this.generateMove();
            this.pullInfo();
        }
    } else {
        navigator.vibrate(this.timeVibration)
        this.score = 1000;
        this.newRound();
        this.generateMove();
        this.pullInfo();
    }
}

GameCal.prototype.reset = function () {
    this.level = 0;
    this.timer.init();
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
    this.ctrl.totalScore = this.totalScore;
    this.ctrl.score = this.score;
    this.ctrl.level = this.level;
    this.ctrl.levelMax = this.levelMax;
    this.ctrl.operation = this.operation;
    this.ctrl.option1 = this.options[0];
    this.ctrl.option2 = this.options[1];
    this.ctrl.option3 = this.options[2];
    this.ctrl.option4 = this.options[3];
    this.ctrl.time = this.timer.getTime();
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