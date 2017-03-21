GameSudoku.prototype.constructor = GameSudoku;

function GameSudoku(options) {
    this.idBoard = options.idBoard;
    this.nodeBoard = document.getElementById(this.idBoard);
    this.difficulty = options.difficulty;
    this.sudokuJs = null;
    this.listInputs = null;
    this.actualNumber = null;
    this.eraseMode = false;
    this.listQuadrant = [];
    this.listBoard = Util.createArray(9, 9, null);
}

GameSudoku.prototype.init = function () {
    this.sudokuJs = $("#" + this.idBoard).sudokuJS({
        difficulty: this.difficulty
    });

    this.listInputs = this.nodeBoard.querySelectorAll("input");

    for (var i = 0; i < this.listInputs.length; i++) {
        this.listInputs[i].setAttribute("readonly", "true");
        this.listInputs[i].addEventListener("click", this.listener.bind(this, i));

        if (this.listInputs[i].value != "")
            this.listInputs[i].setAttribute("fixed", "true");
    }


    var aux = 0;
    for (var i = 0; i < this.listBoard.length; i++)
        for (var a = 0; a < this.listBoard[i].length; a++) {
            this.listBoard[i][a] = this.listInputs[aux];
            //this.listInputs[aux].setAttribute("idBoard", aux);
            aux++;
        }
}

GameSudoku.prototype.isValidate = function () {
    var isValidate = true;
    //var index1 = 4;
    //var index2 = 4;
    //var a = this.listBoard[index1][index2];

/*
    // Limpieza
    for (var e = 0; e < this.listBoard.length; e++)
        for (var u = 0; u < this.listBoard[e].length; u++)
            if (this.listBoard[e][u].hasAttribute("error"))
                this.listBoard[e][u].removeAttribute("error")
    


    
    for (var i = 0; i < 9; i++)
        if (this.listBoard[i][index2].value == a.value && i != index2) {
            this.listBoard[i][index2].setAttribute("error", "true");
            isValidate = false;
        }

    for (var i = 0; i < 9; i++)
        if (this.listBoard[index1][i].value == a.value && i != index1) {
            this.listBoard[index1][i].setAttribute("error", "true");
            isValidate = false;
        }

*/
    for (var i = 0; i < this.listBoard.length; i++)
        for (var a = 0; a < this.listBoard[i].length; a++) {
            var value = this.listBoard[i][a].value; 

            for(var aux1 = 0; aux1 < 9; aux1++) {
                if(this.listBoard[aux1][a].value == value)
                    this.listBoard[aux1][a].setAttribute("error", "true");
            }
        }

    return isValidate;
}

GameSudoku.prototype.listener = function (i) {
    var isFixed = this.listInputs[i].getAttribute("fixed");

    if (this.eraseMode && !isFixed) {
        this.listInputs[i].value = "";
        return;
    }

    if (this.actualNumber && !this.eraseMode && !isFixed)
        this.listInputs[i].value = this.actualNumber;

    if (this.isValidate()) {
        console.log("Jugada valida")
    } else {
        console.log("Jugada NO VALIDA")
    }
}

GameSudoku.prototype.isComplete = function () {
    for (var i = 0; i < this.listInputs.length; i++)
        if (this.listInputs[i].value == "")
            return false;

    return true;
}

GameSudoku.prototype.setActualNumber = function (newValue) {
    this.actualNumber = newValue;
}

GameSudoku.prototype.toggleEraseMode = function (newValue) {
    this.sudokuJs.solveAll();
}

GameSudoku.prototype.isCorrect = function () {
    console.log(this.sudokuJs.analyzeBoard())
}

GameSudoku.prototype.solveAll = function () {
    this.sudokuJs.solveAll();
}

GameSudoku.prototype.solveStep = function () {
    this.sudokuJs.solveStep();
}