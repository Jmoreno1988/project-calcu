appControllers.controller('chessBoardCtrl', ['$scope', '$rootScope', 'sessionService', 'bridgeService', '$interval', '$state',
	function ($scope, $rootScope, sessionService, bridgeService, $interval, $state) {

		var level = bridgeService.data.chessSelectLevel;

		var gameChess = new GameChess({
			ctrl: $scope,
			rootScope: $rootScope,
			sessionService: sessionService,
			level: level,
			interval: $interval,
			state: $state
		});

		gameChess.init();
	}])