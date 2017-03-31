appControllers.controller('chessSelectLevelCtrl', ['$scope', 'sessionService', '$state', 'bridgeService', '$ionicSideMenuDelegate',
    function ($scope, sessionService, $state, bridgeService, $ionicSideMenuDelegate) {
        var progressChess = sessionService.get("progressChess");

        $scope.easyWins = progressChess.easy.wins;
        $scope.easyDefeats = progressChess.easy.defeats;
        $scope.easyMoves = progressChess.easy.moves;
        $scope.easyTime = progressChess.easy.time;
        $scope.normalWins = progressChess.normal.wins;
        $scope.normalDefeats = progressChess.normal.defeats;
        $scope.normalMoves = progressChess.normal.moves;
        $scope.normalTime = progressChess.normal.time;
        $scope.hardWins = progressChess.hard.wins;
        $scope.hardDefeats = progressChess.hard.defeats;
        $scope.hardMoves = progressChess.hard.moves;
        $scope.hardTime = progressChess.hard.time;

        $scope.selectLevel = function (level) {
            bridgeService.data.chessSelectLevel = level;
            $state.go("chessBoard");
        }

        $scope.openSettings = function () {
            $ionicSideMenuDelegate.toggleLeft();
        }


        // Traduccion
        $scope.$on("changeLanguage", function () { translate() });

        function translate() {
            Translator.translate($scope, sessionService.get("config").lenguage, [
                "chessSelectLevelCtrl_easy",
                "chessSelectLevelCtrl_normal",
                "chessSelectLevelCtrl_hard",
                "chessSelectLevelCtrl_wins",
                "chessSelectLevelCtrl_defeats",
                "chessSelectLevelCtrl_moves",
                "chessSelectLevelCtrl_time"
            ]);
        }

        translate();
        // Fin Traduccion
    }])