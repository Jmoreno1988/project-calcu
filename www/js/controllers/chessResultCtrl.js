appControllers.controller('chessResultCtrl', ['$scope', '$rootScope', 'sessionService', 'bridgeService',
	function ($scope, $rootScope, sessionService, bridgeService) {

		var level = bridgeService.data.chessSelectLevel;
        var time = bridgeService.data.timeChess;
		var levelWin = bridgeService.data.levelWinChess;
        var isWin = level >= levelWin ? true : false;
        var msgResult = isWin ? "You win!!" : "You lose";
		var totalMoves = bridgeService.data.totalMovesChess;
		var totalWins = bridgeService.data.totalWinsChess;
		 var totalDefeats = bridgeService.data.totalDefeatsChess;

        $scope.isWin = msgResult;
        $scope.selectLevel = level;
        $scope.time = time;
		$scope.totalMoves = totalMoves;
		$scope.totalWins = totalWins;
		$scope.totalDefeats = totalDefeats;

        if(isWin) {
            disableNodes(["stateGameFail", "fail"]);
        } else {
            disableNodes(["stateGameSuccess", "medal"]);
        }

        $scope.openSettings = function () { $ionicSideMenuDelegate.toggleLeft() }

        function disableNodes(ids) {
            for(var i = 0; i < ids.length; i++)
                document.getElementById(ids[i]).style.display = "none";
        }
	}])