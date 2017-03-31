appControllers.controller('chessBoardCtrl', ['$scope', '$rootScope', 'sessionService', 'bridgeService',
	function ($scope, $rootScope, sessionService, bridgeService) {

		var level = bridgeService.data.chessSelectLevel;

		var gameChess = new GameChess({
			ctrl: $scope,
			rootScope: $rootScope,
			sessionService: sessionService,
			level: level
		});

		gameChess.init();

	}])