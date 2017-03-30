appControllers.controller('sudokuBoardCtrl', ['$scope', 'bridgeService', '$ionicSideMenuDelegate', 'sessionService', '$interval',
    function ($scope, bridgeService, $ionicSideMenuDelegate, sessionService, $interval) {

        var level =  bridgeService.data.sudokuSelectLevel;
        
        var gameSudoku = new GameSudoku({
            idBoard: "sudoku",
            difficulty: level,
            sessionService: sessionService,
            controller: $scope,
            interval: $interval
        });
        
        $scope.levelSudoku = dictionary[sessionService.get("config").lenguage][level];

        gameSudoku.init();

        // Handlers
        $scope.clickNumber = function(value) {
            unSelect();

            document.getElementById(value).classList.add("cliked");
            gameSudoku.setActualNumber(value);
        }

        $scope.toggleEraseMode = function(value) {
            unSelect();
            document.getElementById("erase").classList.add("cliked");
            gameSudoku.toggleEraseMode(true);
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

        function unSelect() {
            var listButtons = document.querySelectorAll(".buttonSetNumbers");

            for( var i = 0; i < listButtons.length; i++)
                listButtons[i].classList.remove("cliked");
                
            gameSudoku.toggleEraseMode(false);
        }

        $scope.openSettings = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }
    }])