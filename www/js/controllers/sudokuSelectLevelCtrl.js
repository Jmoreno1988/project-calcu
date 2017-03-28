appControllers.controller('sudokuSelectLevelCtrl', ['$scope', 'sessionService', '$state', 'bridgeService', '$ionicSideMenuDelegate',
    function ($scope, sessionService, $state, bridgeService, $ionicSideMenuDelegate) {
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


        // Traduccion
        $scope.$on("changeLanguage", function () { translate() });

        function translate() {
            Translator.translate($scope, sessionService.get("config").lenguage, [

            ]);
        }

        translate();
        // Fin Traduccion
    }])