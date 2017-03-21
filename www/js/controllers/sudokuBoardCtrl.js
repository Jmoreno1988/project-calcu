appControllers.controller('sudokuBoardCtrl', ['$scope',
    function ($scope) {
        var gameSudoku = new GameSudoku({
            idBoard: "sudoku",
            difficulty: "normal"
        });
        
        gameSudoku.init();

        // Handlers
        $scope.clickNumber = function(value) {
            gameSudoku.setActualNumber(value);
        }

        $scope.toggleEraseMode = function(value) {
            gameSudoku.toggleEraseMode(value);
        }

        $scope.isCorrect = function() {
            console.log(gameSudoku.isCorrect())
        }

        $scope.solveAll = function() {
            gameSudoku.solveAll();
        }

        $scope.solveStep = function() {
            gameSudoku.solveStep();
        }
    }])