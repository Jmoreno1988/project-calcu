appControllers.controller('chessBoardCtrl', ['$scope', '$rootScope', 'sessionService',
	function ($scope, $rootScope, sessionService) {

		var level = "easy";

		var gameChess = new GameChess({
			ctrl: $scope,
			rootScope: $rootScope,
			sessionService: sessionService,
			level: level
		});

		gameChess.init();

	}])