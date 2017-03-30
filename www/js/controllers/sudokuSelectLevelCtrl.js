appControllers.controller('sudokuSelectLevelCtrl', ['$scope', 'sessionService', '$state', 'bridgeService', '$ionicSideMenuDelegate', '$ionicPopup',
    function ($scope, sessionService, $state, bridgeService, $ionicSideMenuDelegate, $ionicPopup) {
        var progressSudoku = sessionService.get("progressSudoku");

        $scope.easyWins = progressSudoku.easy.wins;
        $scope.easyTime = progressSudoku.easy.time;
        $scope.normalWins = progressSudoku.normal.wins;
        $scope.normalTime = progressSudoku.normal.time;
        $scope.hardWins = progressSudoku.hard.wins;
        $scope.hardTime = progressSudoku.hard.time;
        $scope.veryHardWins = progressSudoku.veryHard.wins;
        $scope.veryHardTime = progressSudoku.veryHard.time;

        $scope.selectLevel = function (level) {
            bridgeService.data.sudokuSelectLevel = level;
            $state.go("sudokuBoard");
        }

        $scope.openSettings = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }

        $scope.confirmRemoveBoard = function(level) {
            var l = sessionService.get("config").lenguage;
            var d = dictionary; 
            var confirmPopup = $ionicPopup.confirm({
                title: Translator.get("sudokuSelectLevelCtrl_titlePopUp", l, d),
                template: Translator.get("sudokuSelectLevelCtrl_msgPopUp", l, d),
                cancelText: Translator.get("sudokuSelectLevelCtrl_cancelPopUp", l, d),
                okText: Translator.get("sudokuSelectLevelCtrl_acceptPopUp", l, d)
            });

            confirmPopup.then(function (res) {
                if (res) {
                    removeBoard(level);
                } else { }
            });
        }

        function removeBoard(level) {
            var aux = sessionService.get("progressSudoku");
            aux[level].board = null;
            aux[level].time = "--";
            sessionService.set("progressSudoku", aux);
        }


        // Traduccion
        $scope.$on("changeLanguage", function () { translate() });

        function translate() {
            Translator.translate($scope, sessionService.get("config").lenguage, [
                "sudokuSelectLevelCtrl_easy",
                "sudokuSelectLevelCtrl_normal",
                "sudokuSelectLevelCtrl_hard",
                "sudokuSelectLevelCtrl_veryHard",
                "sudokuSelectLevelCtrl_wins",
                "sudokuSelectLevelCtrl_time"
            ]);
        }

        translate();
        // Fin Traduccion
    }])